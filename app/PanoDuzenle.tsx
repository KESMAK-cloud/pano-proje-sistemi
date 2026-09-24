"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Pano = {
  id: number;
  qrKod: string;
  panoAdi: string;
  makineHat: string | null;
  projeNo: string | null;
  aciklama: string | null;
};

export default function PanoDuzenle({
  pano,
}: {
  pano: Pano;
}) {

  const router = useRouter();

  const [form, setForm] = useState({
    panoAdi: pano.panoAdi,
    makineHat: pano.makineHat || "",
    projeNo: pano.projeNo || "",
    aciklama: pano.aciklama || "",
  });

  const [dosya, setDosya] = useState<File | null>(null);
  const [revizyon, setRevizyon] = useState("");
const [dokumanAciklama, setDokumanAciklama] = useState("");

  const [mesaj, setMesaj] = useState("");
  const [hata, setHata] = useState("");
  const [kaydediliyor, setKaydediliyor] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);

  function degistir(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function kaydet(e: React.FormEvent) {
    e.preventDefault();

    setKaydediliyor(true);
    setMesaj("");
    setHata("");

    try {
      const cevap = await fetch(`/api/panolar/${pano.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const veri = await cevap.json();

      if (!cevap.ok) {
        throw new Error(veri.error || "Pano güncellenemedi.");
      }

      setMesaj("Pano bilgileri başarıyla güncellendi.");
      router.refresh();
    } catch (error) {
      setHata(
        error instanceof Error
          ? error.message
          : "Pano güncellenemedi."
      );
    } finally {
      setKaydediliyor(false);
    }
  }

  async function pdfYukle(e: React.FormEvent) {
    e.preventDefault();

    if (!dosya) {
      setHata("Lütfen bir PDF dosyası seçin.");
      return;
    }

    setYukleniyor(true);
    setMesaj("");
    setHata("");

    try {
      const formData = new FormData();

      formData.append("file", dosya);
      formData.append("qrKod", pano.qrKod);
      formData.append("revizyon", revizyon);
formData.append("dokumanAciklama", dokumanAciklama);

      const cevap = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const veri = await cevap.json();

      if (!cevap.ok) {
        throw new Error(veri.error || "PDF yüklenemedi.");
      }

      setMesaj("PDF başarıyla yüklendi.");
setDosya(null);
setRevizyon("");
setDokumanAciklama("");
      router.refresh();
    } catch (error) {
      setHata(
        error instanceof Error
          ? error.message
          : "PDF yüklenirken bir hata oluştu."
      );
    } finally {
      setYukleniyor(false);
    }
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="rounded-lg border border-slate-200 p-5">
        <h3 className="text-xl font-bold text-slate-800">
          Pano Bilgilerini Düzenle
        </h3>

        {mesaj && (
          <div className="mt-4 rounded-lg bg-green-50 p-4 text-green-700">
            {mesaj}
          </div>
        )}

        {hata && (
          <div className="mt-4 rounded-lg bg-red-50 p-4 text-red-700">
            {hata}
          </div>
        )}

        <form onSubmit={kaydet} className="mt-5 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Pano Adı
            </label>

            <input
              name="panoAdi"
              value={form.panoAdi}
              onChange={degistir}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Makine / Hat
            </label>

            <input
              name="makineHat"
              value={form.makineHat}
              onChange={degistir}
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Proje No
            </label>

            <input
              name="projeNo"
              value={form.projeNo}
              onChange={degistir}
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Açıklama
            </label>

            <textarea
              name="aciklama"
              value={form.aciklama}
              onChange={degistir}
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <button
            type="submit"
            disabled={kaydediliyor}
            className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
          >
            {kaydediliyor
              ? "Kaydediliyor..."
              : "Değişiklikleri Kaydet"}
          </button>
        </form>
      </div>

      <div className="rounded-lg border border-slate-200 p-5">
        <h3 className="text-xl font-bold text-slate-800">
          PDF Dokümanı Yükle
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Bu panoya yeni bir PDF dokümanı ekleyin.
        </p>

        <form onSubmit={pdfYukle} className="mt-5 space-y-4">
          <input
            type="file"
            accept="application/pdf,.pdf"
            onChange={(e) => {
              setDosya(e.target.files?.[0] || null);
              setMesaj("");
              setHata("");
            }}
            className="block w-full rounded-lg border border-slate-300 p-3"
          />

          {dosya && (
            <p className="text-sm text-slate-600">
              Seçilen dosya: <strong>{dosya.name}</strong>
            </p>
          )}
          <div>
  <label className="mb-1 block text-sm font-medium text-slate-700">
    Revizyon
  </label>

  <input
    type="text"
    value={revizyon}
    onChange={(e) => setRevizyon(e.target.value)}
    placeholder="Örn: Rev.00"
    className="w-full rounded-lg border border-slate-300 px-4 py-3"
  />
</div>

<div>
  <label className="mb-1 block text-sm font-medium text-slate-700">
    Doküman Açıklaması
  </label>

  <textarea
    value={dokumanAciklama}
    onChange={(e) => setDokumanAciklama(e.target.value)}
    rows={3}
    placeholder="Doküman hakkında açıklama..."
    className="w-full rounded-lg border border-slate-300 px-4 py-3"
  />
</div>

          <button
            type="submit"
            disabled={yukleniyor || !dosya}
            className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
          >
            {yukleniyor ? "PDF yükleniyor..." : "PDF Yükle"}
          </button>
        </form>
      </div>
    </div>
  );
}
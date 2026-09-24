"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function YeniPanoForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    panoNo: "",
    panoAdi: "",
    makineHat: "",
    projeNo: "",
    aciklama: "",
    qrKod: "",
  });

  const [hata, setHata] = useState("");
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

    setHata("");
    setYukleniyor(true);

    try {
      const cevap = await fetch("/api/panolar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const veri = await cevap.json();

      if (!cevap.ok) {
        throw new Error(veri.error || "Pano oluşturulamadı.");
      }

      router.push(`/pano/${veri.pano.qrKod}`);
      router.refresh();
    } catch (error) {
      setHata(
        error instanceof Error
          ? error.message
          : "Pano oluşturulamadı."
      );
    } finally {
      setYukleniyor(false);
    }
  }

  return (
    <form
      onSubmit={kaydet}
      className="mt-6 space-y-5"
    >
      {hata && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700">
          {hata}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Pano No *
          </label>
          <input
            name="panoNo"
            value={form.panoNo}
            onChange={degistir}
            placeholder="Örn: PANO-002"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Pano Adı *
          </label>
          <input
            name="panoAdi"
            value={form.panoAdi}
            onChange={degistir}
            placeholder="Örn: Ana Kontrol Panosu"
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
            placeholder="Örn: Üretim Hattı 2"
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
            placeholder="Örn: PRJ-2026-002"
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            QR Kod *
          </label>
          <input
            name="qrKod"
            value={form.qrKod}
            onChange={degistir}
            placeholder="Örn: PANO-002"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Açıklama
          </label>
          <textarea
            name="aciklama"
            value={form.aciklama}
            onChange={degistir}
            rows={4}
            placeholder="Pano hakkında açıklama..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={yukleniyor}
          className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
        >
          {yukleniyor ? "Kaydediliyor..." : "Pano Kaydet"}
        </button>

        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-lg bg-slate-200 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-300"
        >
          İptal
        </button>
      </div>
    </form>
  );
}
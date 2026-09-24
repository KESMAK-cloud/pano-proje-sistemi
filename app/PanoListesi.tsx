"use client";

import { useState } from "react";

type Pano = {
  id: number;
  panoNo: string;
  panoAdi: string;
  makineHat: string | null;
  qrKod: string;
  _count: {
    dokumanlar: number;
  };
};

export default function PanoListesi({
  panolar,
}: {
  panolar: Pano[];
}) {
  const [arama, setArama] = useState("");

  const filtrelenmisPanolar = panolar.filter((pano) => {
    const kelime = arama.toLocaleLowerCase("tr-TR").trim();

    if (!kelime) {
      return true;
    }

    return (
      pano.panoNo.toLocaleLowerCase("tr-TR").includes(kelime) ||
      pano.panoAdi.toLocaleLowerCase("tr-TR").includes(kelime) ||
      (pano.makineHat || "")
        .toLocaleLowerCase("tr-TR")
        .includes(kelime)
    );
  });

  return (
    <>
      <div className="mt-6">
        <input
          type="text"
          value={arama}
          onChange={(e) => setArama(e.target.value)}
          placeholder="Pano numarası, pano adı veya makine/hattı ara..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div className="mt-6 space-y-3">
        {filtrelenmisPanolar.length === 0 ? (
          <div className="rounded-lg bg-slate-50 p-6 text-center">
            <p className="text-slate-500">
              Aramanızla eşleşen pano bulunamadı.
            </p>
          </div>
        ) : (
          filtrelenmisPanolar.map((pano) => (
            <div
              key={pano.id}
              className="flex flex-col gap-4 rounded-lg border border-slate-200 p-5 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-lg font-bold text-slate-800">
                  {pano.panoNo}
                </p>

                <p className="text-slate-600">
                  {pano.panoAdi}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Makine: {pano.makineHat || "-"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  {pano._count.dokumanlar} Doküman
                </span>

                <a
                  href={`/pano/${pano.qrKod}`}
                  className="rounded-lg bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-900"
                >
                  Panoyu Aç
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
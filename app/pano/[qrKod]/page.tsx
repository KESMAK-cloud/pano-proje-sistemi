import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export default async function PanoPage({
  params,
}: {
  params: Promise<{ qrKod: string }>;
}) {
  const { qrKod } = await params;

  const pano = await prisma.pano.findUnique({
    where: {
      qrKod,
    },
    include: {
      dokumanlar: {
        where: {
          aktif: true,
        },
        orderBy: {
          yuklemeTarihi: "desc",
        },
      },
    },
  });

  if (!pano) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-blue-700 text-white shadow">
        <div className="mx-auto max-w-3xl px-5 py-6">
          <h1 className="text-2xl font-bold">
            Pano Proje Sistemi
          </h1>

          <p className="mt-1 text-blue-100">
            Doküman Görüntüleme
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-6">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          
          {/* Pano Bilgileri */}
          <div className="border-b border-slate-200 pb-5">
            <p className="text-sm font-medium text-slate-500">
              Pano No
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-800">
              {pano.panoNo}
            </h2>

            <p className="mt-2 text-lg font-semibold text-slate-700">
              {pano.panoAdi}
            </p>

            {pano.makineHat && (
              <p className="mt-2 text-sm text-slate-500">
                Makine / Hat:{" "}
                <span className="font-medium text-slate-700">
                  {pano.makineHat}
                </span>
              </p>
            )}

            {pano.projeNo && (
              <p className="mt-1 text-sm text-slate-500">
                Proje No:{" "}
                <span className="font-medium text-slate-700">
                  {pano.projeNo}
                </span>
              </p>
            )}

            {pano.aciklama && (
              <div className="mt-4 rounded-lg bg-slate-50 p-4">
                <p className="text-sm text-slate-500">
                  Açıklama
                </p>

                <p className="mt-1 text-sm text-slate-700">
                  {pano.aciklama}
                </p>
              </div>
            )}
          </div>

          {/* Dokümanlar */}
          <div className="pt-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Dokümanlar
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Bu panoya ait güncel dokümanlar
                </p>
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {pano.dokumanlar.length} PDF
              </span>
            </div>

            {pano.dokumanlar.length === 0 ? (
              <div className="mt-5 rounded-lg bg-slate-50 p-5 text-center">
                <p className="text-slate-500">
                  Bu panoya ait yayınlanmış doküman bulunmuyor.
                </p>
              </div>
            ) : (
              <div className="mt-5 space-y-4">
                {pano.dokumanlar.map((dokuman) => (
                  <div
                    key={dokuman.id}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div>
                      <p className="font-semibold text-slate-800">
                        📄 {dokuman.dokumanAdi}
                      </p>

                      {dokuman.revizyon && (
                        <p className="mt-2 text-sm font-medium text-blue-700">
                          Revizyon: {dokuman.revizyon}
                        </p>
                      )}

                      {dokuman.aciklama && (
                        <p className="mt-1 text-sm text-slate-600">
                          {dokuman.aciklama}
                        </p>
                      )}

                      <p className="mt-2 text-xs text-slate-400">
                        Yüklenme tarihi:{" "}
                        {new Date(
                          dokuman.yuklemeTarihi
                        ).toLocaleDateString("tr-TR")}
                      </p>
                    </div>

                    <a
                      href={dokuman.dosyaYolu}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block w-full rounded-lg bg-blue-700 px-4 py-3 text-center font-semibold text-white hover:bg-blue-800"
                    >
                      PDF'yi Görüntüle
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Alt bilgi */}
          <div className="mt-6 border-t border-slate-200 pt-4 text-center">
            <p className="text-xs text-slate-400">
              Bu sayfa yalnızca doküman görüntüleme amacıyla
              kullanılmaktadır.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
import { PrismaClient } from "@prisma/client";
import PanoListesi from "./PanoListesi";

const prisma = new PrismaClient();

export default async function Home() {
  const toplamPano = await prisma.pano.count();
  const toplamDokuman = await prisma.dokuman.count();

  const panolar = await prisma.pano.findMany({
    include: {
      _count: {
        select: {
          dokumanlar: true,
        },
      },
    },
    orderBy: {
      panoNo: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-blue-700 text-white shadow">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <h1 className="text-2xl font-bold">
            ⚡ Pano Proje Sistemi
          </h1>

          <p className="mt-1 text-blue-100">
            Elektrik ve otomasyon pano doküman yönetimi
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-slate-500">
              Toplam Pano
            </p>

            <p className="mt-2 text-4xl font-bold text-blue-700">
              {toplamPano}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-slate-500">
              Toplam Doküman
            </p>

            <p className="mt-2 text-4xl font-bold text-green-600">
              {toplamDokuman}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-slate-500">
              Sistem Durumu
            </p>

            <p className="mt-2 text-xl font-bold text-green-600">
              ● Aktif
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Panolar
              </h2>

              <p className="text-sm text-slate-500">
                Elektrik panolarını ve dokümanlarını yönetin.
              </p>
            </div>

            <a
              href="/yeni-pano"
              className="rounded-lg bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
            >
              + Yeni Pano
            </a>
          </div>

          <PanoListesi panolar={panolar} />
        </div>
      </div>
    </main>
  );
}
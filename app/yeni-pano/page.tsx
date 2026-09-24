import YeniPanoForm from "../YeniPanoForm";

export default function YeniPanoPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-blue-700 text-white shadow">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <h1 className="text-2xl font-bold">
            ⚡ Pano Proje Sistemi
          </h1>
          <p className="mt-1 text-blue-100">
            Yeni Pano Oluştur
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            Yeni Pano
          </h2>

          <p className="mt-1 text-slate-500">
            Yeni elektrik panosunun bilgilerini girin.
          </p>

          <YeniPanoForm />
        </div>
      </div>
    </main>
  );
}
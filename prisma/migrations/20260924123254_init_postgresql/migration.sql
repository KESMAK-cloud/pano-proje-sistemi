-- CreateTable
CREATE TABLE "Pano" (
    "id" SERIAL NOT NULL,
    "panoNo" TEXT NOT NULL,
    "panoAdi" TEXT NOT NULL,
    "makineHat" TEXT,
    "projeNo" TEXT,
    "aciklama" TEXT,
    "qrKod" TEXT NOT NULL,
    "olusturmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dokuman" (
    "id" SERIAL NOT NULL,
    "panoId" INTEGER NOT NULL,
    "dokumanAdi" TEXT NOT NULL,
    "dosyaAdi" TEXT NOT NULL,
    "dosyaYolu" TEXT NOT NULL,
    "revizyon" TEXT,
    "aciklama" TEXT,
    "aktif" BOOLEAN NOT NULL DEFAULT true,
    "yuklemeTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dokuman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kullanici" (
    "id" SERIAL NOT NULL,
    "kullaniciAdi" TEXT NOT NULL,
    "sifreHash" TEXT NOT NULL,
    "adSoyad" TEXT,
    "aktif" BOOLEAN NOT NULL DEFAULT true,
    "olusturmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Kullanici_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pano_panoNo_key" ON "Pano"("panoNo");

-- CreateIndex
CREATE UNIQUE INDEX "Pano_qrKod_key" ON "Pano"("qrKod");

-- CreateIndex
CREATE UNIQUE INDEX "Kullanici_kullaniciAdi_key" ON "Kullanici"("kullaniciAdi");

-- AddForeignKey
ALTER TABLE "Dokuman" ADD CONSTRAINT "Dokuman_panoId_fkey" FOREIGN KEY ("panoId") REFERENCES "Pano"("id") ON DELETE CASCADE ON UPDATE CASCADE;

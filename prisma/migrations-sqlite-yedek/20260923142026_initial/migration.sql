-- CreateTable
CREATE TABLE "Pano" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "panoNo" TEXT NOT NULL,
    "panoAdi" TEXT NOT NULL,
    "makineHat" TEXT,
    "projeNo" TEXT,
    "aciklama" TEXT,
    "qrKod" TEXT NOT NULL,
    "olusturmaTarihi" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Dokuman" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "panoId" INTEGER NOT NULL,
    "dokumanAdi" TEXT NOT NULL,
    "dosyaAdi" TEXT NOT NULL,
    "dosyaYolu" TEXT NOT NULL,
    "revizyon" TEXT,
    "aciklama" TEXT,
    "aktif" BOOLEAN NOT NULL DEFAULT true,
    "yuklemeTarihi" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Dokuman_panoId_fkey" FOREIGN KEY ("panoId") REFERENCES "Pano" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Kullanici" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "kullaniciAdi" TEXT NOT NULL,
    "sifreHash" TEXT NOT NULL,
    "adSoyad" TEXT,
    "aktif" BOOLEAN NOT NULL DEFAULT true,
    "olusturmaTarihi" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Pano_panoNo_key" ON "Pano"("panoNo");

-- CreateIndex
CREATE UNIQUE INDEX "Pano_qrKod_key" ON "Pano"("qrKod");

-- CreateIndex
CREATE UNIQUE INDEX "Kullanici_kullaniciAdi_key" ON "Kullanici"("kullaniciAdi");

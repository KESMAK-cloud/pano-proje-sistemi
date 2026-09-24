import { PrismaClient as SQLiteClient } from "@prisma/client";import { PrismaClient as SQLiteClient } from "../generated/sqlite";
import { PrismaClient as PostgresClient } from "@prisma/client";

const sqlite = new SQLiteClient();
const postgres = new PostgresClient();

async function main() {
  console.log("SQLite verileri okunuyor...");

  const panolar = await sqlite.pano.findMany({
    include: {
      Dokuman: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  const kullanicilar = await sqlite.kullanici.findMany({
    orderBy: {
      id: "asc",
    },
  });

  console.log(`Pano sayısı: ${panolar.length}`);
  console.log(`Kullanıcı sayısı: ${kullanicilar.length}`);

  console.log("Neon'a aktarım başlıyor...");

  for (const kullanici of kullanicilar) {
    await postgres.kullanici.upsert({
      where: {
        kullaniciAdi: kullanici.kullaniciAdi,
      },
      update: {
        sifreHash: kullanici.sifreHash,
        adSoyad: kullanici.adSoyad,
        aktif: kullanici.aktif,
      },
      create: {
        id: kullanici.id,
        kullaniciAdi: kullanici.kullaniciAdi,
        sifreHash: kullanici.sifreHash,
        adSoyad: kullanici.adSoyad,
        aktif: kullanici.aktif,
        olusturmaTarihi: kullanici.olusturmaTarihi,
      },
    });
  }

  for (const pano of panolar) {
    const yeniPano = await postgres.pano.upsert({
      where: {
        qrKod: pano.qrKod,
      },
      update: {
        panoNo: pano.panoNo,
        panoAdi: pano.panoAdi,
        makineHat: pano.makineHat,
        projeNo: pano.projeNo,
        aciklama: pano.aciklama,
        olusturmaTarihi: pano.olusturmaTarihi,
        guncellemeTarihi: pano.guncellemeTarihi,
      },
      create: {
        id: pano.id,
        panoNo: pano.panoNo,
        panoAdi: pano.panoAdi,
        makineHat: pano.makineHat,
        projeNo: pano.projeNo,
        aciklama: pano.aciklama,
        qrKod: pano.qrKod,
        olusturmaTarihi: pano.olusturmaTarihi,
        guncellemeTarihi: pano.guncellemeTarihi,
      },
    });

    for (const dokuman of pano.Dokuman) {
      await postgres.dokuman.upsert({
        where: {
          id: dokuman.id,
        },
        update: {
          panoId: yeniPano.id,
          dokumanAdi: dokuman.dokumanAdi,
          dosyaAdi: dokuman.dosyaAdi,
          dosyaYolu: dokuman.dosyaYolu,
          revizyon: dokuman.revizyon,
          aciklama: dokuman.aciklama,
          aktif: dokuman.aktif,
          yuklemeTarihi: dokuman.yuklemeTarihi,
        },
        create: {
          id: dokuman.id,
          panoId: yeniPano.id,
          dokumanAdi: dokuman.dokumanAdi,
          dosyaAdi: dokuman.dosyaAdi,
          dosyaYolu: dokuman.dosyaYolu,
          revizyon: dokuman.revizyon,
          aciklama: dokuman.aciklama,
          aktif: dokuman.aktif,
          yuklemeTarihi: dokuman.yuklemeTarihi,
        },
      });
    }

    console.log(
      `Aktarıldı: ${pano.panoNo} - ${pano.panoAdi} (${pano.Dokuman.length} doküman)`
    );
  }

  console.log("Aktarım tamamlandı.");
}

main()
  .catch((error) => {
    console.error("AKTARIM HATASI:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await sqlite.$disconnect();
    await postgres.$disconnect();
  });
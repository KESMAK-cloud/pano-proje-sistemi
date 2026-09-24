import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.pano.upsert({
    where: {
      panoNo: "PANO-001",
    },
    update: {},
    create: {
      panoNo: "PANO-001",
      panoAdi: "Ana Kontrol Panosu",
      makineHat: "Üretim Hattı 1",
      projeNo: "PROJE-001",
      aciklama: "Ana kontrol panosu",
      qrKod: "PANO-001",
    },
  });

  console.log("PANO-001 oluşturuldu.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const qrKod = searchParams.get("qrKod");

    if (!qrKod) {
      return NextResponse.json(
        { error: "QR kodu bulunamadı." },
        { status: 400 }
      );
    }

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
      return NextResponse.json(
        { error: "Pano bulunamadı." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      pano: {
        id: pano.id,
        panoNo: pano.panoNo,
        panoAdi: pano.panoAdi,
        makineHat: pano.makineHat,
        projeNo: pano.projeNo,
        aciklama: pano.aciklama,
      },
      dokumanlar: pano.dokumanlar,
    });
  } catch (error) {
    console.error("Doküman listeleme hatası:", error);

    return NextResponse.json(
      { error: "Dokümanlar alınamadı." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  const uploadPrisma = new PrismaClient();

  try {
    const formData = await request.formData();

    const file = formData.get("file");
    const qrKod = formData.get("qrKod");
  const revizyon = formData.get("revizyon");
const dokumanAciklama = formData.get("dokumanAciklama");  

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "PDF dosyası bulunamadı." },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Sadece PDF dosyaları yüklenebilir." },
        { status: 400 }
      );
    }

    if (typeof qrKod !== "string" || !qrKod) {
      return NextResponse.json(
        { error: "Pano QR kodu bulunamadı." },
        { status: 400 }
      );
    }

    const pano = await uploadPrisma.pano.findUnique({
      where: {
        qrKod,
      },
    });

    if (!pano) {
      return NextResponse.json(
        { error: "Pano bulunamadı." },
        { status: 404 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // PDF'leri Next.js'in doğrudan sunabileceği klasöre kaydet
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads"
    );

    await mkdir(uploadDir, { recursive: true });

    const safeFileName = `${Date.now()}-${file.name.replace(
      /[^a-zA-Z0-9._-]/g,
      "_"
    )}`;

    const filePath = path.join(uploadDir, safeFileName);

    await writeFile(filePath, buffer);

    const dokuman = await uploadPrisma.dokuman.create({
  data: {
    panoId: pano.id,
    dokumanAdi: file.name,
    dosyaAdi: safeFileName,
    dosyaYolu: `/uploads/${safeFileName}`,
    revizyon:
      typeof revizyon === "string" && revizyon.trim()
        ? revizyon.trim()
        : null,
    aciklama:
      typeof dokumanAciklama === "string" &&
      dokumanAciklama.trim()
        ? dokumanAciklama.trim()
        : null,
  },
});
    return NextResponse.json({
      success: true,
      message: "PDF başarıyla yüklendi.",
      dokuman,
    });
  } catch (error) {
    console.error("PDF yükleme hatası:", error);

    return NextResponse.json(
      { error: "PDF yüklenirken bir hata oluştu." },
      { status: 500 }
    );
  } finally {
    await uploadPrisma.$disconnect();
  }
}
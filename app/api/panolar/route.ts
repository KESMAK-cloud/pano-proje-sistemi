import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      panoNo,
      panoAdi,
      makineHat,
      projeNo,
      aciklama,
      qrKod,
    } = body;

    if (!panoNo || !panoAdi || !qrKod) {
      return NextResponse.json(
        {
          error: "Pano No, Pano Adı ve QR Kod zorunludur.",
        },
        { status: 400 }
      );
    }

    const mevcutPano = await prisma.pano.findFirst({
      where: {
        OR: [
          { panoNo },
          { qrKod },
        ],
      },
    });

    if (mevcutPano) {
      return NextResponse.json(
        {
          error: "Bu Pano No veya QR Kod zaten kullanılıyor.",
        },
        { status: 409 }
      );
    }

    const pano = await prisma.pano.create({
      data: {
        panoNo,
        panoAdi,
        makineHat: makineHat || null,
        projeNo: projeNo || null,
        aciklama: aciklama || null,
        qrKod,
      },
    });

    return NextResponse.json({
      success: true,
      pano,
    });
  } catch (error) {
    console.error("Pano oluşturma hatası:", error);

    return NextResponse.json(
      {
        error: "Pano oluşturulurken bir hata oluştu.",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
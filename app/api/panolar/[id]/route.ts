import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const panoId = Number(id);

    if (!Number.isInteger(panoId)) {
      return NextResponse.json(
        { error: "Geçersiz pano ID." },
        { status: 400 }
      );
    }

    const body = await request.json();

    const panoAdi = String(body.panoAdi || "").trim();
    const makineHat = String(body.makineHat || "").trim();
    const projeNo = String(body.projeNo || "").trim();
    const aciklama = String(body.aciklama || "").trim();

    if (!panoAdi) {
      return NextResponse.json(
        { error: "Pano adı boş bırakılamaz." },
        { status: 400 }
      );
    }

    const pano = await prisma.pano.update({
      where: {
        id: panoId,
      },
      data: {
        panoAdi,
        makineHat: makineHat || null,
        projeNo: projeNo || null,
        aciklama: aciklama || null,
      },
    });

    return NextResponse.json({
      success: true,
      pano,
    });
  } catch (error) {
    console.error("Pano güncelleme hatası:", error);

    return NextResponse.json(
      { error: "Pano güncellenemedi." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
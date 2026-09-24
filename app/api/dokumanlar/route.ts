import { NextResponse } from "next/server";
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
    });

    if (!pano) {
      return NextResponse.json(
        { error: "Pano bulunamadı." },
        { status: 404 }
      );
    }

    const dokumanlar = await prisma.dokuman.findMany({
      where: {
        panoId: pano.id,
        aktif: true,
      },
      orderBy: {
        yuklemeTarihi: "desc",
      },
    });

    return NextResponse.json(dokumanlar);
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

export async function DELETE(request: Request) {
  const deletePrisma = new PrismaClient();

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Doküman ID bulunamadı." },
        { status: 400 }
      );
    }

    const dokumanId = Number(id);

    if (!Number.isInteger(dokumanId)) {
      return NextResponse.json(
        { error: "Geçersiz doküman ID." },
        { status: 400 }
      );
    }

    const dokuman = await deletePrisma.dokuman.findUnique({
      where: {
        id: dokumanId,
      },
    });

    if (!dokuman) {
      return NextResponse.json(
        { error: "Doküman bulunamadı." },
        { status: 404 }
      );
    }

    await deletePrisma.dokuman.update({
      where: {
        id: dokumanId,
      },
      data: {
        aktif: false,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Doküman silindi.",
    });
  } catch (error) {
    console.error("Doküman silme hatası:", error);

    return NextResponse.json(
      { error: "Doküman silinemedi." },
      { status: 500 }
    );
  } finally {
    await deletePrisma.$disconnect();
  }
}
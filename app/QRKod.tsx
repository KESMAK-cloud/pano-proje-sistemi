"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function QRKod({
  qrKod,
}: {
  qrKod: string;
}) {
  const url = `http://192.168.2.130:3000/pano/${encodeURIComponent(qrKod)}`;

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 text-center">
      <p className="mb-3 text-sm font-medium text-slate-600">
        Pano QR Kodu
      </p>

      <QRCodeCanvas
        value={url}
        size={220}
        level="H"
        includeMargin
      />

      <p className="mt-3 text-sm font-semibold text-slate-700">
        {qrKod}
      </p>

      <p className="mt-1 break-all text-xs text-slate-400">
        {url}
      </p>
    </div>
  );
}
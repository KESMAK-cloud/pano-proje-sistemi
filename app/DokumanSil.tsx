"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DokumanSil({
  dokumanId,
}: {
  dokumanId: number;
}) {
  const router = useRouter();

  const [siliniyor, setSiliniyor] = useState(false);

  async function sil() {
    const onay = window.confirm(
      "Bu PDF dokümanını silmek istediğinizden emin misiniz?"
    );

    if (!onay) {
      return;
    }

    setSiliniyor(true);

    try {
      const cevap = await fetch(
        `/api/dokumanlar?id=${dokumanId}`,
        {
          method: "DELETE",
        }
      );

      const veri = await cevap.json();

      if (!cevap.ok) {
        throw new Error(
          veri.error || "Doküman silinemedi."
        );
      }

      router.refresh();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Doküman silinemedi."
      );
    } finally {
      setSiliniyor(false);
    }
  }

  return (
    <button
      type="button"
      onClick={sil}
      disabled={siliniyor}
      className="rounded-lg bg-red-600 px-4 py-2 text-center font-medium text-white hover:bg-red-700 disabled:opacity-50"
    >
      {siliniyor ? "Siliniyor..." : "🗑️ Sil"}
    </button>
  );
}
import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';

export default function QrCode({ url, taille = 160 }) {
  const canvasRef = useRef(null);

  function telecharger() {
    const canvas = canvasRef.current?.querySelector('canvas');
    if (!canvas) return;
    const lien = document.createElement('a');
    lien.download = 'qr-code-invitation.png';
    lien.href = canvas.toDataURL('image/png');
    lien.click();
  }

  if (!url) return null;

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <div ref={canvasRef} className="p-3 bg-white border border-stone-200 rounded-lg">
        <QRCodeCanvas value={url} size={taille} bgColor="#ffffff" fgColor="#292524" />
      </div>
      <button onClick={telecharger} className="text-xs text-stone-500 hover:underline">
        Télécharger le QR code
      </button>
    </div>
  );
}
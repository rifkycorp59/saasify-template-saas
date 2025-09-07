'use client'

import { useRef, useState } from 'react'
const { SignatureCanvas } = require("react-signature-canvas");
import axios from 'axios'

export default function SignaturePage() {
  const sigCanvas = useRef<any>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [barcodeUrl, setBarcodeUrl] = useState<string | null>(null)

  // Simpan signature ke /public lewat API
  const saveSignature = async () => {
    if (!sigCanvas.current) return
    const trimmed = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
    try {
      const res = await axios.post('/api/save-signature', { image: trimmed })
      setImageUrl(res.data.url) // URL gambar signature
    } catch (err) {
      console.error(err)
    }
  }

  // Convert URL gambar jadi barcode
  const convertToBarcode = async () => {
    if (!imageUrl) return
    try {
      const res = await axios.post('/api/convert-barcode', { url: imageUrl })
      setBarcodeUrl(res.data.barcode)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Signature to Barcode</h1>

      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ className: 'border w-full h-64 bg-white' }}
      />

      <div className="space-x-2">
        <button
          onClick={saveSignature}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Signature
        </button>
        <button
          onClick={convertToBarcode}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Convert to Barcode
        </button>
      </div>

      {imageUrl && (
        <div>
          <p>Signature Image:</p>
          <img src={imageUrl} alt="signature" className="border mt-2" />
        </div>
      )}

      {barcodeUrl && (
        <div className='container mx-auto flex flex-col items-center justify-center'>
          <p>Barcode:</p>
          <img src={barcodeUrl} alt="barcode" className="border mt-2 flex" />
        </div>
      )}
    </div>
  )
}

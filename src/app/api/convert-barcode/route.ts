import { NextResponse } from 'next/server'
import QRCode from 'qrcode'

export async function POST(req: Request) {
  try {
    const { url } = await req.json()

    // Generate barcode (base64 PNG)
    const barcodeData = await QRCode.toDataURL(`http://localhost:3000${url}`)

    return NextResponse.json({ barcode: barcodeData })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to convert to barcode' }, { status: 500 })
  }
}

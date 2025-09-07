import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const { image } = await req.json()
    // Buat nama file unik
    const filename = `signature-${Date.now()}.png`
    const filePath = path.join(process.cwd(), 'public', filename)

    // Ambil base64 tanpa prefix
    const base64Data = image.replace(/^data:image\/png;base64,/, '')

    // Simpan file
    fs.writeFileSync(filePath, base64Data, 'base64')

    return NextResponse.json({ url: `/${filename}` })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to save signature' }, { status: 500 })
  }
}

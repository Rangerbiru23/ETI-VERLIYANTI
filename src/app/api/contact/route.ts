import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, phone, eventType, eventDate, guests, message } = body
    
    if (!name || !email || !phone || !eventType) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi kecuali tanggal dan pesan' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    // Validate phone format (Indonesian phone number)
    const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,11}$/
    const cleanPhone = phone.replace(/[-\s]/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Format nomor telepon tidak valid' },
        { status: 400 }
      )
    }

    // Log the contact request (in production, you'd save to database)
    const contactRequest = {
      id: Date.now(),
      name,
      email,
      phone: cleanPhone,
      eventType,
      eventDate: eventDate || null,
      guests: guests || null,
      message: message || '',
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    console.log('New contact request:', contactRequest)

    // Here you would typically:
    // 1. Save to database using Prisma
    // 2. Send notification email to admin
    // 3. Send confirmation email to customer
    // 4. Maybe integrate with CRM

    // For now, we'll just return success
    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah terkirim! Tim kami akan menghubungi Anda segera.',
      data: {
        id: contactRequest.id,
        name: contactRequest.name,
        email: contactRequest.email
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'ETI VIRLIYANTI Catering Contact API',
    endpoints: {
      'POST /api/contact': 'Submit contact form'
    },
    contact: {
      phone: '085285703497',
      email: 'info@etivirliyanti-catering.com',
      address: 'WINDUSARI, Belitang Jaya, OKU Timur, Sumatera Selatan'
    }
  })
}
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, CheckCircle, AlertCircle, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Gavel className="w-4 h-4 mr-2" />
              Syarat & Ketentuan
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan layanan ETI VIRLIYANTI Catering 
              untuk memastikan kerjasama yang baik dan saling menguntungkan.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Pendahuluan
                  </h2>
                </div>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Selamat datang di ETI VIRLIYANTI Catering. Syarat dan Ketentuan 
                    ini mengatur penggunaan layanan catering yang kami sediakan. 
                    Dengan menggunakan layanan kami, Anda menyetujui untuk terikat 
                    oleh syarat dan ketentuan ini.
                  </p>
                  <p>
                    Harap baca syarat dan ketentuan ini dengan cermat sebelum 
                    melakukan pemesanan layanan catering kami.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Deskripsi Layanan
                  </h2>
                </div>
                <div className="text-gray-600 space-y-4">
                  <p>
                    ETI VIRLIYANTI menyediakan layanan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Catering Pernikahan:</strong> Layanan lengkap untuk acara pernikahan</li>
                    <li><strong>Catering Corporate:</strong> Layanan untuk meeting, seminar, dan acara perusahaan</li>
                    <li><strong>Catering Acara Khusus:</strong> Ulang tahun, arisan, gathering, dan acara keluarga</li>
                    <li><strong>Konsultasi Menu:</strong> Bantuan pemilihan menu sesuai kebutuhan</li>
                    <li><strong>Peralatan Catering:</strong> Penyediaan peralatan makan dan minum</li>
                    <li><strong>Staff Layanan:</strong> Tenaga profesional untuk pelayanan acara</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Booking and Payment */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Pemesanan dan Pembayaran
                </h2>
                <div className="text-gray-600 space-y-4">
                  <h3 className="font-semibold text-lg">1. Proses Pemesanan</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pemesanan dapat dilakukan melalui telepon, email, atau langsung di lokasi kami</li>
                    <li>Minimal pemesanan 7 hari sebelum acara (tergantung ketersediaan)</li>
                    <li>DP minimal 50% dari total biaya untuk konfirmasi pemesanan</li>
                    <li>Pelunasan dilakukan H-1 sebelum acara</li>
                  </ul>

                  <h3 className="font-semibold text-lg">2. Metode Pembayaran</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Transfer Bank (BCA, Mandiri, BNI)</li>
                    <li>Tunai di lokasi kami</li>
                    <li>E-Wallet (OVO, GoPay, Dana)</li>
                    <li>Pembayaran di tempat acara (dengan syarat dan ketentuan)</li>
                  </ul>

                  <h3 className="font-semibold text-lg">3. Kebijakan Pembatalan</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>30+ hari sebelum acara:</strong> Pengembalian 100% DP</li>
                    <li><strong>15-29 hari sebelum acara:</strong> Pengembalian 50% DP</li>
                    <li><strong>7-14 hari sebelum acara:</strong> Pengembalian 25% DP</li>
                    <li><strong>&lt;7 hari sebelum acara:</strong> DP hangus</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Client Responsibilities */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kewajiban Klien
                </h2>
                <div className="text-gray-600 space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Memberikan informasi yang akurat tentang detail acara</li>
                    <li>Memastikan lokasi acara dapat diakses oleh tim kami</li>
                    <li>Menyediakan fasilitas dasar (listrik, air, meja jika diperlukan)</li>
                    <li>Menginformasikan jumlah tamu final paling lambat H-2</li>
                    <li>Memastikan keamanan barang dan staff kami di lokasi acara</li>
                    <li>Melaporkan keluhan atau masalah selama acara berlangsung</li>
                    <li>Memastikan tidak ada gangguan yang menghambat pelayanan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Company Responsibilities */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kewajiban Perusahaan
                </h2>
                <div className="text-gray-600 space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Menyediakan makanan sesuai menu yang disepakati</li>
                    <li>Memastikan kualitas dan keamanan makanan</li>
                    <li>Mengirimkan tim dan peralatan tepat waktu</li>
                    <li>Memberikan pelayanan yang profesional dan sopan</li>
                    <li>Membersihkan area catering setelah acara</li>
                    <li>Menangani keluhan dengan cepat dan tepat</li>
                    <li>Memastikan kuantitas makanan sesuai jumlah tamu</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Menu and Food Quality */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Menu dan Kualitas Makanan
                </h2>
                <div className="text-gray-600 space-y-4">
                  <h3 className="font-semibold text-lg">1. Standar Kualitas</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Menggunakan bahan-bahan segar dan berkualitas</li>
                    <li>Memenuhi standar keamanan pangan</li>
                    <li>Memiliki sertifikat layanan kesehatan makanan</li>
                    <li>Proses memasak yang higienis</li>
                  </ul>

                  <h3 className="font-semibold text-lg">2. Perubahan Menu</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Perubahan menu dapat dilakukan maksimal H-7</li>
                    <li>Perubahan karena ketersediaan bahan akan dikomunikasikan</li>
                    <li>Substitusi menu dengan nilai setara atau lebih tinggi</li>
                  </ul>

                  <h3 className="font-semibold text-lg">3. Alergi dan Diet Khusus</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Informasikan alergi atau diet khusus saat pemesanan</li>
                    <li>Kami akan berusaha menyediakan alternatif</li>
                    <li>Kami tidak bertanggung jawab atas reaksi alergi yang tidak diinformasikan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Force Majeure */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <AlertCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Force Majeure
                  </h2>
                </div>
                <div className="text-gray-600 space-y-4">
                  <p>
                    ETI VIRLIYANTI tidak bertanggung jawab atas keterlambatan atau 
                    pembatalan layanan yang disebabkan oleh:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Bencana alam (gempa, banjir, tsunami, dll)</li>
                    <li>Kerusakan infrastruktur (jalan, listrik, air)</li>
                    <li>Kerusakan transportasi umum</li>
                    <li>Kerusakan peralatan di luar kendali kami</li>
                    <li>Unjuk rasa atau kerusuhan sosial</li>
                    <li>Perubahan kebijakan pemerintah yang tiba-tiba</li>
                  </ul>
                  <p>
                    Dalam kasus Force Majeure, kami akan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Menginformasikan klien secepat mungkin</li>
                    <li>Menawarkan alternatif tanggal atau solusi lain</li>
                    <li>Mengembalikan pembayaran untuk layanan yang tidak terlaksana</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Liability */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Batasan Tanggung Jawab
                </h2>
                <div className="text-gray-600 space-y-4">
                  <h3 className="font-semibold text-lg">Tanggung Jawab Kami</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kerusakan peralatan milik kami</li>
                    <li>Kualitas makanan yang tidak sesuai standar</li>
                    <li>Keterlambatan yang disebabkan oleh pihak kami</li>
                    <li>Kehilangan barang milik klien yang disebabkan oleh kelalaian staff kami</li>
                  </ul>

                  <h3 className="font-semibold text-lg">Di Luar Tanggung Jawab Kami</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kerusakan properti lokasi acara</li>
                    <li>Kecelakaan yang disebabkan oleh pihak ketiga</li>
                    <li>Kehilangan barang pribadi tamu undangan</li>
                    <li>Biaya medis akibat alergi yang tidak diinformasikan</li>
                    <li>Kerugian bisnis atau kehilangan keuntungan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hak Kekayaan Intelektual
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Semua konten, materi, dan desain yang terdapat dalam layanan 
                    ETI VIRLIYANTI dilindungi oleh hak cipta dan merek dagang.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nama "ETI VIRLIYANTI" adalah merek dagang terdaftar</li>
                    <li>Menu dan resep adalah hak milik intelektual kami</li>
                    <li>Foto dan video promosi dilindungi hak cipta</li>
                    <li>Dilarang menyalin atau menggunakan materi tanpa izin tertulis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Penyelesaian Sengketa
                </h2>
                <div className="text-gray-600 space-y-4">
                  <h3 className="font-semibold text-lg">1. Prosedur Keluhan</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Keluhan disampaikan secara tertulis dalam 24 jam setelah acara</li>
                    <li>Menyertakan bukti-bukti yang relevan</li>
                    <li>Kami akan merespons dalam 2x24 jam</li>
                    <li>Solusi akan ditawarkan dalam 7 hari kerja</li>
                  </ul>

                  <h3 className="font-semibold text-lg">2. Mediasi</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sengketa akan diselesaikan secara musyawarah</li>
                    <li>Jika tidak ada kesepakatan, dapat menggunakan mediator pihak ketiga</li>
                    <li>Biaya mediasi dibagi rata antara kedua belah pihak</li>
                  </ul>

                  <h3 className="font-semibold text-lg">3. Yurisdiksi</h3>
                  <p>
                    Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. 
                    Setiap sengketa akan diselesaikan di Pengadilan Negeri 
                    Ogan Komering Ulu Timur.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Amendments */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Perubahan Syarat dan Ketentuan
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    ETI VIRLIYANTI berhak mengubah syarat dan ketentuan ini kapan saja. 
                    Perubahan akan berlaku efektif setelah:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ditampilkan di website resmi kami</li>
                    <li>Dikomunikasikan langsung kepada klien</li>
                    <li>Masa transisi 30 hari sebelum penerapan</li>
                  </ul>
                  <p>
                    Pemesanan yang sudah dilakukan sebelum perubahan akan tetap 
                    mengikuti syarat dan ketentuan yang berlaku saat pemesanan.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hubungi Kami
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi:
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">ETI VIRLIYANTI Catering</p>
                    <p>📞 085285703497</p>
                    <p>📧 info@etivirliyanti-catering.com</p>
                    <p>📍 WINDUSARI, Belitang Jaya, OKU Timur, Sumatera Selatan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agreement */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-orange-800 mb-4">
                  Pernyataan Persetujuan
                </h2>
                <div className="text-orange-700 space-y-4">
                  <p>
                    Dengan melakukan pemesanan layanan catering ETI VIRLIYANTI, 
                    Anda menyatakan bahwa:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Anda telah membaca, memahami, dan menyetujui semua syarat dan ketentuan</li>
                    <li>Anda memiliki kapasitas hukum untuk membuat perjanjian ini</li>
                    <li>Informasi yang Anda berikan adalah akurat dan lengkap</li>
                    <li>Anda akan mematuhi semua kewajiban yang tercantum</li>
                  </ul>
                  <p className="font-semibold">
                    Syarat dan ketentuan ini merupakan kesepakatan yang mengikat 
                    secara hukum antara Anda dan ETI VIRLIYANTI Catering.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center text-gray-500 text-sm">
              <p>Syarat dan Ketentuan ini terakhir diperbarui pada: 1 Januari 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </section>
    </div>
  )
}
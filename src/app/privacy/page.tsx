import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Eye, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Kebijakan Privasi
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              ETI VIRLIYANTI menghargai privasi Anda dan berkomitmen untuk 
              melindungi data pribadi Anda dengan sebaik-baiknya.
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
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Pendahuluan
                  </h2>
                </div>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Selamat datang di ETI VIRLIYANTI Catering. Kami memahami bahwa 
                    privasi dan keamanan data pribadi Anda sangat penting. Kebijakan 
                    Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                    dan melindungi informasi pribadi Anda ketika menggunakan layanan 
                    catering kami.
                  </p>
                  <p>
                    Dengan menggunakan layanan ETI VIRLIYANTI, Anda setuju dengan 
                    praktik-praktik yang dijelaskan dalam kebijakan ini.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <UserCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Pengumpulan Data
                  </h2>
                </div>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Kami dapat mengumpulkan jenis-jenis informasi berikut:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Informasi Pribadi:</strong> Nama, nomor telepon, email, alamat</li>
                    <li><strong>Informasi Acara:</strong> Tanggal acara, lokasi, jumlah tamu, jenis acara</li>
                    <li><strong>Preferensi Makanan:</strong> Alergi, preferensi diet, menu pilihan</li>
                    <li><strong>Informasi Pembayaran:</strong> Metode pembayaran, detail transaksi</li>
                    <li><strong>Informasi Teknis:</strong> Alamat IP, browser, perangkat yang digunakan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Lock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Penggunaan Data
                  </h2>
                </div>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Kami menggunakan informasi yang Anda berikan untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Memproses pemesanan dan penyediaan layanan catering</li>
                    <li>Mengkomunikasikan detail acara dan konfirmasi</li>
                    <li>Memberikan penawaran dan rekomendasi menu</li>
                    <li>Meningkatkan kualitas layanan kami</li>
                    <li>Mengirim informasi promosi (dengan persetujuan Anda)</li>
                    <li>Memproses pembayaran dan transaksi keuangan</li>
                    <li>Menyelesaikan keluhan dan pertanyaan pelanggan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Keamanan Data
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    ETI VIRLIYANTI berkomitmen untuk melindungi data pribadi Anda dengan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Enkripsi data saat transmisi dan penyimpanan</li>
                    <li>Akses terbatas ke informasi pribadi</li>
                    <li>Update keamanan sistem secara berkala</li>
                    <li>Training staf tentang perlindungan data</li>
                    <li>Kebijakan retensi data yang jelas</li>
                  </ul>
                  <p>
                    Namun, harap diingat bahwa tidak ada metode transmisi internet 
                    atau penyimpanan elektronik yang 100% aman.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Third Party Sharing */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Berbagi dengan Pihak Ketiga
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Kami tidak menjual, menyewakan, atau membagikan informasi pribadi 
                    Anda kepada pihak ketiga untuk keperluan pemasaran. Kami hanya 
                    akan membagikan informasi Anda dalam keadaan berikut:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Dengan persetujuan eksplisit dari Anda</li>
                    <li>Kepada mitra layanan yang membantu operasi bisnis kami</li>
                    <li>Untuk mematuhi hukum atau perintah pengadilan</li>
                    <li>Untuk melindungi hak, privasi, keamanan, atau properti kami</li>
                    <li>Dalam situasi darurat untuk melindungi keselamatan pribadi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kebijakan Cookie
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Website ETI VIRLIYANTI dapat menggunakan cookie untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mengingat preferensi Anda</li>
                    <li>Menganalisis traffic website</li>
                    <li>Mempersonalisasi pengalaman pengguna</li>
                    <li>Menyimpan item dalam keranjang pemesanan</li>
                  </ul>
                  <p>
                    Anda dapat mengatur browser untuk menolak cookie, namun ini 
                    dapat mempengaruhi fungsionalitas website.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hak Anda sebagai Pengguna
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Sebagai pengguna layanan kami, Anda memiliki hak untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mengakses dan melihat data pribadi Anda</li>
                    <li>Memperbaiki data yang tidak akurat</li>
                    <li>Menghapus data pribadi Anda (dengan batasan tertentu)</li>
                    <li>Menolak pemasaran langsung dari kami</li>
                    <li>Meminta salinan data pribadi Anda</li>
                    <li>Mengajukan keluhan tentang penanganan data kami</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Pembaruan Kebijakan
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk 
                    mencerminkan perubahan dalam praktik bisnis kami atau perubahan 
                    hukum yang berlaku.
                  </p>
                  <p>
                    Setiap perubahan akan diberitahukan melalui website kami atau 
                    komunikasi langsung dengan Anda. Penggunaan terus-menerus layanan 
                    kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
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
                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau 
                    ingin melaksanakan hak Anda sebagai pengguna, silakan hubungi kami:
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

            {/* Last Updated */}
            <div className="text-center text-gray-500 text-sm">
              <p>Kebijakan Privasi ini terakhir diperbarui pada: 1 Januari 2024</p>
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
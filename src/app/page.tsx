'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  Utensils, 
  Award,
  CheckCircle,
  Star,
  ChefHat,
  Calendar
} from 'lucide-react'

export default function Home() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Catering Pernikahan",
      description: "Paket lengkap untuk hari spesial Anda dengan menu mewah dan presentasi elegan",
      icon: <ChefHat className="w-8 h-8" />,
      features: ["Menu Premium", "Dekorasi Meja", "Staff Profesional", "Peralatan Lengkap"]
    },
    {
      title: "Catering Corporate",
      description: "Layanan catering untuk meeting, seminar, dan acara perusahaan",
      icon: <Users className="w-8 h-8" />,
      features: ["Menu Bisnis", "Pengantaran Tepat Waktu", "Paket Hemat", "Layanan Buffet"]
    },
    {
      title: "Catering Acara Khusus",
      description: "Ulang tahun, arisan, gathering dan acara keluarga lainnya",
      icon: <Calendar className="w-8 h-8" />,
      features: ["Menu Custom", "Tema Sesuai Acara", "Budget Fleksibel", "Layanan Lengkap"]
    }
  ]

  const testimonials = [
    {
      name: "Bapak Ahmad",
      role: "Manager PT. Maju Bersama",
      content: "Layanan catering yang sangat profesional. Makanan enak, pelayanan tepat waktu, dan staff sangat ramah.",
      rating: 5
    },
    {
      name: "Ibu Siti",
      role: "Klien Pernikahan",
      content: "Terima kasih ETI VIRLIYANTI atas catering pernikahan kami yang sempurna. Tamu-tamu sangat puas dengan hidangannya.",
      rating: 5
    },
    {
      name: "Bapak Budi",
      role: "Panitia Acara",
      content: "Paket catering corporate yang hemat namun berkualitas. Pasti akan menggunakan lagi untuk acara berikutnya.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  <Utensils className="w-4 h-4 mr-2" />
                  Penyediaan Jasa Boga Periode Tertentu
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  ETI VIRLIYANTI
                  <span className="block text-2xl lg:text-3xl mt-2 text-orange-100">
                    Catering & Jasa Boga
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-orange-100 leading-relaxed">
                  Layanan catering profesional untuk berbagai acara spesial Anda. 
                  Dari pernikahan hingga acara corporate, kami hadirkan hidangan 
                  berkualitas dengan pelayanan terbaik.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Lihat Layanan
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-orange-100">Acara Sukses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-orange-100">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-orange-100">Kepuasan Klien</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/eti-virliyanti-logo.png" 
                  alt="ETI VIRLIYANTI Catering"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl bg-white p-8"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              <Utensils className="w-4 h-4 mr-2" />
              Layanan Kami
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Catering Terbaik
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ETI VIRLIYANTI menyediakan berbagai layanan catering untuk memenuhi 
              kebutuhan acara Anda dengan kualitas terbaik.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden ${
                  activeService === index ? 'ring-2 ring-orange-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={
                      index === 0 ? "/wedding-catering.jpg" : 
                      index === 1 ? "/corporate-catering.jpg" : 
                      "/chef-kitchen.jpg"
                    }
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-orange-300 mb-2">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                <Award className="w-4 h-4 mr-2" />
                Tentang Kami
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-orange-600">ETI VIRLIYANTI</span>?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ETI VIRLIYANTI adalah penyedia jasa boga terpercaya dengan 
                  pengalaman lebih dari 10 tahun dalam melayani berbagai acara 
                  dari skala kecil hingga besar.
                </p>
                <p>
                  Kami berkomitmen untuk memberikan layanan terbaik dengan 
                  hidangan berkualitas, bahan-bahan segar, dan pelayanan 
                  yang profesional untuk setiap acara Anda.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tepat Waktu</h4>
                    <p className="text-sm text-gray-600">Pengantaran dan setup tepat waktu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Utensils className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bahan Berkualitas</h4>
                    <p className="text-sm text-gray-600">Menggunakan bahan segar pilihan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Staff Profesional</h4>
                    <p className="text-sm text-gray-600">Tim berpengalaman dan terlatih</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Star className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kualitas Terjamin</h4>
                    <p className="text-sm text-gray-600">Rasa enak dan presentasi menarik</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Alamat</p>
                      <p className="text-gray-600">
                        WINDUSARI, Desa/Kelurahan Windusari, Kec. Belitang Jaya, 
                        Kab. Ogan Komering Ulu Timur, Provinsi Sumatera Selatan
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telepon</p>
                      <p className="text-gray-600">085285703497</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@etivirliyanti-catering.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-700 font-medium text-center">
                    📞 Hubungi kami sekarang untuk konsultasi gratis!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              <Star className="w-4 h-4 mr-2" />
              Testimoni Klien
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Klien Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas utama kami. Lihat apa yang 
              mereka katakan tentang layanan ETI VIRLIYANTI.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Membuat Acara Anda Berkesan?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Hubungi ETI VIRLIYANTI sekarang untuk konsultasi gratis dan 
            dapatkan penawaran terbaik untuk kebutuhan catering Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('tel:085285703497')}
            >
              <Phone className="w-5 h-5 mr-2" />
              085285703497
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold"
              onClick={() => window.location.href = 'mailto:info@etivirliyanti-catering.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">ETI VIRLIYANTI</h3>
              <p className="text-gray-400 mb-4">
                Penyediaan Jasa Boga Periode Tertentu terpercaya 
                dengan layanan profesional dan berkualitas.
              </p>
              <div className="flex space-x-4">
                <Badge className="bg-orange-600 text-white">
                  <Utensils className="w-4 h-4 mr-1" />
                  Catering
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Catering Pernikahan</li>
                <li>Catering Corporate</li>
                <li>Catering Acara Khusus</li>
                <li>Konsultasi Menu</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Senin - Jumat: 08:00 - 20:00</li>
                <li>Sabtu: 08:00 - 18:00</li>
                <li>Minggu: 09:00 - 17:00</li>
                <li>Acara Khusus: 24/7</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  085285703497
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@etivirliyanti-catering.com
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span className="text-sm">
                    WINDUSARI, Belitang Jaya, OKU Timur, Sumatera Selatan
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2024 ETI VIRLIYANTI Catering. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
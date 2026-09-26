export const APP_STRINGS = {
  appName: "undangin",
  heroBadge: "Sistem Verifikasi Kurang dari 5 Detik",
  heroTitle: "Manajemen Tamu All-in-One",
  heroSubtitle: "Andal offline dan ramah lansia. Verifikasi tamu kurang dari 5 detik, tanpa kendala sinyal.",
  ctaPrimary: "Coba Gratis Sekarang",
  ctaSecondary: "Pelajari Fitur",
  featuresTitle: "Solusi Canggih untuk Hari Bahagia",
  pricingTitle: "Harga Transparan, Tanpa Kejutan",
  dashboardTitle: "Satu Dashboard untuk Semua Kebutuhan",
  dashboardSubtitle: "Pantau real-time kehadiran tamu, konfirmasi RSVP, hingga sinkronisasi jumlah porsi katering agar tidak ada yang terbuang sia-sia.",
  footerText: "© 2026 Undangin. All rights reserved.",
  navFeatures: "Fitur Unggulan",
  navPricing: "Paket SaaS",
  featuresBadge: "Fitur Utama",
  featuresDesc: "Sistem check-in yang dirancang untuk kecepatan, keandalan, dan inklusivitas. Menjamin pengalaman terbaik bagi penyelenggara dan tamu.",
  pricingSubtitle: "Mulai dengan harga transparan tanpa biaya tersembunyi. Khusus dirancang untuk EO/WO skala menengah ke atas.",
  pricingBadge: "SaaS License",
  pricingButton: "Mulai Langganan"
};

export const FEATURES_STRINGS = [
  {
    id: "f1",
    title: "Offline-First",
    desc: "Check-in lancar tanpa internet. Sinkronisasi otomatis saat online kembali."
  },
  {
    id: "f2",
    title: "Check-In Kilat (<5 Detik)",
    desc: "Scan QR code secepat kilat untuk menghindari antrean panjang tamu VIP."
  },
  {
    id: "f3",
    title: "Ramah Lansia",
    desc: "Desain inklusif dengan opsi check-in alternatif bagi tamu tanpa smartphone."
  },
  {
    id: "f4",
    title: "Dashboard Real-Time",
    desc: "Sinkronisasi porsi katering dengan jumlah tamu aktual di venue."
  }
];

export const PRICING_STRINGS = {
  price: "Rp 500.000",
  period: "/ bulan",
  description: "Lisensi SaaS untuk Agensi EO/WO",
  features: [
    "Kuota tamu tidak terbatas",
    "Akses dashboard real-time",
    "Sistem check-in offline-first",
    "Desain undangan WYSIWYG",
    "Dukungan teknis prioritas"
  ]
};

export const FAQ_STRINGS = {
  title: "Pertanyaan Seputar Undangin",
  faqs: [
    {
      q: "Apakah sistem tetap berjalan jika tidak ada sinyal internet?",
      a: "Tentu! Undangin mengusung arsitektur Offline-First. Semua data tamu akan tersimpan secara lokal dan otomatis sinkronisasi ke server begitu koneksi stabil."
    },
    {
      q: "Berapa batas maksimal tamu yang bisa diimpor?",
      a: "Tidak ada batas! Sistem dirancang menampung ribuan database tanpa mengorbankan kecepatan scan QR Code di lapangan."
    },
    {
      q: "Apakah tamu perlu mengunduh aplikasi?",
      a: "Sama sekali tidak. Tamu hanya perlu menunjukkan QR Code yang diterima. Tim Anda yang akan menggunakan sistem pemindai (scanner) ini."
    },
    {
      q: "Bagaimana jika ada tamu VIP atau tamu tak diundang?",
      a: "Sistem memisahkan kategori tamu secara cerdas. Layar perangkat akan berubah warna (misal: merah) jika kode QR tidak valid atau masuk dalam daftar blacklist."
    }
  ]
};

export const CTA_STRINGS = {
  title: "Siap Mengubah Cara Anda Mengelola Event?",
  subtitle: "Tingkatkan profesionalisme EO/WO Anda di mata klien. Bergabunglah dengan agensi top lainnya menggunakan Undangin.",
  button: "Mulai Langganan"
};

export const HOW_IT_WORKS_STRINGS = {
  title: "Simpel. Cepat. Tanpa Pusing.",
  subtitle: "Tinggalkan cara lama. Mulai proses check-in digital modern dalam 3 langkah mudah.",
  steps: [
    {
      title: "1. Impor Data Tamu",
      desc: "Cukup unggah file Excel daftar tamu Anda. Sistem kami memproses dan mengenali ribuan data dalam hitungan detik."
    },
    {
      title: "2. Generate & Kirim QR",
      desc: "Sistem otomatis membuatkan QR Code unik terenkripsi untuk tiap tamu, siap dikirim massal via WhatsApp atau Email."
    },
    {
      title: "3. Scan & Sambut",
      desc: "Di hari H, tim Anda hanya perlu melakukan scan QR menggunakan kamera HP. Verifikasi akurat dan tanpa lag."
    }
  ]
};

export const TESTIMONIAL_STRINGS = {
  title: "Dipercaya Oleh Rekan EO & WO Lokal",
  logos: ["Budi Setiawan EO", "Rina Melati WO", "Mcboy Event Tech", "Berkah Wedding", "Maju Jaya Event", "Karya Mandiri WO", "Lestari Planner"]
};

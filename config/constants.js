export const CONTACT_INFO = {
  PHONE: '6282246926544',
  PHONE_FORMATTED: '0822-4692-6544',
  ADDRESS: 'Jl. Waru No. 24A, RT.1/RW.8, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur 13220',
  ADDRESS_SHORT: 'Jl. Waru No.24A, Rawamangun, Pulo Gadung, Jakarta Timur 13220',
  HOURS: '24 Jam',
  MAPS_URL: 'https://maps.google.com/?q=Jl.+Waru+No.+24A+Rawamangun+Jakarta+Timur',
  WA_URL: (phone) => `https://wa.me/${phone}`,
};

export const COMPANY_INFO = {
  NAME: 'Subur Maju Printing',
  TAGLINE: 'Digital Printing 24 Jam',
  DESCRIPTION: 'Melayani hardcover skripsi, banner, stiker, label, brosur, undangan, dan segala kebutuhan cetak Anda dengan kualitas premium.',
  AVATAR: '/avatar.png',
};

export const SERVICES = [
  {
    id: 1,
    icon: '📚',
    title: 'Hardcover Skripsi',
    description: 'Finishing premium, harga terbaik',
  },
  {
    id: 2,
    icon: '🖨️',
    title: 'Digital Printing',
    description: 'Brosur, flyer, dokumen, kartu nama',
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Banner & Spanduk',
    description: 'Outdoor & indoor berkualitas',
  },
  {
    id: 4,
    icon: '🏷️',
    title: 'Stiker & Label',
    description: 'Custom label produk & kemasan',
  },
];

export const STATS = [
  { value: '24', label: 'Jam Layanan' },
  { value: '1000+', label: 'Proyek Selesai' },
  { value: '100%', label: 'Garansi Puas' },
  { value: 'Fast', label: 'Pengerjaan Cepat' },
];

export const WHY_US = [
  {
    id: 1,
    icon: '✓',
    title: 'Buka 24 Jam',
    description: 'Siap melayani kapan saja Anda butuh',
  },
  {
    id: 2,
    icon: '✓',
    title: 'Pengerjaan Cepat',
    description: 'Order hari ini, besok jadi',
  },
  {
    id: 3,
    icon: '✓',
    title: 'Harga Termurah',
    description: 'Kualitas tinggi dengan harga bersaing',
  },
  {
    id: 4,
    icon: '✓',
    title: 'Respon Instan',
    description: 'Tim kami fast response via WhatsApp',
  },
  {
    id: 5,
    icon: '✓',
    title: 'Kualitas Terjamin',
    description: 'Material premium + garansi',
  },
  {
    id: 6,
    icon: '✓',
    title: 'Pengalaman Bertahun-tahun',
    description: 'Terpercaya di Jakarta',
  },
];

export const POPULAR_SERVICES = [
  'Hardcover Skripsi',
  'Digital Printing',
  'Banner & Spanduk',
  'Stiker & Label',
  'Brosur & Flyer',
  'Undangan & Kartu Nama',
];

export const analyzeOrder = (text) => {
  const lower = text.toLowerCase();

  const products = ['x banner', 'y banner', 'kartu nama', 'cetak foto', 'stiker', 'spanduk', 'banner', 'brosur', 'undangan', 'poster', 'nota', 'flyer', 'stempel', 'hardcover', 'kalender'];
  const deadlines = ['hari ini', 'besok', 'lusa', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
  const materials = ['flexi china', 'flexi korea', 'flexi', 'vinyl', 'art paper', 'art carton', 'ivory', 'hvs', 'stiker vinyl', 'stiker chromo', 'transparan'];
  const colors = ['merah', 'biru', 'hijau', 'kuning', 'hitam putih', 'hitam', 'putih', 'orange', 'oranye', 'ungu', 'pink', 'coklat', 'abu-abu', 'full color'];

  // Pilih kecocokan TERPANJANG yang ada di teks, bukan yang pertama di array.
  // Ini mencegah istilah umum ('vinyl') menang duluan dari istilah spesifik ('stiker vinyl').
  const findBestMatch = (source, options) => {
    const matches = options.filter((item) => source.includes(item));
    if (matches.length === 0) return undefined;
    return matches.sort((a, b) => b.length - a.length)[0];
  };

  const product = findBestMatch(lower, products);
  const deadline = findBestMatch(lower, deadlines);
  const material = findBestMatch(lower, materials);
  const color = findBestMatch(lower, colors);

  const sizeMatch = lower.match(/(\d+(?:[.,]\d+)?)\s*[x×]\s*(\d+(?:[.,]\d+)?)\s*(meter|m|cm)?/);
  let size = 'Belum disebutkan';
  let textWithoutSize = lower;
  if (sizeMatch) {
    size = `${sizeMatch[1]} × ${sizeMatch[2]}${sizeMatch[3] ? ` ${sizeMatch[3]}` : ''}`;
    // Buang teks ukuran dulu supaya angka di dalamnya tidak ikut kebaca sebagai jumlah.
    textWithoutSize = lower.replace(sizeMatch[0], ' ');
  }

  let quantity = 'Belum disebutkan';
  const quantityWithUnit = textWithoutSize.match(/(\d+)\s*(pcs|pc|lembar|buah|biji|eksemplar|exemplar)\b/);
  if (quantityWithUnit) {
    quantity = `${quantityWithUnit[1]} ${quantityWithUnit[2]}`;
  } else {
    const anyNumber = textWithoutSize.match(/\d+/);
    if (anyNumber) quantity = `${anyNumber[0]} pcs`;
  }

  const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : 'Belum disebutkan';

  return {
    product: capitalize(product),
    size,
    quantity,
    deadline: capitalize(deadline),
    material: capitalize(material),
    color: capitalize(color),
  };
};

export const analyzeOrder = (text) => {
  const lower = text.toLowerCase();

  const products = ['x banner', 'y banner', 'kartu nama', 'cetak foto', 'stiker', 'spanduk', 'banner', 'brosur', 'undangan', 'poster', 'nota', 'flyer', 'stempel', 'hardcover', 'kalender'];
  const deadlines = ['hari ini', 'besok', 'lusa', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
  const materials = ['flexi', 'flexi china', 'flexi korea', 'vinyl', 'art paper', 'art carton', 'ivory', 'hvs', 'stiker vinyl', 'stiker chromo', 'transparan'];
  const colors = ['merah', 'biru', 'hijau', 'kuning', 'hitam', 'putih', 'orange', 'oranye', 'ungu', 'pink', 'coklat', 'abu-abu', 'full color', 'hitam putih'];

  const product = products.find((item) => lower.includes(item));
  const deadline = deadlines.find((item) => lower.includes(item));
  const material = materials.find((item) => lower.includes(item));
  const color = colors.find((item) => lower.includes(item));
  
  const sizeMatch = lower.match(/(\d+(?:[.,]\d+)?)\s*[x×]\s*(\d+(?:[.,]\d+)?)\s*(meter|m|cm)?/);
  let size = 'Belum disebutkan';
  if (sizeMatch) size = `${sizeMatch[1]} × ${sizeMatch[2]}${sizeMatch[3] ? ` ${sizeMatch[3]}` : ''}`;

  const quantityMatch = lower.match(/(\d+)\s*(pcs|pc|lembar|buah|biji|eksemplar|exemplar)?/);
  let quantity = 'Belum disebutkan';
  if (quantityMatch) quantity = `${quantityMatch[1]} ${quantityMatch[2] || 'pcs'}`;

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

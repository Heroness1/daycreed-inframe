export const SITE_URL = "https://www.suburmajuprinting.com/";
export const WA_NUMBER = "6282246926544";

export const waLink = (text = "") =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

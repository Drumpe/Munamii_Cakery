// src/utils.js

export function parseSEK(priceStr) {
  if (typeof priceStr !== "string") return Number(priceStr) || 0;
  return parseFloat(priceStr.replace(/[^\d,\.]/g, '').replace(',', '.')) || 0;
}

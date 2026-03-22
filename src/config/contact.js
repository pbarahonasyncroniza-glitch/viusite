export const WHATSAPP_NUMBER = '5697511450'; 
// Reemplázalo por tu número real en formato internacional, sin + ni espacios.
// Ejemplo Chile: 56912345678

export const WHATSAPP_MESSAGE =
  'Hola, vi la web de ViuSite y me gustaría solicitar una demo de simulación 4D para mi proyecto.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

import { businessConfig } from "@/config/business";

export const generateWhatsAppUrl = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const waNumber = businessConfig.whatsapp.replace(/\D/g, ""); // Keep only digits
  return `https://wa.me/${waNumber}?text=${encodedMessage}`;
};

export const openWhatsApp = (message: string) => {
  const url = generateWhatsAppUrl(message);
  window.open(url, "_blank");
};

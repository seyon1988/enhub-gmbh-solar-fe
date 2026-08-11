import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: {
      "message": "Diese Webseite wird aktuell neu aufgebaut",
      "address": "EnHUB GmbH, Hauptstr. 16, D-88605 Meßkirch",
      "tab1": "Start",
      "tab2": "Info",
      "tab3": "Kontakt",
      
      "info_title": "Unsere Leistungen",
      "info_desc": "Wir bieten innovative Lösungen für eine nachhaltige Zukunft.",
      "srv_solar_title": "Photovoltaik",
      "srv_solar_desc": "Hochmoderne Solaranlagen für Ihr Zuhause oder Unternehmen.",
      "srv_battery_title": "Stromspeicher",
      "srv_battery_desc": "Speichern Sie überschüssige Energie für die Nacht.",
      "srv_manage_title": "Energiemanagement",
      "srv_manage_desc": "Intelligente Steuerung zur Maximierung Ihrer Autarkie.",
      
      "contact_title": "Kontaktieren Sie uns",
      "contact_desc": "Haben Sie Fragen? Wir sind für Sie da.",
      "form_name": "Ihr Name",
      "form_email": "Ihre E-Mail",
      "form_message": "Ihre Nachricht",
      "form_submit": "Nachricht senden",
      
      "phone": "Telefon: +49 (0) 123 456789",
      "email": "E-Mail: info@enhub.one"
    }
  },
  en: {
    translation: {
      "message": "This website is currently under reconstruction",
      "address": "EnHUB GmbH, Hauptstr. 16, D-88605 Meßkirch",
      "tab1": "Home",
      "tab2": "Info",
      "tab3": "Contact",
      
      "info_title": "Our Services",
      "info_desc": "We provide innovative solutions for a sustainable future.",
      "srv_solar_title": "Solar Panels",
      "srv_solar_desc": "State-of-the-art solar installations for home or business.",
      "srv_battery_title": "Battery Storage",
      "srv_battery_desc": "Store your excess energy to use during the night.",
      "srv_manage_title": "Energy Management",
      "srv_manage_desc": "Smart control to maximize your energy independence.",
      
      "contact_title": "Contact Us",
      "contact_desc": "Do you have questions? We are here to help.",
      "form_name": "Your Name",
      "form_email": "Your Email",
      "form_message": "Your Message",
      "form_submit": "Send Message",
      
      "phone": "Phone: +49 (0) 123 456789",
      "email": "Email: info@enhub.one"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "de", // default language
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;

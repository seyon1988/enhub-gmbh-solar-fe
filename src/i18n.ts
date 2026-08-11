import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: {
      "message": "Diese Webseite wird aktuell neu aufgebaut",
      "address": "EnHUB GmbH, Hauptstr. 16, D-88605 Meßkirch",
      "tab1": "Welcome",
      "tab2": "Solar",
      "tab3": "Batterien",
      "tab4": "Info",
      "tab5": "Über uns",
      "tab6": "Kontakt",
      
      "solar_title": "Unsere Solarmodule",
      "solar_desc": "Premium Photovoltaik-Lösungen für jeden Bedarf.",
      "solar_p1_title": "Eco-Panel 400W",
      "solar_p1_price": "ab 180 €",
      "solar_p2_title": "Pro-Panel 500W",
      "solar_p2_price": "ab 220 €",
      "solar_p3_title": "Max-Power 600W",
      "solar_p3_price": "ab 280 €",

      "battery_title": "Stromspeicher",
      "battery_desc": "Speichern Sie Ihre Energie effizient und sicher.",
      "bat_1_title": "HomeBase 5 kWh",
      "bat_1_price": "ab 2.500 €",
      "bat_2_title": "PowerWall 10 kWh",
      "bat_2_price": "ab 4.800 €",
      "bat_3_title": "MaxStore 15 kWh",
      "bat_3_price": "ab 6.500 €",
      
      "info_title": "Unsere Leistungen",
      "info_desc": "Wir bieten innovative Lösungen für eine nachhaltige Zukunft.",
      "srv_solar_title": "Photovoltaik",
      "srv_solar_desc": "Hochmoderne Solaranlagen für Ihr Zuhause oder Unternehmen.",
      "srv_battery_title": "Stromspeicher",
      "srv_battery_desc": "Speichern Sie überschüssige Energie für die Nacht.",
      "srv_manage_title": "Energiemanagement",
      "srv_manage_desc": "Intelligente Steuerung zur Maximierung Ihrer Autarkie.",

      "about_title": "Über EnHUB",
      "about_desc": "Wir sind Ihr verlässlicher Partner für die Energiewende. Mit jahrelanger Erfahrung in der Solartechnologie bringen wir grünen Strom direkt zu Ihnen nach Hause.",
      
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
      "tab1": "Welcome",
      "tab2": "Solar",
      "tab3": "Batteries",
      "tab4": "Info",
      "tab5": "About Us",
      "tab6": "Contact",
      
      "solar_title": "Our Solar Panels",
      "solar_desc": "Premium photovoltaic solutions for every need.",
      "solar_p1_title": "Eco-Panel 400W",
      "solar_p1_price": "from 180 €",
      "solar_p2_title": "Pro-Panel 500W",
      "solar_p2_price": "from 220 €",
      "solar_p3_title": "Max-Power 600W",
      "solar_p3_price": "from 280 €",

      "battery_title": "Battery Storage",
      "battery_desc": "Store your energy efficiently and safely.",
      "bat_1_title": "HomeBase 5 kWh",
      "bat_1_price": "from 2,500 €",
      "bat_2_title": "PowerWall 10 kWh",
      "bat_2_price": "from 4,800 €",
      "bat_3_title": "MaxStore 15 kWh",
      "bat_3_price": "from 6,500 €",
      
      "info_title": "Our Services",
      "info_desc": "We provide innovative solutions for a sustainable future.",
      "srv_solar_title": "Solar Panels",
      "srv_solar_desc": "State-of-the-art solar installations for home or business.",
      "srv_battery_title": "Battery Storage",
      "srv_battery_desc": "Store your excess energy to use during the night.",
      "srv_manage_title": "Energy Management",
      "srv_manage_desc": "Smart control to maximize your energy independence.",

      "about_title": "About EnHUB",
      "about_desc": "We are your reliable partner for the energy transition. With years of experience in solar technology, we bring green power directly to your home.",
      
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

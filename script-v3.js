const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
let count = 0;

const translations = {
  en: {
    "زعفران احمد سادات": "Ahmad Sadat Saffron",
    "احمد سادات": "Ahmad Sadat",
    "زعفران اصل هرات": "Pure Herat Saffron",
    "ارسال رایگان برای سفارش‌های بالای ۱٬۵۰۰ افغانی": "Free delivery for orders over AFN 1,500",
    "مجوزها و ضمانت‌ها": "Certificates & Guarantees",
    "پیگیری سفارش": "Track Order",
    "بهترین زعفران افغانستان": "Afghanistan's Finest Saffron",
    "خانه": "Home",
    "فروشگاه": "Shop",
    "درباره ما": "About Us",
    "تماس با ما": "Contact",
    "جستجو": "Search",
    "سبد خرید": "Cart",
    "عطر اصالت، طعم سرزمین": "The fragrance of authenticity, the taste of the homeland",
    "طلایی‌ترین هدیه": "The Golden Gift",
    "از قلب افغانستان": "From the Heart of Afghanistan",
    "برترین زعفران افغانستان با بالاترین قدرت رنگی و عطر طبیعی، از مزارع هرات تا سفره شما.": "Afghanistan's finest saffron, with exceptional natural color and aroma, from the fields of Herat to your table.",
    "مشاهده محصولات": "View Products",
    "داستان ما": "Our Story",
    "زعفران درجه یک": "Premium Saffron",
    "طبیعی و خالص": "Natural & Pure",
    "خالص و تضمینی": "Pure & Guaranteed",
    "دارای مجوز و آزمایشگاه تخصصی": "Licensed and laboratory tested",
    "ارسال سریع": "Fast Delivery",
    "ارسال امن به تمام شهرها": "Secure delivery nationwide",
    "ضمانت بازگشت": "Return Guarantee",
    "هفت روز ضمانت تعویض کالا": "Seven-day replacement guarantee",
    "انتخاب‌های محبوب": "Popular Choices",
    "محصولات ویژه": "Featured Products",
    "مشاهده همه": "View All",
    "پرفروش": "Best Seller",
    "جدید": "New",
    "هدیه ویژه": "Special Gift",
    "تضمین کیفیت": "Quality Guaranteed",
    "سرگل ممتاز": "Premium Sargol",
    "سوپر نگین هرات": "Super Negin Herat",
    "ظرفیت ۴ گرم": "Net Weight: 4 g",
    "ظرفیت ۱۰ گرم": "Net Weight: 10 g",
    "۱۲ گرم زعفران و هل": "12 g saffron and cardamom",
    "فروخته‌شده به نرخ هر گرم": "Sold at a price per gram",
    "افغانی": "AFN",
    "افغانی / گرم": "AFN / g",
    "تاریخچه، تعهد و کیفیت": "Our History, Commitment & Quality",
    "از دل هرات، به جهان": "From Herat to the World",
    "شرکت زعفران احمد سادات فعالیت خود را از سال ۲۰۱۹ میلادی با یک هدف روشن آغاز کرد: عرضهٔ زعفران اصیل، خالص و ممتاز افغانستان با حفظ کیفیت محصول از مزارع هرات تا دست مشتریان در داخل و خارج کشور. در سال‌های اخیر، رهبری این شرکت بر عهدهٔ سید نایب سادات به‌عنوان رئیس و سید شایق سادات به‌عنوان معاون بوده است؛ دو مدیر که با تجربه، مسئولیت‌پذیری و نگاه حرفه‌ای بر کیفیت، شفافیت و اعتماد در تمامی مراحل فعالیت نظارت دارند. زعفران احمد سادات امروز با انتخاب دقیق گل‌ها، خشک‌کردن و بسته‌بندی استاندارد و تضمین اصالت، یکی از نمایندگان معتبر کیفیت زعفران افغان است که می‌کوشد رنگ، عطر و طعم منحصر‌به‌فرد این گران‌بها را با آشپزخانه‌ها و بازارهای جهان پیوند دهد.": "Ahmad Sadat Saffron began its activities in 2019 with a clear vision: to offer pure, authentic and premium Afghan saffron while preserving quality from the fields of Herat to customers at home and abroad. In recent years, the company has been led by Sayyed Nayeb Sadat as Chairman and Sayyed Shaiq Sadat as Deputy Chairman—two experienced leaders who oversee quality, transparency and trust throughout every stage of the business with professionalism and responsibility. Today, Ahmad Sadat Saffron carefully selects the flowers, applies standard drying and packaging, and guarantees authenticity. It is a trusted representative of Afghan saffron quality, connecting the distinctive color, aroma and flavor of this precious spice with kitchens and markets around the world.",
    "هرات، افغانستان": "Herat, Afghanistan",
    "افغانستان": "Afghanistan",
    "آلمان": "Germany",
    "جستجو در محصولات...": "Search products...",
    "به سبد خرید اضافه شد": "Added to cart",
    "بستن": "Close"
  },
  de: {
    "زعفران احمد سادات": "Ahmad-Sadat-Safran",
    "احمد سادات": "Ahmad Sadat",
    "زعفران اصل هرات": "Reiner Safran aus Herat",
    "ارسال رایگان برای سفارش‌های بالای ۱٬۵۰۰ افغانی": "Kostenloser Versand ab AFN 1.500",
    "مجوزها و ضمانت‌ها": "Zertifikate & Garantie",
    "پیگیری سفارش": "Bestellung verfolgen",
    "بهترین زعفران افغانستان": "Afghanistans feinster Safran",
    "خانه": "Startseite",
    "فروشگاه": "Shop",
    "درباره ما": "Über uns",
    "تماس با ما": "Kontakt",
    "جستجو": "Suche",
    "سبد خرید": "Warenkorb",
    "عطر اصالت، طعم سرزمین": "Der Duft der Echtheit, der Geschmack der Heimat",
    "طلایی‌ترین هدیه": "Das goldene Geschenk",
    "از قلب افغانستان": "Aus dem Herzen Afghanistans",
    "برترین زعفران افغانستان با بالاترین قدرت رنگی و عطر طبیعی، از مزارع هرات تا سفره شما.": "Afghanistans feinster Safran mit außergewöhnlich intensiver natürlicher Farbe und Duft – von den Feldern Herats auf Ihren Tisch.",
    "مشاهده محصولات": "Produkte ansehen",
    "داستان ما": "Unsere Geschichte",
    "زعفران درجه یک": "Premium-Safran",
    "طبیعی و خالص": "Natürlich & Rein",
    "خالص و تضمینی": "Rein & garantiert",
    "دارای مجوز و آزمایشگاه تخصصی": "Zertifiziert und laborgeprüft",
    "ارسال سریع": "Schnelle Lieferung",
    "ارسال امن به تمام شهرها": "Sichere Lieferung überall",
    "ضمانت بازگشت": "Rückgabegarantie",
    "هفت روز ضمانت تعویض کالا": "Umtauschgarantie innerhalb von sieben Tagen",
    "انتخاب‌های محبوب": "Beliebte Auswahl",
    "محصولات ویژه": "Besondere Produkte",
    "مشاهده همه": "Alle anzeigen",
    "پرفروش": "Bestseller",
    "جدید": "Neu",
    "هدیه ویژه": "Besondere Geschenkbox",
    "تضمین کیفیت": "Qualitätsgarantie",
    "سرگل ممتاز": "Premium-Sargol",
    "سوپر نگین هرات": "Super Negin Herat",
    "ظرفیت ۴ گرم": "Nettogewicht: 4 g",
    "ظرفیت ۱۰ گرم": "Nettogewicht: 10 g",
    "۱۲ گرم زعفران و هل": "12 g Safran und Kardamom",
    "فروخته‌شده به نرخ هر گرم": "Preis pro Gramm",
    "افغانی": "€",
    "افغانی / گرم": "€/g",
    "۶۰۰": "۱۲",
    "۱٬۵۰۰": "۳۰",
    "۱٬۸۰۰": "۳۶",
    "۱۵۰": "۳",
    "تاریخچه، تعهد و کیفیت": "Geschichte, Verpflichtung & Qualität",
    "از دل هرات، به جهان": "Von Herat für die Welt",
    "شرکت زعفران احمد سادات فعالیت خود را از سال ۲۰۱۹ میلادی با یک هدف روشن آغاز کرد: عرضهٔ زعفران اصیل، خالص و ممتاز افغانستان با حفظ کیفیت محصول از مزارع هرات تا دست مشتریان در داخل و خارج کشور. در سال‌های اخیر، رهبری این شرکت بر عهدهٔ سید نایب سادات به‌عنوان رئیس و سید شایق سادات به‌عنوان معاون بوده است؛ دو مدیر که با تجربه، مسئولیت‌پذیری و نگاه حرفه‌ای بر کیفیت، شفافیت و اعتماد در تمامی مراحل فعالیت نظارت دارند. زعفران احمد سادات امروز با انتخاب دقیق گل‌ها، خشک‌کردن و بسته‌بندی استاندارد و تضمین اصالت، یکی از نمایندگان معتبر کیفیت زعفران افغان است که می‌کوشد رنگ، عطر و طعم منحصر‌به‌فرد این گران‌بها را با آشپزخانه‌ها و بازارهای جهان پیوند دهد.": "Ahmad Sadat Saffron begann seine Tätigkeit im Jahr 2019 mit einer klaren Vision: reinen, authentischen und hochwertigen afghanischen Safran anzubieten und dabei die Qualität vom Anbau in Herat bis zum Kunden im In- und Ausland zu bewahren. In den letzten Jahren wurde das Unternehmen von Sayyed Nayeb Sadat als Vorsitzendem und Sayyed Shaiq Sadat als stellvertretendem Vorsitzendem geleitet – zwei erfahrene Führungskräfte, die mit Verantwortung und Professionalität Qualität, Transparenz und Vertrauen in allen Unternehmensbereichen gewährleisten. Heute wählt Ahmad Sadat Saffron die Blüten sorgfältig aus, verwendet standardisierte Trocknungs- und Verpackungsverfahren und garantiert die Echtheit. Das Unternehmen ist ein vertrauenswürdiger Repräsentant afghanischer Safranqualität und verbindet die unverwechselbare Farbe, das Aroma und den Geschmack dieses kostbaren Gewürzes mit Küchen und Märkten weltweit.",
    "هرات، افغانستان": "Herat, Afghanistan",
    "افغانستان": "Afghanistan",
    "آلمان": "Deutschland",
    "جستجو در محصولات...": "Produkte suchen...",
    "به سبد خرید اضافه شد": "Zum Warenkorb hinzugefügt",
    "بستن": "Schließen"
  }
};

function applyLanguage(language) {
  const isRtl = language === "fa";
  document.documentElement.lang = language;
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.body.style.direction = isRtl ? "rtl" : "ltr";
  const dictionary = translations[language] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    const original = node.textContent.trim();
    if (dictionary[original]) node.textContent = node.textContent.replace(original, dictionary[original]);
  });
  document.querySelectorAll("[dir='ltr']").forEach((el) => el.dir = "ltr");

  const productNames = language === "de"
    ? ["Super-Sargol-Safran", "Super-Negin-Safran aus Herat", "Geschenkbox Rownaq", "Super-Negin-Safran", "Premium-Safran"]
    : language === "en"
      ? ["Super Sargol Saffron", "Super Negin Saffron from Herat", "Rownaq Gift Box", "Super Negin Saffron", "Premium Saffron"]
      : [];

  document.querySelectorAll(".product-card").forEach((card, index) => {
    const afghaniPrice = Number(card.dataset.price);
    const priceSpan = card.querySelector(".product-footer strong span");
    const footer = card.querySelector(".product-footer strong");
    const title = card.querySelector("h3");
    const capacity = card.querySelector(".product-info p");
    if (title && productNames[index]) title.textContent = productNames[index];

    if (language === "de") {
      if (capacity) {
        if (capacity.textContent.includes("۴")) capacity.textContent = "Nettogewicht: 4 g";
        else if (capacity.textContent.includes("۱۰")) capacity.textContent = "Nettogewicht: 10 g";
        else if (capacity.textContent.includes("۱۲")) capacity.textContent = "12 g Safran und Kardamom";
        else capacity.textContent = "Preis pro Gramm";
      }
      const euroPrices = { 600: "12", 1500: "30", 1800: "36", 150: "3" };
      if (priceSpan) priceSpan.textContent = euroPrices[afghaniPrice] || priceSpan.textContent;
      if (footer) {
        footer.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) node.textContent = afghaniPrice === 150 ? " € / g" : " €";
        });
      }
      cartCount.textContent = String(count);
    } else if (language === "en") {
      if (capacity) {
        if (capacity.textContent.includes("۴")) capacity.textContent = "Net Weight: 4 g";
        else if (capacity.textContent.includes("۱۰")) capacity.textContent = "Net Weight: 10 g";
        else if (capacity.textContent.includes("۱۲")) capacity.textContent = "12 g saffron and cardamom";
        else capacity.textContent = "Sold at a price per gram";
      }
      const afghaniPrices = { 600: "600", 1500: "1,500", 1800: "1,800", 150: "150" };
      if (priceSpan) priceSpan.textContent = afghaniPrices[afghaniPrice] || priceSpan.textContent;
      if (footer) {
        footer.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) node.textContent = afghaniPrice === 150 ? " AFN / g" : " AFN";
        });
      }
      cartCount.textContent = String(count);
    }
  });
  document.getElementById("searchOverlay").querySelector("input").placeholder =
    language === "en" ? "Search products..." : language === "de" ? "Produkte suchen..." : "جستجو در محصولات...";
  localStorage.setItem("saffronLanguage", language);
}

const languageSelect = document.getElementById("languageSelect");
const savedLanguage = localStorage.getItem("saffronLanguage") || "fa";
languageSelect.value = savedLanguage;
languageSelect.addEventListener("change", (event) => {
  localStorage.setItem("saffronLanguage", event.target.value);
  location.reload();
});
applyLanguage(savedLanguage);

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = new Intl.NumberFormat("fa-IR").format(count);
    toast.classList.add("show");
    button.textContent = "✓";
    setTimeout(() => {
      toast.classList.remove("show");
      button.textContent = "+";
    }, 1800);
  });
});

const overlay = document.getElementById("searchOverlay");
document.getElementById("searchButton").addEventListener("click", () => {
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  overlay.querySelector("input").focus();
});
document.getElementById("closeSearch").addEventListener("click", () => {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
});
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  }
});

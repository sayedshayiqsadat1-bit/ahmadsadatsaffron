(() => {
  "use strict";

  const allowedLanguages = ["fa", "en", "de"];
  const languageKey = "ahmad-sadat-language";
  const cartKey = "ahmad-sadat-cart";
  const whatsappNumber = "4917672877422";
  const numberLocales = { fa: "fa-AF", en: "en-US", de: "de-DE" };
  const pageCopy = {
    fa: {
      title: "زعفران احمد سادات | بهترین زعفران اصل افغانستان",
      description: "زعفران احمد سادات؛ زعفران افغانستان از هرات. محصولات سرگل، سوپر نگین و پک هدیه را ببینید و برای سفارش به فارسی، انگلیسی یا آلمانی پیام بدهید."
    },
    en: {
      title: "Ahmad Sadat Saffron | Premium Afghan Saffron",
      description: "Discover Ahmad Sadat Saffron from Herat, Afghanistan. Explore Sargol, Super Negin and gift products, then contact us in Persian, English or German to inquire."
    },
    de: {
      title: "Ahmad-Sadat-Safran | Afghanischer Safran aus Herat",
      description: "Entdecken Sie Ahmad-Sadat-Safran aus Herat, Afghanistan. Wählen Sie Sargol, Super Negin oder Geschenksets und fragen Sie auf Persisch, Englisch oder Deutsch an."
    }
  };
  const translations = {
    "زعفران احمد سادات، از هرات افغانستان — آغاز فعالیت در ۲۰۱۹": {
      en: "Ahmad Sadat Saffron from Herat, Afghanistan — established in 2019",
      de: "Ahmad-Sadat-Safran aus Herat, Afghanistan — gegründet 2019"
    },
    "محصولات": { en: "Products", de: "Produkte" },
    "راه‌های تماس": { en: "Contact", de: "Kontakt" },
    "صفحه اصلی": { en: "Home", de: "Startseite" },
    "خانه": { en: "Home", de: "Startseite" },
    "فروشگاه": { en: "Shop", de: "Shop" },
    "درباره ما": { en: "Our story", de: "Über uns" },
    "تماس با ما": { en: "Contact us", de: "Kontakt" },
    "بازکردن منو": { en: "Open menu", de: "Menü öffnen" },
    "بستن منو": { en: "Close menu", de: "Menü schließen" },
    "انتخاب زبان": { en: "Choose language", de: "Sprache auswählen" },
    "جستجو": { en: "Search", de: "Suche" },
    "سبد خرید": { en: "Cart", de: "Warenkorb" },
    "بهترین زعفران افغانستان": { en: "The finest saffron from Afghanistan", de: "Bester Safran aus Afghanistan" },
    "عطر اصالت، طعم سرزمین": { en: "A genuine aroma, a taste of the land", de: "Echter Duft, Geschmack der Heimat" },
    "طلایی‌ترین هدیه": { en: "A golden gift", de: "Ein goldenes Geschenk" },
    "از قلب افغانستان": { en: "From the heart of Afghanistan", de: "Aus dem Herzen Afghanistans" },
    "زعفران احمد سادات از هرات افغانستان؛ محصولات را با وزن و قیمت روشن ببینید و سفارش خود را مستقیم با ما هماهنگ کنید.": {
      en: "Ahmad Sadat Saffron from Herat, Afghanistan. See clear product weights and prices, then contact us directly to arrange your order.",
      de: "Ahmad-Sadat-Safran aus Herat, Afghanistan. Sehen Sie transparente Gewichte und Preise und stimmen Sie Ihre Bestellung direkt mit uns ab."
    },
    "مشاهده محصولات": { en: "Explore products", de: "Produkte ansehen" },
    "داستان ما": { en: "Our story", de: "Unsere Geschichte" },
    "زعفران درجه یک": { en: "Premium saffron", de: "Erlesener Safran" },
    "زعفران احمد سادات": { en: "Ahmad Sadat Saffron", de: "Ahmad-Sadat-Safran" },
    "زعفران اصل هرات": { en: "Authentic Herat saffron", de: "Echter Safran aus Herat" },
    "آغاز فعالیت": { en: "Established", de: "Gegründet" },
    "ریشه در هرات": { en: "Rooted in Herat", de: "Verwurzelt in Herat" },
    "زعفران افغانستان از هرات": { en: "Afghan saffron from Herat", de: "Afghanischer Safran aus Herat" },
    "سفارش آگاهانه": { en: "Informed ordering", de: "Bewusst bestellen" },
    "وزن و قیمت هر محصول روشن است": { en: "Clear weight and pricing", de: "Klare Gewichts- und Preisangaben" },
    "پشتیبانی سه‌زبانه": { en: "Three-language support", de: "Beratung in drei Sprachen" },
    "فارسی، English، Deutsch": { en: "Persian, English, German", de: "Persisch, Englisch, Deutsch" },
    "انتخاب‌های محبوب": { en: "Customer favorites", de: "Beliebte Auswahl" },
    "محصولات ویژه": { en: "Featured products", de: "Unsere Produkte" },
    "راهنمای سفارش": { en: "How to order", de: "So bestellen Sie" },
    "پرفروش": { en: "Popular", de: "Beliebt" },
    "هدیه ویژه": { en: "Gift favorite", de: "Besonderes Geschenk" },
    "جدید": { en: "New", de: "Neu" },
    "تضمین کیفیت": { en: "Quality assured", de: "Qualitätsversprechen" },
    "زعفران سرگل سوپر نگین": { en: "Super Sargol Saffron", de: "Super-Sargol-Safran" },
    "زعفران سوپر نگین هرات": { en: "Super Negin Saffron from Herat", de: "Super-Negin-Safran aus Herat" },
    "پک هدیه رونق": { en: "Rownaq Gift Box", de: "Geschenkbox Rownaq" },
    "زعفران سوپر نگین": { en: "Super Negin Saffron", de: "Super-Negin-Safran" },
    "زعفران ممتاز": { en: "Premium Saffron", de: "Premium-Safran" },
    "احمد سادات": { en: "Ahmad Sadat", de: "Ahmad Sadat" },
    "سرگل ممتاز": { en: "Premium Sargol", de: "Premium-Sargol" },
    "سوپر نگین هرات": { en: "Herat Super Negin", de: "Herat Super Negin" },
    "وزن خالص: ۴ گرم": { en: "Net weight: 4 g", de: "Nettogewicht: 4 g" },
    "وزن خالص: ۱۰ گرم": { en: "Net weight: 10 g", de: "Nettogewicht: 10 g" },
    "۱۲ گرم زعفران و هل": { en: "12 g saffron and cardamom", de: "12 g Safran und Kardamom" },
    "فروش وزنی؛ قیمت برای هر گرم": { en: "Sold by weight; price per gram", de: "Lose Ware; Preis pro Gramm" },
    "راهنمای سفارش": { en: "How to order", de: "So bestellen Sie" },
    "ساده و روشن": { en: "Simple and clear", de: "Einfach und transparent" },
    "چگونه سفارش بدهید؟": { en: "How to place an order", de: "So geben Sie eine Bestellung auf" },
    "محصول را انتخاب کنید": { en: "Choose a product", de: "Produkt auswählen" },
    "وزن، نوع بسته و قیمت هر محصول را در فروشگاه ببینید.": {
      en: "Check each product's weight, package type and price in the shop.",
      de: "Informieren Sie sich im Shop über Gewicht, Packungsart und Preis."
    },
    "سبد خرید را مرور کنید": { en: "Review your cart", de: "Warenkorb prüfen" },
    "تعداد بسته‌ها یا گرم‌های موردنظر را تنظیم کنید.": {
      en: "Adjust the number of packs or grams you would like.",
      de: "Passen Sie die gewünschte Anzahl an Packungen oder Gramm an."
    },
    "جزئیات را با ما هماهنگ کنید": { en: "Confirm the details with us", de: "Details mit uns abstimmen" },
    "درخواست سفارش از طریق واتساپ باز می‌شود؛ پیش از ارسال پیام، متن سفارش را بررسی کنید.": {
      en: "A WhatsApp order inquiry will open. Review the message before you choose to send it.",
      de: "Eine Bestellanfrage in WhatsApp wird geöffnet. Prüfen Sie die Nachricht, bevor Sie sie senden."
    },
    "تاریخچه، تعهد و کیفیت": { en: "Our history, commitment and quality", de: "Geschichte, Anspruch und Qualität" },
    "از دل هرات، به جهان": { en: "From Herat to the world", de: "Von Herat in die Welt" },
    "شرکت زعفران احمد سادات فعالیت خود را از سال ۲۰۱۹ میلادی با یک هدف روشن آغاز کرد: عرضهٔ زعفران اصیل، خالص و ممتاز افغانستان با حفظ کیفیت محصول از مزارع هرات تا دست مشتریان در داخل و خارج کشور. در سال‌های اخیر، رهبری این شرکت بر عهدهٔ سید نایب سادات به‌عنوان رئیس و سید شایق سادات به‌عنوان معاون بوده است؛ دو مدیر که با تجربه، مسئولیت‌پذیری و نگاه حرفه‌ای بر کیفیت، شفافیت و اعتماد در تمامی مراحل فعالیت نظارت دارند. زعفران احمد سادات امروز با انتخاب دقیق گل‌ها، خشک‌کردن و بسته‌بندی استاندارد و تضمین اصالت، یکی از نمایندگان معتبر کیفیت زعفران افغان است که می‌کوشد رنگ، عطر و طعم منحصر‌به‌فرد این گران‌بها را با آشپزخانه‌ها و بازارهای جهان پیوند دهد.": {
      en: "Ahmad Sadat Saffron began its work in 2019 with a clear purpose: to offer authentic, pure, premium Afghan saffron while preserving its quality from the fields of Herat to customers at home and abroad. In recent years, the company has been led by President Syed Nayeb Sadat and Vice President Syed Shayeq Sadat. With experience and a professional approach, they oversee quality, transparency and trust throughout the work. Today, Ahmad Sadat Saffron carefully selects its flowers and focuses on careful drying, considered packaging and authenticity, sharing the distinctive color, aroma and flavor of Afghan saffron with kitchens and markets around the world.",
      de: "Ahmad-Sadat-Safran nahm seine Tätigkeit 2019 mit einem klaren Ziel auf: authentischen, reinen und hochwertigen Safran aus Afghanistan anzubieten und seine Qualität von den Feldern in Herat bis zu Kundinnen und Kunden im In- und Ausland zu bewahren. In den vergangenen Jahren wurde das Unternehmen von Präsident Syed Nayeb Sadat und Vizepräsident Syed Shayeq Sadat geleitet. Mit Erfahrung und einem professionellen Anspruch achten sie bei allen Abläufen auf Qualität, Transparenz und Vertrauen. Heute wählt Ahmad-Sadat-Safran seine Blüten sorgfältig aus und legt Wert auf behutsame Trocknung, sorgfältige Verpackung und Authentizität, um Farbe, Duft und Geschmack afghanischen Safrans mit Küchen und Märkten weltweit zu teilen."
    },
    "هرات، افغانستان": { en: "Herat, Afghanistan", de: "Herat, Afghanistan" },
    "افغانستان:": { en: "Afghanistan:", de: "Afghanistan:" },
    "آلمان:": { en: "Germany:", de: "Deutschland:" },
    "پیام در واتساپ": { en: "Message us on WhatsApp", de: "Nachricht per WhatsApp" },
    "سبد خرید شما": { en: "Your cart", de: "Ihr Warenkorb" },
    "بستن سبد خرید": { en: "Close cart", de: "Warenkorb schließen" },
    "سبد خرید شما هنوز خالی است.": { en: "Your cart is empty.", de: "Ihr Warenkorb ist noch leer." },
    "مجموع تقریبی": { en: "Estimated total", de: "Ungefähre Summe" },
    "پاک‌کردن سبد": { en: "Clear cart", de: "Warenkorb leeren" },
    "ادامه در واتساپ": { en: "Continue to WhatsApp", de: "Weiter zu WhatsApp" },
    "این سایت پرداخت آنلاین ندارد. درخواست در واتساپ باز می‌شود و فقط پس از ارسال پیام توسط شما به ما می‌رسد؛ هزینه و جزئیات ارسال را پیش از نهایی‌کردن هماهنگ کنید.": {
      en: "This site does not take online payments. WhatsApp opens with a prepared inquiry; we receive it only if you choose to send it. Confirm the price and delivery details with us before completing your order.",
      de: "Auf dieser Website ist keine Online-Zahlung möglich. WhatsApp öffnet eine vorbereitete Anfrage, die uns erst erreicht, wenn Sie sie selbst senden. Stimmen Sie Preis und Lieferdetails vor Abschluss der Bestellung mit uns ab."
    },
    "بستن جستجو": { en: "Close search", de: "Suche schließen" },
    "جستجو در محصولات": { en: "Search products", de: "Produkte suchen" },
    "جستجو در محصولات...": { en: "Search products...", de: "Produkte suchen..." },
    "به سبد خرید اضافه شد": { en: "Added to cart", de: "Zum Warenkorb hinzugefügt" }
  };
  const productDescriptions = {
    "sargol-4": { fa: "وزن خالص: ۴ گرم", en: "Net weight: 4 g", de: "Nettogewicht: 4 g" },
    "super-negin-10": { fa: "وزن خالص: ۱۰ گرم", en: "Net weight: 10 g", de: "Nettogewicht: 10 g" },
    "gift-12": { fa: "۱۲ گرم زعفران و هل", en: "12 g saffron and cardamom", de: "12 g Safran und Kardamom" },
    "super-negin-gram": { fa: "فروش وزنی؛ قیمت برای هر گرم", en: "Sold by weight; price per gram", de: "Lose Ware; Preis pro Gramm" },
    "premium-gram": { fa: "فروش وزنی؛ قیمت برای هر گرم", en: "Sold by weight; price per gram", de: "Lose Ware; Preis pro Gramm" }
  };
  const uiCopy = {
    fa: {
      currency: "افغانی",
      perGram: "افغانی / گرم",
      pack: "بسته",
      gram: "گرم",
      add: "افزودن",
      remove: "حذف",
      decrease: "کم‌کردن تعداد",
      increase: "افزودن تعداد",
      searchResults: (count) => `${formatNumber(count, "fa")} محصول پیدا شد.`,
      noResults: "محصولی با این عبارت پیدا نشد.",
      addMessage: (name) => `${name} به سبد خرید اضافه شد`,
      whatsappIntro: "سلام، می‌خواهم دربارهٔ این محصولات زعفران احمد سادات سفارش بدهم:",
      whatsappTotal: "مجموع تقریبی",
      whatsappUnitPack: "بسته",
      whatsappUnitGram: "گرم",
      whatsappClose: "لطفاً موجودی، هزینه و جزئیات ارسال را با من هماهنگ کنید."
    },
    en: {
      currency: "AFN",
      perGram: "AFN / g",
      pack: "pack",
      gram: "g",
      add: "Add",
      remove: "Remove",
      decrease: "Decrease quantity",
      increase: "Increase quantity",
      searchResults: (count) => `${formatNumber(count, "en")} products found.`,
      noResults: "No products match your search.",
      addMessage: (name) => `${name} added to cart`,
      whatsappIntro: "Hello, I would like to inquire about ordering these Ahmad Sadat Saffron products:",
      whatsappTotal: "Estimated total",
      whatsappUnitPack: "pack(s)",
      whatsappUnitGram: "g",
      whatsappClose: "Please confirm availability, price and delivery details with me."
    },
    de: {
      currency: "€",
      perGram: "€ / g",
      pack: "Packung",
      gram: "g",
      add: "Hinzufügen",
      remove: "Entfernen",
      decrease: "Menge verringern",
      increase: "Menge erhöhen",
      searchResults: (count) => `${formatNumber(count, "de")} Produkte gefunden.`,
      noResults: "Keine passenden Produkte gefunden.",
      addMessage: (name) => `${name} zum Warenkorb hinzugefügt`,
      whatsappIntro: "Guten Tag, ich möchte folgende Produkte von Ahmad-Sadat-Safran anfragen:",
      whatsappTotal: "Ungefähre Summe",
      whatsappUnitPack: "Packung(en)",
      whatsappUnitGram: "g",
      whatsappClose: "Bitte bestätigen Sie Verfügbarkeit, Preis und Lieferdetails."
    }
  };

  const productCards = [...document.querySelectorAll(".product-card")];
  const products = new Map();
  for (const card of productCards) {
    const id = card.dataset.id;
    const priceAFN = Number(card.dataset.price);
    const priceEUR = Number(card.dataset.priceEur);
    if (!id || !Number.isFinite(priceAFN) || !Number.isFinite(priceEUR) || !card.dataset.unit) {
      throw new Error("A product is missing a valid id, price, or unit.");
    }
    if (products.has(id)) throw new Error(`Duplicate product id: ${id}`);
    products.set(id, {
      id,
      card,
      name: {
        fa: card.dataset.name,
        en: card.dataset.nameEn,
        de: card.dataset.nameDe
      },
      priceAFN,
      priceEUR,
      unit: card.dataset.unit
    });
  }

  const elements = {
    language: document.getElementById("languageSelect"),
    menu: document.getElementById("menuToggle"),
    nav: document.getElementById("mainNav"),
    searchButton: document.getElementById("searchButton"),
    searchOverlay: document.getElementById("searchOverlay"),
    closeSearch: document.getElementById("closeSearch"),
    searchInput: document.getElementById("productSearchInput"),
    searchStatus: document.getElementById("searchStatus"),
    cartButton: document.getElementById("cartButton"),
    cartCount: document.getElementById("cartCount"),
    cartDialog: document.getElementById("cartDialog"),
    cartItems: document.getElementById("cartItems"),
    cartEmpty: document.getElementById("cartEmpty"),
    cartTotal: document.getElementById("cartTotal"),
    clearCart: document.getElementById("clearCart"),
    closeCart: document.getElementById("closeCart"),
    orderLink: document.getElementById("orderOnWhatsApp"),
    toast: document.getElementById("toast")
  };

  for (const [name, element] of Object.entries(elements)) {
    if (!element) throw new Error(`Required page element is missing: ${name}`);
  }

  const originalText = new WeakMap();
  let currentLanguage = getSavedLanguage();
  let toastTimer;
  const cart = readCart();

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(languageKey);
      return allowedLanguages.includes(saved) ? saved : "fa";
    } catch (error) {
      console.error("Could not read the saved language preference.", error);
      return "fa";
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(languageKey, language);
    } catch (error) {
      console.error("Could not save the language preference.", error);
    }
  }

  function readCart() {
    const savedItems = new Map();
    try {
      const saved = localStorage.getItem(cartKey);
      if (!saved) return savedItems;
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) throw new TypeError("Saved cart data is not an array.");
      for (const item of parsed) {
        if (!Array.isArray(item) || item.length !== 2) {
          console.error("Ignoring an invalid item in the saved cart.");
          continue;
        }
        const [id, quantity] = item;
        if (products.has(id) && Number.isSafeInteger(quantity) && quantity > 0) {
          savedItems.set(id, quantity);
        } else {
          console.error("Ignoring an unknown product or invalid quantity in the saved cart.");
        }
      }
    } catch (error) {
      console.error("Could not read the saved cart.", error);
    }
    return savedItems;
  }

  function saveCart() {
    try {
      localStorage.setItem(cartKey, JSON.stringify([...cart.entries()]));
    } catch (error) {
      console.error("Could not save the cart. It will remain available until this page is closed.", error);
    }
  }

  function formatNumber(value, language = currentLanguage) {
    return new Intl.NumberFormat(numberLocales[language], { maximumFractionDigits: 0 }).format(value);
  }

  function getPrice(product, language = currentLanguage) {
    return language === "de" ? product.priceEUR : product.priceAFN;
  }

  function formatMoney(value, language = currentLanguage) {
    const currency = language === "de" ? "€" : language === "en" ? "AFN" : "افغانی";
    return `${formatNumber(value, language)} ${currency}`;
  }

  function translateStaticText(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest("script, style, textarea")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const trimmed = source.trim();
      const translated = translations[trimmed]?.[language];
      node.nodeValue = translated ? source.replace(trimmed, translated) : source;
    }
  }

  function normalizeSearch(value) {
    return value
      .normalize("NFKC")
      .toLocaleLowerCase(currentLanguage)
      .replace(/[يى]/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/\s+/g, " ")
      .trim();
  }

  function updateProductCards(language) {
    for (const product of products.values()) {
      const { card } = product;
      card.querySelector("h3").textContent = product.name[language];
      card.querySelector(".product-info p").textContent = productDescriptions[product.id][language];
      card.querySelector(".price-value").textContent = formatNumber(getPrice(product, language), language);
      card.querySelector(".price-unit").textContent = product.unit === "g"
        ? uiCopy[language].perGram
        : uiCopy[language].currency;
      const addButton = card.querySelector(".add-button");
      addButton.setAttribute("aria-label", `${uiCopy[language].add} ${product.name[language]}`);
      addButton.title = uiCopy[language].add;
    }
  }

  function setAriaLabels(language) {
    const labels = [
      [elements.menu, language === "fa" ? "بازکردن منو" : language === "de" ? "Menü öffnen" : "Open menu"],
      [elements.searchButton, language === "fa" ? "جستجو" : language === "de" ? "Suche" : "Search"],
      [elements.cartButton, language === "fa" ? "سبد خرید" : language === "de" ? "Warenkorb" : "Cart"],
      [elements.closeSearch, language === "fa" ? "بستن جستجو" : language === "de" ? "Suche schließen" : "Close search"],
      [elements.closeCart, language === "fa" ? "بستن سبد خرید" : language === "de" ? "Warenkorb schließen" : "Close cart"]
    ];
    for (const [element, label] of labels) element.setAttribute("aria-label", label);
    elements.searchInput.placeholder = language === "fa"
      ? "جستجو در محصولات..."
      : language === "de" ? "Produkte suchen..." : "Search products...";
    elements.language.setAttribute("aria-label", language === "fa"
      ? "انتخاب زبان" : language === "de" ? "Sprache auswählen" : "Choose language");
    document.querySelector('label[for="productSearchInput"]').textContent = language === "fa"
      ? "جستجو در محصولات"
      : language === "de" ? "Produkte suchen" : "Search products";
    elements.nav.setAttribute("aria-label", language === "fa" ? "منوی اصلی" : language === "de" ? "Hauptmenü" : "Main menu");
    document.querySelector(".brand").setAttribute("aria-label", language === "fa" ? "صفحه اصلی" : language === "de" ? "Startseite" : "Home");
    document.querySelector(".hero-visual").setAttribute("aria-label", language === "fa"
      ? "زعفران درجه یک" : language === "de" ? "Erlesener Safran" : "Premium saffron");
  }

  function applyLanguage(language) {
    if (!allowedLanguages.includes(language)) throw new RangeError(`Unsupported language: ${language}`);
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-fa", language === "fa");
    document.body.classList.toggle("lang-en", language === "en");
    document.body.classList.toggle("lang-de", language === "de");
    elements.language.value = language;
    translateStaticText(language);
    elements.toast.classList.remove("show");
    elements.toast.textContent = language === "fa"
      ? "به سبد خرید اضافه شد"
      : language === "de" ? "Zum Warenkorb hinzugefügt" : "Added to cart";
    updateProductCards(language);
    setAriaLabels(language);
    document.title = pageCopy[language].title;
    document.querySelector('meta[name="description"]').content = pageCopy[language].description;
    document.querySelector('meta[property="og:title"]').content = pageCopy[language].title;
    document.querySelector('meta[property="og:description"]').content = pageCopy[language].description;
    document.querySelector('meta[property="og:locale"]').content = language === "fa"
      ? "fa_AF" : language === "de" ? "de_DE" : "en_US";
    document.querySelector(".saffron-tube span").innerHTML = language === "de" ? "NETTO<br>4 g" : "NET WT.<br>4 g";
    document.querySelector(".quality-badge strong").textContent = new Intl.NumberFormat(numberLocales[language], {
      useGrouping: false
    }).format(2019);
    document.querySelector(".quality-badge span").textContent = language === "fa"
      ? "آغاز فعالیت" : language === "de" ? "Gegründet" : "Established";
    document.querySelectorAll(".order-steps li > span").forEach((step, index) => {
      step.textContent = formatNumber(index + 1, language);
    });
    applyProductSearch(elements.searchInput.value);
    renderCart();
  }

  function applyProductSearch(query) {
    const normalizedQuery = normalizeSearch(query);
    let visibleCount = 0;
    for (const product of products.values()) {
      const description = productDescriptions[product.id][currentLanguage];
      const searchable = normalizeSearch([
        ...Object.values(product.name),
        ...Object.values(productDescriptions[product.id]),
        description
      ].join(" "));
      const isVisible = !normalizedQuery || searchable.includes(normalizedQuery);
      product.card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    }
    elements.searchStatus.textContent = normalizedQuery
      ? visibleCount ? uiCopy[currentLanguage].searchResults(visibleCount) : uiCopy[currentLanguage].noResults
      : "";
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("show"), 2300);
  }

  function createCartButton(text, action, id, label) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.dataset.action = action;
    button.dataset.id = id;
    button.setAttribute("aria-label", label);
    return button;
  }

  function buildWhatsAppMessage() {
    const copy = uiCopy[currentLanguage];
    const lines = [copy.whatsappIntro, ""];
    let total = 0;
    for (const [id, quantity] of cart) {
      const product = products.get(id);
      if (!product) continue;
      const subtotal = getPrice(product) * quantity;
      total += subtotal;
      const unit = product.unit === "g" ? copy.whatsappUnitGram : copy.whatsappUnitPack;
      lines.push(`${product.name[currentLanguage]} — ${formatNumber(quantity)} ${unit} — ${formatMoney(subtotal)}`);
    }
    lines.push("", `${copy.whatsappTotal}: ${formatMoney(total)}`, "", copy.whatsappClose);
    return lines.join("\n");
  }

  function renderCart() {
    const quantityTotal = [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
    const priceTotal = [...cart.entries()].reduce((sum, [id, quantity]) => {
      const product = products.get(id);
      return sum + (product ? getPrice(product) * quantity : 0);
    }, 0);
    elements.cartCount.textContent = formatNumber(quantityTotal);
    elements.cartItems.replaceChildren();
    elements.cartEmpty.hidden = cart.size > 0;
    elements.clearCart.disabled = cart.size === 0;
    elements.cartTotal.textContent = formatMoney(priceTotal);

    for (const [id, quantity] of cart) {
      const product = products.get(id);
      if (!product) continue;
      const listItem = document.createElement("li");
      listItem.className = "cart-item";
      const details = document.createElement("div");
      const name = document.createElement("h3");
      name.textContent = product.name[currentLanguage];
      const price = document.createElement("div");
      price.className = "cart-item-price";
      price.textContent = formatMoney(getPrice(product) * quantity);
      details.append(name, price);

      const controls = document.createElement("div");
      controls.className = "cart-item-controls";
      const unit = product.unit === "g" ? uiCopy[currentLanguage].gram : uiCopy[currentLanguage].pack;
      const quantityLabel = document.createElement("span");
      quantityLabel.textContent = `${formatNumber(quantity)} ${unit}`;
      quantityLabel.setAttribute("aria-label", quantityLabel.textContent);
      controls.append(
        createCartButton("−", "decrease", id, `${uiCopy[currentLanguage].decrease}: ${product.name[currentLanguage]}`),
        quantityLabel,
        createCartButton("+", "increase", id, `${uiCopy[currentLanguage].increase}: ${product.name[currentLanguage]}`),
        createCartButton(uiCopy[currentLanguage].remove, "remove", id, `${uiCopy[currentLanguage].remove}: ${product.name[currentLanguage]}`)
      );
      listItem.append(details, controls);
      elements.cartItems.append(listItem);
    }

    const isEmpty = cart.size === 0;
    elements.orderLink.setAttribute("aria-disabled", String(isEmpty));
    if (isEmpty) {
      elements.orderLink.href = `https://wa.me/${whatsappNumber}`;
    } else {
      elements.orderLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    }
  }

  function changeQuantity(id, amount) {
    const currentQuantity = cart.get(id) || 0;
    const nextQuantity = currentQuantity + amount;
    if (nextQuantity <= 0) cart.delete(id);
    else cart.set(id, nextQuantity);
    saveCart();
    renderCart();
  }

  elements.language.addEventListener("change", (event) => {
    const language = event.currentTarget.value;
    if (!allowedLanguages.includes(language)) {
      throw new RangeError(`Unsupported language: ${language}`);
    }
    saveLanguage(language);
    applyLanguage(language);
  });

  elements.menu.addEventListener("click", () => {
    const isOpen = elements.nav.classList.toggle("is-open");
    elements.menu.setAttribute("aria-expanded", String(isOpen));
    elements.menu.setAttribute("aria-label", isOpen
      ? currentLanguage === "fa" ? "بستن منو" : currentLanguage === "de" ? "Menü schließen" : "Close menu"
      : currentLanguage === "fa" ? "بازکردن منو" : currentLanguage === "de" ? "Menü öffnen" : "Open menu");
  });

  elements.nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      elements.nav.classList.remove("is-open");
      elements.menu.setAttribute("aria-expanded", "false");
      elements.menu.setAttribute("aria-label", currentLanguage === "fa"
        ? "بازکردن منو" : currentLanguage === "de" ? "Menü öffnen" : "Open menu");
    }
  });

  elements.searchButton.addEventListener("click", () => {
    elements.searchOverlay.classList.add("open");
    elements.searchOverlay.setAttribute("aria-hidden", "false");
    elements.searchInput.focus();
  });
  elements.closeSearch.addEventListener("click", closeSearch);
  elements.searchOverlay.addEventListener("click", (event) => {
    if (event.target === elements.searchOverlay) closeSearch();
  });
  elements.searchInput.addEventListener("input", (event) => applyProductSearch(event.currentTarget.value));
  elements.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.currentTarget.value.trim()) {
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
      closeSearch();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.searchOverlay.classList.contains("open")) closeSearch();
  });

  function closeSearch() {
    elements.searchOverlay.classList.remove("open");
    elements.searchOverlay.setAttribute("aria-hidden", "true");
    elements.searchInput.value = "";
    applyProductSearch("");
    elements.searchButton.focus();
  }

  elements.cartButton.addEventListener("click", () => elements.cartDialog.showModal());
  elements.closeCart.addEventListener("click", () => elements.cartDialog.close());
  elements.cartDialog.addEventListener("click", (event) => {
    if (event.target === elements.cartDialog) elements.cartDialog.close();
  });
  elements.clearCart.addEventListener("click", () => {
    cart.clear();
    saveCart();
    renderCart();
  });

  document.querySelector(".product-grid").addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest(".add-button") : null;
    if (!button) return;
    const product = products.get(button.closest(".product-card").dataset.id);
    if (!product) throw new Error("The selected product is not available in the catalog.");
    changeQuantity(product.id, 1);
    showToast(uiCopy[currentLanguage].addMessage(product.name[currentLanguage]));
  });

  elements.cartItems.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("button[data-action]") : null;
    if (!button) return;
    const { action, id } = button.dataset;
    if (!products.has(id)) throw new Error(`Unknown cart product: ${id}`);
    if (action === "increase") changeQuantity(id, 1);
    else if (action === "decrease") changeQuantity(id, -1);
    else if (action === "remove") {
      cart.delete(id);
      saveCart();
      renderCart();
    } else {
      throw new Error(`Unknown cart action: ${action}`);
    }
  });

  elements.orderLink.addEventListener("click", (event) => {
    if (elements.orderLink.getAttribute("aria-disabled") === "true") event.preventDefault();
  });

  applyLanguage(currentLanguage);
})();

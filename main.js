// Extracted from index.html on 2026-02-01
// Handles fade-up animation on scroll

document.addEventListener('DOMContentLoaded', function() {
  const faders = document.querySelectorAll('.fade-up');
  const appearOptions = { threshold: 0.2 };
  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      entry.classList.add('appear');
      observer.unobserve(entry);
    });
  }, appearOptions);
  faders.forEach(fader => { appearOnScroll.observe(fader); });

  // Language switcher logic
  const translations = {
    ro: {
      nav: {
        services: 'Servicii', prices: 'Prețuri', languages: 'Limbi', contact: 'Contact', location: 'Locație'
      },
      header: 'Toujours Vert',
      subtitle: 'Traduceri Autorizate și Legalizate – București',
      banner: 'Traducători autorizați • Servicii rapide • Confidențialitate garantată pentru toate documentele',
      introTitle: 'Birou de Traduceri Autorizate în Sector 1',
      introText: 'Oferim traduceri autorizate și legalizate în peste 20 de limbi, direct în Sectorul 1, București. Rapid, profesionist și la prețuri accesibile!',
      whyTitle: 'De ce să ne alegi?',
      whyText: 'Traduceri autorizate, livrare rapidă, prețuri corecte și confidențialitate garantată. Colaborăm cu traducători autorizați de Ministerul Justiției și oferim suport în peste 20 de limbi.',
      servicesTitle: 'Serviciile noastre',
      serviceDocuments: 'Documente oficiale',
      serviceDocumentsDesc: 'Traduceri autorizate pentru acte notariale, certificate de naștere, căsătorie, studii, contracte și documente juridice.',
      serviceDocumentsLink: 'Solicită o ofertă',
      serviceTechnical: 'Traduceri tehnice',
      serviceTechnicalDesc: 'Traduceri tehnice pentru manuale, fișe tehnice, documentație industrială, inginerie, IT și telecomunicații.',
      serviceTechnicalLink: 'Solicită o ofertă',
      serviceMedical: 'Traduceri medicale',
      serviceMedicalDesc: 'Traduceri medicale pentru analize, rapoarte medicale, fișe pacienți, scrisori medicale și documente clinice.',
      serviceMedicalLink: 'Solicită o ofertă',
      serviceGeneral: 'Traduceri generale',
      serviceGeneralDesc: 'Traduceri generale pentru documente personale, e-mailuri, conținut web, CV-uri și corespondență.',
      serviceGeneralLink: 'Solicită o ofertă',
      pricesTitle: 'Lista de Prețuri',
      priceDocuments: 'Documente oficiale',
      priceDocumentsValue: '50–70 Ron / pagină',
      priceTechnical: 'Traduceri tehnice',
      priceTechnicalValue: '60–90 Ron / pagină',
      priceMedical: 'Traduceri medicale',
      priceMedicalValue: '55–80 Ron / pagină',
      priceGeneral: 'Traduceri generale',
      priceGeneralValue: '40–60 Ron / pagină',
      footer: '&copy; 2026 Toujours Vert | Email: ToujoursVert@proton.me | Tel: 0736 559 687',
      languagesTitle: 'Limbi disponibile',
      languagesList: [
        'Engleză','Franceză','Germană','Slovacă','Daneză','Norvegiană','Arabă','Greacă','Italiană','Chineză','Turcă','Bulgară','Lituaniană','Poloneză','Albaneză','Finlandeză','Sârbă','Portugheză','Maghiară','Română'
      ],
      languagesCTA: 'Ai nevoie de o traducere rapidă? Trimite documentul și îți răspundem în cel mai scurt timp.',
      languagesSEO: 'Oferim traduceri autorizate în Engleză, Franceză, Germană, Italiană, Chineză, Arabă, Portugheză, Maghiară și alte limbi. Servicii rapide în Sector 1, București.',
      contactTitle: 'Contact / Solicită o ofertă',
      contactName: 'Nume complet',
      contactEmail: 'Email',
      contactPhone: 'Telefon',
      contactServicePlaceholder: 'Selectează tipul de traducere',
      contactServiceOficiale: 'Documente oficiale',
      contactServiceTehnice: 'Tehnice',
      contactServiceMedicale: 'Medicale',
      contactServiceGenerale: 'Generale',
      contactMessage: 'Mesaj / Detalii',
      contactSubmit: 'Trimite',
      locationTitle: 'Locația noastră',
      locationDesc: 'Ne găsiți în Sector 1, București',
      locationLink: 'Obține indicații de orientare',
    },
    en: {
      nav: {
        services: 'Services', prices: 'Prices', languages: 'Languages', contact: 'Contact', location: 'Location'
      },
      header: 'Toujours Vert',
      subtitle: 'Authorized and Legalized Translations – Bucharest',
      banner: 'Authorized translators • Fast service • Guaranteed confidentiality for all documents',
      introTitle: 'Authorized Translation Office in Sector 1',
      introText: 'We offer authorized and legalized translations in over 20 languages, right in Sector 1, Bucharest. Fast, professional, and affordable!',
      whyTitle: 'Why choose us?',
      whyText: 'Authorized translations, fast delivery, fair prices, and guaranteed confidentiality. We work with translators authorized by the Ministry of Justice and offer support in over 20 languages.',
      servicesTitle: 'Our Services',
      serviceDocuments: 'Official Documents',
      serviceDocumentsDesc: 'Authorized translations for notarial acts, birth certificates, marriage, studies, contracts, and legal documents.',
      serviceDocumentsLink: 'Request a quote',
      serviceTechnical: 'Technical Translations',
      serviceTechnicalDesc: 'Technical translations for manuals, technical sheets, industrial documentation, engineering, IT, and telecommunications.',
      serviceTechnicalLink: 'Request a quote',
      serviceMedical: 'Medical Translations',
      serviceMedicalDesc: 'Medical translations for tests, medical reports, patient files, medical letters, and clinical documents.',
      serviceMedicalLink: 'Request a quote',
      serviceGeneral: 'General Translations',
      serviceGeneralDesc: 'General translations for personal documents, emails, web content, CVs, and correspondence.',
      serviceGeneralLink: 'Request a quote',
      pricesTitle: 'Price List',
      priceDocuments: 'Official Documents',
      priceDocumentsValue: '50–70 Ron / page',
      priceTechnical: 'Technical Translations',
      priceTechnicalValue: '60–90 Ron / page',
      priceMedical: 'Medical Translations',
      priceMedicalValue: '55–80 Ron / page',
      priceGeneral: 'General Translations',
      priceGeneralValue: '40–60 Ron / page',
      footer: '&copy; 2026 Toujours Vert | Email: ToujoursVert@proton.me | Tel: 0736 559 687',
      languagesTitle: 'Available Languages',
      languagesList: [
        'English','French','German','Slovak','Danish','Norwegian','Arabic','Greek','Italian','Chinese','Turkish','Bulgarian','Lithuanian','Polish','Albanian','Finnish','Serbian','Portuguese','Hungarian','Romanian'
      ],
      languagesCTA: 'Need a quick translation? Send your document and we will reply as soon as possible.',
      languagesSEO: 'We offer authorized translations in English, French, German, Italian, Chinese, Arabic, Portuguese, Hungarian, and other languages. Fast service in Sector 1, Bucharest.',
      contactTitle: 'Contact / Request a Quote',
      contactName: 'Full name',
      contactEmail: 'Email',
      contactPhone: 'Phone',
      contactServicePlaceholder: 'Select translation type',
      contactServiceOficiale: 'Official documents',
      contactServiceTehnice: 'Technical',
      contactServiceMedicale: 'Medical',
      contactServiceGenerale: 'General',
      contactMessage: 'Message / Details',
      contactSubmit: 'Send',
      locationTitle: 'Our Location',
      locationDesc: 'Find us in Sector 1, Bucharest',
      locationLink: 'Get directions',
    },
    fr: {
      nav: {
        services: 'Services', prices: 'Tarifs', languages: 'Langues', contact: 'Contact', location: 'Emplacement'
      },
      header: 'Toujours Vert',
      subtitle: 'Traductions Autorisées et Légalisées – Bucarest',
      banner: 'Traducteurs assermentés • Service rapide • Confidentialité garantie pour tous les documents',
      introTitle: 'Bureau de Traductions Assermentées Secteur 1',
      introText: 'Nous offrons des traductions autorisées et légalisées dans plus de 20 langues, directement dans le Secteur 1, Bucarest. Rapide, professionnel et à des prix abordables!',
      whyTitle: 'Pourquoi nous choisir ?',
      whyText: 'Traductions autorisées, livraison rapide, prix justes et confidentialité garantie. Nous collaborons avec des traducteurs autorisés par le Ministère de la Justice et offrons un support dans plus de 20 langues.',
      servicesTitle: 'Nos Services',
      serviceDocuments: 'Documents officiels',
      serviceDocumentsDesc: 'Traductions autorisées pentru acte notariés, certificats de naissance, mariage, études, contrats et documents juridiques.',
      serviceDocumentsLink: 'Demander un devis',
      serviceTechnical: 'Traductions techniques',
      serviceTechnicalDesc: 'Traductions tehnice pentru manuels, fiches techniques, documentation industrielle, ingénierie, informatique et télécommunications.',
      serviceTechnicalLink: 'Demander un devis',
      serviceMedical: 'Traductions médicales',
      serviceMedicalDesc: 'Traductions médicales pour analyses, rapports médicaux, dossiers patients, lettres médicales et documents cliniques.',
      serviceMedicalLink: 'Demander un devis',
      serviceGeneral: 'Traductions générales',
      serviceGeneralDesc: 'Traductions générales pour documents personnels, e-mails, contenu web, CV et correspondance.',
      serviceGeneralLink: 'Demander un devis',
      pricesTitle: 'Liste des Prix',
      priceDocuments: 'Documents officiels',
      priceDocumentsValue: '50–70 Ron / page',
      priceTechnical: 'Traductions techniques',
      priceTechnicalValue: '60–90 Ron / page',
      priceMedical: 'Traductions médicales',
      priceMedicalValue: '55–80 Ron / page',
      priceGeneral: 'Traductions générales',
      priceGeneralValue: '40–60 Ron / page',
      footer: '&copy; 2026 Toujours Vert | Email: ToujoursVert@proton.me | Tel: 0736 559 687',
      languagesTitle: 'Langues disponibles',
      languagesList: [
        'Anglais','Français','Allemand','Slovaque','Danois','Norvégien','Arabe','Grec','Italien','Chinois','Turc','Bulgare','Lituanien','Polonais','Albanais','Finnois','Serbe','Portugais','Hongrois','Roumain'
      ],
      languagesCTA: 'Besoin d\'une traduction rapide ? Envoyez votre document et nous vous répondrons dans les plus brefs délais.',
      languagesSEO: 'Nous offrons des traductions autorisées en Anglais, Français, Allemand, Italien, Chinois, Arabe, Portugais, Hongrois et d\'autres langues. Service rapide dans le Secteur 1, Bucarest.',
      contactTitle: 'Contact / Demander un Devis',
      contactName: 'Nom complet',
      contactEmail: 'Email',
      contactPhone: 'Téléphone',
      contactServicePlaceholder: 'Sélectionnez le type de traduction',
      contactServiceOficiale: 'Documents officiels',
      contactServiceTehnice: 'Techniques',
      contactServiceMedicale: 'Médicales',
      contactServiceGenerale: 'Générales',
      contactMessage: 'Message / Détails',
      contactSubmit: 'Envoyer',
      locationTitle: 'Notre Emplacement',
      locationDesc: 'Trouvez-nous dans le Secteur 1, Bucarest',
      locationLink: 'Obtenir des directions',
    }
  };

  function switchLanguage(lang) {
    const trans = translations[lang];
    if(!trans) return;
    // Update text content
    document.querySelectorAll('[data-trans]').forEach(el => {
      const key = el.getAttribute('data-trans');
      // Special handling for language list items with flag images
      if (el.parentElement && el.parentElement.id === 'languages-list' && el.querySelector('img')) {
        const img = el.querySelector('img');
        while (img.nextSibling) {
          img.parentNode.removeChild(img.nextSibling);
        }
        img.insertAdjacentText('afterend', ' ' + (Array.isArray(trans.languagesList) ? trans.languagesList[parseInt(key.split('.')[1])] : el.textContent));
      } else if (el.tagName.toLowerCase() === 'footer' || el.id === 'location-link') {
        el.innerHTML = trans[key] || el.innerHTML;
      } else {
        el.textContent = trans[key] || el.textContent;
      }
    });
    // Update HTML attributes
    document.querySelectorAll('[data-trans-attr]').forEach(el => {
      const [attr, key] = el.getAttribute('data-trans-attr').split('|');
      el.setAttribute(attr, trans[key] || el.getAttribute(attr));
    });
  }

  // Dropdown language switcher
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', function() {
      const lang = langSelect.value;
      switchLanguage(lang);
      // Optionally update URL param
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    });
    // Set initial value from URL or default
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'ro';
    langSelect.value = lang;
    switchLanguage(lang);
  } else {
    // Fallback: set language from URL or default
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'ro';
    switchLanguage(lang);
  }
});

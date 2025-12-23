import { createContext, useContext } from 'react';

export type Language = 'english' | 'telugu' | 'hindi';

export interface Translations {
  // Header
  home: string;
  sightseeing: string;
  accommodation: string;
  contact: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  bookNow: string;

  // Sightseeing
  sightseeingTitle: string;
  sightseeingSubtitle: string;

  // Accommodation
  accommodationTitle: string;
  accommodationSubtitle: string;

  // Package Details
  person: string;
  persons: string;
  duration: string;
  inclusions: string;
  price: string;
  perPerson: string;

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  callUs: string;
  emailUs: string;
  visitUs: string;
  helplineText: string;

  // Footer
  footerText: string;

  // Package descriptions
  sightseeing1Person: {
    title: string;
    description: string;
    duration: string;
    inclusions: string[];
  };
  sightseeing2Persons: {
    title: string;
    description: string;
    duration: string;
    inclusions: string[];
  };
  sightseeing3Persons: {
    title: string;
    description: string;
    duration: string;
    inclusions: string[];
  };

  accommodation1Person: {
    title: string;
    description: string;
    duration: string;
    inclusions: string[];
  };
  accommodation2Persons: {
    title: string;
    description: string;
    duration: string;
    inclusions: string[];
  };
  accommodation3Persons: {
    title: string;
    description: string;
    duration: string;
    inclusions: string[];
  };
}

export const translations: Record<Language, Translations> = {
  english: {
    home: 'Home',
    sightseeing: 'Sightseeing',
    accommodation: 'Accommodation',
    contact: 'Contact',

    heroTitle: 'Discover the Divine Godavari',
    heroSubtitle: 'Experience the sacred beauty of Godavari river with our curated sightseeing and stay packages',
    bookNow: 'Book Now',

    sightseeingTitle: 'Godavari Sightseeing Packages',
    sightseeingSubtitle: 'Explore the spiritual and scenic wonders of Godavari',

    accommodationTitle: 'Accommodation Packages',
    accommodationSubtitle: 'Comfortable stays with authentic local hospitality',

    person: 'Person',
    persons: 'Persons',
    duration: 'Duration',
    inclusions: 'Inclusions',
    price: 'Price',
    perPerson: 'per person',

    contactTitle: 'Get in Touch',
    contactSubtitle: 'Contact us for bookings and inquiries',
    callUs: 'Call Us',
    emailUs: 'Email Us',
    visitUs: 'Visit Us',
    helplineText: '24/7 Booking & Support Helpline:',

    footerText: '© 2024 Godavari Tourism. All rights reserved.',

    sightseeing1Person: {
      title: 'Solo Explorer Package',
      description: 'Perfect for solo travelers seeking spiritual and cultural experiences along the Godavari',
      duration: '1 Day (8 hours)',
      inclusions: [
        'Temple visits (Parnasala, Bhadrachalam)',
        'Boat ride on Godavari river',
        'Professional guide',
        'Lunch at local restaurant',
        'All transportation'
      ]
    },
    sightseeing2Persons: {
      title: 'Couple\'s Journey Package',
      description: 'Romantic exploration of Godavari\'s scenic beauty and spiritual heritage',
      duration: '1 Day (8 hours)',
      inclusions: [
        'Temple visits (Parnasala, Bhadrachalam)',
        'Sunset boat ride on Godavari',
        'Professional guide',
        'Lunch for two at riverside restaurant',
        'All transportation',
        'Photography session'
      ]
    },
    sightseeing3Persons: {
      title: 'Family Adventure Package',
      description: 'Complete family experience with spiritual, cultural, and nature activities',
      duration: '2 Days',
      inclusions: [
        'Multiple temple visits',
        'Boat ride and riverside picnic',
        'Professional guide',
        'All meals included',
        'All transportation',
        'Visit to local tribal villages'
      ]
    },

    accommodation1Person: {
      title: 'Single Retreat',
      description: 'Comfortable single occupancy room with modern amenities and river views',
      duration: '2 Nights / 3 Days',
      inclusions: [
        'AC room with river view',
        'Daily breakfast',
        'Wi-Fi access',
        'Room service',
        'Temple visit arrangements'
      ]
    },
    accommodation2Persons: {
      title: 'Couple\'s Getaway',
      description: 'Deluxe room with balcony overlooking the Godavari river',
      duration: '2 Nights / 3 Days',
      inclusions: [
        'Deluxe AC room with river view',
        'Daily breakfast and dinner',
        'Wi-Fi access',
        '24/7 room service',
        'Complimentary boat ride',
        'Temple visit arrangements'
      ]
    },
    accommodation3Persons: {
      title: 'Family Suite',
      description: 'Spacious suite perfect for families with children, featuring separate living area',
      duration: '3 Nights / 4 Days',
      inclusions: [
        'Family suite with 2 bedrooms',
        'All meals included',
        'Wi-Fi access',
        '24/7 room service',
        'Complimentary boat ride',
        'Guided temple tours',
        'Kids activity area access'
      ]
    }
  },

  telugu: {
    home: 'హోమ్',
    sightseeing: 'సందర్శనీయ స్థలాలు',
    accommodation: 'వసతి',
    contact: 'సంప్రదించండి',

    heroTitle: 'దివ్యమైన గోదావరిని కనుగొనండి',
    heroSubtitle: 'మా ప్రత్యేక సందర్శన మరియు బస వసతి ప్యాకేజీలతో గోదావరి నది యొక్క పవిత్ర అందాన్ని అనుభవించండి',
    bookNow: 'ఇప్పుడే బుక్ చేయండి',

    sightseeingTitle: 'గోదావరి సందర్శనీయ ప్యాకేజీలు',
    sightseeingSubtitle: 'గోదావరి యొక్క ఆధ్యాత్మిక మరియు సుందర అద్భుతాలను అన్వేషించండి',

    accommodationTitle: 'వసతి ప్యాకేజీలు',
    accommodationSubtitle: 'నిజమైన స్థానిక ఆతిథ్యంతో సౌకర్యవంతమైన వసతి',

    person: 'వ్యక్తి',
    persons: 'వ్యక్తులు',
    duration: 'వ్యవధి',
    inclusions: 'చేర్చబడినవి',
    price: 'ధర',
    perPerson: 'ప్రతి వ్యక్తికి',

    contactTitle: 'సంప్రదించండి',
    contactSubtitle: 'బుకింగ్‌లు మరియు విచారణల కోసం మమ్మల్ని సంప్రదించండి',
    callUs: 'మాకు కాల్ చేయండి',
    emailUs: 'మాకు ఇమెయిల్ చేయండి',
    visitUs: 'మాకు సందర్శించండి',
    helplineText: '24/7 బుకింగ్ & సపోర్ట్ హెల్ప్‌లైన్:',

    footerText: '© 2024 గోదావరి టూరిజం. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',

    sightseeing1Person: {
      title: 'సోలో ఎక్స్‌ప్లోరర్ ప్యాకేజీ',
      description: 'గోదావరి వెంట ఆధ్యాత్మిక మరియు సాంస్కృతిక అనుభవాలను కోరుకునే ఒంటరి ప్రయాణికులకు అనువైనది',
      duration: '1 రోజు (8 గంటలు)',
      inclusions: [
        'ఆలయ సందర్శనలు (పర్ణశాల, భద్రాచలం)',
        'గోదావరి నదిలో పడవ ప్రయాణం',
        'ప్రొఫెషనల్ గైడ్',
        'స్థానిక రెస్టారెంట్‌లో భోజనం',
        'అన్ని రవాణా సౌకర్యాలు'
      ]
    },
    sightseeing2Persons: {
      title: 'జంట ప్రయాణ ప్యాకేజీ',
      description: 'గోదావరి యొక్క సుందర అందం మరియు ఆధ్యాత్మిక వారసత్వం యొక్క రొమాంటిక్ అన్వేషణ',
      duration: '1 రోజు (8 గంటలు)',
      inclusions: [
        'ఆలయ సందర్శనలు (పర్ణశాల, భద్రాచలం)',
        'గోదావరిలో సూర్యాస్తమయ పడవ ప్రయాణం',
        'ప్రొఫెషనల్ గైడ్',
        'నదీ తీర రెస్టారెంట్‌లో ఇద్దరికి భోజనం',
        'అన్ని రవాణా సౌకర్యాలు',
        'ఫోటోగ్రఫీ సెషన్'
      ]
    },
    sightseeing3Persons: {
      title: 'కుటుంబ సాహస ప్యాకేజీ',
      description: 'ఆధ్యాత్మిక, సాంస్కృతిక మరియు ప్రకృతి కార్యకలాపాలతో పూర్తి కుటుంబ అనుభవం',
      duration: '2 రోజులు',
      inclusions: [
        'అనేక ఆలయ సందర్శనలు',
        'పడవ ప్రయాణం మరియు నదీ తీర పిక్నిక్',
        'ప్రొఫెషనల్ గైడ్',
        'అన్ని భోజనాలు చేర్చబడ్డాయి',
        'అన్ని రవాణా సౌకర్యాలు',
        'స్థానిక గిరిజన గ్రామాల సందర్శన'
      ]
    },

    accommodation1Person: {
      title: 'సింగిల్ రిట్రీట్',
      description: 'ఆధునిక సౌకర్యాలు మరియు నదీ దృశ్యాలతో సౌకర్యవంతమైన సింగిల్ రూమ్',
      duration: '2 రాత్రులు / 3 రోజులు',
      inclusions: [
        'నదీ దృశ్యంతో AC గది',
        'రోజువారీ అల్పాహారం',
        'Wi-Fi యాక్సెస్',
        'రూమ్ సర్వీస్',
        'ఆలయ సందర్శన ఏర్పాట్లు'
      ]
    },
    accommodation2Persons: {
      title: 'జంట విహారం',
      description: 'గోదావరి నదికి ఎదురుగా బాల్కనీతో కూడిన డీలక్స్ రూమ్',
      duration: '2 రాత్రులు / 3 రోజులు',
      inclusions: [
        'నదీ దృశ్యంతో డీలక్స్ AC గది',
        'రోజువారీ అల్పాహారం మరియు విందు',
        'Wi-Fi యాక్సెస్',
        '24/7 రూమ్ సర్వీస్',
        'కాంప్లిమెంటరీ పడవ ప్రయాణం',
        'ఆలయ సందర్శన ఏర్పాట్లు'
      ]
    },
    accommodation3Persons: {
      title: 'కుటుంబ సూట్',
      description: 'పిల్లలతో కుటుంబాలకు అనువైన విశాలమైన సూట్, ప్రత్యేక లివింగ్ ఏరియా కలిగి',
      duration: '3 రాత్రులు / 4 రోజులు',
      inclusions: [
        '2 బెడ్‌రూమ్‌లతో కుటుంబ సూట్',
        'అన్ని భోజనాలు చేర్చబడ్డాయి',
        'Wi-Fi యాక్సెస్',
        '24/7 రూమ్ సర్వీస్',
        'కాంప్లిమెంటరీ పడవ ప్రయాణం',
        'గైడెడ్ ఆలయ పర్యటనలు',
        'పిల్లల కార్యకలాప ప్రాంతం యాక్సెస్'
      ]
    }
  },

  hindi: {
    home: 'होम',
    sightseeing: 'दर्शनीय स्थल',
    accommodation: 'आवास',
    contact: 'संपर्क करें',

    heroTitle: 'दिव्य गोदावरी की खोज करें',
    heroSubtitle: 'हमारे विशेष दर्शन और ठहरने के पैकेज के साथ गोदावरी नदी की पवित्र सुंदरता का अनुभव करें',
    bookNow: 'अभी बुक करें',

    sightseeingTitle: 'गोदावरी दर्शनीय पैकेज',
    sightseeingSubtitle: 'गोदावरी के आध्यात्मिक और प्राकृतिक चमत्कारों का अन्वेषण करें',

    accommodationTitle: 'आवास पैकेज',
    accommodationSubtitle: 'प्रामाणिक स्थानीय आतिथ्य के साथ आरामदायक ठहरना',

    person: 'व्यक्ति',
    persons: 'व्यक्ति',
    duration: 'अवधि',
    inclusions: 'शामिल सुविधाएं',
    price: 'कीमत',
    perPerson: 'प्रति व्यक्ति',

    contactTitle: 'संपर्क करें',
    contactSubtitle: 'बुकिंग और पूछताछ के लिए हमसे संपर्क करें',
    callUs: 'हमें कॉल करें',
    emailUs: 'हमें ईमेल करें',
    visitUs: 'हमसे मिलें',
    helplineText: '24/7 बुकिंग और सहायता हेल्पलाइन:',

    footerText: '© 2024 गोदावरी टूरिज्म। सर्वाधिकार सुरक्षित।',

    sightseeing1Person: {
      title: 'सोलो एक्सप्लोरर पैकेज',
      description: 'गोदावरी के किनारे आध्यात्मिक और सांस्कृतिक अनुभवों की तलाश करने वाले एकल यात्रियों के लिए बिल्कुल सही',
      duration: '1 दिन (8 घंटे)',
      inclusions: [
        'मंदिर दर्शन (पर्णशाला, भद्राचलम)',
        'गोदावरी नदी में नाव की सवारी',
        'पेशेवर गाइड',
        'स्थानीय रेस्तरां में लंच',
        'सभी परिवहन सुविधाएं'
      ]
    },
    sightseeing2Persons: {
      title: 'कपल जर्नी पैकेज',
      description: 'गोदावरी की प्राकृतिक सुंदरता और आध्यात्मिक विरासत का रोमांटिक अन्वेषण',
      duration: '1 दिन (8 घंटे)',
      inclusions: [
        'मंदिर दर्शन (पर्णशाला, भद्राचलम)',
        'गोदावरी में सूर्यास्त नाव की सवारी',
        'पेशेवर गाइड',
        'नदी किनारे रेस्तरां में दो के लिए लंच',
        'सभी परिवहन सुविधाएं',
        'फोटोग्राफी सत्र'
      ]
    },
    sightseeing3Persons: {
      title: 'पारिवारिक रोमांच पैकेज',
      description: 'आध्यात्मिक, सांस्कृतिक और प्रकृति गतिविधियों के साथ पूर्ण पारिवारिक अनुभव',
      duration: '2 दिन',
      inclusions: [
        'कई मंदिर दर्शन',
        'नाव की सवारी और नदी किनारे पिकनिक',
        'पेशेवर गाइड',
        'सभी भोजन शामिल',
        'सभी परिवहन सुविधाएं',
        'स्थानीय आदिवासी गांवों का दौरा'
      ]
    },

    accommodation1Person: {
      title: 'सिंगल रिट्रीट',
      description: 'आधुनिक सुविधाओं और नदी के दृश्य के साथ आरामदायक सिंगल कमरा',
      duration: '2 रात / 3 दिन',
      inclusions: [
        'नदी के दृश्य के साथ AC कमरा',
        'रोजाना नाश्ता',
        'Wi-Fi सुविधा',
        'रूम सर्विस',
        'मंदिर दर्शन की व्यवस्था'
      ]
    },
    accommodation2Persons: {
      title: 'कपल गेटअवे',
      description: 'गोदावरी नदी की ओर मुख वाली बालकनी के साथ डीलक्स कमरा',
      duration: '2 रात / 3 दिन',
      inclusions: [
        'नदी के दृश्य के साथ डीलक्स AC कमरा',
        'रोजाना नाश्ता और रात का खाना',
        'Wi-Fi सुविधा',
        '24/7 रूम सर्विस',
        'मुफ्त नाव की सवारी',
        'मंदिर दर्शन की व्यवस्था'
      ]
    },
    accommodation3Persons: {
      title: 'फैमिली सूट',
      description: 'बच्चों के साथ परिवारों के लिए बिल्कुल सही विशाल सूट, अलग लिविंग एरिया के साथ',
      duration: '3 रात / 4 दिन',
      inclusions: [
        '2 बेडरूम के साथ फैमिली सूट',
        'सभी भोजन शामिल',
        'Wi-Fi सुविधा',
        '24/7 रूम सर्विस',
        'मुफ्त नाव की सवारी',
        'गाइडेड मंदिर यात्रा',
        'बच्चों की गतिविधि क्षेत्र की सुविधा'
      ]
    }
  }
};

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}>({
  language: 'english',
  setLanguage: () => { },
  t: translations.english
});

export const useTranslation = () => useContext(LanguageContext);

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BookingFormData, PackageData, WebsiteSettings } from './types';
import * as firebaseService from '../services/firebase.service';

interface AppContextType {
  bookings: BookingFormData[];
  addBooking: (booking: BookingFormData) => Promise<void>;
  packages: PackageData[];
  addPackage: (pkg: PackageData) => void;
  updatePackage: (id: string, pkg: PackageData) => void;
  deletePackage: (id: string) => void;
  settings: WebsiteSettings;
  updateSettings: (settings: WebsiteSettings) => void;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  loading: boolean;
}

const defaultSettings: WebsiteSettings = {
  contactPhone1: '+91 98765 43210',
  contactPhone2: '+91 91234 56789',
  contactEmail: 'info@godavaritourism.com',
  contactAddress: 'Bhadrachalam Road, East Godavari District, Andhra Pradesh - 533101'
};

const initialPackages: PackageData[] = [
  {
    id: 'sight-1',
    type: 'sightseeing',
    persons: 1,
    price: '₹2,999',
    image: 'https://images.unsplash.com/photo-1704788564069-d54cab4169aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY2NDA5OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: {
      english: 'Solo Explorer Package',
      telugu: 'సోలో ఎక్స్‌ప్లోరర్ ప్యాకేజీ',
      hindi: 'सोलो एक्सप्लोरर पैकेज'
    },
    description: {
      english: 'Perfect for solo travelers seeking spiritual and cultural experiences along the Godavari',
      telugu: 'గోదావరి వెంట ఆధ్యాత్మిక మరియు సాంస్కృతిక అనుభవాలను కోరుకునే ఒంటరి ప్రయాణికులకు అనువైనది',
      hindi: 'गोदावरी के किनारे आध्यात्मिक और सांस्कृतिक अनुभवों की तलाश करने वाले एकल यात्रियों के लिए बिल्कुल सही'
    },
    duration: {
      english: '1 Day (8 hours)',
      telugu: '1 రోజు (8 గంటలు)',
      hindi: '1 दिन (8 घंटे)'
    },
    inclusions: {
      english: [
        'Temple visits (Parnasala, Bhadrachalam)',
        'Boat ride on Godavari river',
        'Professional guide',
        'Lunch at local restaurant',
        'All transportation'
      ],
      telugu: [
        'ఆలయ సందర్శనలు (పర్ణశాల, భద్రాచలం)',
        'గోదావరి నదిలో పడవ ప్రయాణం',
        'ప్రొఫెషనల్ గైడ్',
        'స్థానిక రెస్టారెంట్‌లో భోజనం',
        'అన్ని రవాణా సౌకర్యాలు'
      ],
      hindi: [
        'मंदिर दर्शन (पर्णशाला, भद्राचलम)',
        'गोदावरी नदी में नाव की सवारी',
        'पेशेवर गाइड',
        'स्थानीय रेस्तरां में लंच',
        'सभी परिवहन सुविधाएं'
      ]
    }
  },
  {
    id: 'sight-2',
    type: 'sightseeing',
    persons: 2,
    price: '₹5,499',
    image: 'https://images.unsplash.com/photo-1760730471597-bd39a8984775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjBib2F0JTIwcmlkZXxlbnwxfHx8fDE3NjY0MDk5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: {
      english: "Couple's Journey Package",
      telugu: 'జంట ప్రయాణ ప్యాకేజీ',
      hindi: 'कपल जर्नी पैकेज'
    },
    description: {
      english: "Romantic exploration of Godavari's scenic beauty and spiritual heritage",
      telugu: 'గోదావరి యొక్క సుందర అందం మరియు ఆధ్యాత్మిక వారసత్వం యొక్క రొమాంటిక్ అన్వేషణ',
      hindi: 'गोदावरी की प्राकृतिक सुंदरता और आध्यात्मिक विरासत का रोमांटिक अन्वेषण'
    },
    duration: {
      english: '1 Day (8 hours)',
      telugu: '1 రోజు (8 గంటలు)',
      hindi: '1 दिन (8 घंटे)'
    },
    inclusions: {
      english: [
        'Temple visits (Parnasala, Bhadrachalam)',
        'Sunset boat ride on Godavari',
        'Professional guide',
        'Lunch for two at riverside restaurant',
        'All transportation',
        'Photography session'
      ],
      telugu: [
        'ఆలయ సందర్శనలు (పర్ణశాల, భద్రాచలం)',
        'గోదావరిలో సూర్యాస్తమయ పడవ ప్రయాణం',
        'ప్రొఫెషనల్ గైడ్',
        'నదీ తీర రెస్టారెంట్‌లో ఇద్దరికి భోజనం',
        'అన్ని రవాణా సౌకర్యాలు',
        'ఫోటోగ్రఫీ సెషన్'
      ],
      hindi: [
        'मंदिर दर्शन (पर्णशाला, भद्राचलम)',
        'गोदावरी में सूर्यास्त नाव की सवारी',
        'पेशेवर गाइड',
        'नदी किनारे रेस्तरां में दो के लिए लंच',
        'सभी परिवहन सुविधाएं',
        'फोटोग्राफी सत्र'
      ]
    }
  },
  {
    id: 'sight-3',
    type: 'sightseeing',
    persons: 3,
    price: '₹11,999',
    image: 'https://images.unsplash.com/photo-1700356596371-2887aa2ea726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2RhdmFyaSUyMHJpdmVyJTIwSW5kaWF8ZW58MXx8fHwxNzY2NDA5OTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: {
      english: 'Family Adventure Package',
      telugu: 'కుటుంబ సాహస ప్యాకేజీ',
      hindi: 'पारिवारिक रोमांच पैकेज'
    },
    description: {
      english: 'Complete family experience with spiritual, cultural, and nature activities',
      telugu: 'ఆధ్యాత్మిక, సాంస్కృతిక మరియు ప్రకృతి కార్యకలాపాలతో పూర్తి కుటుంబ అనుభవం',
      hindi: 'आध्यात्मिक, सांस्कृतिक और प्रकृति गतिविधियों के साथ पूर्ण पारिवारिक अनुभव'
    },
    duration: {
      english: '2 Days',
      telugu: '2 రోజులు',
      hindi: '2 दिन'
    },
    inclusions: {
      english: [
        'Multiple temple visits',
        'Boat ride and riverside picnic',
        'Professional guide',
        'All meals included',
        'All transportation',
        'Visit to local tribal villages'
      ],
      telugu: [
        'అనేక ఆలయ సందర్శనలు',
        'పడవ ప్రయాణం మరియు నదీ తీర పిక్నిక్',
        'ప్రొఫెషనల్ గైడ్',
        'అన్ని భోజనాలు చేర్చబడ్డాయి',
        'అన్ని రవాణా సౌకర్యాలు',
        'స్థానిక గిరిజన గ్రామాల సందర్శన'
      ],
      hindi: [
        'कई मंदिर दर्शन',
        'नाव की सवारी और नदी किनारे पिकनिक',
        'पेशेवर गाइड',
        'सभी भोजन शामिल',
        'सभी परिवहन सुविधाएं',
        'स्थानीय आदिवासी गांवों का दौरा'
      ]
    }
  },
  {
    id: 'acc-1',
    type: 'accommodation',
    persons: 1,
    price: '₹4,999',
    image: 'https://images.unsplash.com/photo-1672401231510-1365539ffc81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMEluZGlhfGVufDF8fHx8MTc2NjQwOTk0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: {
      english: 'Single Retreat',
      telugu: 'సింగిల్ రిట్రీట్',
      hindi: 'सिंगल रिट्रीट'
    },
    description: {
      english: 'Comfortable single occupancy room with modern amenities and river views',
      telugu: 'ఆధునిక సౌకర్యాలు మరియు నదీ దృశ్యాలతో సౌకర్యవంతమైన సింగిల్ రూమ్',
      hindi: 'आधुनिक सुविधाओं और नदी के दृश्य के साथ आरामदायक सिंगल कमरा'
    },
    duration: {
      english: '2 Nights / 3 Days',
      telugu: '2 రాత్రులు / 3 రోజులు',
      hindi: '2 रात / 3 दिन'
    },
    inclusions: {
      english: [
        'AC room with river view',
        'Daily breakfast',
        'Wi-Fi access',
        'Room service',
        'Temple visit arrangements'
      ],
      telugu: [
        'నదీ దృశ్యంతో AC గది',
        'రోజువారీ అల్పాహారం',
        'Wi-Fi యాక్సెస్',
        'రూమ్ సర్వీస్',
        'ఆలయ సందర్శన ఏర్పాట్లు'
      ],
      hindi: [
        'नदी के दृश्य के साथ AC कमरा',
        'रोजाना नाश्ता',
        'Wi-Fi सुविधा',
        'रूम सर्विस',
        'मंदिर दर्शन की व्यवस्था'
      ]
    }
  },
  {
    id: 'acc-2',
    type: 'accommodation',
    persons: 2,
    price: '₹8,999',
    image: '/godavari-bridge.jpg',
    title: {
      english: "Couple's Getaway",
      telugu: 'జంట విహారం',
      hindi: 'कपल गेटअवे'
    },
    description: {
      english: 'Deluxe room with balcony overlooking the Godavari river',
      telugu: 'గోదావరి నదికి ఎదురుగా బాల్కనీతో కూడిన డీలక్స్ రూమ్',
      hindi: 'गोदावरी नदी की ओर मुख वाली बालकनी के साथ डीलक्स कमरा'
    },
    duration: {
      english: '2 Nights / 3 Days',
      telugu: '2 రాత్రులు / 3 రోజులు',
      hindi: '2 रात / 3 दिन'
    },
    inclusions: {
      english: [
        'Deluxe AC room with river view',
        'Daily breakfast and dinner',
        'Wi-Fi access',
        '24/7 room service',
        'Complimentary boat ride',
        'Temple visit arrangements'
      ],
      telugu: [
        'నదీ దృశ్యంతో డీలక్స్ AC గది',
        'రోజువారీ అల్పాహారం మరియు విందు',
        'Wi-Fi యాక్సెస్',
        '24/7 రూమ్ సర్వీస్',
        'కాంప్లిమెంటరీ పడవ ప్రయాణం',
        'ఆలయ సందర్శన ఏర్పాట్లు'
      ],
      hindi: [
        'नदी के दृश्य के साथ डीलक्स AC कमरा',
        'रोजाना नाश्ता और रात का खाना',
        'Wi-Fi सुविधा',
        '24/7 रूम सर्विस',
        'मुफ्त नाव की सवारी',
        'मंदिर दर्शन की व्यवस्था'
      ]
    }
  },
  {
    id: 'acc-3',
    type: 'accommodation',
    persons: 3,
    price: '₹17,999',
    image: '/godavari-boat.jpg',
    title: {
      english: 'Family Suite',
      telugu: 'కుటుంబ సూట్',
      hindi: 'फैमिली सूट'
    },
    description: {
      english: 'Spacious suite perfect for families with children, featuring separate living area',
      telugu: 'పిల్లలతో కుటుంబాలకు అనువైన విశాలమైన సూట్, ప్రత్యేక లివింగ్ ఏరియా కలిగి',
      hindi: 'बच्चों के साथ परिवारों के लिए बिल्कुल सही विशाल सूट, अलग लिविंग एरिया के साथ'
    },
    duration: {
      english: '3 Nights / 4 Days',
      telugu: '3 రాత్రులు / 4 రోజులు',
      hindi: '3 रात / 4 दिन'
    },
    inclusions: {
      english: [
        'Family suite with 2 bedrooms',
        'All meals included',
        'Wi-Fi access',
        '24/7 room service',
        'Complimentary boat ride',
        'Guided temple tours',
        'Kids activity area access'
      ],
      telugu: [
        '2 బెడ్‌రూమ్‌లతో కుటుంబ సూట్',
        'అన్ని భోజనాలు చేర్చబడ్డాయి',
        'Wi-Fi యాక్సెస్',
        '24/7 రూమ్ సర్వీస్',
        'కాంప్లిమెంటరీ పడవ ప్రయాణం',
        'గైడెడ్ ఆలయ పర్యటనలు',
        'పిల్లల కార్యకలాప ప్రాంతం యాక్సెస్'
      ],
      hindi: [
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
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<BookingFormData[]>([]);
  const [packages, setPackages] = useState<PackageData[]>(initialPackages);
  const [settings, setSettings] = useState<WebsiteSettings>(defaultSettings);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize auth state listener
  useEffect(() => {
    const unsubscribe = firebaseService.onAuthStateChange((user) => {
      setIsAdmin(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to bookings real-time updates
  useEffect(() => {
    const unsubscribe = firebaseService.subscribeToBookings((updatedBookings) => {
      setBookings(updatedBookings);
    });

    return () => unsubscribe();
  }, []);

  const addBooking = async (booking: BookingFormData) => {
    try {
      const bookingData = {
        name: booking.name,
        email: booking.email,
        phone: booking.phone,
        numberOfPeople: booking.numberOfPeople,
        travelDate: booking.travelDate,
        expectations: booking.expectations,
        packageType: booking.packageType,
        packagePersons: booking.packagePersons,
        timestamp: new Date().toISOString()
      };
      await firebaseService.addBooking(bookingData);
    } catch (error) {
      console.error('Error adding booking:', error);
      throw error;
    }
  };

  const addPackage = (pkg: PackageData) => {
    setPackages(prev => [...prev, pkg]);
  };

  const updatePackage = (id: string, pkg: PackageData) => {
    setPackages(prev => prev.map(p => p.id === id ? pkg : p));
  };

  const deletePackage = (id: string) => {
    setPackages(prev => prev.filter(p => p.id !== id));
  };

  const updateSettingsFunc = (newSettings: WebsiteSettings) => {
    setSettings(newSettings);
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      await firebaseService.loginAdmin(email, password);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await firebaseService.logoutAdmin();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        bookings,
        addBooking,
        packages,
        addPackage,
        updatePackage,
        deletePackage,
        settings,
        updateSettings: updateSettingsFunc,
        isAdmin,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

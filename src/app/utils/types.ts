export interface BookingFormData {
  id: string;
  packageType: 'sightseeing' | 'accommodation';
  packagePersons: number;
  name: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  travelDate: string;
  expectations: string;
  timestamp: string;
}

export interface PackageData {
  id: string;
  type: 'sightseeing' | 'accommodation';
  persons: number;
  price: string;
  image: string;
  title: {
    english: string;
    telugu: string;
    hindi: string;
  };
  description: {
    english: string;
    telugu: string;
    hindi: string;
  };
  duration: {
    english: string;
    telugu: string;
    hindi: string;
  };
  inclusions: {
    english: string[];
    telugu: string[];
    hindi: string[];
  };
}

export interface WebsiteSettings {
  contactPhone1: string;
  contactPhone2: string;
  contactEmail: string;
  contactAddress: string;
}

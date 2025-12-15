export interface CafeData {
  name: string;
  address: string;
  city: string;
  zip: string;
  phone: string;
  rating: number;
  reviewCount: number;
  googleMapsLink: string;
  instagramLink: string;
  openingHours: {
    weekdays: string;
    weekend: string;
  };
}

export const CAFE_DATA: CafeData = {
  name: "Café Všehochut",
  address: "Čelakovského 80",
  city: "Jičín 1",
  zip: "506 01",
  phone: "+420 607 495 399",
  rating: 4.8,
  reviewCount: 923,
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Café+Všehochut+Jičín",
  instagramLink: "https://www.instagram.com/cafevsehochut/",
  openingHours: {
    weekdays: "7:30 - 19:00",
    weekend: "9:00 - 19:00"
  }
};
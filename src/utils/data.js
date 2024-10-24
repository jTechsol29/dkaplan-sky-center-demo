// destinations img
import tour4 from "../assets/images/tour/Tokyo.png";
import tour5 from "../assets/images/tour/bali-1.png";
import tour6 from "../assets/images/tour/bangkok.png";
import tour7 from "../assets/images/tour/cancun.png";
import tour8 from "../assets/images/tour/nah-trang.png";
import tour9 from "../assets/images/tour/phuket.png";
import tour10 from "../assets/images/tour/paris.png";
import tour11 from "../assets/images/tour/malaysia.png";

// populars img
import Anchorage from "../assets/images/popular/Anchorage To La Paz.jpg";
import Singapore from "../assets/images/popular/Discover Singapore.png";
import Kiwiana from "../assets/images/popular/Kiwiana Panorama.jpg";
import Quito from "../assets/images/popular/Anchorage To Quito.jpg";
import Cuzco from "../assets/images/popular/Cuzco To Anchorage.jpg";
import Ushuaia from "../assets/images/popular/Anchorage To Ushuaia.jpg";
import Santiago from "../assets/images/popular/Anchorage To Santiago.jpg";
import Explorer from "../assets/images/popular/LA Explorer.jpg";

// tour detail img

import tourDetails1 from "../assets/images/tourDetails/GardenCourt-Sandton.jpg";
import tourDetails2 from "../assets/images/tourDetails/GardenCourt-Sandton1.jpg";
import tourDetails3 from "../assets/images/tourDetails/GardenCourt-Sandton2.jpg";
import tourDetails4 from "../assets/images/tourDetails/GardenCourt-Sandton4.jpg";
import tourDetails5 from "../assets/images/tourDetails/GardenCourt-Sandton5.jpg";
import tourDetails6 from "../assets/images/tourDetails/GardenCourt-Sandton6.jpg";
import tourDetails7 from "../assets/images/tourDetails/GardenCourt-Sandton8.jpg";
import tourDetails8 from "../assets/images/tourDetails/GardenCourt-Sandton14.jpg";

export const destinationsData = [
  {
    id: 0,
    name: "Bali",
    tours: "5 tours and activities",
    image: tour5,
    link: "tour-name",
    shortDes: "",
  },
  {
    id: 1,
    name: "Tokyo",
    tours: "9 tours and activities",
    image: tour4,
    link: "tour-name",
  },

  {
    id: 2,
    name: "Bangkok",
    tours: "5 tours and activities",
    image: tour6,
    link: "tour-name",
  },

  {
    id: 3,
    name: "Cancun",
    tours: "4 tours and activities",
    image: tour7,
    link: "tour-name",
  },
  {
    id: 4,
    name: "Nha Trang",
    tours: "9 tours and activities ",
    image: tour8,
    link: "tour-name",
  },
  {
    id: 5,
    name: "Phuket",
    tours: "4 tours and activities",
    image: tour9,
    link: "tour-name",
  },
  {
    id: 6,
    name: "Paris",
    tours: "6 tours and activities",
    image: tour10,
    link: "tour-name",
  },
  {
    id: 7,
    name: "Malaysia",
    tours: "4 tours and activities",
    image: tour11,
    link: "tour-name",
  },
];

export const popularsData = [
  {
    id: 0,
    title: "Discover Singapore",
    image: Singapore,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "Rail Tour"],
    days: "5 days - 4 nights",
    price: 100,
    afterDiscount: 92,
    rating: 3,
    reviews: 5,
  },
  {
    id: 1,
    title: "Kiwiana Panorama",
    image: Kiwiana,
    location: "European Way, Southampton, United Kingdom",
    category: ["River Cruise", "Wildlife"],
    days: "2 days - 1 nights",
    price: 87,
    afterDiscount: 82,
    rating: 4,
    reviews: 9,
  },
  {
    id: 2,
    title: "Anchorage To Quito",
    image: Quito,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "River Cruise"],
    days: "2 days - 1 nights",
    price: 87,
    afterDiscount: 82,
    rating: 4,
    reviews: 9,
  },
  {
    id: 3,
    title: "Anchorage To La Paz",
    image: Anchorage,
    location: "European Way, Southampton, United Kingdom",
    category: ["River Cruise", "Rail Tour"],
    days: "unlimited",
    price: 434,
    afterDiscount: 0,
    rating: 5,
    reviews: 20,
  },
  {
    id: 4,
    title: "Cuzco To Anchorage",
    image: Cuzco,
    location: "European Way, Southampton, United Kingdom",
    category: ["River Cruise", "Tour & Cruise"],
    days: "1 days - 9 hours",
    price: 395,
    afterDiscount: 0,
    rating: 3,
    reviews: 12,
  },
  {
    id: 5,
    title: "Anchorage To Ushuaia",
    image: Ushuaia,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "Wildlife"],
    days: "5 days - 4 nights",
    price: 93,
    afterDiscount: 0,
    rating: 3,
    reviews: 12,
  },
  {
    id: 6,
    title: "Anchorage To Santiago",
    image: Santiago,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "Wildlife"],
    days: "1 day - 1 night",
    price: 42,
    afterDiscount: 0,
    rating: 5,
    reviews: 18,
  },
  {
    id: 7,
    title: "LA Explorer",
    image: Explorer,
    location: "European Way, Southampton, United Kingdom",
    category: ["Rail Tour", "Tour & Cruise"],
    days: "1 night",
    price: 99,
    afterDiscount: 0,
    rating: 4,
    reviews: 22,
  },
];

export const tourDetails = {
  title: "Beautiful Garden Court Sandton City",

  des: `A 6-minute walk from the Johannesburg Stock Exchange, this laid-back hotel is also 7 minutes' walk from Sandton train station and 14 minutes on foot from Sandton Central Park.
The understated rooms feature complimentary Wi-Fi and flat-screen TVs, as well as tea and coffeemaking equipment.
Freebies include breakfast and a train shuttle. There's a low-key grill restaurant and a bar. Other amenities include an outdoor pool with a furnished sundeck, and a gym, along with 2 meeting rooms.`,
  price: " 1,785.00",
  rating: " 4.5",
  reviews: "365 reviews",
  tourInfo: [
    '<strong className="font-bold"> Place Covered</strong>: Garden Court Sandton City',
    ' <strong className="font-bold">Duration:</strong>5 Days, 4 Nights',
    '<strong className="font-bold">Start Point:</strong> OR Tambo International Airport',
    '<strong className="font-bold">End Point:</strong>  OR Tambo International Airport',
  ],

  highlights: [
    " Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect beaches, charming waterfalls and so much more",
    " Dependent on so extremely delivered by. Yet no jokes  worse her why. Bed one supposing breakfast day fulfilled off depending questions.",
    " Whatever boy her exertion his extended. Ecstatic  followed handsome drawings entirely Mrs one yet  outweigh.",
    "Meant balls it if up doubt small purse. Required his  you put the outlived answered position. A pleasure exertion if believed provided to.",
  ],

  itinerary: [
    {
      title: `<span class="me-1 fw-bold">Day 1:</span>  Airport Pick Up `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },

    {
      title: `<span class="me-1 fw-bold">Day 2:</span>  Temples & River Cruise `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in. `,
    },
    {
      title: `<span class="me-1 fw-bold">Day 3:</span>  Massage & Overnight Train`,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 4:</span>  Khao Sok National Park `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 5:</span>  Travel to Koh Phangan `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    {
      title: `<span class="me-1 fw-bold">Day 6:</span> Morning Chill & Muay Thai Lesson `,
      des: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
  ],

  included: [
    "Comfortable stay for 4 nights in your preferred category Hotels",
    "Professional English speaking guide to help you explore the cities",
    "Breakfast is included as mentioned in Itinerary.",
    "Per Peron rate on twin sharing basis",
    "Entrance Tickets to Genting Indoor Theme Park    ",
    "All Tours & Transfers on Seat In Coach Basis ",
    "Visit Bali Safari & Marine Park with Jungle Hopper Pass    ",
  ],
  exclusion: [
    "Lunch and dinner are not included in CP plans",
    "Any other services not specifically mentioned in the inclusions",
    "Medical and Travel insurance",
    "Airfare is not included ",
    "Early Check-In & Late Check-Out ",
    "Anything which is not specified in Inclusions    ",
  ],

  images: [
    {
      original: tourDetails1,
      thumbnail: tourDetails1,
    },
    {
      original: tourDetails2,
      thumbnail: tourDetails2,
    },
    {
      original: tourDetails3,
      thumbnail: tourDetails3,
    },
    {
      original: tourDetails4,
      thumbnail: tourDetails4,
    },
    {
      original: tourDetails5,
      thumbnail: tourDetails5,
    },

    {
      original: tourDetails6,
      thumbnail: tourDetails6,
    },
    {
      original: tourDetails7,
      thumbnail: tourDetails7,
    },
    {
      original: tourDetails8,
      thumbnail: tourDetails8,
    },
  ],
};

export const location = [
  "Bali",
  "Tokyo",
  "Bangkok",
  "Cancun",
  "Nha Trang",
  "Phuket",
  "Malaysia",
  "Paris",
];

export const Categories = [
  "History",
  "Calture",
  "Netural",
  "Urban Tour",
  "Relax",
];

export const Duration = ["1-3 Days", "3-5 Days", "5-7 Days", "7-10 Day"];
export const PriceRange = [
  "$ 0 - $50",
  "$ 50 - $ 100",
  "$ 100 - $ 200",
  "$ 200 - ₹ $ 400",
  "$ 400 - ₹ $ 800",
];

export const Ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

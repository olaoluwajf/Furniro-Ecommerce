
import r1 from './assets/catimg1.png';
import r2 from './assets/Living.png';
import r3 from './assets/Bedroom.png';

import pr1 from './assets/proimg1.png';
import pr3 from './assets/proimg3.png';
import pr4 from './assets/proimg4.png';
import pr5 from './assets/proimg5.png';
import pr6 from './assets/proimg6.png';
import pr7 from './assets/proimg7.png';
import pr8 from './assets/proimg8.png';

import room1 from './assets/Rectangle 24.png';
import room2 from './assets/Rectangle 25.png';
import room3 from './assets/Rectangle 36.png';
import room4 from './assets/Rectangle 37.png';


import recent1 from './assets/Rectangle 69.png';
import recent2 from './assets/Rectangle 69 (1).png';
import recent3 from './assets/Rectangle 69 (2).png';
import recent4 from './assets/Rectangle 69 (3).png';
import recent5 from './assets/Rectangle 69 (4).png';

import post1 from "./assets/Rectangle 68.png";
import post2 from "./assets/Rectangle 68 (1).png";
import post3 from "./assets/Rectangle 68 (2).png";

export const Rooms = [
  {id:1, name: 'Dining', img: r1 },
  {id:2, name: 'Living', img: r2 },
  {id:3, name: ' Bedroom', img: r3 }
];

export const products1 = [
  {
    id: 1, 
    img: pr1,
    name: 'Syltherine',
    price: 'Rp 1.500.000',
    disPrecent: 30,
    discount: 'Rp 3.500.000',
    description: 'Stylish Cafe Chair',
  },
  {
    id: 2,
    img: pr1,
    name: 'Leviosa',
    price: 'Rp 2.500.000',
    description: 'Stylish Cafe Chair'
  },
  {
    id: 3, 
    img: pr3,
    name: 'Lolito',
    price: 'Rp 7.000.000',
    discount: 'Rp 14.000.000',
    disPrecent: 50,
    description: 'Luxury big sofa'
  },
  {
    id: 4, 
    img: pr4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 1.500.000',
    new: true
  }
];

export const products2 = [
  {
    id: 5, 
    img: pr5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
  },
  {
    id: 6,
    img: pr6,
    name: ' Muggo',
    price: 'Rp 150.000',
    new: true,
    description: 'Small Mug '
  },
  {
    id: 7,
    img: pr7,
    name: 'Pingky',
    disPrecent: 50,
    price: 'Rp 7.000.000',
    discount: 'Rp 14.000.000',
    description: 'Cute bed set'
  },
  {
    id: 8,
    img: pr8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
    new: true
  }
];

export const RoomImages = [
  { id: 1, title: 'bedroom', description: 'Inner peace', image: room1 },
  { id: 2, title: 'bedroom', description: 'Inner peace', image: room2 },
  { id: 3, title: 'bedroom', description: 'Inner peace', image: room3 },
  { id: 4, title: 'bedroom', description: 'Inner peace', image: room4 }
];

export const BlogPosts =  [
  { id:1, img: recent1,topic: 'Going all-in with millennial design',dayInfo:"May 03 2025 G.C"},
  { id:2, img: recent5, topic: 'Exploring new ways of decorating',dayInfo:"May 03 2025 G.C"},
  { id:3, img: recent2, topic: 'Handmade pieces that took time to make',dayInfo:"May 03 2025 G.C"},
  { id:4, img: recent3, topic: 'Modern home in Milan ',dayInfo:"May 03 2025 G.C"},
  { id:5, img: recent4, topic: 'Colorful office redesign',dayInfo:"May 03 2025 G.C"},
  { id:6, img: recent5, topic: 'Going all-in with millennial design',dayInfo:"May 03 2025 G.C"}
]; 
export const Posts = [
  {id:1,header:"Going all-in with millennial design",img:post1},
  {id:2,header: "Exploring new ways of decorating",img:post2},
  {id:3,header:"Handmade pieces that took time to make",img:post3},
];
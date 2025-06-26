
import catimg1 from './assets/catimg1.png';
import Rectangle25 from './assets/Living.png';
import Rectangle26 from './assets/Bedroom.png'
import pr1 from './assets/proimg1.png'

import pr3 from './assets/proimg3.png'
import pr4 from './assets/proimg4.png'
import pr5 from './assets/proimg5.png'
import pr6 from './assets/proimg6.png'
import pr7 from './assets/proimg7.png'
import pr8 from './assets/proimg8.png'

import room1 from './assets/Rectangle 24.png'
import room2 from './assets/Rectangle 25.png'
import room3 from './assets/Rectangle 36.png'
import room4 from './assets/Rectangle 37.png'



export const Rooms=[
        {name: 'Dining',
         img: catimg1
        },
        {
            name: 'Living',
            img: Rectangle25
        },
        {
            name: ' Bedroom',
            img:  Rectangle26
        }

    ];
export const products1=[
    {
        img: pr1,
        name: 'Syltherine',
        price: 'Rp 1.500.000',
        disPrecent: 30,
        discount: 'Rp 3.500.000',
        description: 'Stylish Cafe Chair',

    } ,
    {
        img: pr1,
        name: 'Leviosa',
        price: 'Rp 2.500.000',
        description: 'Stylish Cafe Chair'
    } 
     ,
    {
        img: pr3,
        name: 'Lolito',
        price: 'Rp 7.000.000',
        discount: 'Rp 14.000.000',
        disPrecent: 50,
        description: 'Luxury big sofa'
    } 
     ,
    {
        img: pr4,
        name: 'Respira',
        description: 'Outdoor bar table and stool',
        price: 'Rp 1.500.000',
        new: true    
    }
     
]
export const products2=[
    
    {
        img: pr5,
        name: 'Grifo',
        description: 'Night lamp',
        price: 'Rp 1.500.000',  
    },
    
    {
        img:  pr6,
        name: ' Muggo',
        price: 'Rp 150.000',
        new: true,
        description: 'Small Mug '
    } 
     ,
    {
        img: pr7,
        name: 'Pingky',
        disPrecent: 50,
        price: 'Rp 7.000.000',
        discount: 'Rp 14.000.000',
        description: 'Cute bed set'
    }, 
    {
        img: pr8,
        name: 'Potty',
        description: 'Minimalist flower pot',
        price: 'Rp 500.000',
        new: true    
    }
]

export const RoomImages=[
    {
        id: 1,
        title:'bedroom',
        description: 'Inner peace',
        image: room1,
    },
    {
        id: 2,
        title:'bedroom',
        description: 'Inner peace',
        image: room2,
    },
    {
        id: 3,
        title:'bedroom',
        description: 'Inner peace',
        image: room3,
    },
    {
        id: 4,
        title:'bedroom',
        description: 'Inner peace',
        image: room4,
    }
]

import { v4 as uuidv4 } from 'uuid';

export type SofaType = {
  id: string;
  img: string;
  model: string;
  price: number;
  description: string;
  hashtags?: string[];
};

export const sofas: SofaType[] = [
  {
    id: uuidv4(),
    model: 'Superbe',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: 600,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    hashtags: ['sofa', 'cosy', 'green'],
  },
  {
    id: uuidv4(),
    model: 'Top',
    img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: 900,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    hashtags: ['sofa', 'cosy', 'traditional'],
  },
  {
    id: uuidv4(),
    model: 'Wahouoo',
    img: 'https://images.unsplash.com/photo-1619389735429-fe80000e7e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNvZmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 200,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    hashtags: ['sofa', 'cosy', 'leather'],
  },
  {
    id: uuidv4(),
    model: 'Génial',
    img: 'https://images.unsplash.com/photo-1634497885778-152eb6fd543d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29mYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 800,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    hashtags: ['sofa', 'cosy', 'concept'],
  },
  {
    id: uuidv4(),
    model: 'Ouf',
    img: 'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    price: 1000,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    hashtags: ['sofa', 'cosy', 'green'],
  },
  {
    id: uuidv4(),
    model: 'pas cher',
    img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    price: 50,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    hashtags: ['sofa', 'cosy', 'green'],
  },
  {
    id: uuidv4(),
    model: 'Sublime',
    img: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80',
    price: 600,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    hashtags: ['sofa', 'superbe', 'cosy', 'vintage'],
  },
  {
    id: uuidv4(),
    model: 'Merveilleux',
    img: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    price: 600,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    hashtags: ['sofa', 'superbe', 'cosy', 'modern'],
  },
  {
    id: uuidv4(),
    model: 'Confort',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: 600,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    hashtags: ['sofa', 'cosy', 'green'],
  },
];

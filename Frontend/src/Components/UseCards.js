// CardsContext.js
import { createContext, useContext, useState } from 'react';

const CardsContext = createContext();

 function UseCards() {
  return useContext(CardsContext);
}

export function CardsProvider({ children }) {
  const [cards, setCards] = useState([
    { 
      id: 1,
      category: 'Fitness',
      title: 'Get Fit At Home',
      image: 'fit.jpg',
    },
    {
      id: 2,
      category: 'Fashion',
      title: 'Dresses',
      image: 'dresses.jpg',
    },
    {
      id: 3,
      category: 'Shopping',
      title: 'Best categories',
      image: 'shop best categories.jpg',
    },
    {
      id: 4,
      category: 'Electronics',
      title: 'Laptops & Tablets',
      image: 'laptops and tablets.jpg',
    },
    {
      id: 5,
      category: 'Deals',
      title: 'Deals & Promotions',
      image: 'deals.jpg',
    },
    {
      id: 6,
      category: 'Electronics',
      title: 'Find Your Ideal TV',
      image: 'tv.jpg',
    },
    {
      id: 7,
      category: 'Shopping',
      title: 'Easy Returns',
      image: 'easy returns.jpg',
    },
    {
      id: 8,
      category: 'Beauty',
      title: 'Beauty Picks',
      image: 'beauty picks.jpg',
    },
    {
      id: 9,
      category: 'Electronics',
      title: 'Kindle E Readers',
      image: 'kindle e readers.jpg',
    },
    {
      id: 10,
      category: 'Pets',
      title: 'Pet Supplies',
      image: 'pet supplies.jpg',
    },
    {
      id: 11,
      category: 'Toys',
      title: 'New Toys',
      image: 'new arrival in toys.jpg',
    },
    {
      id: 12,
      category: 'Fitness',
      title: 'Your Fitness Needs',
      image: 'for your fitness.jpg',
    },
    {
      id: 13,
      category: 'Deals',
      title: 'Deals And Tools',
      image: 'deals in tools.jpg',
    },
    {
      id: 14,
      category: 'Home',
      title: 'Home Refresh',
      image: 'home refresh ideas.jpg',
    },
    {
      id: 15,
      category: 'Electronics',
      title: 'Smart Watches',
      image: 'smartwatches.jpg',
    },
    {
      id: 16,
      category: 'Toys',
      title: 'Toys Under $30',
      image: 'toys under 30.jpg',
    },
    {
      id: 17,
      category: 'Electronics',
      title: 'Electronics',
      image: 'electronics.jpg',
    },
    {
      id: 18,
      category: 'Kitchen',
      title: 'Kitchen Under $30',
      image: 'kitchen under 30$.jpg',
    },
    {
      id: 19,
      category: 'Home',
      title: 'Strip Lights',
      image: 'strip lights.jpg',
    },
    {
      id: 20,
      category: 'Gaming',
      title: 'Gaming Accessories',
      image: 'deals under 25$.jpg',
    },
  ]); 

  return <CardsContext.Provider value={cards}>{children}</CardsContext.Provider>;
}
export default UseCards;
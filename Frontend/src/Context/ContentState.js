import { createContext } from "react";
import { useState } from "react";

export const testContext =createContext();
function ContentState(props){
  const cardData = [
    { 
      id: 1,
      category: 'Fitness',
      title: 'Get Fit At Home',
      image: 'fit.jpg',
      price: '$49.99',
    },
    {
      id: 2,
      category: 'Fashion',
      title: 'Dresses',
      image: 'dresses.jpg',
      price: '$29.99',
    },
    {
      id: 3,
      category: 'Shopping',
      title: 'Best categories',
      image: 'shop best categories.jpg',
      price: '$9.99',
    },
    {
      id: 4,
      category: 'Electronics',
      title: 'Laptops & Tablets',
      image: 'laptops and tablets.jpg',
      price: '$599.99',
    },
    {
      id: 5,
      category: 'Deals',
      title: 'Deals & Promotions',
      image: 'deals.jpg',
      price: '$79.99',
    },
    {
      id: 6,
      category: 'Electronics',
      title: 'Find Your Ideal TV',
      image: 'tv.jpg',
      price: '$399.99',
    },
    {
      id: 7,
      category: 'Shopping',
      title: 'Easy Returns',
      image: 'easy returns.jpg',
      price: '$14.99',
    },
    {
      id: 8,
      category: 'Beauty',
      title: 'Beauty Picks',
      image: 'beauty picks.jpg',
      price: '$39.99',
    },
    {
      id: 9,
      category: 'Electronics',
      title: 'Kindle E Readers',
      image: 'kindle e readers.jpg',
      price: '$129.99',
    },
    {
      id: 10,
      category: 'Pets',
      title: 'Pet Supplies',
      image: 'pet supplies.jpg',
      price: '$19.99',
    },
    {
      id: 11,
      category: 'Toys',
      title: 'New Toys',
      image: 'new arrival in toys.jpg',
      price: '$15.99',
    },
    {
      id: 12,
      category: 'Fitness',
      title: 'Your Fitness Needs',
      image: 'for your fitness.jpg',
      price: '$59.99',
    },
    {
      id: 13,
      category: 'Deals',
      title: 'Deals And Tools',
      image: 'deals in tools.jpg',
      price: '$34.99',
    },
    {
      id: 14,
      category: 'Home',
      title: 'Home Refresh',
      image: 'home refresh ideas.jpg',
      price: '$69.99',
    },
    {
      id: 15,
      category: 'Electronics',
      title: 'Smart Watches',
      image: 'smartwatches.jpg',
      price: '$149.99',
    },
    {
      id: 16,
      category: 'Toys',
      title: 'Toys Under $30',
      image: 'toys under 30.jpg',
      price: '$24.99',
    },
    {
      id: 17,
      category: 'Electronics',
      title: 'Electronics',
      image: 'electronics.jpg',
      price: '$299.99',
    },
    {
      id: 18,
      category: 'Kitchen',
      title: 'Kitchen Under $30',
      image: 'kitchen under 30$.jpg',
      price: '$19.99',
    },
    {
      id: 19,
      category: 'Home',
      title: 'Strip Lights',
      image: 'strip lights.jpg',
      price: '$34.99',
    },
    {
      id: 20,
      category: 'Gaming',
      title: 'Gaming Accessories',
      image: 'deals under 25$.jpg',
      price: '$24.99',
    },
];

    const [cards,setCards] = useState(cardData);


    return(
        <div>
            <testContext.Provider value={{cards,setCards}}>
                {props.children}
            </testContext.Provider>
        </div>

    )
}
export default ContentState;
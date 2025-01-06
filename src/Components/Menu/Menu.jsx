// src/components/Menu.js
import React from 'react';
import MenuSection from './MenuSection';
import Explore from '../Home/Explore';

const menuData = {
  Cakes: [
    {
      id: 1,
      name: 'Chocolate Truffle Cake',
      description: 'Rich and creamy chocolate cake.',
      price: '$15.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Red Velvet Cake',
      description: 'Classic red velvet cake with cream cheese frosting.',
      price: '$18.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Vanilla Sponge Cake',
      description: 'Soft and fluffy vanilla sponge cake.',
      price: '$12.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      name: 'Black Forest Cake',
      description: 'Layers of chocolate cake with cherries and cream.',
      price: '$16.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      name: 'Fruit Cake',
      description: 'Fresh fruit toppings on a moist cake base.',
      price: '$14.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      name: 'Carrot Cake',
      description: 'Spiced carrot cake with cream cheese frosting.',
      price: '$13.99',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Burgers: [
    {
      id: 7,
      name: 'Cheeseburger',
      description: 'Juicy beef patty with melted cheese.',
      price: '$9.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 8,
      name: 'Chicken Burger',
      description: 'Grilled chicken patty with fresh lettuce.',
      price: '$10.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 9,
      name: 'Veggie Burger',
      description: 'Crispy veggie patty with fresh toppings.',
      price: '$8.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 10,
      name: 'Bacon Burger',
      description: 'Beef patty topped with crispy bacon.',
      price: '$11.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 11,
      name: 'Double Cheeseburger',
      description: 'Two beef patties with double cheese.',
      price: '$13.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 12,
      name: 'Spicy Chicken Burger',
      description: 'Zesty chicken patty with spicy sauce.',
      price: '$10.99',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Momos: [
    {
      id: 13,
      name: 'Steamed Chicken Momos',
      description: 'Delicious steamed dumplings filled with chicken.',
      price: '$5.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 14,
      name: 'Veg Momos',
      description: 'Steamed momos with a vegetable filling.',
      price: '$4.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 15,
      name: 'Fried Momos',
      description: 'Crispy fried dumplings filled with meat or veggies.',
      price: '$6.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 16,
      name: 'Paneer Momos',
      description: 'Dumplings stuffed with seasoned paneer.',
      price: '$6.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 17,
      name: 'Spicy Momos',
      description: 'Hot and spicy dumplings with chili sauce.',
      price: '$6.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 18,
      name: 'Tandoori Momos',
      description: 'Grilled momos with a smoky tandoori flavor.',
      price: '$7.99',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Rolls: [
    {
      id: 19,
      name: 'Chicken Roll',
      description: 'Stuffed with juicy chicken and fresh veggies.',
      price: '$7.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 20,
      name: 'Paneer Roll',
      description: 'Soft roll with spiced paneer filling.',
      price: '$6.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 21,
      name: 'Egg Roll',
      description: 'Fluffy egg filling in a crispy roll.',
      price: '$5.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 22,
      name: 'Veg Roll',
      description: 'Healthy veggie filling wrapped in a roll.',
      price: '$5.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 23,
      name: 'Cheese Roll',
      description: 'Cheesy filling in a toasted roll.',
      price: '$6.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 24,
      name: 'Spicy Chicken Roll',
      description: 'Roll with spiced chicken and tangy sauce.',
      price: '$8.49',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Chicken: [
    {
      id: 25,
      name: 'Grilled Chicken',
      description: 'Tender and juicy grilled chicken.',
      price: '$12.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 26,
      name: 'Chicken Wings',
      description: 'Spicy and crispy chicken wings.',
      price: '$8.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 27,
      name: 'Butter Chicken',
      description: 'Creamy butter chicken served with naan.',
      price: '$14.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 28,
      name: 'Chicken Curry',
      description: 'Rich and flavorful chicken curry.',
      price: '$13.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 29,
      name: 'Chicken Tikka',
      description: 'Spiced and grilled chicken skewers.',
      price: '$11.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 30,
      name: 'Popcorn Chicken',
      description: 'Bite-sized crispy chicken pieces.',
      price: '$9.99',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Tea: [
    {
      id: 31,
      name: 'Masala Chai',
      description: 'Traditional spiced Indian tea.',
      price: '$2.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 32,
      name: 'Green Tea',
      description: 'Healthy green tea with a refreshing flavor.',
      price: '$3.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 33,
      name: 'Black Tea',
      description: 'Bold and strong classic black tea.',
      price: '$2.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 34,
      name: 'Ginger Tea',
      description: 'Tea infused with fresh ginger.',
      price: '$3.29',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 35,
      name: 'Herbal Tea',
      description: 'Relaxing tea with herbal infusions.',
      price: '$3.99',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Soup: [
    {
      id: 36,
      name: 'Tomato Soup',
      description: 'Rich and creamy tomato soup.',
      price: '$5.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 37,
      name: 'Hot and Sour Soup',
      description: 'Spicy and tangy Asian soup.',
      price: '$6.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 38,
      name: 'Chicken Soup',
      description: 'Comforting chicken broth with vegetables.',
      price: '$7.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 39,
      name: 'Sweet Corn Soup',
      description: 'Sweet and creamy corn soup.',
      price: '$5.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 40,
      name: 'Mushroom Soup',
      description: 'Delicious soup with mushrooms and cream.',
      price: '$6.99',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Noodles: [
    {
      id: 41,
      name: 'Veg Hakka Noodles',
      description: 'Classic stir-fried noodles with vegetables.',
      price: '$7.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 42,
      name: 'Chicken Chow Mein',
      description: 'Savory noodles with chicken and veggies.',
      price: '$8.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 43,
      name: 'Schezwan Noodles',
      description: 'Spicy noodles with Schezwan sauce.',
      price: '$7.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 44,
      name: 'Pad Thai',
      description: 'Sweet and tangy Thai-style noodles.',
      price: '$9.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 45,
      name: 'Egg Noodles',
      description: 'Delicious egg-based noodles.',
      price: '$6.99',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Pizza: [
    {
      id: 46,
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh tomatoes and mozzarella.',
      price: '$12.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 47,
      name: 'Pepperoni Pizza',
      description: 'Topped with spicy pepperoni and cheese.',
      price: '$14.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 48,
      name: 'BBQ Chicken Pizza',
      description: 'Pizza topped with barbecue chicken and onions.',
      price: '$15.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 49,
      name: 'Veggie Supreme Pizza',
      description: 'Loaded with fresh veggies and cheese.',
      price: '$13.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 50,
      name: 'Four Cheese Pizza',
      description: 'Combination of four rich cheeses.',
      price: '$16.99',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Sandwich: [
    {
      id: 51,
      name: 'Grilled Cheese Sandwich',
      description: 'Classic sandwich with melted cheese.',
      price: '$6.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 52,
      name: 'Club Sandwich',
      description: 'Triple-layered sandwich with chicken and veggies.',
      price: '$8.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 53,
      name: 'Veg Sandwich',
      description: 'Stuffed with fresh vegetables and cheese.',
      price: '$5.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 54,
      name: 'Chicken Sandwich',
      description: 'Grilled chicken with mayo and lettuce.',
      price: '$7.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 55,
      name: 'Egg Sandwich',
      description: 'Boiled eggs with spices and veggies in bread.',
      price: '$6.49',
      image: 'https://via.placeholder.com/300',
    },
  ],
  Rolls: [
    {
      id: 56,
      name: 'Chicken Roll',
      description: 'Stuffed with juicy chicken and fresh veggies.',
      price: '$7.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 57,
      name: 'Paneer Roll',
      description: 'Soft roll with spiced paneer filling.',
      price: '$6.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 58,
      name: 'Egg Roll',
      description: 'Fluffy egg filling in a crispy roll.',
      price: '$5.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 59,
      name: 'Veg Roll',
      description: 'Healthy veggie filling wrapped in a roll.',
      price: '$5.49',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 60,
      name: 'Cheese Roll',
      description: 'Cheesy filling in a toasted roll.',
      price: '$6.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 61,
      name: 'Spicy Chicken Roll',
      description: 'Roll with spiced chicken and tangy sauce.',
      price: '$8.49',
      image: 'https://via.placeholder.com/300',
    },
  ]
};

const Menu = () => {
  return (
    <div className=" py-8 px-4 mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-12">
        Explore Our Menu
      </h1>
      <Explore />
      {Object.entries(menuData).map(([category, items]) => (
        <MenuSection key={category} category={category} items={items} />
      ))}
    </div>
  );
};

export default Menu;

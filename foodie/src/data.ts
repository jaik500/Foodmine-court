import { Food } from "./app/shared/models/Food";

export const sample_foods: Food[] = [
   { 
        id: '5',
        name: 'Chicken soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'asset/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
    },
    {
        id: '6',
        name: 'Vegetable Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: 'asset/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
    }

]
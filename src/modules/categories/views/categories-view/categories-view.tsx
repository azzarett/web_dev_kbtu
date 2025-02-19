/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import { ProductCard } from '@/modules/products/components/product-card';

import { CategoryCard } from '../../components/category-card/category-card';
import styles from './categories-view.module.css';

const categories = [
  {
    name: 'Электроника',
    image: '/images/electronics.jpg',
    description: 'Современные гаджеты и устройства',
    products: [
      {
        image: '/images/phone.jpg',
        name: 'Смартфон',
        description: 'Флагманский смартфон',
        price: 799,
        rating: 4.5,
      },
      {
        image: '/images/laptop.jpg',
        name: 'Ноутбук',
        description: 'Мощный ноутбук',
        price: 1200,
        rating: 4.8,
      },
      {
        image: '/images/headphones.jpg',
        name: 'Наушники',
        description: 'Беспроводные наушники',
        price: 199,
        rating: 4.6,
      },
      {
        image: '/images/tablet.jpg',
        name: 'Планшет',
        description: 'Компактный планшет',
        price: 499,
        rating: 4.3,
      },
      {
        image: '/images/smartwatch.jpg',
        name: 'Смарт-часы',
        description: 'Стильные умные часы',
        price: 299,
        rating: 4.7,
      },
    ],
  },
  {
    name: 'Одежда',
    image: '/images/clothing.jpg',
    description: 'Модная одежда для всех',
    products: [
      {
        image: '/images/tshirt.jpg',
        name: 'Футболка',
        description: 'Качественная футболка',
        price: 29,
        rating: 4.2,
      },
      {
        image: '/images/jeans.jpg',
        name: 'Джинсы',
        description: 'Стильные джинсы',
        price: 59,
        rating: 4.5,
      },
      {
        image: '/images/jacket.jpg',
        name: 'Куртка',
        description: 'Тёплая зимняя куртка',
        price: 99,
        rating: 4.6,
      },
      {
        image: '/images/shoes.jpg',
        name: 'Кроссовки',
        description: 'Удобные кроссовки',
        price: 89,
        rating: 4.4,
      },
      {
        image: '/images/hat.jpg',
        name: 'Шапка',
        description: 'Зимняя шапка',
        price: 25,
        rating: 4.3,
      },
    ],
  },
  {
    name: 'Бытовая техника',
    image: '/images/appliances.jpg',
    description: 'Лучшие решения для дома',
    products: [
      {
        image: '/images/vacuum.jpg',
        name: 'Пылесос',
        description: 'Мощный пылесос',
        price: 199,
        rating: 4.6,
      },
      {
        image: '/images/microwave.jpg',
        name: 'Микроволновка',
        description: 'Современная микроволновка',
        price: 150,
        rating: 4.5,
      },
      {
        image: '/images/fridge.jpg',
        name: 'Холодильник',
        description: 'Энергоэффективный холодильник',
        price: 999,
        rating: 4.8,
      },
      {
        image: '/images/washer.jpg',
        name: 'Стиральная машина',
        description: 'Автоматическая стиральная машина',
        price: 799,
        rating: 4.7,
      },
      {
        image: '/images/coffee.jpg',
        name: 'Кофемашина',
        description: 'Для настоящих любителей кофе',
        price: 349,
        rating: 4.6,
      },
    ],
  },
  {
    name: 'Книги',
    image: '/images/books.jpg',
    description: 'Знания и развлечения',
    products: [
      {
        image: '/images/book1.jpg',
        name: 'Фантастика',
        description: 'Лучшие фантастические романы',
        price: 15,
        rating: 4.8,
      },
      {
        image: '/images/book2.jpg',
        name: 'Детективы',
        description: 'Захватывающие детективные истории',
        price: 18,
        rating: 4.7,
      },
      {
        image: '/images/book3.jpg',
        name: 'Бизнес',
        description: 'Книги о финансах и успехе',
        price: 20,
        rating: 4.5,
      },
      {
        image: '/images/book4.jpg',
        name: 'Наука',
        description: 'Популярные научные издания',
        price: 22,
        rating: 4.6,
      },
      {
        image: '/images/book5.jpg',
        name: 'Фэнтези',
        description: 'Магические миры и приключения',
        price: 17,
        rating: 4.9,
      },
    ],
  },
];

export const CategoryView = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      {selectedCategory === null ? (
        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <div key={index} onClick={() => setSelectedCategory(index)}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.productsView}>
          <button
            className={styles.backButton}
            onClick={() => setSelectedCategory(null)}
          >
            ← Назад
          </button>
          <h2 className={styles.categoryTitle}>
            {categories[selectedCategory].name}
          </h2>
          <div className={styles.productsGrid}>
            {categories[selectedCategory].products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

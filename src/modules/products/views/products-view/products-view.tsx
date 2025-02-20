import { useParams } from 'react-router-dom';

import { ProductCard } from '../../components/product-card';
import styles from './products-view.module.css';

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
        url: 'https://www.google.com',
      },
      {
        image: '/images/laptop.jpg',
        name: 'Ноутбук',
        description: 'Мощный ноутбук',
        price: 1200,
        rating: 4.8,
        url: 'https://www.google.com',
      },
      {
        image: '/images/headphones.jpg',
        name: 'Наушники',
        description: 'Беспроводные наушники',
        price: 199,
        rating: 4.6,
        url: 'https://www.google.com',
      },
      {
        image: '/images/tablet.jpg',
        name: 'Планшет',
        description: 'Компактный планшет',
        price: 499,
        rating: 4.3,
        url: 'https://www.google.com',
      },
      {
        image: '/images/smartwatch.jpg',
        name: 'Смарт-часы',
        description: 'Стильные умные часы',
        price: 299,
        rating: 4.7,
        url: 'https://www.google.com',
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
        url: 'https://www.google.com',
      },
      {
        image: '/images/jeans.jpg',
        name: 'Джинсы',
        description: 'Стильные джинсы',
        price: 59,
        rating: 4.5,
        url: 'https://www.google.com',
      },
      {
        image: '/images/jacket.jpg',
        name: 'Куртка',
        description: 'Тёплая зимняя куртка',
        price: 99,
        rating: 4.6,
        url: 'https://www.google.com',
      },
      {
        image: '/images/shoes.jpg',
        name: 'Кроссовки',
        description: 'Удобные кроссовки',
        price: 89,
        rating: 4.4,
        url: 'https://www.google.com',
      },
      {
        image: '/images/hat.jpg',
        name: 'Шапка',
        description: 'Зимняя шапка',
        price: 25,
        rating: 4.3,
        url: 'https://www.google.com',
      },
    ],
  },
  {
    name: 'Бытовая техника',
    image: '/images/appliances.jpg',
    description: 'Лучшие решения для дома',
    products: [
      {
        image:
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=preview-large',
        name: 'Пылесос',
        description: 'Мощный пылесос',
        price: 199,
        rating: 4.6,
        url: 'https://www.google.com',
      },
      {
        image: '/images/microwave.jpg',
        name: 'Микроволновка',
        description: 'Современная микроволновка',
        price: 150,
        rating: 4.5,
        url: 'https://www.google.com',
      },
      {
        image: '/images/fridge.jpg',
        name: 'Холодильник',
        description: 'Энергоэффективный холодильник',
        price: 999,
        rating: 4.8,
        url: 'https://www.google.com',
      },
      {
        image: '/images/washer.jpg',
        name: 'Стиральная машина',
        description: 'Автоматическая стиральная машина',
        price: 799,
        rating: 4.7,
        url: 'https://www.google.com',
      },
      {
        image: '/images/coffee.jpg',
        name: 'Кофемашина',
        description: 'Для настоящих любителей кофе',
        price: 349,
        rating: 4.6,
        url: 'https://www.google.com',
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
        url: 'https://www.google.com',
      },
      {
        image: '/images/book2.jpg',
        name: 'Детективы',
        description: 'Захватывающие детективные истории',
        price: 18,
        rating: 4.7,
        url: 'https://www.google.com',
      },
      {
        image: '/images/book3.jpg',
        name: 'Бизнес',
        description: 'Книги о финансах и успехе',
        price: 20,
        rating: 4.5,
        url: 'https://www.google.com',
      },
      {
        image: '/images/book4.jpg',
        name: 'Наука',
        description: 'Популярные научные издания',
        price: 22,
        rating: 4.6,
        url: 'https://www.google.com',
      },
      {
        image: '/images/book5.jpg',
        name: 'Фэнтези',
        description: 'Магические миры и приключения',
        price: 17,
        rating: 4.9,
        url: 'https://www.google.com',
      },
    ],
  },
];

export const ProductView = () => {
  const { categoryName } = useParams();
  const category = categories.find((cat) => cat.name === categoryName);

  if (!category) {
    return <p className={styles.error}>Категория не найдена</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{category.name}</h2>
      <div className={styles.productsGrid}>
        {category.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

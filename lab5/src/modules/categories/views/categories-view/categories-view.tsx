/* eslint-disable react/no-array-index-key */
import { useNavigate } from 'react-router-dom';

import { CategoryCard } from '../../components/category-card/category-card';
import styles from './categories-view.module.css';

const categories = [
  {
    name: 'Электроника',
    image: '/images/electronics.jpeg',
    description: 'Современные гаджеты и устройства',
  },
  {
    name: 'Одежда',
    image: '/images/clothing.jpeg',
    description: 'Модная одежда для всех',
  },
  {
    name: 'Бытовая техника',
    image: '/images/appliances.jpeg',
    description: 'Лучшие решения для дома',
  },
  {
    name: 'Книги',
    image: '/images/books.jpeg',
    description: 'Знания и развлечения',
  },
];

export const CategoryView = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Категории</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products/${category.name}`)}
            className={styles.categoryCard}
          >
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

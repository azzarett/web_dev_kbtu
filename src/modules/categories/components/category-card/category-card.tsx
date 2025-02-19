import styles from './category-card.module.css';

interface CategoryCardProps {
  category: {
    image: string;
    name: string;
  };
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={category.image} alt={category.name} />
      <div className={styles.content}>
        <h3 className={styles.name}>{category.name}</h3>
      </div>
    </div>
  );
};

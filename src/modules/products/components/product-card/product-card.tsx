import styles from './product-card.module.css';

interface ProductCardProps {
  product: {
    image: string;
    name: string;
    description: string;
    price: number;
    rating: number;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image} alt={product.name} />
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.bottom}>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <p className={styles.rating}>⭐ {product.rating}</p>
        </div>
      </div>
    </div>
  );
};

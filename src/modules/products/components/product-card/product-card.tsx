import { Link } from 'react-router-dom';

import styles from './product-card.module.css';

interface ProductCardProps {
  product: {
    image: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    url: string;
  };
}

const shareOnWhatsApp = (product: any) => {
  const text = `🔥 ${product.name}\n${product.description}\n💰 Цена: ${product.price}₸\n⭐ Рейтинг: ${product.rating}\n🔗 ${product.url}`;
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/?text=${encodedText}`;
};

const shareOnTelegram = (product: any) => {
  const text = `🔥 ${product.name}\n${product.description}\n💰 Цена: ${product.price}₸\n⭐ Рейтинг: ${product.rating}\n🔗 ${product.url}`;
  const encodedText = encodeURIComponent(text);
  return `https://t.me/share/url?url=${product.url}&text=${encodedText}`;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image} alt={product.name} />
      <div className={styles.content}>
        <Link to={product.url}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.bottom}>
          <p className={styles.price}>{product.price}тг</p>
          <p className={styles.rating}>⭐ {product.rating}</p>
          <div className={styles.shareButtons}>
            <a
              href={shareOnWhatsApp(product)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp" />
            </a>
            <a
              href={shareOnTelegram(product)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-telegram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useParams } from "react-router-dom";
import styles from "./detail-product-view.module.css";

const categories = [
  {
    name: "Электроника",
    image: "/images/electronics.jpg",
    description: "Современные гаджеты и устройства",
    products: [
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium",
        name: "Зарядное устройство Apple 18W",
        description:
          "Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый",
        price: 8386,
        likes: 100,
        url: "https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium",
        name: "iPhone 16 Pro Max 256Gb черный",
        description:
          "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.",
        price: 688690,
        likes: 43,
        url: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium",
        name: 'ThundeRobot 911 X Wild Hunter G2 Pro 15.6"',
        description:
          'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro /',
        price: 529758,
        likes: 413,
        url: "https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h5d/h3c/64865317584926.jpg?format=gallery-medium",
        name: "Apple iPad 2022",
        description:
          "Планшет Apple iPad 2022 10.9 Wi-Fi 10.9 дюйм 4 Гб/64 Гб серебристый",
        price: 196977,
        likes: 4124,
        url: "https://kaspi.kz/shop/p/apple-ipad-2022-10-9-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium",
        name: "Смарт-часы Apple Watch SE",
        description:
          "Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый",
        price: 120645,
        likes: 445,
        url: "https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000",
      },
    ],
  },
  {
    name: "Одежда",
    image: "/images/clothing.jpg",
    description: "Модная одежда для всех",
    products: [
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h5d/hc1/86992655646750.jpg?format=gallery-medium",
        name: "Сарафан черный",
        description: "Сарафан, повседневное платье, вечернее платье",
        price: 4145,
        likes: 100,
        url: "https://kaspi.kz/shop/p/sarafan-30295090-110067001-chernyi-44-123067288/?c=750000000&hasVariants=true",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h3e/h20/85825436712990.jpg?format=gallery-medium",
        name: "Футболка черный",
        description:
          "Эта постиранная хлопковая футболка изготовлена из высококачественного хлопка.",
        price: 3152,
        likes: 125,
        url: "https://kaspi.kz/shop/p/futbolka-730323194-chernyi-s-118690121/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hfd/h22/87121922228254.jpg?format=gallery-medium",
        name: "Повседневный костюм синий, темно-синий",
        description:
          "Для любителей спортивного, свободного, оверсайз стиля, одеждa этого года.",
        price: 10994,
        likes: 43,
        url: "https://kaspi.kz/shop/p/povsednevnyi-kostjum-30241445-699061223-sinii-temno-sinii-42-48-123561323/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h13/hf2/85143754670110.jpg?format=gallery-medium",
        name: "Жилет SHEIN черный",
        description:
          "Жилет свободного кроя. Оверсайз. Размер L подойдёт на 46 размер.",
        price: 3889,
        likes: 234,
        url: "https://kaspi.kz/shop/p/zhilet-shein-239717-chernyi-l-116560081/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hd6/h13/84843074256926.jpg?format=gallery-medium",
        name: "Комплект 5.11 черный",
        description:
          "Отлично сохраняет тепло, не позволяя потеть человеку. Пригодно к носке как осенью так и зимой смело.",
        price: 3799,
        likes: 76,
        url: "https://kaspi.kz/shop/p/komplekt-5-11-8073-chernyi-46-115785506/?c=750000000",
      },
    ],
  },
  {
    name: "Бытовая техника",
    image: "/images/appliances.jpg",
    description: "Лучшие решения для дома",
    products: [
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=preview-large",
        name: "Deerma DX700 белый",
        description:
          "Пылесос Deerma DX700 – стильный, компактный и удобный пылесос",
        price: 15985,
        likes: 96,
        url: "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium",
        name: "Стиральная машина LG F2J3NS0W белый",
        description: "Глубина стиральной машины LG F2J3NS0W всего 44 см",
        price: 161000,
        likes: 645,
        url: "https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h37/h44/87138526232606.jpg?format=gallery-medium",
        name: "Микроволновая печь Hansa AMMF19M1SH серебристый",
        description: "Греет быстро. Без постороннего запаха. С подсветкой.",
        price: 27990,
        likes: 4543,
        url: "https://kaspi.kz/shop/p/hansa-ammf19m1sh-serebristyi-123644190/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/he1/hef/85459712147486.jpg?format=gallery-medium",
        name: "Электрочайник Yingzheng ZY-303 черный",
        description:
          "Блокировка включения без воды, отключение при закипании, отключение при снятии с подставки",
        price: 3149,
        likes: 23,
        url: "https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-303-chernyi-117520213/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hd0/h3f/87089997873182.jpg?format=gallery-medium",
        name: "Электрогриль Xiaomi Smart Air Fryer 6.5L BHR7357EU",
        description:
          "Конвекционный нагрев на 360° - модернизированный круглый воздуховод",
        price: 58872,
        likes: 50,
        url: "https://kaspi.kz/shop/p/elektrogril-xiaomi-smart-air-fryer-6-5l-bhr7357eu-118273472/?c=750000000",
      },
    ],
  },
  {
    name: "Книги",
    image: "/images/books.jpg",
    description: "Знания и развлечения",
    products: [
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium",
        name: "Книга Клир Д.: Атомные привычки",
        description:
          "Лучшая деловая книга 2018 года по версии Fast Company.Лучшая книга по самопомощи 2018 года по версии Business Insider.",
        price: 2197,
        likes: 43,
        url: "https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h63/h8a/87162104250398.png?format=gallery-medium",
        name: "Книга Керімбай С., Нәби Ә.: Қаныш және Ғылыми майдан",
        description:
          "Бұл кітап ұлы ғалым Қаныш Сәтбаевтың өмірі мен ғылыми қызметіне арналады.",
        price: 3639,
        likes: 54,
        url: "https://kaspi.kz/shop/p/ker-mbai-s-n-bi-anysh-zh-ne-ylymi-maidan-123730850/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/p8d/pc7/15575971.jpg?format=gallery-medium",
        name: "Книга Меһди Миразими: БІР БЕТТІК КІТАП",
        description:
          "Парсы мәдениетінде «Бір беттік кітап» деген қызық жанр бар. ",
        price: 4905,
        likes: 20,
        url: "https://kaspi.kz/shop/p/me-di-mirazimi-b-r-bett-k-k-tap-132113252/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h02/h88/85767456817182.jpg?format=gallery-medium",
        name: "Книга Керімбай С., Құспан А.: Бейсен және болмыс",
        description:
          "Бұл кітапта журналист Бейсен Құранбектің болмысына экзистенциялық талдау жасалады.",
        price: 2400,
        likes: 46,
        url: "https://kaspi.kz/shop/p/ker-mbai-s-span-a-beisen-zh-ne-bolmys-103354158/?c=750000000",
      },
      {
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h80/h11/66787724066846.jpg?format=gallery-medium",
        name: "Раскраска Magic water Водная раскраска",
        description: "Магические миры и приключения",
        price: 395,
        likes: 49,
        url: "https://kaspi.kz/shop/p/magic-water-vodnaja-raskraska-101860421/?c=750000000",
      },
    ],
  },
];

export const DetailProductView = () => {
  const { productName } = useParams();
  const product = categories
    .flatMap((category) => category.products)
    .find((product) => product.name === productName);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{product?.name}</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img
            src={product?.image}
            alt={product?.name}
            className={styles.image}
          />
          <h3 className={styles.name}>{product?.description}</h3>
          <div className={styles.footer}>
            <p className={styles.price}>{product?.price}₸</p>
            <button className={styles.button}>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

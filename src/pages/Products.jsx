import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Металлоконструкции промышленных зданий и сооружений',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      description: 'Производство металлических каркасов для промышленных объектов, ангаров, складов и производственных зданий.'
    },
    {
      id: 2,
      title: 'Металлоконструкции гражданских зданий и сооружений',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      description: 'Стальные конструкции для жилых и общественных зданий, торговых центров и офисных комплексов.'
    },
    {
      id: 3,
      title: 'Металлоконструкции хозяйственно-бытового назначения',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      description: 'Специализированные конструкции для бытовых и хозяйственных нужд, включая гаражи и подсобные помещения.'
    },
    {
      id: 4,
      title: 'Оборудование для железнодорожной и транспортной техники',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      description: 'Комплектующие и оборудование для железнодорожного транспорта, вагонов и подвижного состава.'
    },
    {
      id: 5,
      title: 'Горно-шахтное оборудование',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      description: 'Специализированное оборудование для горнодобывающей промышленности и шахтного строительства.'
    },
    {
      id: 6,
      title: 'Нестандартизированное оборудование',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      description: 'Индивидуальные решения и нестандартное оборудование по техническим заданиям заказчика.'
    }
  ];

  return (
    <div className="products">
      <section className="hero-section">
        <div className="container">
          <h1>Каталог продукции</h1>
          <p>Широкий спектр металлоконструкций и оборудования для различных отраслей промышленности</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <a href="/contacts" className="product-link">Узнать больше</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Преимущества нашей продукции</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏭</div>
              <h3>Собственное производство</h3>
              <p>Полный цикл производства от проектирования до готовой продукции</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Современное оборудование</h3>
              <p>Использование передовых технологий и высокоточного оборудования</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Контроль качества</h3>
              <p>Многоуровневая система контроля качества на всех этапах производства</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Доставка и монтаж</h3>
              <p>Полный комплекс услуг включая доставку и профессиональный монтаж</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;


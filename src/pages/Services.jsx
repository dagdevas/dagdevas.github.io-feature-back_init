import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Резка металла',
      icon: '✂️',
      description: 'Использование различных инструментов и методов для разделения металлических листов или заготовок на нужные размеры или формы.',
      features: ['Лазерная резка', 'Плазменная резка', 'Газокислородная резка', 'Механическая резка']
    },
    {
      id: 2,
      title: 'Сверление отверстий',
      icon: '🔧',
      description: 'Создание отверстий в металлических деталях с помощью сверлильного инструмента.',
      features: ['Точное позиционирование', 'Различные диаметры', 'Глубокое сверление', 'Обработка твердых сплавов']
    },
    {
      id: 3,
      title: 'Токарная обработка',
      icon: '⚙️',
      description: 'Процесс формирования металлических изделий путем вращения заготовки и использования режущего инструмента.',
      features: ['Наружная обработка', 'Внутренняя обработка', 'Нарезание резьбы', 'Точение конусов']
    },
    {
      id: 4,
      title: 'Фрезерная обработка',
      icon: '🔨',
      description: 'Создание сложных форм и поверхностей на металлических деталях с помощью фрезерного станка и фрез.',
      features: ['3D фрезеровка', 'Обработка пазов', 'Создание зубчатых колес', 'Обработка плоскостей']
    },
    {
      id: 5,
      title: 'Шлифовка и полировка',
      icon: '✨',
      description: 'Улучшение качества поверхности металлических изделий путем удаления неровностей и придания гладкости.',
      features: ['Плоское шлифование', 'Круглое шлифование', 'Полировка до зеркального блеска', 'Обработка сложных поверхностей']
    },
    {
      id: 6,
      title: 'Сварка металла',
      icon: '🔥',
      description: 'Соединение металлических деталей путем нагрева и использования специальных сварочных материалов.',
      features: ['Ручная дуговая сварка', 'Автоматическая сварка', 'Аргонодуговая сварка', 'Сварка под флюсом']
    },
    {
      id: 7,
      title: 'Гибка металла',
      icon: '📐',
      description: 'Изменение формы металлических деталей путем применения силы для создания изгибов и углов.',
      features: ['Гибка листового металла', 'Гибка труб', 'Создание сложных форм', 'Точные углы изгиба']
    },
    {
      id: 8,
      title: 'Обработка поверхностей',
      icon: '🎨',
      description: 'Нанесение покрытий, окрашивание или другие методы для защиты металлических изделий от коррозии или улучшения их внешнего вида.',
      features: ['Гальванические покрытия', 'Порошковая покраска', 'Анодирование', 'Цинкование']
    }
  ];

  return (
    <div className="services">
      <section className="hero-section">
        <div className="container">
          <h1>Услуги и сервис</h1>
          <p>Широкий спектр производственных услуг по обработке металла</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a href="/contacts" className="service-link">Узнать больше</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Наш производственный процесс</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Консультация</h3>
              <p>Обсуждение технических требований и возможностей</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Проектирование</h3>
              <p>Разработка технической документации и чертежей</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Производство</h3>
              <p>Изготовление изделий с контролем качества</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Доставка</h3>
              <p>Транспортировка готовой продукции к заказчику</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


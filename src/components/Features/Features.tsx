import React from 'react';
import './Features.css';

const features = [
  "ИИ-навигация",
  "Голосовой ассистент",
  "Анализ маршрута",
  "Ассистент водителя"
];

const Features = () => (
  <section className="features" id="features">
    {features.map((feature, index) => (
      <div className="feature" key={index}>
        <h3>{feature}</h3>
        <button>Подробнее</button>
      </div>
    ))}
  </section>
);

export default Features;
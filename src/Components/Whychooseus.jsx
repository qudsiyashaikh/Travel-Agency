import React from 'react';
import { FaHeadset, FaDollarSign, FaMapMarkedAlt } from 'react-icons/fa';

const features = [
  { icon: <FaHeadset />, text: '24/7 Support' },
  { icon: <FaDollarSign />, text: 'Best Price Guarantee' },
  { icon: <FaMapMarkedAlt />, text: 'Handpicked Tours' },
];

const WhyChooseUs = () => {
  return (
    <div className="container">
      <h2>Why Choose Us</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {features.map((feature, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            {feature.icon}
            <h3>{feature.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

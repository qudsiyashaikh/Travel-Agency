import React from 'react';

const testimonials = [
  { name: 'Aarav Mehta', feedback: 'Perfectly planned trip! The Taj Mahal visit was simply surreal.', rating: '⭐⭐⭐⭐⭐' },
  { name: '', feedback: 'Every single moment felt magical. Can’t wait to book my next adventure!', rating: '⭐⭐⭐⭐⭐' },
];

const Testimonials = () => {
  return (
    <div className="container">
      <h2 >Testimonials</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
            <p>{testimonial.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import { Testimonial } from '../../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${
          index < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : index < rating 
              ? 'text-yellow-400 fill-yellow-400 opacity-50' 
              : 'text-gray-300'
        }`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">What Our Pilgrims Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
            Hear from fellow Muslims who embarked on a blessed journey with Bin Mushtaq.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 min-w-full sm:min-w-0">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-[300px] bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.date}</p>
                  </div>
                  <Quote className="ml-auto h-5 w-5 text-primary-400" />
                </div>

                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

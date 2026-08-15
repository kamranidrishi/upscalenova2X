import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            See how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(Math.floor(t.rating))].map((_, i) => (
                      <Star key={`full-${i}`} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    {t.rating % 1 !== 0 && (
                      <StarHalf className="w-5 h-5 fill-amber-400 text-amber-400" />
                    )}
                    {[...Array(5 - Math.ceil(t.rating))].map((_, i) => (
                      <Star key={`empty-${i}`} className="w-5 h-5 text-slate-200 fill-slate-50" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-700">{t.rating} / 5.0</span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-11 h-11 rounded-full ${t.initialsBg} flex items-center justify-center font-extrabold text-sm shadow-xs`}>
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">{t.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

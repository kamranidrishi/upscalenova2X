import React from 'react';
import { User, Linkedin, Twitter, Phone } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';
import brijeshPhoto from '../assets/images/brijesh_chauhan_photo_1786562108982.jpg';

export const LeadershipSection: React.FC = () => {
  const leaders = [
    {
      name: 'Kamran Idrishi',
      role: 'Founder',
      bio: 'Visionary leader driving digital transformation and modern web engineering for businesses globally.',
      initials: 'KI',
      photoUrl: 'https://drive.google.com/thumbnail?id=1rrMoTJrCilC8VAacHF6Ol_dB6FFduLfm&sz=w1000'
    },
    {
      name: 'Brijesh Chauhan',
      role: 'Co-Founder',
      bio: 'Strategic mind focused on scaling modern web solutions, client relationships, and business operations.',
      initials: 'BC',
      photoUrl: brijeshPhoto
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Leadership
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            The minds behind Upscale Nova, dedicated to elevating your digital presence.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="bg-slate-50/80 rounded-3xl p-8 border border-slate-100 flex flex-col items-center text-center space-y-4 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar Icon */}
              <div className="w-24 h-24 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black text-2xl shadow-inner border-4 border-white overflow-hidden relative">
                {leader.photoUrl ? (
                  <img src={leader.photoUrl} alt={leader.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <User className="w-12 h-12 text-indigo-500" />
                )}
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">{leader.name}</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">{leader.role}</span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                {leader.bio}
              </p>

              {/* Social icons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 flex items-center justify-center transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

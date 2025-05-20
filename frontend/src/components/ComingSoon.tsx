import React from 'react';
import { Phone, Clock, MapPin, Plane, Code, Laptop } from 'lucide-react';

const travelFeatures = [
  {
    image: "https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFra2FoJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D",
    title: "Best Packages"
  },
    {
    image: "https://images.unsplash.com/photo-1668304521248-0dd0cc00fbfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fFNhdWRpYSUyMGFyYWJpYXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Economy packages"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661923086373-73176f7c004a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG90ZWxzfGVufDB8fDB8fHww",
    title: "Luxury Hotels"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fHww",
    title: "Flight Booking"
  },
  {
    image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Visa Services"
  },
  {
    image: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Tour Packages"
  },
  {
    image: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Local Guide"
  },

];

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col items-center text-center animate-fadeIn">
          <div className="relative mb-8">
            <Plane className="w-16 h-16 text-amber-400 animate-float" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="text-amber-400">Explore</span> the World with Us
          </h1>
          
          <div className="w-24 h-1 bg-amber-400 my-6 rounded-full"></div>
          
          <div className="flex items-center space-x-3 mb-8">
            <Code className="w-7 h-7 text-amber-400 animate-development" />
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-light drop-shadow-md">
              <span className="typewriter">Website Under Development</span>
            </h2>
            <style>
              {`
              .typewriter {
              display: inline-block;
              overflow: hidden;
              border-right: .15em solid #fbbf24;
              white-space: nowrap;
              animation: typing 4s steps(28, end) infinite, blink-caret .85s step-end infinite;
              animation-delay: 2s, 2s;
              animation-iteration-count: infinite, infinite;
              animation-fill-mode: forwards, none;
              animation-direction: normal, normal;
              /* The below line ensures a pause after typing */
              animation-timing-function: steps(28, end), linear;
              }
              @keyframes typing {
              0% { width: 0 }
              80% { width: 100% }
              100% { width: 100% }
              }
              @keyframes blink-caret {
              from, to { border-color: transparent }
              50% { border-color: #fbbf24; }
              }
              `}
            </style>
            <Laptop className="w-7 h-7 text-amber-400 animate-development" />
          </div>

          <div className="w-full max-w-3xl mb-12 overflow-hidden">
            <div className="flex space-x-4 animate-code" style={{ width: '200%' }}>
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex space-x-4" style={{ width: '100%' }}>
                  {travelFeatures.map((feature, j) => (
                    <div key={j} className="flex-none w-48 h-48 glass-effect rounded-xl overflow-hidden group relative">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
                        <p className="text-white text-sm font-medium">{feature.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-effect p-8 rounded-2xl shadow-2xl w-full max-w-xl mb-24">
            <h3 className="text-white text-2xl font-semibold mb-8">
              Connect With Us
            </h3>
            
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4 group transition-transform duration-300 hover:translate-x-2">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <p className="text-white/70 text-sm">Call us for details</p>
                  <a 
                    href="tel:+923224340536" 
                    className="text-white font-medium hover:text-amber-400 transition-colors duration-300 text-lg"
                  >
                    +92 322 4340536
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group transition-transform duration-300 hover:translate-x-2">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <p className="text-white/70 text-sm">Coming Soon</p>
                  <p className="text-white font-medium text-lg">
                    Website Launch in Progress
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group transition-transform duration-300 hover:translate-x-2">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <p className="text-white/70 text-sm">Explore with</p>
                  <p className="text-white font-medium text-lg">
                    Bin Mushtaq Travel & Tours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
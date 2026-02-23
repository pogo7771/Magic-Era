import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Tanuja Gupta",
    role: "Developer",
    text: "Magic Era has guided me well in taking my initial steps & gaining confidence as a developer. Very interactive. Well-versed guides & teachers. A good platform to gain some hands of knowledge & experience."
  },
  {
    name: "Annapurana",
    role: "Student",
    text: "I took the java course in Magic Era, the training was v.good and the faculty were very friendly...the planning of the course and the procedure of training is remarkable."
  },
  {
    name: "Ravi Dubey",
    role: "Professional",
    text: "Magic Era, Its a wonderfull platform for developing programming skills, clear-cut exposure, helpful staffs at all instances. Highly recommended for everyone."
  },
  {
    name: "Neeraj",
    role: "Intern",
    text: "Great experience, friendly environment, very good platform to learn. I have done internship and final year project also had awesome experience with Magic Era family."
  },
  {
    name: "Sanya Arshad",
    role: "UX Designer",
    text: "The web design course was a game changer. I learned Figma and modern CSS techniques that immediately helped me land a freelance project. The mentors are super supportive!"
  },
  {
    name: "Rahul Verma",
    role: "Data Analyst",
    text: "Excellent curriculum for Python and Data Science. The hands-on projects were challenging but very rewarding. I now feel confident working with Pandas and NumPy."
  },
  {
    name: "Priya Singh",
    role: "Frontend Dev",
    text: "Coming from a non-tech background, I was scared to start coding. Magic Era made it so easy to understand React and JavaScript. The community here is just amazing."
  },
  {
    name: "Amit Kumar",
    role: "Freelancer",
    text: "Best place in Kanpur for learning practical skills. They focus on what the industry actually needs, not just theory. The placement assistance is also a big plus."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary to-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-widest mb-2 block animate-pulse">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning to-yellow-500">Graduates</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Real stories from students who transformed their careers with Magic Era.
          </p>
        </div>

        {/* --- Vertical Marquee Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[600px] overflow-hidden relative">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none"></div>

          {/* Column 1 - Slow Scroll */}
          <div className="animate-scroll-vertical space-y-8">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`col1-${i}`} data={t} index={i} />
            ))}
          </div>

          {/* Column 2 - Reverse/Offset Scroll (Simulated by negative translation start or just different speed/direction if CSS allows, but for now standard vertical scroll with offset content) */}
          <div className="animate-scroll-vertical space-y-8 hidden md:block" style={{ animationDuration: '25s' }}>
            {[...testimonials.slice(2), ...testimonials, ...testimonials.slice(0, 2)].map((t, i) => (
              <TestimonialCard key={`col2-${i}`} data={t} index={i} variant="secondary" />
            ))}
          </div>

          {/* Column 3 - Slower Scroll */}
          <div className="animate-scroll-vertical space-y-8 hidden lg:block" style={{ animationDuration: '22s' }}>
            {[...testimonials.slice(1), ...testimonials, ...testimonials.slice(0, 1)].map((t, i) => (
              <TestimonialCard key={`col3-${i}`} data={t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ data, variant = "primary" }) => (
  <div className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${variant === 'primary'
    ? 'bg-white/5 border-white/10 hover:bg-white/10'
    : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'}`}>

    <Quote size={32} className="text-accent mb-4 opacity-50" />

    <p className="text-slate-300 italic mb-6 leading-relaxed text-sm">
      &quot;{data.text}&quot;
    </p>

    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md ${variant === 'primary' ? 'bg-gradient-to-br from-accent to-rose-600 text-white' : 'bg-white text-primary'}`}>
        {data.name[0]}
      </div>
      <div>
        <h6 className="font-bold text-white text-sm">{data.name}</h6>
        <small className="text-slate-400 text-xs font-medium uppercase tracking-wider">{data.role}</small>
      </div>
    </div>
  </div>
);

export default Testimonials;

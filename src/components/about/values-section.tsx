import { ShieldCheck, Zap, Award } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Educational Integrity",
    desc: "We prioritize authentic learning experiences and uphold the highest standards of academic honesty.",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Dynamic Learning",
    desc: "We embrace interactive and evolving teaching methods to keep our learners engaged and motivated.",
    color: "text-accent",
  },
  {
    icon: Award,
    title: "Student Success",
    desc: "Every module we build and every session we lead is dedicated to achieving the best student outcomes.",
    color: "text-primary",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-black text-primary uppercase tracking-widest">
            Our Core Values
          </h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter">
            The principles that guide our{" "}
            <span className="text-primary">teaching</span> mission.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, i) => (
            <div
              key={i}
              className="group p-10 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`h-16 w-16 rounded-[1.25rem] bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform`}
              >
                <value.icon className={`h-8 w-8 ${value.color}`} />
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">
                {value.title}
              </h4>
              <p className="text-gray-400 leading-relaxed font-medium">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

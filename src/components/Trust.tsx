import { motion } from "motion/react";
import { CheckCircle2, Users, Rocket, Shield, Clock, Smartphone } from "lucide-react";

const stats = [
  { icon: Rocket, title: "50+", subtitle: "Projects Completed" },
  { icon: Users, title: "Happy", subtitle: "Clients" },
  { icon: Shield, title: "Trusted", subtitle: "Solutions" },
  { icon: Smartphone, title: "Fully", subtitle: "Responsive" },
  { icon: CheckCircle2, title: "Secure", subtitle: "Systems" },
  { icon: Clock, title: "24/7", subtitle: "Support" },
];

export default function Trust() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center group hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-4 p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <stat.icon className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-1">{stat.title}</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest leading-tight">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

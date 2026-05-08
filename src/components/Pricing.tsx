import { motion } from "motion/react";
import { Layers, ShoppingBag, ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Domain Service",
    price: "₹899",
    approx: "$11",
    period: "/year",
    description: "Get professional domain registration for your business and personal brand.",
    icon: Layers,
  },
  {
    title: "Premium E-Commerce",
    price: "₹1,200",
    approx: "$15",
    period: "/year",
    description: "Launch powerful online stores with secure systems and premium shopping experiences.",
    icon: ShoppingBag,
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Domain & Pricing</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative glass-dark p-8 rounded-[32px] border transition-all duration-500 group overflow-hidden ${
                plan.popular ? "border-purple-500/50 glow-purple" : "border-white/5"
              } hover:border-purple-500`}
            >
              {plan.popular && (
                <div className="absolute top-6 right-6">
                  <span className="bg-purple-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full animate-pulse">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                  <plan.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{plan.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8 p-6 rounded-2xl bg-white/5">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>
                <p className="text-purple-400 text-xs font-semibold mt-1">Approx {plan.approx}{plan.period}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  plan.popular 
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Choose Plan
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

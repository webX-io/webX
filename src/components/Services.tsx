import { motion } from "motion/react";
import { 
  Code2, 
  ShoppingCart, 
  Layout, 
  RefreshCw, 
  Monitor, 
  UserCircle, 
  Calendar, 
  Zap,
  Briefcase
} from "lucide-react";

const services = [
  {
    title: "Custom Website Development",
    price: "₹20,000",
    approx: "$240",
    icon: Code2,
    features: ["Responsive Design", "Fast Loading Speed", "Modern UI", "SEO Friendly", "Secure Structure"]
  },
  {
    title: "E-Commerce Website",
    price: "₹35,000",
    approx: "$420",
    icon: ShoppingCart,
    features: ["Product Management", "Payment Gateway", "Cart System", "Mobile Friendly", "Admin Dashboard"]
  },
  {
    title: "Responsive Web Design",
    price: "₹25,000",
    approx: "$300",
    icon: Layout,
    features: ["Mobile Responsive", "Cross Browser Support", "Clean Layout", "Smooth Experience", "Optimized Performance"]
  },
  {
    title: "Website Redesign",
    price: "₹15,000",
    approx: "$180",
    icon: RefreshCw,
    features: ["Modern UI Upgrade", "Better User Experience", "Faster Performance", "Clean Layout", "Mobile Optimization"]
  },
  {
    title: "Landing Page Development",
    price: "₹29,000",
    approx: "$350",
    icon: Monitor,
    features: ["CTA Sections", "Conversion Focused", "Modern Design", "Fast Loading", "Responsive Layout"]
  },
  {
    title: "Portfolio Websites",
    price: "₹10,000",
    approx: "$120",
    icon: UserCircle,
    features: ["Clean Showcase", "Personal Branding", "Responsive Design", "Smooth Animations", "Contact Integration"]
  },
  {
    title: "Booking / Appointment",
    price: "₹30,000",
    approx: "$360",
    icon: Calendar,
    popular: true,
    discount: "Limited Time Offer Available",
    features: ["Online Booking", "Calendar Integration", "Admin Panel", "Contact Forms", "Mobile Friendly"]
  },
  {
    title: "API Integration",
    price: "₹10,000",
    approx: "$120",
    icon: Zap,
    features: ["Payment APIs", "WhatsApp Integration", "Forms & Automation", "Third Party Services", "Secure Connections"]
  },
  {
    title: "Business Solutions",
    price: "₹34,000",
    approx: "$410",
    icon: Briefcase,
    popular: true,
    features: ["Professional Design", "Business Pages", "SEO Friendly", "Fast Performance", "Contact & Inquiry Forms"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-purple-400 font-display tracking-[0.3em] text-xs uppercase mb-4"
          >
            What We Offer
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold"
          >
            Our Premium Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-dark p-8 rounded-[32px] border border-white/5 relative group hover:border-purple-500/50 hover:bg-white/[0.03] transition-all duration-500"
            >
              {service.popular && (
                <div className="absolute top-6 right-6">
                  <span className="bg-purple-600/20 text-purple-400 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-purple-500/30">
                    Popular
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
                <service.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-2 pr-12 leading-tight group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>

              {service.discount && (
                <p className="text-green-400 text-xs font-semibold mb-4 italic">
                  {service.discount}
                </p>
              )}

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-bold text-white">{service.price}</span>
                <span className="text-gray-500 text-xs">~ {service.approx}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_white]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-purple-600 hover:border-purple-500 transition-all duration-300"
              >
                Inquire Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

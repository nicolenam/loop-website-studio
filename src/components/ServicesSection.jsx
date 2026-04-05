import { motion } from "framer-motion";
import { RefreshCw, FileText, LayoutGrid, Globe, Wrench } from "lucide-react";

const services = [
  {
    icon: RefreshCw,
    title: "Website Updates",
    description: "Quick text changes, image swaps, and small fixes so your site stays current without the hassle.",
  },
  {
    icon: FileText,
    title: "Content Uploads",
    description: "Blog posts, new pages, product listings — I'll get your content live and looking right.",
  },
  {
    icon: LayoutGrid,
    title: "Layout Cleanup",
    description: "Tidy up messy pages, fix spacing issues, and make your site look polished and intentional.",
  },
  {
    icon: Globe,
    title: "Simple Landing Pages",
    description: "Clean, focused pages for promotions, events, or lead capture — built fast and conversion-ready.",
  },
  {
    icon: Wrench,
    title: "WordPress Help",
    description: "Plugin updates, theme tweaks, troubleshooting — reliable WordPress support when you need it.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Simple, Practical Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            No complicated packages. Just straightforward help with the website tasks you don't have time for.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group bg-card rounded p-8 border border-foreground transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/60 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
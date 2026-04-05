import { motion } from "framer-motion";
import { Store, User, Briefcase, Clock } from "lucide-react";

const audiences = [
  {
    icon: Store,
    title: "Local Businesses",
    description: "Shops, restaurants, and studios that need their site to look great without a big budget.",
  },
  {
    icon: User,
    title: "Solo Business Owners",
    description: "You're wearing all the hats — let me handle the website so you can focus on your work.",
  },
  {
    icon: Briefcase,
    title: "Service Providers",
    description: "Consultants, coaches, and freelancers who need a clean, professional online presence.",
  },
  {
    icon: Clock,
    title: "Outdated Websites",
    description: "If your site hasn't been touched in years, I'll help bring it back to life — no judgment.",
  },
];

export default function WhoItsForSection() {
  return (
    <section id="who-its-for" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Who It's For
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Built for Real Business Owners
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            You don't need a full agency. You need someone reliable who gets the job done.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
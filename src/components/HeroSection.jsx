import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Loop Website Studio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-tight tracking-tight">
              Practical website help for busy small business owners.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              I help with website updates, content changes, simple landing pages, WordPress help, and online cleanup.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base gap-2">
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-8 h-12 text-base text-muted-foreground">
                <a href="#services">See What I Do</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5 border border-border/40">
              <img
                src="https://media.base44.com/images/public/69d1b1677be98f4d2553dfcd/56a1f9950_generated_5f99e473.png"
                alt="Clean workspace with laptop showing website wireframe"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
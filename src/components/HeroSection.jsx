import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">

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
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-tight tracking-tight">
              Practical website help for busy small business owners.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              I help with website updates, content changes, simple landing pages, WordPress help, and online cleanup.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded px-8 h-11 text-base gap-2">
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded px-8 h-11 text-base text-muted-foreground">
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

          </motion.div>
        </div>
      </div>
    </section>
  );
}
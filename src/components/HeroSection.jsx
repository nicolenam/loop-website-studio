import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
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
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              I help with website updates, content changes, simple landing pages, WordPress help, and online cleanup.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded px-8 h-11 text-base gap-2">
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded px-8 h-11 text-base border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground">
                <a href="#services">See What I Do</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
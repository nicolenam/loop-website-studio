import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              About
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Hi, I'm Nicole.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started Loop Website Studio because I saw too many small business owners
                stuck — either paying too much for simple website changes or letting their
                online presence fall behind because they didn't know where to start.
              </p>
              <p>
                I'm not a big agency and I don't overcomplicate things. I'm a reliable,
                practical person who gets website tasks done quickly so you can get back
                to running your business.
              </p>
              <p>
                Whether it's updating a few pages, fixing something that looks off, or
                building a simple landing page from scratch — I'm here to help without
                the runaround.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
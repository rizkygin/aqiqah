import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
};

export default function BabyGallerySection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                >
                    <p className="font-script text-2xl text-primary mb-2">Little Things</p>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                        Preparing For Our Baby
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                    <motion.div
                        className="rounded-2xl overflow-hidden shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={fadeInUp}
                        custom={1}
                    >
                        <img
                            src="https://cdn.phototourl.com/free/2026-04-08-2c4552a0-d907-48db-a296-01081f83579d.jpg"
                            alt="Cute teddy bear for baby boy"
                            className="w-full h-full object-cover aspect-square"
                        />
                    </motion.div>

                    <motion.div
                        className="rounded-2xl overflow-hidden shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={fadeInUp}
                        custom={2}
                    >
                        <img
                            src="https://media.base44.com/images/public/69d5afebefa7e4676c27d601/43a2810c4_generated_691f396c.png"
                            alt="Baby boy blue shoes"
                            className="w-full h-full object-cover aspect-square"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
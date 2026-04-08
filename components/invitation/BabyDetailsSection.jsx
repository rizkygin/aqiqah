import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import BirthCountdown from './BirthCountdown';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
};

export default function BabyDetailsSection() {
    const birthDate = '2026-03-30 05:04';

    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                >
                    <p className="font-script text-2xl text-primary mb-2">A New Blessing</p>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                        Baby Boy Details
                    </h2>
                </motion.div>

                {/* Baby items image */}
                <motion.div
                    className="flex justify-center mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    custom={1}
                >
                    <img
                        src="https://media.base44.com/images/public/69d5afebefa7e4676c27d601/10301c06f_generated_d337713f.png"
                        alt="Baby boy items - shoes, clothes, teddy bear"
                        className="w-full max-w-lg rounded-2xl shadow-xl"
                    />
                </motion.div>

                {/* Birth info cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <motion.div
                        className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={fadeInUp}
                        custom={2}
                    >
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <p className="font-body text-sm text-muted-foreground uppercase tracking-widest mb-2">
                            Born Date
                        </p>
                        <p className="font-heading text-2xl text-foreground">
                            March 15, 2026
                        </p>
                        <p className="font-body text-sm text-muted-foreground mt-1">
                            21 Ramadan 1447 H
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={fadeInUp}
                        custom={3}
                    >
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <p className="font-body text-sm text-muted-foreground uppercase tracking-widest mb-2">
                            Born Time
                        </p>
                        <p className="font-heading text-2xl text-foreground">
                            08:30 AM
                        </p>
                        <p className="font-body text-sm text-muted-foreground mt-1">
                            Alhamdulillah
                        </p>
                    </motion.div>
                </div>

                {/* Birth countdown / age counter */}
                <motion.div
                    className="mt-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    custom={4}
                >
                    <BirthCountdown birthDate={birthDate} />
                </motion.div>
            </div>
        </section>
    );
}
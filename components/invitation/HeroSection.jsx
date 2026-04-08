import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
            {/* Floating decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary/10"
                        style={{
                            width: Math.random() * 80 + 20,
                            height: Math.random() * 80 + 20,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Header image */}
            <motion.img
                src="https://media.base44.com/images/public/69d5afebefa7e4676c27d601/6c9f29fe8_generated_75da4813.png"
                alt="Aqiqah celebration decorative header with moon and stars"
                className="w-full max-w-xl rounded-2xl mb-8 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            />

            <motion.p
                className="font-script text-secondary-foreground/70 text-xl md:text-2xl tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.p>

            <motion.h1
                className="text-4xl md:text-3xl lg:text-5xl text-foreground mt-6 text-center leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                Tasyakuran Aqiqah dan Tasmiyah
            </motion.h1>

            <motion.div
                className="mt-4 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <div className="h-px w-16 bg-primary/40 flex-1" />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="font-body text-2xl md:text-3xl text-gray-600 text-center">
                        Putra Pertama Kami
                    </p>
                    <p className="font-script text-4xl md:text-5xl text-primary text-center">
                        Kaysan Ahsan Kurniawan
                    </p>
                </div>

                <div className="h-px w-16 bg-primary/40" />
            </motion.div>

            <motion.p
                className="font-body text-muted-foreground mt-4 text-center text-sm md:text-base max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                Dimomen bahagia ini, dengan kehadiran putra kami dan atas segala rasa syukur kami. Perkenankan kami ingin berbagi kebahagiaan dengan mengundang Bapak/Ibu/Saudara/i
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
                    <div className="w-1.5 h-3 rounded-full bg-primary/60" />
                </div>
            </motion.div>
        </section>
    );
}
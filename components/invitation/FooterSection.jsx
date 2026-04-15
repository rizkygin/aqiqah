import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FooterSection() {
    return (
        <section className="py-16 px-4 text-center">
            <motion.div
                className="max-w-md mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-px h-16 bg-primary/30 mx-auto mb-8" />

                <p className="font-body text-sm text-muted-foreground italic leading-relaxed mb-6">
                    "Ya Tuhan kami, anugerahkanlah kepada kami istri-istri kami dan keturunan kami sebagai penyejuk mata (bagi kami) dan jadikanlah kami imam bagi orang-orang yang bertakwa."
                </p>
                <p className="font-body text-xs text-muted-foreground mb-8">
                    — QS. Al-Furqan: 74
                </p>

                <p className="font-script text-xl text-primary mb-2">With Love</p>
                <p className="font-heading text-lg text-foreground">
                    Yang Berbahagia Rizky Kurniawan dan Putri Pinandita
                </p>

                <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">

                    <Heart className="w-4 h-4 text-primary fill-primary" />
                    <p className="font-body text-xs uppercase tracking-widest">
                        Kami tunggu kehadirannya yaaa
                    </p>
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                </div>
                <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground bg-white-100">
                    <p className="font-body text-xs tracking-widest">
                        NOTE: Jangan upload foto Kaysan yaaa om, tante, pakde, bude, nenek, kakek, kakak... makasih ^.^
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
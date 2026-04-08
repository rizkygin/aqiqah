import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function InvitationCover({ onOpen }) {
    const [isOpening, setIsOpening] = useState(false);

    const name = useSearchParams().get('mengundang');
    const handleOpen = () => {
        setIsOpening(true);
        setTimeout(() => {
            onOpen();
        }, 1400);
    };

    return (
        <AnimatePresence>
            {!isOpening ? (
                <motion.div
                    key="cover"
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #bae6fd 50%, #e0f2fe 100%)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Floating stars */}
                    {[...Array(18)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-yellow-300/60"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                fontSize: `${Math.random() * 14 + 6}px`,
                            }}
                            animate={{ y: [0, -15, 0], opacity: [0.4, 0.9, 0.4], rotate: [0, 20, 0] }}
                            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
                        >
                            ✦
                        </motion.div>
                    ))}

                    <div className="relative max-w-sm w-full mx-4">
                        {/* Envelope / Letter */}
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-sky-200"
                            initial={{ scale: 0.8, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            {/* Top decorative band */}
                            <div className="h-3 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400" />

                            {/* Gate door image */}
                            <div className="relative">
                                <img
                                    src="https://cdn.phototourl.com/free/2026-04-08-2b9edad8-958a-46b6-a376-6b022440e874.jpg"
                                    alt="Invitation gate"
                                    className="w-full h-64 object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
                            </div>

                            {/* Letter body */}
                            <div className="px-7 pb-8 pt-2 text-center">
                                <motion.p
                                    className="font-script text-sky-500 text-lg mb-1"
                                    animate={{ opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                >
                                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                                </motion.p>

                                <div className="flex items-center gap-3 my-3">
                                    <div className="flex-1 h-px bg-sky-200" />
                                    <Star className="w-4 h-4 text-sky-400 fill-sky-300" />
                                    <div className="flex-1 h-px bg-sky-200" />
                                </div>

                                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-2">
                                    Undangan untuk {name}
                                </p>
                                <h1 className="font-heading text-2xl text-foreground font-semibold leading-tight mb-1">
                                    Acara Aqiqah Putra Kami
                                </h1>
                                <p className="font-script text-3xl text-sky-500 mb-3">
                                    Kaysan Ahsan Kurniawan
                                </p>
                                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-6">
                                    Semoga dengan kehadiran bapak/ibu/saudara/i dapat menambah kebahagiaan kami.
                                </p>

                                {/* CTA Button */}
                                <motion.button
                                    onClick={handleOpen}
                                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-body font-medium text-sm shadow-lg shadow-sky-200 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    animate={{ boxShadow: ['0 0 0px #7dd3fc', '0 0 20px #7dd3fc', '0 0 0px #7dd3fc'] }}
                                    transition={{ boxShadow: { duration: 2, repeat: Infinity }, scale: { duration: 0.1 } }}
                                >
                                    <span>Buka Undangan</span>
                                    <span className="text-base">♥️</span>
                                </motion.button>
                            </div>

                            {/* Bottom band */}
                            <div className="h-3 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400" />
                        </motion.div>
                    </div>
                </motion.div>
            ) : (
                /* Opening Gate Animation */
                <motion.div
                    key="gate"
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #bae6fd 50%, #e0f2fe 100%)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    {/* Left door */}
                    <motion.div
                        className="absolute inset-y-0 left-0 w-1/2 origin-left"
                        style={{ background: 'linear-gradient(to right, #1e40af, #3b82f6)' }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: -90 }}
                        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    >
                        <div className="absolute inset-0 flex items-center justify-end pr-8 opacity-30">
                            <div className="text-white text-6xl">✦</div>
                        </div>
                        {/* Door knob */}
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 rounded-full bg-yellow-300 shadow-lg" />
                        {/* Vertical stripe */}
                        <div className="absolute inset-y-0 right-0 w-px bg-white/20" />
                        {/* Door panel lines */}
                        <div className="absolute inset-4 border-2 border-white/20 rounded-xl" />
                    </motion.div>

                    {/* Right door */}
                    <motion.div
                        className="absolute inset-y-0 right-0 w-1/2 origin-right"
                        style={{ background: 'linear-gradient(to left, #1e40af, #3b82f6)' }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 90 }}
                        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    >
                        <div className="absolute inset-0 flex items-center justify-start pl-8 opacity-30">
                            <div className="text-white text-6xl">✦</div>
                        </div>
                        {/* Door knob */}
                        <div className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 rounded-full bg-yellow-300 shadow-lg" />
                        {/* Vertical stripe */}
                        <div className="absolute inset-y-0 left-0 w-px bg-white/20" />
                        {/* Door panel lines */}
                        <div className="absolute inset-4 border-2 border-white/20 rounded-xl" />
                    </motion.div>

                    {/* Center glow */}
                    <motion.div
                        className="absolute w-2 h-full bg-white/80 blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
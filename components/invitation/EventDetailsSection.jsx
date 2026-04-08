import { motion } from 'framer-motion';
import { MapPin, CalendarDays, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
};

export default function EventDetailsSection() {
    const eventDetails = {
        date: 'Saturday, April 11, 2026',
        hijriDate: '22 Shawwal 1447 H',
        time: '11:00 AM - 02:00 PM',
        venue: 'Rumah Keluarga',
        address: 'Jl. Bhayangkara Pasir Panjang, Gg Palem 1',
        city: 'Pangkalan Bun, 74112',
        mapsUrl: 'https://maps.app.goo.gl/ZxGMQvhfY1hriBdQ7',
    };

    return (
        <section className="py-20 px-4 bg-card/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                >
                    <p className="font-script text-2xl text-primary mb-2">You Are Invited</p>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                        Event Details
                    </h2>
                    <p className="font-body text-muted-foreground mt-3 max-w-md mx-auto text-sm">
                        We would be honored by your presence at the Aqiqah celebration of our beloved son
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {/* Schedule Card */}
                    <motion.div
                        className="bg-card rounded-2xl p-8 shadow-lg border border-border/50"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={fadeInUp}
                        custom={1}
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <CalendarDays className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
                                    Date
                                </p>
                                <p className="font-heading text-lg text-foreground">
                                    {eventDetails.date}
                                </p>
                                <p className="font-body text-sm text-muted-foreground">
                                    {eventDetails.hijriDate}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
                                    Time
                                </p>
                                <p className="font-heading text-lg text-foreground">
                                    {eventDetails.time}
                                </p>
                                <p className="font-body text-sm text-muted-foreground">
                                    Please be on time
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        className="bg-card rounded-2xl p-8 shadow-lg border border-border/50"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={fadeInUp}
                        custom={2}
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
                                    Location
                                </p>
                                <p className="font-heading text-lg text-foreground">
                                    {eventDetails.venue}
                                </p>
                                <p className="font-body text-sm text-muted-foreground">
                                    {eventDetails.address}
                                </p>
                                <p className="font-body text-sm text-muted-foreground">
                                    {eventDetails.city}
                                </p>
                            </div>
                        </div>

                        <a
                            href={eventDetails.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full"
                        >
                            <Button
                                className="w-full gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-body"
                            >
                                <Navigation className="w-4 h-4" />
                                Buka Google Maps
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
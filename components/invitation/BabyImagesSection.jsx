import { motion } from 'framer-motion';

const images = [
    {
        url: 'https://cdn.phototourl.com/free/2026-04-08-908a054a-b5ff-45fb-98cb-352bf2225613.jpg',
        alt: 'Name of our son',
        caption: 'Kaysan Name',
        span: 'col-span-1',
    },
    {
        url: 'https://cdn.phototourl.com/free/2026-04-08-b08f4bdd-72ff-45be-be38-2ed1779d0662.jpg',
        alt: 'Baby boy nursery items flat lay',
        caption: 'Little Essentials',
        span: 'col-span-1',
    },

    {
        url: 'https://cdn.phototourl.com/free/2026-04-08-2b2ff8fa-1b64-4e64-8c27-eedf4a3809b5.jpg',
        alt: 'Stork carrying baby boy',
        caption: 'A Gift From Allah',
        span: 'col-span-1',
    },
    {
        url: 'https://cdn.phototourl.com/free/2026-04-08-0d336994-a57a-4ce9-a850-470de1dc726e.png',
        alt: 'Baby boy milestone items',
        caption: 'Toys and Accessories',
        span: 'col-span-1',
    },

    {
        url: 'https://cdn.phototourl.com/free/2026-04-08-7a9da151-9313-46dc-8c83-cb10c527d771.jpg',
        alt: 'Baby boy milestone items',
        caption: 'First Steps',
        span: 'col-span-2',
    },
];

export default function BabyImagesSection() {
    return (
        <section className="py-20 px-4 bg-card/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="font-script text-2xl text-primary mb-2">Our Little Prince</p>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                        Baby Boy Gallery
                    </h2>
                    <p className="font-body text-muted-foreground mt-3 text-sm max-w-sm mx-auto">
                        Every little detail of our precious baby boy
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            className={`relative group overflow-hidden rounded-2xl shadow-lg ${img.span}`}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-52 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="font-script text-white text-lg drop-shadow">{img.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
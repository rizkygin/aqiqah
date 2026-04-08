import { motion } from 'framer-motion';

const images = [
    {
        url: 'https://cdn.phototourl.com/free/2026-04-08-908a054a-b5ff-45fb-98cb-352bf2225613.jpg',
        alt: 'Name of our son',
        caption: 'Kaysan Name',
        span: 'col-span-1',
    },
    {
        url: 'https://media.base44.com/images/public/69d5afebefa7e4676c27d601/0a343555c_generated_image.png',
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
        url: 'https://media.base44.com/images/public/69d5afebefa7e4676c27d601/6d85c00c7_generated_image.png',
        alt: 'Baby boy milestone items',
        caption: 'Toys and Accessories',
        span: 'col-span-1',
    },
    {
        url: 'https://cdn.phototourl.com/free/2026-04-08-cd5fcb7f-ee36-44ca-bdf5-445c8a66bc8a.jpg',
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
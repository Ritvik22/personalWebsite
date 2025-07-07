import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery | Ritvik Shah',
  description: 'A collection of photographs showcasing various moments and experiences.',
};

// Sample gallery images - replace these with your actual images
const galleryImages = [
  {
    src: '/gallery/image1.jpg',
    alt: 'Description 1',
    width: 800,
    height: 600,
  },
  {
    src: '/gallery/image2.jpg',
    alt: 'Description 2',
    width: 800,
    height: 600,
  },
  // Add more images as needed
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Photo Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 6}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 
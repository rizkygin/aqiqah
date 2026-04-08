"use client"

import { useEffect, useRef, useState, Suspense } from 'react';
import HeroSection from '../components/invitation/HeroSection';
import InvitationCover from '../components/invitation/InvitationCover';
import BabyDetailsSection from '../components/invitation/BabyDetailsSection';
import BabyGallerySection from '../components/invitation/BabyGallerySection';
import EventDetailsSection from '../components/invitation/EventDetailsSection';
import FooterSection from '../components/invitation/FooterSection';
import BabyImagesSection from '../components/invitation/BabyImagesSection';

export default function Home() {
  const containerRef = useRef(null);

  const [opened, setOpened] = useState(false);
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      {!opened && (
        <Suspense fallback={null}>
          <InvitationCover onOpen={() => setOpened(true)} />
        </Suspense>
      )}
      <div ref={containerRef} className="min-h-screen bg-background font-body overflow-x-hidden">
        <HeroSection />
        <BabyDetailsSection />
        <BabyGallerySection />
        <BabyImagesSection />
        <EventDetailsSection />
        <FooterSection />
      </div>
    </>
  );
}
import React from 'react'
import Hero from '../components/Hero'
import BrandSplitSection from '../components/BrandSplitSection'
import CurrentUpdates from '../components/CurrentUpdates'
import MomentsSection from '../components/MomentsSection'
import FinalCTA from '../components/FinalCTA'

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FAF8F5]">
      {/* 01 — HERO: Editorial Cover Story & Orbital Identity */}
      <Hero />

      {/* 02 — ONE BRAND. BUILT FOR TWO WORLDS: Dual Ledger Architecture */}
      <BrandSplitSection />

      {/* 03 — CURRENT UPDATES: Live Ecosystem Poster Showcase */}
      <CurrentUpdates />

      {/* 04 — MOMENTS FROM DECODEP: Interactive 3D Photo Carousel */}
      <MomentsSection />

      {/* 05 — LET'S BUILD WHAT'S NEXT: Publishing Colophon CTA */}
      <FinalCTA />
    </div>
  )
}

export default Home

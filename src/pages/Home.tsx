import React from 'react'
import Hero from '../components/Hero'
import BrandSplitSection from '../components/BrandSplitSection'
import CapabilitiesSection from '../components/CapabilitiesSection'
import CommunityEcosystemSection from '../components/CommunityEcosystemSection'
import FeaturedInitiativeSection from '../components/FeaturedInitiativeSection'
import EcosystemCollaborationsSection from '../components/EcosystemCollaborationsSection'
import FinalCTA from '../components/FinalCTA'

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FAFBFC]">
      {/* 01 — HERO (Editorial Positioning & Technical Abstract Identity) */}
      <Hero />

      {/* 02 — ONE BRAND. BUILT FOR TWO WORLDS. */}
      <BrandSplitSection />

      {/* 03 — CORE CAPABILITIES (Horizontal Numbered System) */}
      <CapabilitiesSection />

      {/* 04 — DEVELOPER COMMUNITY (Build. Learn. Collaborate.) */}
      <CommunityEcosystemSection />

      {/* 05 — FEATURED INITIATIVE (Flagship Hackday 1.0) */}
      <FeaturedInitiativeSection />

      {/* 06 — BUILD WITH THE ECOSYSTEM (Partnerships & Alliances) */}
      <EcosystemCollaborationsSection />

      {/* 07 — LET'S BUILD WHAT'S NEXT. (Final CTA) */}
      <FinalCTA />
    </div>
  )
}

export default Home

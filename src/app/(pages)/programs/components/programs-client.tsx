'use client'

import { Container } from './Container'
import { programsPage } from './data'
import { ProgramsHero } from './program-hero'
import { ProgramsDecisionAid } from './decision-aid'
import { ProgramsComparison } from './program-comparison'
import { ProgramsWhyItWorks } from './why-it-works'
import { ProgramsPath } from './program-path'
import { ProgramSection } from './program-section'

import { ProgramsFAQ } from './program-faq'
import { ProgramsFinalCTA } from './programsFinalCTA'

import { ProgramsSocialProof } from './program-socialproof'

export default function ProgramsClient() {
  return (
    <main className='py-10 md:py-36 bg-[#0a0a0a]/30'>
      <Container>
        <div className='space-y-14 md:space-y-16'>
          <ProgramsHero {...programsPage.hero} />

          <ProgramsDecisionAid {...programsPage.decisionAid} />

          <section className='grid gap-6 lg:grid-cols-2'>
            <ProgramsComparison {...programsPage.comparison} />
            <ProgramsWhyItWorks {...programsPage.whyItWorks} />
          </section>

          <ProgramsPath {...programsPage.path} />

          <div className='space-y-10'>
            {programsPage.sections.map(section => (
              <ProgramSection
                key={section.id}
                {...section}
                icon={section.icon as 'glove' | 'group' | 'target'}
              />
            ))}
          </div>

          <ProgramsSocialProof {...programsPage.socialProof} />

          <ProgramsFAQ items={programsPage.faq} />

          <ProgramsFinalCTA {...programsPage.finalCta} />
        </div>
      </Container>
    </main>
  )
}

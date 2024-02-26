import AboutMe from '@/components/AboutMe'
import Banner from '@/components/Banner'
import ContactSection from '@/components/ContactSection'
import Container from '@/components/Container'
import Header from '@/components/Header'
import ProjectSection from '@/components/ProjectSection'
import TechList from '@/components/TechsList'

export default function Home() {
  return (
    <>
      <div className="h-1 bg-gradient-to-r from-primary-color to-accent-color"></div>
      <Header />
      <Container>
        <main className="w-full pt-20 pb-16 flex flex-col gap-20">
          <Banner />
          <TechList />
          <AboutMe />
          <ProjectSection />
          <ContactSection />
        </main>
      </Container>
      <div className="h-1 bg-gradient-to-l from-primary-color to-accent-color"></div>
    </>
  )
}

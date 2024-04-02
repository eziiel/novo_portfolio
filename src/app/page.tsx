import About from '@/components/nav/about'
import Contacts from '@/components/nav/contact'
import HomePage from '@/components/nav/home'
import Projects from '@/components/nav/projects'

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Projects />
      <Contacts />
    </div>
  )
}

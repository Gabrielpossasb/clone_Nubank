import { Dashboard } from '@/components/Dashboard/Dashboard'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

export default function Home() {
  return (
    <main className="w-full ">
      <Header/>
      <Dashboard/>
      <Footer/>
    </main>
  )
}

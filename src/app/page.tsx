import { Dashboard } from '@/components/Dashboard/Dashboard'
import { Header } from '@/components/Header/Header'

export default function Home() {
  return (
    <main className="w-full">
      <Header/>
      <Dashboard/>
    </main>
  )
}

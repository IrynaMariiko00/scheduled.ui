import { SCHEDULES } from '~/constants/temporary'
import { SchedulesTable } from '~/pages/HomePage/components/SchedulesTable'

function HomePage() {
  return (
    <main className="container-app py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text">Розклад навчальних програм</h1>
        <p className="mt-1 text-caption">Перегляд та керування розкладами груп</p>
      </div>

      <SchedulesTable schedules={SCHEDULES} />
    </main>
  )
}

export default HomePage

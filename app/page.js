// app/page.js
import Image from 'next/image'
import logo from '/public/logo.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-white text-gray-900">
      <header className="flex flex-col items-center gap-2 mb-10">
        <Image src={logo} alt="Smart Psykologi logo" width={60} height={60} />
        <h1 className="text-xl font-semibold">Smart Psykologi</h1>
        <p className="text-center text-gray-600 text-sm">
          Digitala verktyg för verklig psykologisk förändring
        </p>
      </header>

      <section className="max-w-2xl text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Väck nyfikenheten.</h2>
        <p className="text-lg text-gray-700">
          En digital plattform för psykologisk hälsa – byggd för dig som vill förstå,
          förändra och växa.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow transition">
            Ladda ner appen
          </button>
          <button className="px-6 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-md transition">
            Läs mer
          </button>
        </div>
      </section>
    </main>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl mb-6 animate-fade-in">
          Smart Psykologi
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
          Din partner för psykologisk expertis och personlig utveckling
        </p>
        <div className="flex gap-4 animate-fade-in-delay-2">
          <button className="px-8 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-600 transition-all transform hover:scale-105">
            Boka Tid
          </button>
          <button className="px-8 py-3 border-2 border-emerald-700 rounded-full hover:bg-emerald-700 hover:text-white transition-all transform hover:scale-105">
            Läs Mer
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <h2 className="text-4xl text-center mb-12">Våra Tjänster</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Individuell Terapi",
              description: "Skräddarsydd behandling för dina behov",
              icon: "🧠"
            },
            {
              title: "Parterapi",
              description: "Stärk era relationer tillsammans",
              icon: "❤️"
            },
            {
              title: "Gruppterapi",
              description: "Dela och väx i en stödjande miljö",
              icon: "👥"
            }
          ].map((service, index) => (
            <div key={index} className="p-6 bg-white/20 backdrop-blur-sm rounded-xl hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default function Home() {
  return (
    <main className="min-h-screen">
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
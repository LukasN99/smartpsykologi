export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
          <div className="text-gray-600">{children}</div>
        </div>
      </section>
    );
  }
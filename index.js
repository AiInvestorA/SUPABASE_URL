// InvestAi Starter Next.js Project

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Invest<span className="text-green-600">Ai</span>
          </h1>
          <nav className="space-x-4 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Markets</a>
            <a href="#" className="hover:underline">About</a>
          </nav>
        </header>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Top Gainer</h2>
          <div className="p-6 rounded-2xl border shadow-sm">
            <p className="text-lg">$NVDA up <span className="text-green-600 font-semibold">4.3%</span> today</p>
            {/* Chart placeholder */}
            <div className="mt-4 h-40 bg-gray-100 rounded"></div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <div className="space-x-4">
            <a href="#" className="text-sm underline text-blue-500">Instagram</a>
            <a href="#" className="text-sm underline text-blue-500">Twitter</a>
            <a href="#" className="text-sm underline text-blue-500">TikTok</a>
          </div>
        </section>

        <footer className="mt-24 text-xs text-gray-400">
          &copy; 2025 InvestAi. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

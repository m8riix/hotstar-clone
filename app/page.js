export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-blue-500">StreamFlix</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-400">TV</a>
              <a href="#" className="hover:text-blue-400">Movies</a>
              <a href="#" className="hover:text-blue-400">Sports</a>
              <a href="#" className="hover:text-blue-400">Live</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Subscribe</button>
            <button className="px-4 py-2 border border-gray-600 rounded hover:border-gray-400">Login</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-center px-12">
              <h2 className="text-5xl font-bold mb-4">Trending Now</h2>
              <p className="text-lg mb-6 max-w-xl">Watch the latest shows, movies, and live sports</p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-white text-black rounded font-semibold hover:bg-gray-200">Watch Now</button>
                <button className="px-6 py-3 border-2 border-white rounded font-semibold hover:bg-white/10">+ Watchlist</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Popular Shows</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-3">
                  <p className="font-semibold">Show Title {item}</p>
                  <p className="text-sm text-gray-400">2024 • Drama</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Latest Movies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-pink-500 to-orange-600"></div>
                <div className="p-3">
                  <p className="font-semibold">Movie Title {item}</p>
                  <p className="text-sm text-gray-400">2024 • Action</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 px-8 py-12 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2024 StreamFlix. Educational project only.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

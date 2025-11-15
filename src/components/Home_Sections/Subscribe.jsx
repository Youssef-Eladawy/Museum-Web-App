function Subscribe() {
  return (
    <section
      className="relative py-20 mt-12 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(19, 53, 123, 0.6), rgba(19, 53, 123, 0.6)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop')",
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl text-center py-12">
        {/* Title with decorative lines */}
        <h5
          className="relative inline-block text-lg font-bold text-white uppercase mb-4
          before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-16 before:w-12 before:h-[2px] before:bg-white
          after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-16 after:w-12 after:h-[2px] after:bg-white"
        >
          Subscribe
        </h5>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Newsletter!
        </h1>

        <p className="text-white mb-8 leading-relaxed">
          Enter your email to receive the latest travel news, exclusive offers,
          expert tips, and inspiring stories. Stay informed about new
          destinations, special promotions, and travel advice all delivered
          straight to your inbox. Subscribe today and never miss out on exciting
          updates!
        </p>

        {/* Email Input Form */}
        <div className="relative max-w-2xl mx-auto mt-8">
          <input
            type="email"
            placeholder="Your email"
            className="w-full py-3 pl-6 pr-36 rounded-full border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
          />
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-primary text-white font-semibold rounded-full py-2 px-6 hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;

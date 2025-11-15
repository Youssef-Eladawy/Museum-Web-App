function Subscription() {
  return (
    <div className="w-full flex justify-center items-center py-16 bg-secondary">
      <div className="w-full max-w-[1000px] text-center mx-auto px-4">
        {/* Subscription Section */}
        <div className="bg-white rounded-xl shadow-lg p-12 lg:p-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-main mb-2 tracking-widest uppercase">
            SUBSCRIBE
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-8">
            Our Newsletter
          </h2>

          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-10 px-2 lg:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            tempore nam, architecto doloremque velit explicabo? Voluptate sunt
            eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
            repellat a laborum quasi.
          </p>

          {/* Form */}
          <div className="my-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-10"></div>

            <form className="flex flex-col items-center gap-10 max-w-[700px] mx-auto">
              <div className="w-full text-center">
                <label className="block font-semibold text-gray-800 text-lg mb-4">
                  Your email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full max-w-[600px] mx-auto px-6 py-4 rounded-xl border-2 border-gray-300 bg-secondary text-lg focus:outline-none focus:border-main focus:bg-white focus:ring-4 focus:ring-main/20 transition-all"
                />
              </div>

              <button
                type="submit"
                className="bg-main hover:bg-main/90 text-white font-semibold uppercase tracking-wider px-16 py-4 lg:px-20 rounded-full min-w-[200px] text-lg lg:text-xl transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10"></div>
          </div>

          {/* Get in Touch */}
          <div className="mt-12 pt-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 uppercase tracking-wider">
              Get In Touch
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;

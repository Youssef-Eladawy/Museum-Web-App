import { MapPin, Phone, Mail } from "lucide-react";
import HeadSection from "../components/shared/headSection/HeadSection";
import SectionTitle from "../components/shared/sectionTitle/SectionTitle";

function Contact() {
  return (
    <>
      <HeadSection title={"Contact Us"} />

      <div className="bg-light py-12">
        <SectionTitle title={"Contact Us"} sentence={"Contact For Any Query"} />

        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {/* Left info */}
            <div className="flex flex-col bg-white rounded-3xl p-6 gap-6 lg:w-1/3">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-primary">
                  <MapPin className="w-12 h-12" />
                </div>
                <div className="text-gray-800">
                  <div>123 ranking Street,</div>
                  <div>New York, USA</div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-primary">
                  <Phone className="w-12 h-12" />
                </div>
                <div className="text-gray-800">+012 345 67890</div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-primary">
                  <Mail className="w-12 h-12" />
                </div>
                <div className="text-gray-800">info@example.com</div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              <div className="mb-4">
                <div className="text-xl font-bold text-gray-800 mb-1">
                  Send us a message
                </div>
                <div className="text-grey">
                  Lets keep in touch and send us a message
                </div>
              </div>

              <form className="flex flex-col gap-4">
                {/* First row: Name + Email */}
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      className="peer w-full px-4 pt-5 pb-2 rounded-2xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="email"
                      id="mail"
                      placeholder=" "
                      className="peer w-full px-4 pt-5 pb-2 rounded-2xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <label
                      htmlFor="mail"
                      className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all"
                    >
                      Your Email
                    </label>
                  </div>
                </div>

                {/* Subject */}
                <div className="relative w-full">
                  <input
                    type="text"
                    id="subject"
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 rounded-2xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all"
                  >
                    Subject
                  </label>
                </div>

                {/* Message */}
                <div className="relative w-full">
                  <textarea
                    id="message"
                    rows="7"
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 rounded-2xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all"
                  >
                    Message
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="relative w-full py-3 px-4 rounded-2xl bg-primary text-white font-bold overflow-hidden hover:text-primary hover:bg-transparent border border-primary transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-primary rounded-2xl z-[-1] transition-all duration-300"></span>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d821.1591626379268!2d31.220157253931976!3d30.04754661491687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAyJzUyLjUiTiAzMcKwMTMnMTEuOSJF!5e1!3m2!1sar!2seg!4v1762687218009!5m2!1sar!2seg"
              className="w-full rounded-2xl h-[450px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

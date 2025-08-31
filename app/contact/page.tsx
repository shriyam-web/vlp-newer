import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';

export const metadata: Metadata = {
  title: 'Contact Us - VLP Technologies | Get in Touch',
  description:
    "Contact VLP Technologies for your web development, mobile app, and digital solution needs. Located in Noida, India. Call +91 9648974867 or email us.",
  openGraph: {
    title: 'Contact Us - VLP Technologies | Get in Touch',
    description: 'Contact VLP Technologies for your technology needs. Professional services in Noida, India.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />

        {/* Contact Form Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Send Us a <span className="gradient-text">Message</span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select a subject</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile App Development</option>
                        <option value="seo-services">SEO Services</option>
                        <option value="digital-consulting">Digital Consulting</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Get in <span className="gradient-text">Touch</span>
                  </h2>
                  <p className="text-lg text-gray-600">Multiple ways to reach us. Choose what works best for you.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <i className="fas fa-phone text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600 font-medium">+91 9648974867</p>
                      <p className="text-gray-500 text-sm">Call us for immediate assistance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                      <i className="fab fa-whatsapp text-xl text-green-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600 font-medium">+91 9648974867</p>
                      <p className="text-gray-500 text-sm">Quick response via WhatsApp</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                      <i className="fas fa-envelope text-xl text-purple-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 font-medium">info@vlptechnologies.com</p>
                      <p className="text-gray-500 text-sm">Send us a detailed message</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-xl text-red-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600 font-medium">Noida, India</p>
                      <p className="text-gray-500 text-sm">Visit our office</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="gradient-text">Location</span>
              </h2>
              <p className="text-lg text-gray-600">
                Located in the heart of Noida, India - easily accessible and ready to serve you.
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129308136!2d77.04417!3d28.527467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VLP Technologies Location - Noida, India"
              ></iframe>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <i className="fas fa-map-marker-alt text-3xl text-red-600 mb-3"></i>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">Noida, Uttar Pradesh, India</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <i className="fas fa-car text-3xl text-blue-600 mb-3"></i>
                <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">Easy access via metro and road transport</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <i className="fas fa-handshake text-3xl text-green-600 mb-3"></i>
                <h3 className="font-semibold text-gray-900 mb-2">Meetings</h3>
                <p className="text-gray-600">In-person consultations available by appointment</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

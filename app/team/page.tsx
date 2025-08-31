import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Team - VLP Technologies | Meet Our Expert Developers',
  description:
    'Meet the talented team behind VLP Technologies. Our expert developers and designers are passionate about creating innovative technology solutions.',
  openGraph: {
    title: 'Our Team - VLP Technologies | Meet Our Expert Developers',
    description:
      'Meet the talented team behind VLP Technologies. Our expert developers and designers are passionate about creating innovative solutions.',
  },
};

export default function TeamPage() {
  return (
    <>
      <Header />

      {/* Team Hero */}
      <section className="pt-20 lg:pt-24 section-padding bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up">
            The Talented Minds Behind VLP Technologies
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up">
            Our diverse team of experienced developers, designers, and strategists work together to deliver
            exceptional technology solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <main>
        <section className="section-padding bg-white">
          <div className="container-custom">
            {/* Leadership Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  <span className="gradient-text">Leadership</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Meet the visionary leaders who guide VLP Technologies towards excellence and innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Shriyam Parashar */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover p-8 text-center">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Shriyam Parashar"
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Shriyam Parashar</h3>
                  <p className="text-blue-600 font-semibold mb-4">Owner & Founder</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Visionary leader with extensive experience in technology strategy and business development.
                    Founded VLP Technologies with a mission to deliver premium tech solutions.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Business Strategy</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Technology Leadership</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Project Management</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Client Relations</span>
                    </div>

                  </div>




                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-500 transition-colors">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-800 transition-colors">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>

                  <a
                    href="/team/shriyam-parashar"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-6 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Profile
                  </a>
                </div>


                {/* Shanvika */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover p-8 text-center">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Shanvika"
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Shanvika</h3>
                  <p className="text-blue-600 font-semibold mb-4">Co-owner</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Strategic partner focused on operational excellence and ensuring the highest quality standards
                    in all our deliverables.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Operations Management</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Quality Assurance</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Team Leadership</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Process Optimization</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-500 transition-colors">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-800 transition-colors">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                  <a
                    href="/team/shanvika"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 mt-6 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Profile
                  </a>
                </div>

              </div>


            </div>

            {/* Development Team Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Development <span className="gradient-text">Team</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our talented developers and designers who bring innovative ideas to life with cutting-edge technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Pranjal Gupta */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover p-6 text-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Pranjal Gupta"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Pranjal Gupta</h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm">Senior Full Stack Developer</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Expert full-stack developer with 5+ years of experience in building scalable web applications.
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">MERN Stack</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Next.js</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">TypeScript</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">AWS</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3 mb-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-800 transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>

                  <a
                    href="/team/pranjal-gupta"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Profile
                  </a>
                </div>

                {/* Yash Gupta */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover p-6 text-center">
                  <img
                    src="https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Yash Gupta"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Yash Gupta</h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm">Mobile App Developer</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Specialized mobile developer with expertise in cross-platform development.
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">React Native</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Flutter</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">iOS</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Android</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3 mb-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-800 transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>

                  <a
                    href="/team/yash-gupta"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Profile
                  </a>
                </div>

                {/* Shuaib Akhtar */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover p-6 text-center">
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Shuaib Akhtar"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Shuaib Akhtar</h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm">Backend Developer</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Backend specialist focused on building robust, scalable server-side applications.
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Node.js</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Python</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">MongoDB</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">PostgreSQL</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3 mb-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-800 transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>

                  <a
                    href="/team/shuaib-akhtar"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Profile
                  </a>
                </div>

                {/* Kirti Rajani */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover p-6 text-center">
                  <img
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Kirti Rajani"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Kirti Rajani</h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm">UI/UX Designer &amp; Frontend Developer</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Creative designer and frontend developer who brings beautiful designs to life.
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">UI/UX Design</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">React.js</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Figma</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Adobe Creative Suite</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3 mb-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-800 transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>

                  <a
                    href="/team/kirti-rajani"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Team <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The core principles that guide our team culture and drive our commitment to delivering exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Collaboration */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  We work together as a unified team, sharing knowledge and supporting each other to achieve common goals.
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb text-2xl text-amber-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We constantly explore new technologies and creative solutions to stay ahead in the rapidly evolving tech landscape.
                </p>
              </div>

              {/* Continuous Learning */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  We invest in our team's growth through continuous learning and skill development to deliver cutting-edge solutions.
                </p>
              </div>

              {/* Excellence */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for excellence in everything we do, from code quality to client communication and project delivery.
                </p>
              </div>
            </div>

            {/* Join Our Team */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for technology and innovation.
                If you're ready to make an impact, we'd love to hear from you.
              </p>
              <a
                href="mailto:careers@vlptechnologies.com"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-envelope mr-2"></i>
                careers@vlptechnologies.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

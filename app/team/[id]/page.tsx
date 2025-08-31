import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ShareProfiled from './ShareProfiled';

/* Developer Data */
// const developers = [
//   {
//     id: 'pranjal-gupta',
//     name: 'Pranjal Gupta',
//     role: 'Senior Full Stack Developer',
//     image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
//     expertise: ['MERN Stack', 'Next.js', 'TypeScript', 'AWS', 'React.js', 'Node.js'],
//     bio: 'Expert full-stack developer with 5+ years of experience in building scalable web applications and modern user interfaces. Passionate about creating efficient, maintainable code and delivering exceptional user experiences.',
//     social: {
//       linkedin: 'https://linkedin.com/in/pranjal-gupta',
//       twitter: 'https://twitter.com/pranjal_dev',
//       github: 'https://github.com/pranjal-gupta',
//       portfolio: 'https://pranjal-portfolio.com',
//     },
//     projects: [
//       'E-Commerce Platform with 50K+ users',
//       'Learning Management System for 10+ institutions',
//       'Corporate Website with advanced CMS',
//       'Real-time Chat Application',
//       'Payment Gateway Integration System',
//     ],
//     achievements: [
//       'Led development of 15+ successful projects',
//       'Mentored 5+ junior developers',
//       'Contributed to open-source projects',
//       'AWS Certified Developer',
//     ],
//     experience: '5+ Years',
//     location: 'Noida, India',
//   },
//   // Add more developers here if needed
// ];

const developers = [
  {
    id: 'shriyam-parashar',
    name: 'Shriyam Parashar',
    role: 'Owner & Founder',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Business Strategy', 'Technology Leadership', 'Project Management', 'Client Relations'],
    bio: 'Visionary leader with extensive experience in technology strategy and business development. Founded VLP Technologies with a mission to deliver premium tech solutions.',
    social: {
      linkedin: 'https://linkedin.com/in/shriyam-parashar',
      twitter: 'https://twitter.com/shriyam_dev',
      github: 'https://github.com/shriyam-parashar',
      portfolio: 'https://shriyam-portfolio.com',
    },
    projects: [
      'Built VLP Technologies from scratch',
      'Managed 20+ successful projects',
      'Developed company growth strategy',
    ],
    achievements: [
      'Mentored team members',
      'Led company expansion',
      'Recognized as technology visionary',
    ],
    experience: '10+ Years',
    location: 'Noida, India',
  },
  {
    id: 'shanvika',
    name: 'Shanvika',
    role: 'Co-owner',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Operations Management', 'Quality Assurance', 'Team Leadership', 'Process Optimization'],
    bio: 'Strategic partner focused on operational excellence and ensuring the highest quality standards in all our deliverables.',
    social: {
      linkedin: 'https://linkedin.com/in/shanvika',
      twitter: 'https://twitter.com/shanvika_dev',
      github: 'https://github.com/shanvika',
      portfolio: 'https://shanvika-portfolio.com',
    },
    projects: [
      'Optimized company operations',
      'Implemented QA processes',
      'Team management and mentoring',
    ],
    achievements: [
      'Ensured 100% project delivery success',
      'Improved operational efficiency by 30%',
      'Recognized for leadership excellence',
    ],
    experience: '8+ Years',
    location: 'Greater Noida, India',
  },
  {
    id: 'pranjal-gupta',
    name: 'Pranjal Gupta',
    role: 'Senior Full Stack Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['MERN Stack', 'Next.js', 'TypeScript', 'AWS', 'React.js', 'Node.js'],
    bio: 'Expert full-stack developer with 5+ years of experience in building scalable web applications and modern user interfaces. Passionate about creating efficient, maintainable code and delivering exceptional user experiences.',
    social: {
      linkedin: 'https://linkedin.com/in/pranjal-gupta',
      twitter: 'https://twitter.com/pranjal_dev',
      github: 'https://github.com/pranjal-gupta',
      portfolio: 'https://pranjal-portfolio.com',
    },
    projects: [
      'E-Commerce Platform with 50K+ users',
      'Learning Management System for 10+ institutions',
      'Corporate Website with advanced CMS',
      'Real-time Chat Application',
      'Payment Gateway Integration System',
    ],
    achievements: [
      'Led development of 15+ successful projects',
      'Mentored 5+ junior developers',
      'Contributed to open-source projects',
      'AWS Certified Developer',
    ],
    experience: '5+ Years',
    location: 'Noida, India',
  },
  {
    id: 'yash-gupta',
    name: 'Yash Gupta',
    role: 'Mobile App Developer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['React Native', 'Flutter', 'Firebase'],
    bio: 'Specialized mobile developer with 4+ years of experience in building performant Android and iOS applications.',
    social: {
      linkedin: 'https://linkedin.com/in/yash-gupta',
      twitter: 'https://twitter.com/yash_dev',
      github: 'https://github.com/yash-gupta',
      portfolio: 'https://yash-portfolio.com',
    },
    projects: ['Social Media App', 'E-Commerce Mobile App', 'Fitness Tracker App'],
    achievements: ['Published 5 apps on Play Store', 'Mentored interns', 'Certified in React Native'],
    experience: '4+ Years',
    location: 'Greater Noida, India',
  },
  {
    id: 'shuaib-akhtar',
    name: 'Shuaib Akhtar',
    role: 'Backend Developer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Node.js', 'Express', 'MongoDB', 'SQL', 'Python'],
    bio: 'Backend specialist focused on building scalable APIs and server-side logic for enterprise-grade applications.',
    social: {
      linkedin: 'https://linkedin.com/in/shuaib-akhtar',
      twitter: 'https://twitter.com/shuaib_dev',
      github: 'https://github.com/shuaib-akhtar',
      portfolio: 'https://shuaib-portfolio.com',
    },
    projects: ['API for E-Commerce Platform', 'Microservices Architecture Project', 'Payment Gateway Integration'],
    achievements: ['Built scalable backend for 10+ apps', 'Contributor to open-source Node.js projects'],
    experience: '4+ Years',
    location: 'Noida, India',
  },
  {
    id: 'kirti-rajani',
    name: 'Kirti Rajani',
    role: 'UI/UX Designer & Frontend Developer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['UI/UX Design', 'React.js', 'Figma', 'Tailwind CSS'],
    bio: 'Creative designer and frontend developer delivering visually appealing and user-friendly web interfaces.',
    social: {
      linkedin: 'https://linkedin.com/in/kirti-rajani',
      twitter: 'https://twitter.com/kirti_design',
      github: 'https://github.com/kirti-rajani',
      portfolio: 'https://kirti-portfolio.com',
    },
    projects: ['Corporate Website Redesign', 'Mobile App UI/UX', 'E-Learning Platform Frontend'],
    achievements: ['Awarded Best Designer 2023', 'Mentored 3 junior designers'],
    experience: '3+ Years',
    location: 'Greater Noida, India',
  },
];

/* Props Interface */
interface PageProps {
  params: { id: string };
}

/* SEO Metadata */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const developer = developers.find((d) => d.id === params.id);
  if (!developer) {
    return {
      title: 'Developer Not Found - VLP Technologies',
      description: 'The requested developer profile could not be found.',
    };
  }

  return {
    title: `${developer.name} - ${developer.role} | VLP Technologies`,
    description: `Meet ${developer.name}, ${developer.role} at VLP Technologies. ${developer.bio}`,
    openGraph: {
      title: `${developer.name} - ${developer.role} | VLP Technologies`,
      description: `Meet ${developer.name}, ${developer.role} at VLP Technologies. Expert in ${developer.expertise.join(', ')}.`,
    },
  };
}

/* Developer Profile Page */
export default function DeveloperProfile({ params }: PageProps) {
  const developer = developers.find((d) => d.id === params.id);
  if (!developer) return notFound();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              <img
                src={developer.image}
                alt={developer.name}
                className="w-48 h-48 rounded-full object-cover border-8 border-white/20 shadow-2xl"
              />
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{developer.name}</h1>
                <p className="text-xl md:text-2xl text-blue-300 mb-4">{developer.role}</p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{developer.bio}</p>
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <span className="flex items-center text-gray-300">
                    <i className="fas fa-briefcase mr-2" />
                    {developer.experience}
                  </span>
                  <span className="flex items-center text-gray-300">
                    <i className="fas fa-map-marker-alt mr-2" />
                    {developer.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
        </section>

        {/* Skills */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {developer.expertise.map((skill, idx) => (
                <div key={idx} className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects & Achievements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notable Projects</h2>
              <div className="space-y-4">
                {developer.projects.map((project, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-md flex items-start">
                    <i className="fas fa-project-diagram text-blue-600 mt-1 mr-3" />
                    <p className="text-gray-700">{project}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
              <div className="space-y-4">
                {developer.achievements.map((ach, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-md flex items-start">
                    <i className="fas fa-trophy text-amber-500 mt-1 mr-3" />
                    <p className="text-gray-700">{ach}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social & Share */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Connect with {developer.name.split(' ')[0]}
            </h2>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href={developer.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white"
              >
                <i className="fab fa-linkedin text-xl" />
              </a>
              <a
                href={developer.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center text-white"
              >
                <i className="fab fa-github text-xl" />
              </a>
              <a
                href={developer.social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center text-white"
              >
                <i className="fas fa-globe text-xl" />
              </a>
              <a
                href={developer.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white"
              >
                <i className="fab fa-twitter text-xl" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShareProfiled developer={developer} />
              <Link href="/team">
                <Button variant="outline" className="px-6 py-3">
                  <i className="fas fa-arrow-left mr-2" />
                  Back to Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* Generate Static Params */
export async function generateStaticParams() {
  return developers.map((d) => ({ id: d.id }));
}

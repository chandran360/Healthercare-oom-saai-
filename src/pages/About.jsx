import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import { FaCheckCircle } from 'react-icons/fa';
import CompanyIntroduction from '../components/common/Introduction';

const teamMembers = [
  {
    name: 'Dr. Emily Chen',
    role: 'Clinical Director',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'James Wilson',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Sarah O\'Connor',
    role: 'Senior Care Coordinator',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'David Patel',
    role: 'Support Specialist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Astute Softcare Disability Support</title>
        <meta name="description" content="Learn about Astute Softcare's mission, vision, values, and meet our professional team of disability support workers." />
      </Helmet>

      <main>
        <PageHeader
          title="About Us"
          bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        {/* Company Introduction */}
        <CompanyIntroduction />

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-gold"
              >
                <h3 className="text-3xl font-bold mb-4 text-navy">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide compassionate, high-quality, and personalized disability support services that empower individuals to achieve their goals, enhance their independence, and actively participate in their communities.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-navy p-10 rounded-2xl shadow-md border-t-4 border-gold text-white"
              >
                <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  An inclusive society where individuals with disabilities are respected, valued, and have equitable access to opportunities that allow them to live life to its fullest potential without barriers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-gold font-semibold tracking-wider uppercase text-sm">Our People</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Meet Our Professional Team</h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="overflow-hidden rounded-full w-48 h-48 mx-auto mb-6 border-4 border-gray-light shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-navy mb-1">{member.name}</h4>
                  <p className="text-gold font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

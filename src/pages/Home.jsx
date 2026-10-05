import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatsAndTestimonials from '../components/home/StatsAndTestimonials';
import ContactBanner from '../components/home/ContactBanner';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Allarewellcare Disability Support Services</title>
        <meta name="description" content="Allarewellcare provides premium, compassionate disability support services tailored to empower independence and enhance your quality of life." />
      </Helmet>

      <main>
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <StatsAndTestimonials />
        {/* Simple Image Gallery */}
        <section className="py-2">
          <div className="flex w-full h-[300px] md:h-[400px]">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Caregiver smiling" className="w-1/4 object-cover" />
            <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Community participation" className="w-1/4 object-cover" />
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Physical therapy" className="w-1/4 object-cover" />
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Caregiver pushing wheelchair" className="w-1/4 object-cover" />
          </div>
        </section>
        <ContactBanner />
      </main>
    </>
  );
};

export default Home;

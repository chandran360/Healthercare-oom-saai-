import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/common/PageHeader';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Allarewellcare Disability Support</title>
        <meta name="description" content="Read Allarewellcare's Privacy Policy to understand how we collect, use, and protect your personal information." />
      </Helmet>

      <main>
        <PageHeader
          title="Privacy Policy"
          bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-navy max-w-none">
              <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

              <div className="space-y-12 text-gray-700 leading-relaxed">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">1. Introduction</h2>
                  <p>
                    At Allarewellcare Disability Support Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services or visit our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">2. Information We Collect</h2>
                  <p className="mb-2">We may collect personal information that you provide directly to us, including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact information (name, address, email address, phone number)</li>
                    <li>Health and medical information relevant to providing support services</li>
                    <li>NDIS participant details and plan information</li>
                    <li>Emergency contact details</li>
                    <li>Feedback and correspondence</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">3. How We Use Your Information</h2>
                  <p className="mb-2">We use the information we collect for various purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing and personalizing our disability support services</li>
                    <li>Communicating with you about your care plan and our services</li>
                    <li>Complying with NDIS reporting requirements and legal obligations</li>
                    <li>Improving our services and website user experience</li>
                    <li>Processing payments and managing accounts</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">4. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">5. Your Privacy Rights</h2>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information (subject to legal retention requirements)</li>
                    <li>Withdraw consent for data processing where applicable</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">6. Cookies Policy</h2>
                  <p>
                    Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device. You can set your browser to refuse all or some browser cookies, but this may affect the functionality of our website.
                  </p>
                </div>

                <div className="bg-gray-light p-8 rounded-2xl mt-12 border border-gray-200">
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">7. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Privacy Officer:
                  </p>
                  <address className="not-italic text-navy font-medium">
                    Allarewellcare Disability Support Services<br />
                    123 Support Avenue, Healthcare District<br />
                    Sydney 2000<br />
                    Email: privacy@Allarewellcare.example.com<br />
                    Phone: 1800 123 456
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;

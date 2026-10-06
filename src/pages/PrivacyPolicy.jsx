import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/common/PageHeader';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Astute Softcare</title>
        <meta name="description" content="Read Astute Softcare's Privacy Policy to understand how we collect, handle, use, store and protect your personal information." />
      </Helmet>

      <main>
        <PageHeader
          title="Privacy Policy"
          bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-navy max-w-none">
              
              <div className="mb-10 pb-8 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-navy mb-2">Astute Softcare Privacy Policy</h1>
                <p className="text-gray-500 mb-1"><strong>Website:</strong> astutesoftcare.com.au</p>
                <p className="text-gray-500"><strong>Last Updated:</strong> 6 October 2026</p>
              </div>

              <div className="space-y-12 text-gray-700 leading-relaxed">
                
                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">1. About This Privacy Policy</h2>
                  <p className="mb-4">
                    Astute Softcare respects the privacy of individuals who interact with our organisation.
                  </p>
                  <p className="mb-4">
                    This Privacy Policy explains how we collect, handle, use, store and protect personal information when you visit our website, contact our team, enquire about our services, engage with us as a client, or otherwise communicate with Astute Softcare.
                  </p>
                  <p className="mb-4">
                    We aim to handle personal information responsibly and transparently and to comply with the privacy obligations that apply to our organisation, including relevant requirements under the Privacy Act 1988 (Cth) and the Australian Privacy Principles, where applicable.
                  </p>
                  <p>
                    In this policy, â€œAstute Softcareâ€, â€œweâ€, â€œusâ€ or â€œourâ€ refers to Astute Softcare and the relevant entity operating our services.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">2. Information We May Collect</h2>
                  <p className="mb-4">The information we collect depends on how you interact with us and the services you request. This may include:</p>
                  
                  <h3 className="text-xl font-semibold text-navy mb-2">Contact Information</h3>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Telephone or mobile number</li>
                    <li>Residential or postal address</li>
                    <li>Preferred method of communication</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-navy mb-2">Client and Service Information</h3>
                  <p className="mb-2">Where relevant to providing our services, we may receive information such as:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>Information about your support requirements</li>
                    <li>Details relating to services you request</li>
                    <li>Information about your preferences and circumstances</li>
                    <li>Information contained in forms or documents you provide</li>
                    <li>Information supplied by an authorised representative</li>
                    <li>Service-related correspondence and records</li>
                    <li>Information required to coordinate or administer services</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-navy mb-2">Payment and Administrative Information</h3>
                  <p className="mb-2">Where applicable, we may collect information necessary to manage:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>Invoices</li>
                    <li>Payments</li>
                    <li>Reimbursements</li>
                    <li>Service records</li>
                    <li>Account or transaction information</li>
                    <li>Business administration</li>
                  </ul>
                  
                  <p>We will only request information that is reasonably relevant to the purpose for which it is required.</p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">3. Sensitive Information</h2>
                  <p className="mb-4">
                    Because of the nature of care and support services, there may be circumstances where information provided to us contains sensitive or health-related information. Depending on the services involved, this may include information relating to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Health or wellbeing</li>
                    <li>Disability or support requirements</li>
                    <li>Individual goals and preferences</li>
                    <li>Care or support arrangements</li>
                    <li>Information provided by healthcare or support professionals</li>
                    <li>Other information that is considered sensitive under applicable privacy legislation</li>
                  </ul>
                  <p>
                    We take additional care when handling sensitive information and will only collect, use or disclose such information where permitted or required by law, or where appropriate consent has been obtained.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">4. How Information Reaches Us</h2>
                  <p className="mb-2">We may receive information through different channels, including when you:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Complete a form on our website</li>
                    <li>Contact us by email</li>
                    <li>Speak with our team by telephone</li>
                    <li>Communicate with us in person</li>
                    <li>Request information about our services</li>
                    <li>Become a client</li>
                    <li>Provide documents or supporting information</li>
                    <li>Communicate through approved digital platforms</li>
                    <li>Interact with our website</li>
                    <li>Communicate through social media or other online channels</li>
                  </ul>
                  <p>
                    In some circumstances, information may also be provided by a person or organisation acting on your behalf where this is authorised or otherwise permitted.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">5. Information Collected Through Our Website</h2>
                  <p className="mb-2">When you use our website, certain technical information may be recorded automatically. This may include:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>IP address</li>
                    <li>Browser and device information</li>
                    <li>Operating system</li>
                    <li>Pages visited</li>
                    <li>Approximate geographic information</li>
                    <li>Date and time of access</li>
                    <li>Referring website</li>
                    <li>Website interaction information</li>
                    <li>Technical and diagnostic information</li>
                  </ul>
                  <p>
                    We use this information primarily to maintain the website, understand how it is being used, improve performance and help protect our online services.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">6. Website Enquiries</h2>
                  <p className="mb-2">If you submit an enquiry through our website, we may collect the information entered into the enquiry form, including your name and email address. We use this information to:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Respond to your enquiry</li>
                    <li>Understand what assistance you are requesting</li>
                    <li>Contact you regarding your enquiry</li>
                    <li>Arrange a discussion or consultation where required</li>
                    <li>Provide information about relevant services</li>
                  </ul>
                  <p className="font-semibold">
                    Please avoid submitting unnecessary sensitive information through a general website enquiry form.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">7. Why We Use Personal Information</h2>
                  <p className="mb-2">Depending on the circumstances, Astute Softcare may use information to:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <li>Respond to enquiries</li>
                    <li>Provide requested services</li>
                    <li>Communicate with clients and representatives</li>
                    <li>Understand individual service requirements</li>
                    <li>Coordinate support-related activities</li>
                    <li>Manage client relationships</li>
                    <li>Maintain appropriate records</li>
                    <li>Process invoices and payments</li>
                    <li>Improve our services</li>
                    <li>Improve website functionality</li>
                    <li>Maintain website security</li>
                    <li>Investigate technical problems</li>
                    <li>Prevent misuse or fraudulent activity</li>
                    <li>Meet contractual responsibilities</li>
                    <li>Meet legal or regulatory obligations</li>
                    <li>Resolve complaints or disputes</li>
                    <li>Send important service-related communications</li>
                  </ul>
                  <p>
                    We seek to use information only for purposes that are reasonably connected to our business activities and the services we provide.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">8. When Information May Be Shared</h2>
                  <p className="mb-4 font-semibold">Astute Softcare does not sell personal information for money.</p>
                  <p className="mb-2">Where necessary, information may be provided to organisations or individuals who assist us in delivering our services or operating our business. These may include:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <li>Service providers</li>
                    <li>Support professionals</li>
                    <li>Technology providers</li>
                    <li>Website and hosting providers</li>
                    <li>IT and cybersecurity providers</li>
                    <li>Communication providers</li>
                    <li>Payment providers</li>
                    <li>Professional advisers</li>
                    <li>Administrative contractors</li>
                    <li>Government departments or agencies</li>
                    <li>Regulators or authorities where legally required</li>
                  </ul>
                  <p>
                    Where appropriate, we take reasonable steps to ensure that third parties receiving personal information handle it securely and only for the relevant purpose.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">9. Sharing Information With Your Permission</h2>
                  <p className="mb-2">In situations where information needs to be provided to another person or organisation on your behalf, we may seek appropriate permission or authority before doing so. Depending on the circumstances, this may involve communication with:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>An authorised representative</li>
                    <li>Family members or nominated contacts</li>
                    <li>Support coordinators</li>
                    <li>Service providers</li>
                    <li>Healthcare professionals</li>
                    <li>Government agencies</li>
                    <li>Other organisations involved in delivering or coordinating services</li>
                  </ul>
                  <p>
                    Information may also be disclosed without consent where disclosure is permitted or required by law.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">10. Protecting Your Information</h2>
                  <p className="mb-2">We take reasonable measures to protect personal information from:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-2 md:grid-cols-3 gap-x-4">
                    <li>Unauthorised access</li>
                    <li>Loss</li>
                    <li>Misuse</li>
                    <li>Modification</li>
                    <li>Unauthorised disclosure</li>
                    <li>Destruction</li>
                  </ul>
                  <p className="mb-4">
                    Depending on the system involved, safeguards may include access controls, secure hosting, authentication mechanisms, technical security measures and controlled access to information.
                  </p>
                  <p>
                    However, no online service can guarantee complete protection against every possible security incident. If we become aware of a privacy or security incident that requires notification under applicable law, we will take the appropriate steps.
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">11. Storage and Retention</h2>
                  <p className="mb-4">Personal information may be stored electronically or in other appropriate formats.</p>
                  <p className="mb-2">We retain information for as long as reasonably necessary to:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <li>Provide services</li>
                    <li>Maintain appropriate records</li>
                    <li>Meet legal requirements</li>
                    <li>Meet contractual obligations</li>
                    <li>Resolve disputes</li>
                    <li>Protect our legitimate business interests</li>
                  </ul>
                  <p>
                    When information is no longer required, we may securely delete, destroy or de-identify it, subject to applicable retention requirements.
                  </p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">12. Cookies and Website Technologies</h2>
                  <p className="mb-2">Our website may use cookies and similar technologies to support website functionality and understand how visitors use our website. These technologies may be used for:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <li>Website functionality</li>
                    <li>Security</li>
                    <li>Performance monitoring</li>
                    <li>Website analytics</li>
                    <li>Understanding visitor activity</li>
                    <li>Improving user experience</li>
                  </ul>
                  <p>
                    You can manage or disable cookies through your browser settings. Some website functions may not operate correctly if certain cookies are disabled.
                  </p>
                </div>

                {/* Section 13 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">13. Google reCAPTCHA</h2>
                  <p className="mb-4">
                    Our website may use Google reCAPTCHA to help protect forms and online services from spam, automated submissions and abusive activity.
                  </p>
                  <p className="mb-4">
                    When reCAPTCHA is used, Google may collect information about your interaction with the service in accordance with Google's own privacy practices.
                  </p>
                  <p>
                    Your use of reCAPTCHA is also subject to Google's applicable Privacy Policy and Terms of Service.
                  </p>
                </div>

                {/* Section 14 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">14. Third-Party Services and Links</h2>
                  <p className="mb-2">Our website may use third-party services or contain links to websites operated by other organisations. These may include services used for:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-2 md:grid-cols-4 gap-x-4">
                    <li>Website hosting</li>
                    <li>Analytics</li>
                    <li>Communication</li>
                    <li>Security</li>
                    <li>Forms</li>
                    <li>Social media</li>
                    <li>Embedded content</li>
                    <li>Online functionality</li>
                  </ul>
                  <p>
                    A third-party website operates under its own privacy practices. We recommend reviewing the relevant privacy policy before providing personal information to another organisation.
                  </p>
                </div>

                {/* Section 15 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">15. Information Held Outside Australia</h2>
                  <p className="mb-4">
                    Some technology or service providers we use may operate infrastructure or support services from outside Australia.
                  </p>
                  <p>
                    Where personal information is handled outside Australia, we take reasonable steps appropriate to the circumstances to ensure that the information receives appropriate protection and is handled consistently with applicable privacy obligations.
                  </p>
                </div>

                {/* Section 16 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">16. Accessing Your Information</h2>
                  <p className="mb-4">
                    Subject to applicable law, you may request access to personal information that we hold about you.
                  </p>
                  <p className="mb-4">
                    If you would like to make an access request, please contact us using the details provided at the end of this policy. We may need to verify your identity before providing access to certain information.
                  </p>
                  <p>
                    In some circumstances, access may be refused where permitted or required by law. If this occurs, we will explain the applicable reasons where appropriate.
                  </p>
                </div>

                {/* Section 17 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">17. Correcting Your Information</h2>
                  <p className="mb-4">We aim to keep personal information accurate and reasonably up to date.</p>
                  <p className="mb-4">
                    If you believe information we hold about you is incorrect, incomplete or outdated, please contact us and explain what needs to be changed.
                  </p>
                  <p>
                    We will review reasonable correction requests and update information where appropriate.
                  </p>
                </div>

                {/* Section 18 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">18. Your Privacy Choices</h2>
                  <p className="mb-2">Depending on your circumstances and applicable law, you may have the ability to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Request access to information we hold about you</li>
                    <li>Ask us to correct information</li>
                    <li>Ask questions about how your information is handled</li>
                    <li>Withdraw consent where consent is the basis for a particular activity</li>
                    <li>Opt out of certain promotional communications</li>
                    <li>Raise a concern about our handling of personal information</li>
                  </ul>
                  <p>Some rights may be subject to legal or operational limitations.</p>
                </div>

                {/* Section 19 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">19. Marketing</h2>
                  <p className="mb-4">
                    From time to time, Astute Softcare may communicate information about our services, news, updates or other relevant information.
                  </p>
                  <p className="mb-4">
                    Where marketing communications are subject to consent or opt-out requirements, we will provide an appropriate way for you to stop receiving those communications. You can also contact us directly if you no longer wish to receive promotional communications.
                  </p>
                  <p>
                    Essential communications relating to an existing service or enquiry may still be sent where necessary.
                  </p>
                </div>

                {/* Section 20 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">20. Children's Information</h2>
                  <p className="mb-4">
                    Our services and website are not specifically directed toward children unless expressly stated otherwise. We do not knowingly collect information from children where doing so would be unlawful or inappropriate.
                  </p>
                  <p>
                    If you believe that information relating to a child has been provided to us improperly, please contact us so that we can assess the situation.
                  </p>
                </div>

                {/* Section 21 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">21. Privacy Complaints</h2>
                  <p className="mb-4">
                    If you believe we have not handled your personal information appropriately, we encourage you to contact us first so that we have an opportunity to understand and address your concern.
                  </p>
                  <p className="mb-4">
                    When making a privacy complaint, please provide enough information for us to investigate the matter. We will review the complaint and respond within a reasonable timeframe.
                  </p>
                  <p>
                    If you are not satisfied with our response, you may have the right to contact the Office of the Australian Information Commissioner (OAIC) or another relevant privacy regulator.
                  </p>
                </div>

                {/* Section 22 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">22. Changes to This Privacy Policy</h2>
                  <p className="mb-4">Our services, technology and legal responsibilities may change over time. For this reason, we may update this Privacy Policy when required.</p>
                  <p className="mb-4">
                    The latest version will be published on our website, together with the date it was last updated.
                  </p>
                  <p>We recommend checking this page periodically for any changes.</p>
                </div>

                {/* Section 23 */}
                <div className="bg-gray-light p-8 rounded-2xl mt-12 border border-gray-200">
                  <h2 className="text-2xl font-bold text-navy mb-6 font-secondary">23. Contact Us</h2>
                  <p className="mb-6">
                    If you have questions about this Privacy Policy, want to request access to your information, request a correction, or wish to raise a privacy concern, please contact Astute Softcare.
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                    <h3 className="text-lg font-bold text-navy mb-4">Astute Softcare</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="font-semibold w-24 flex-shrink-0 text-navy">Website:</span>
                        <a href="https://astutesoftcare.com.au" className="text-gold hover:underline break-all">https://astutesoftcare.com.au</a>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold w-24 flex-shrink-0 text-navy">Email:</span>
                        <a href="mailto:privacy@astutesoftcare.com.au" className="text-gold hover:underline break-all">privacy@astutesoftcare.com.au</a>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold w-24 flex-shrink-0 text-navy">Phone:</span>
                        <span>[Insert your phone number]</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold w-24 flex-shrink-0 text-navy">Address:</span>
                        <span>[Insert your Australian business address]</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-navy mb-3">Our Commitment</h3>
                    <p className="italic text-gray-600">
                      Astute Softcare understands that privacy is particularly important when people are seeking care, support or assistance. We aim to handle personal information with care, respect and appropriate confidentiality while providing the services and support requested from us.
                    </p>
                  </div>
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

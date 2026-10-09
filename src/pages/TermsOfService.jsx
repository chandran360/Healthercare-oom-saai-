import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/common/PageHeader';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Astute Softcare</title>
        <meta name="description" content="Read Astute Softcare's Terms of Service to understand the conditions that apply when you access or use our website and online services." />
      </Helmet>

      <main>
        <PageHeader
          title="Terms of Service"
          bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-navy max-w-none">
              
              <div className="mb-10 pb-8 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-navy mb-2">Astute Softcare Terms of Service</h1>
                <p className="text-gray-500 mb-1"><strong>Website:</strong> astutesoftcare.com.au</p>
                <p className="text-gray-500"><strong>Last Updated:</strong> 6 October 2026</p>
              </div>

              <div className="space-y-12 text-gray-700 leading-relaxed">
                
                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">1. Welcome to Astute Softcare</h2>
                  <p className="mb-4">These Terms of Service explain the conditions that apply when you access or use the Astute Softcare website and interact with our online services.</p>
                  <p className="mb-4">By accessing this website, you agree to use it responsibly and in accordance with these Terms.</p>
                  <p className="mb-4">If you do not agree with these Terms, please do not use the website.</p>
                  <p>These website Terms do not replace any separate service agreement, client agreement, engagement letter or other written agreement that may apply to a specific service we provide.</p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">2. About Astute Softcare</h2>
                  <p className="mb-4">Astute Softcare provides care, support and plan-management-related services.</p>
                  <p className="mb-4">Information displayed on this website is provided to help visitors understand our organisation and the types of services we offer.</p>
                  <p>The availability, scope and conditions of individual services may depend on your circumstances and the specific arrangement agreed between you and Astute Softcare.</p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">3. Using Our Website</h2>
                  <p className="mb-4">You agree to use this website only for lawful and legitimate purposes.</p>
                  <p className="mb-2">You must not:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Use the website for an unlawful purpose</li>
                    <li>Attempt to gain unauthorised access to our systems</li>
                    <li>Introduce malicious software or harmful code</li>
                    <li>Interfere with the operation or security of the website</li>
                    <li>Copy or reproduce website content without permission</li>
                    <li>Use automated systems to improperly collect information from the website</li>
                    <li>Submit information that is knowingly false or misleading</li>
                    <li>Use another person's identity or credentials without permission</li>
                    <li>Use the website in a way that could damage our business, systems or reputation</li>
                  </ul>
                  <p>We may restrict or suspend access to the website where reasonably necessary to protect the website, our users or our business.</p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">4. Website Information</h2>
                  <p className="mb-4">We make reasonable efforts to keep information on our website useful and current.</p>
                  <p className="mb-4">However, website content may change as our services, operations and business requirements develop.</p>
                  <p className="mb-4">Information on the website should not automatically be treated as a personalised recommendation, professional advice, assessment or guarantee that a particular service is suitable for you.</p>
                  <p>For information about a particular service, please contact our team directly.</p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">5. Services and Client Agreements</h2>
                  <p className="mb-4">Information presented on this website does not by itself create a client-service relationship between you and Astute Softcare.</p>
                  <p className="mb-4">Where you engage Astute Softcare for a service, additional terms may apply.</p>
                  <p className="mb-2">Those terms may cover matters such as:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <li>The services being provided</li>
                    <li>Responsibilities of each party</li>
                    <li>Service arrangements</li>
                    <li>Fees and charges</li>
                    <li>Payment arrangements</li>
                    <li>Cancellation requirements</li>
                    <li>Service commencement</li>
                    <li>Service limitations</li>
                    <li>Communication arrangements</li>
                    <li>Other conditions specific to the engagement</li>
                  </ul>
                  <p>Where a separate written agreement exists, that agreement will govern the relevant service relationship to the extent of any inconsistency.</p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">6. Enquiries and Website Forms</h2>
                  <p className="mb-4">You may use forms or contact options on our website to send enquiries to us.</p>
                  <p className="mb-4">When submitting information, you agree that the information you provide is accurate to the best of your knowledge.</p>
                  <p className="mb-4">Submitting an enquiry does not guarantee acceptance as a client or commencement of services.</p>
                  <p className="mb-4">We may contact you using the information supplied in your enquiry to understand your requirements and respond to your request.</p>
                  <p>For information about how personal information is handled, please refer to our Privacy Policy.</p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">7. Availability of the Website</h2>
                  <p className="mb-4">We aim to keep our website available and functioning properly, but continuous availability cannot be guaranteed.</p>
                  <p className="mb-2">The website may occasionally be unavailable because of:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <li>Maintenance</li>
                    <li>Security updates</li>
                    <li>Technical problems</li>
                    <li>Hosting issues</li>
                    <li>Internet or telecommunications failures</li>
                    <li>Third-party service interruptions</li>
                    <li>Circumstances outside our reasonable control</li>
                  </ul>
                  <p>We may modify, suspend or discontinue parts of the website when reasonably necessary.</p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">8. Intellectual Property</h2>
                  <p className="mb-4">Unless otherwise stated, the content available on this website belongs to Astute Softcare or is used by us with appropriate permission.</p>
                  <p className="mb-2">This may include:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-2 md:grid-cols-3 gap-x-4">
                    <li>Logos</li>
                    <li>Branding</li>
                    <li>Text</li>
                    <li>Graphics</li>
                    <li>Images</li>
                    <li>Videos</li>
                    <li>Website layouts</li>
                    <li>Designs</li>
                    <li>Icons</li>
                    <li>Software elements</li>
                    <li>Other original materials</li>
                  </ul>
                  <p className="mb-4">You may view the website and use its content for your own personal or legitimate informational purposes.</p>
                  <p>You must not reproduce, republish, modify, distribute, sell or commercially exploit our website content without our prior written permission, except where permitted by law.</p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">9. Third-Party Websites and Services</h2>
                  <p className="mb-4">Our website may contain links to external websites or services operated by third parties.</p>
                  <p className="mb-4">These links may be provided for convenience or additional information.</p>
                  <p className="mb-4">Astute Softcare does not control those external websites and is not responsible for their content, availability, security or privacy practices.</p>
                  <p>Your use of a third-party website is subject to that provider's own terms and policies.</p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">10. Communication</h2>
                  <p className="mb-4">When you contact Astute Softcare, we may communicate with you through the contact details you provide.</p>
                  <p className="mb-2">Depending on the circumstances, communication may occur through:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <li>Email</li>
                    <li>Telephone</li>
                    <li>Online forms</li>
                    <li>Messaging services</li>
                    <li>Other communication methods made available by us</li>
                  </ul>
                  <p>You are responsible for ensuring that the contact information you provide is reasonably accurate and accessible.</p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">11. Fees and Payments</h2>
                  <p className="mb-4">Where fees apply to a service, the applicable pricing and payment conditions will generally be communicated separately before the relevant service is provided.</p>
                  <p className="mb-4">Website information about services or pricing, where displayed, may be subject to change.</p>
                  <p>Any specific payment obligation will be determined by the applicable service agreement, quotation, invoice or other agreed arrangement.</p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">12. Cancellations and Changes to Services</h2>
                  <p className="mb-4">Cancellation, rescheduling or changes to an individual service may be subject to the terms agreed for that service.</p>
                  <p className="mb-4">If you need to change or cancel an arrangement, please contact Astute Softcare as early as reasonably possible.</p>
                  <p>Any applicable cancellation charges or service consequences will be determined by the relevant agreement and applicable law.</p>
                </div>

                {/* Section 13 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">13. Australian Consumer Law</h2>
                  <p className="mb-4">Nothing in these Terms is intended to exclude, restrict or modify any right, guarantee, remedy or protection that cannot legally be excluded under Australian law.</p>
                  <p className="mb-4">Where the Australian Consumer Law applies, consumers may have statutory guarantees relating to services, including requirements concerning acceptable care and skill, suitability for a stated purpose and reasonable time where no timeframe has been agreed.</p>
                  <p>If any provision of these Terms conflicts with a mandatory legal right or protection, that legal requirement will apply to the extent of the inconsistency.</p>
                </div>

                {/* Section 14 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">14. No Guarantee of Specific Outcomes</h2>
                  <p className="mb-4">We aim to provide our services professionally and responsibly.</p>
                  <p className="mb-4">However, outcomes may depend on individual circumstances, information supplied to us, decisions made by third parties, service availability and other factors outside our reasonable control.</p>
                  <p>Unless expressly agreed in writing or required by law, we do not promise a particular outcome from using our website or engaging with our services.</p>
                </div>

                {/* Section 15 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">15. Limitation of Liability</h2>
                  <p className="mb-2">To the maximum extent permitted by law, Astute Softcare will not be responsible for loss arising from matters such as:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Temporary website unavailability</li>
                    <li>Third-party website failures</li>
                    <li>Internet or telecommunications interruptions</li>
                    <li>Unauthorised events beyond our reasonable control</li>
                    <li>Reliance on general website information where personalised advice was required</li>
                    <li>Information supplied incorrectly by a user</li>
                  </ul>
                  <p>This section does not exclude liability where doing so would be unlawful and does not limit rights available to consumers under applicable Australian law.</p>
                </div>

                {/* Section 16 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">16. Events Outside Our Control</h2>
                  <p className="mb-2">We will not be responsible for delays or failures caused by circumstances that are reasonably beyond our control. Examples may include:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <li>Natural disasters</li>
                    <li>Severe weather</li>
                    <li>Government actions</li>
                    <li>Public emergencies</li>
                    <li>Cybersecurity incidents</li>
                    <li>Internet outages</li>
                    <li>Telecommunications failures</li>
                    <li>Third-party system failures</li>
                    <li>Industrial disputes</li>
                    <li>Other unforeseen events</li>
                  </ul>
                  <p>Where reasonably possible, we will take appropriate steps to reduce the impact of such circumstances.</p>
                </div>

                {/* Section 17 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">17. Privacy</h2>
                  <p className="mb-4">Your use of this website may involve the collection of personal information.</p>
                  <p className="mb-4">Our approach to handling personal information is explained in our <strong>Privacy Policy</strong>.</p>
                  <p>By using the website, you acknowledge that information may be handled in accordance with that Privacy Policy and applicable privacy laws.</p>
                </div>

                {/* Section 18 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">18. Security</h2>
                  <p className="mb-4">We take reasonable measures to maintain the security and reliability of our website.</p>
                  <p className="mb-4">However, internet communications cannot be guaranteed to be completely secure.</p>
                  <p>You should take reasonable precautions when using online services, including keeping your own devices, accounts and passwords secure.</p>
                </div>

                {/* Section 19 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">19. Complaints and Concerns</h2>
                  <p className="mb-4">If you have a concern about our website, services or dealings with you, we encourage you to contact Astute Softcare first.</p>
                  <p className="mb-4">We will review the issue and aim to provide an appropriate response.</p>
                  <p>Nothing in these Terms prevents you from exercising any rights available to you under applicable Australian law.</p>
                </div>

                {/* Section 20 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">20. Changes to These Terms</h2>
                  <p className="mb-4">We may update these Terms from time to time to reflect changes to our website, services, business operations or legal requirements.</p>
                  <p className="mb-4">The latest version will be published on this website with the relevant update date.</p>
                  <p>Your continued use of the website after an updated version has been published indicates that you acknowledge the updated Terms, to the extent permitted by law.</p>
                </div>

                {/* Section 21 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">21. Severability</h2>
                  <p className="mb-4">If any part of these Terms is found to be invalid, unlawful or unenforceable, that provision will be interpreted or modified to the extent necessary to make it lawful where possible.</p>
                  <p>The remaining provisions will continue to operate to the extent permitted by law.</p>
                </div>

                {/* Section 22 */}
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4 font-secondary">22. Governing Law</h2>
                  <p className="mb-4">These Terms are governed by the laws applicable in Australia and, where relevant, the State or Territory in which Astute Softcare operates.</p>
                  <p>Any dispute relating to these Terms will be subject to the applicable courts and legal processes having jurisdiction.</p>
                </div>

                {/* Section 23 & 24 */}
                <div className="bg-gray-light p-8 rounded-2xl mt-12 border border-gray-200">
                  <h2 className="text-2xl font-bold text-navy mb-6 font-secondary">23. Contact Astute Softcare</h2>
                  <p className="mb-6">
                    If you have questions about these Terms of Service, our website or our services, please contact us.
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
                        <a href="mailto:support@astutesoftcare.com.au" className="text-gold hover:underline break-all">support@astutesoftcare.com.au</a>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold w-24 flex-shrink-0 text-navy">Phone:</span>
                        <span>[Insert phone number]</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold w-24 flex-shrink-0 text-navy">Address:</span>
                        <span>2 Norfolk Street, Springfield Lakes, QLD 4300</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-navy mb-3">24. Final Note</h3>
                    <p className="italic text-gray-600 mb-4">
                      These Terms are intended to explain how our website should be used and the general framework surrounding our online presence.
                    </p>
                    <p className="italic text-gray-600 mb-4">
                      Specific services may have additional terms that apply to the particular relationship between Astute Softcare and a client.
                    </p>
                    <p className="italic text-gray-600 font-semibold">
                      Where a separate agreement applies, please read that agreement carefully before accepting or commencing the relevant service.
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

export default TermsOfService;

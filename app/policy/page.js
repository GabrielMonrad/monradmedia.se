"use cliet"

import { Sixtyfour } from "@next/font/google";

const sixtyfourFont = Sixtyfour({
  weight: "400",
  subsets: ["latin"],
});

const policy = () => {
    return (
      <div>
        <section>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 sm:py-24 lg:px-8">
            <div className="sm:align-center sm:flex sm:flex-col "></div>
            <h1 className={`${sixtyfourFont.className} sm:text text-2xl sm:text-7xl font-bold py-8 text-[#5b6d5d] `}>
              Privacy Policy
            </h1>
            <div className="font-bold text-white mb-8">
              &nbsp; &nbsp;
              <p>Last updated: 21th Dec 2024</p>
              &nbsp; &nbsp;
            </div>
  
            <div>
              <p>
                This Privacy and Cookies Policy informs you about how we use
                personal data submitted to us or collected by us online through
                the use of cookies.
              </p>
              <br />
              <p>
                1. When you provide your information to MonradMedia in connection
                with a purchase or quotation request over the phone, via email, or
                on our website, it is used for the purpose of communicating with
                you as a customer and developing and managing a customer
                relationship.
              </p>
              &nbsp;
              <p>
                2. The personal data is also used for market and customer
                analysis, business monitoring, business and method development.
                The personal data is also used for marketing purposes. Your
                information remains with us and is not sold to any third party.
              </p>
              <br />
              <p>
                3. We use cookies to provide a more user-friendly website. Google
                Analytics collects data such as IP address, operating system,
                browser, and behavior, which MonradMedia stores for web statistics
                and the ability to improve the user experience, even if you do not
                actively provide your information to us.
              </p>
              <br />
              <p>
                4. MonradMedia applies technical and organizational measures to
                prevent unauthorized access, unlawful processing, and unauthorized
                or accidental loss, destruction, or damage to personal data,
                thereby ensuring an appropriate level of security.
              </p>
              <br />
              <p>
                5. MonradMedia, as the data controller, is responsible for
                ensuring that the processing of your personal data is done
                lawfully.
              </p>
              <br />
              <p>
                6. MonradMedia may engage data processors to process your personal
                data for the purposes stated above. This may include IT support,
                server providers, customer analysis providers, and user experience
                analysts. Such subcontractors will have the same obligations as
                MonradMedia regarding the processing of your personal data.
              </p>
              <br />
              <p>
                7. MonradMedia will, upon request, restrict the processing or
                erase personal data without undue delay unless there are legal
                grounds to continue the processing.
              </p>
              <br />
              <p className="mb-16 lg:mb-0">
                8. MonradMedia reserves the right to modify this privacy policy as
                needed, such as to comply with changes in laws and regulations.
                Any such changes will be published on monradmedia.se.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default policy;
  
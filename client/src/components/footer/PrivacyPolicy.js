import React from "react";
import Layout from "../../layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 bg-slate-200 mt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <p className="text-gray-700">
            Thank you for visiting the Jamshedpur Football Club Private Limited
            (“Jamshedpur FC”) website. We are committed to protecting your
            privacy and ensuring that your personal information is handled in a
            safe and responsible manner. This Privacy Policy outlines the
            information we collect, how it is used, and the steps we take to
            protect it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Information Collection and Use
          </h2>
          <p className="text-gray-700">
            Jamshedpur FC is sensitive to privacy issues on the internet.
            Visitors to our website are guaranteed privacy, and any information
            collected is kept confidential and never shared with other
            organizations. The information you provide is used solely by
            Jamshedpur FC to administer your request, if any.
          </p>
          <p className="text-gray-700">
            In instances where we require additional information from you, we
            will make every effort to inform you of how this information will be
            used. However, we are not obligated to do so.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            IP Address and Demographic Information
          </h2>
          <p className="text-gray-700">
            Your IP (Internet Protocol) address may be used to gather broad
            demographic information to measure the number of visits, average
            time spent on the site, pages viewed, etc. This data is collected to
            help us maintain and improve the website, ensuring that we address
            the most relevant issues for our stakeholders.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Copyright and Intellectual Property
          </h2>
          <p className="text-gray-700">
            All rights to the content, code, and applications contained on this
            website under the domain www.jamshedpurfc.com are reserved by
            Jamshedpur FC. The content on this website is copyright protected,
            and site visitors may not reproduce, copy, or redistribute content
            or code in any form without written permission from the club.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">External Links</h2>
          <p className="text-gray-700">
            This site contains links to external websites outside of
            www.jamshedpurfc.com. Jamshedpur FC is not responsible for the
            privacy practices or the content of such other websites. We
            encourage you to read the privacy policies of any external sites you
            visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-gray-700">
            We have implemented security measures to protect the loss, misuse,
            and alteration of the information under our control. Unauthorised
            attempts to upload or change information on this website, or
            otherwise cause damage, are strictly prohibited and will be dealt
            with in accordance with applicable laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to this Privacy Policy
          </h2>
          <p className="text-gray-700">
            Jamshedpur FC may update this Privacy Policy from time to time. Any
            changes to our policy will be reflected on this page. We encourage
            you to review this policy periodically to stay informed about how we
            are protecting your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at support@fcjamshedpur.com.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

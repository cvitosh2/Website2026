import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <div className="policy-container">
          <h1>Privacy Policy</h1>
          <p>
            We respect your privacy and are committed to protecting personal information shared with
            this website.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information such as your name, email address, comments, and any details you
            submit through contact or event forms. We only collect information that is necessary to
            provide the requested service or improve the user experience.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use collected information to maintain the website, respond to inquiries, improve content,
            and communicate important updates when appropriate.
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            This website may use cookies or analytics tools to understand visitor traffic and improve site
            performance. These tools may collect general usage information such as browser type, pages
            visited, and time spent on the website.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            The website may contain links to external sites. We are not responsible for the privacy
            practices or policies of those third parties.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable steps to protect information submitted through the website, but no online
            system is completely secure. Users should exercise caution when submitting sensitive or
            personal information.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact the site administrator
            through the website’s contact information.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

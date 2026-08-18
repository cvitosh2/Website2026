import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <div className="policy-container">
          <h1>Terms of Service</h1>
          <p>
            By using this website, you agree to use it for lawful purposes only and agree not to
            misuse, interfere with, or disrupt the functionality of the site.
          </p>

          <h2>Content Usage</h2>
          <p>
            The content on this website is provided for informational and family-history purposes.
            You may browse and share content responsibly, but you may not copy, republish, or use
            the material in a way that infringes on copyright, privacy, or personal rights.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We strive to provide accurate historical information, but some details may be incomplete,
            approximate, or based on family research and oral tradition. We encourage users to verify
            important historical claims independently.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            This website is provided on an "as is" basis. We do not guarantee uninterrupted access,
            error-free operation, or the completeness of any content. We are not liable for any loss
            or damage resulting from the use of this site.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms of Service at any time. Continued use of the site after changes
            are posted means you accept the revised terms.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;

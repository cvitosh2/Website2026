import { Link } from "wouter";

function Footer() {
  return (
    <div>
      <nav className="FooterNav" style={{ marginBottom: "12px" }}>
        <ul style={{ display: "flex", justifyContent: "center", gap: "16px", listStyle: "none", flexWrap: "wrap" }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/OurHistory">Our History</Link></li>
          <li><Link href="/Events">Events</Link></li>
          <li><Link href="/TermsOfService">Terms</Link></li>
          <li><Link href="/PrivacyPolicy">Privacy</Link></li>
        </ul>
      </nav>

      <p style={{ textAlign: "center" }}>
        Last updated June 28th 2026 by Carson Vitosh
      </p>
    </div>
  );
}

export default Footer;
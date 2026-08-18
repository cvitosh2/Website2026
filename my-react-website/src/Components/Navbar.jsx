
import { Link } from "wouter";
import { BookOpen, Calendar, Home, Info, LogIn, SquareLibrary, Users} from "lucide-react";



const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/About", label: "About", icon: Info },
  { href: "/OurHistory", label: "Our History", icon: SquareLibrary },
  { href: "/Genealogy", label: "Genealogy", icon: Users },
  { href: "/Biographies", label: "Biographies", icon: BookOpen },
  { href: "/Events", label: "Events", icon: Calendar },
];

function Navbar() {
  return (
    <section id="Navigation">
      <div className="HeaderContent">
        <nav className="nav-bar">
          <ul className="nav-links">
            {navItems.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link href={href}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Icon size={18} />
                    <span>{label}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <form className="LoginForm" onSubmit={(e) => e.preventDefault()}>
          <a href="/FacebookLogin.html" className="login-button" role="button">
            <LogIn size={16} />
            <span>Login</span>
          </a>
          <Link href="/Register" className="register-button" role="button">
            Register
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Navbar;

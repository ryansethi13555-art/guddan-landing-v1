import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              <span className="text-primary">G</span>uddan
            </h2>
            <p className="text-background/70 text-sm leading-relaxed">
              Authentic Indian crafts for domestic and global markets. 
              Customized corporate gifting solutions that celebrate tradition and artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Explore</h3>
            <ul className="space-y-3">
              {["About", "Products", "Services", "Clients"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Categories</h3>
            <ul className="space-y-3">
              {["Dokra Art", "Marble Products", "Leather Goods", "Recognition Items"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:guddandecor@gmail.com"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  guddandecor@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919810601715"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  +91 98106 01715
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  2301, Tower 7, Lotus Panache,<br />
                  Sector 110, Noida
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Guddan. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Crafted with heritage, delivered with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

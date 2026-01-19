import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 bg-white rounded-lg p-1">
                <Image
                  src="/logo.png"
                  alt="Aurum Consulting"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                Aurum Consulting
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering businesses with strategic insights and innovative
              solutions. We help you navigate challenges and seize opportunities
              for sustainable growth.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-sm hover:text-white transition-colors"
                >
                  Our Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/strategy"
                  className="text-sm hover:text-white transition-colors"
                >
                  Business Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/financial"
                  className="text-sm hover:text-white transition-colors"
                >
                  Financial Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing"
                  className="text-sm hover:text-white transition-colors"
                >
                  Marketing Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/operations"
                  className="text-sm hover:text-white transition-colors"
                >
                  Operations Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hr"
                  className="text-sm hover:text-white transition-colors"
                >
                  HR Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Business Avenue, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-sm">hello@aurumconsulting.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Aurum Consulting. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

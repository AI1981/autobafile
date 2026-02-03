import { Car } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { Topnav } from '../components/Topnav';
import { useState } from 'react';
import Button from '../components/Button';

const navLinks = [
    { href: "#about", label: "Chi siamo"},
    { href: "#services", label: "Servizi"},
];



export const Navbar = ({scrolled}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
      <header
        className="bg-white left-0 right-0 top-0 fixed z-10"
      >

        <nav className="flex items-center justify-between p-3 md:p-0">
          {/* logo */}
          <a className="font-bold text-3xl md:px-8 tracking-tighter" href="#">
            <div className="inline-flex items-center">
              <span className="text-accent">Auto</span>
              <span className="font-normal">bafile</span>
              <Car className="ms-1 text-accent" size={25} />
            </div>
            <div className="text-sm font-light space-x-1">
              <span>di</span>
              <span className="uppercase tracking-tight">dino impastato</span>
            </div>
          </a>

          <div className="space-x-5 hidden md:flex items-center">
            {/* Desktop Menu */}
            {navLinks.map((link, index) => (
              <a
                className="uppercase font-semibold hover:text-accent transition-colors duration-500"
                href={link.href}
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <a href="#contacts">
              <button className="bg-accent text-white h-16 px-10 self-center uppercase font-semibold">
                Contatti
              </button>
            </a>
          </div>

          {/* Mobile toggler */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="text-accent" size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-5 px-2 py-5 bg-gray-50 uppercase animate-in slide-in-t time-300">
            {navLinks.map((link, index) => (
              <a
                className="text-base"
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* CTA Button */}
            <a className="w-full" href="#contacts">
              <Button
                size="lg"
                className="animate-in slide-in-t time-300 time-delay-100 w-full"
              >
                contatti
              </Button>
            </a>
          </div>
        )}
      </header>
    );
};
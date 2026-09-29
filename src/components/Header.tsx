import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { trackConversion } from '../lib/analytics';

function SosLogo({ scrolled, className }: { scrolled: boolean; className?: string }) {
  const stroke = scrolled ? '#111111' : '#ffffff';
  const red = scrolled ? '#dc2626' : '#ffaaaa';
  return (
    <svg viewBox="0 0 130 115" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Roof */}
      <path d="M12 56 L65 8 L118 56" stroke={stroke} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Chimney */}
      <path d="M90 22 L90 12 L103 12 L103 42" stroke={stroke} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Left wall */}
      <line x1="20" y1="56" x2="20" y2="110" stroke={stroke} strokeWidth="6.5" strokeLinecap="round"/>
      {/* Right wall */}
      <line x1="110" y1="56" x2="110" y2="110" stroke={stroke} strokeWidth="6.5" strokeLinecap="round"/>
      {/* Bottom right (bag covers left portion) */}
      <line x1="80" y1="110" x2="110" y2="110" stroke={stroke} strokeWidth="6.5" strokeLinecap="round"/>

      {/* Speed lines — left of bag, outside house */}
      <line x1="1" y1="72" x2="22" y2="72" stroke={stroke} strokeWidth="5.5" strokeLinecap="round"/>
      <line x1="1" y1="83" x2="20" y2="83" stroke={stroke} strokeWidth="5.5" strokeLinecap="round"/>
      <line x1="1" y1="94" x2="22" y2="94" stroke={stroke} strokeWidth="5.5" strokeLinecap="round"/>

      {/* Bag handle — centered on bag (bag center = (8+82)/2 = 45) */}
      <path d="M36 62 L36 54 Q36 49 41 49 L57 49 Q62 49 62 54 L62 62" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Bag body — extends LEFT of house wall (x=20) */}
      <rect x="8" y="62" width="74" height="48" rx="6" stroke={stroke} strokeWidth="5.5" fill="white" fillOpacity={scrolled ? 1 : 0.1}/>

      {/* Stethoscope — U-tube visible at top with earpiece circles */}
      {/* Left stem + earpiece */}
      <path d="M35 76 Q31 70 27 68" stroke={red} strokeWidth="3" strokeLinecap="round" fill="none"/>
      <circle cx="25" cy="67" r="3.5" fill={red}/>
      {/* Right stem + earpiece */}
      <path d="M57 76 Q61 70 65 68" stroke={red} strokeWidth="3" strokeLinecap="round" fill="none"/>
      <circle cx="67" cy="67" r="3.5" fill={red}/>

      {/* Heart shape (stethoscope tube) — wider and lower */}
      <path d="M46 102 C46 102 24 90 24 78 C24 71 29 67 34 69 C38 71 43 76 46 81 C49 76 54 71 58 69 C63 67 68 71 68 78 C68 90 46 102 46 102Z" stroke={red} strokeWidth="3.5" fill="none"/>

      {/* Cross — centered in heart */}
      <line x1="46" y1="75" x2="46" y2="90" stroke={red} strokeWidth="5" strokeLinecap="round"/>
      <line x1="39" y1="82" x2="53" y2="82" stroke={red} strokeWidth="5" strokeLinecap="round"/>
    </svg>
  );
}

const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#apropos', label: 'À propos' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#faq', label: 'FAQ' },
  { href: '#rendez-vous', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#accueil" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="SOS Healthcare Services"
              className="w-14 h-14 object-contain flex-shrink-0 transition-all duration-300"
              style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
            />
            <span
              className={`font-bold text-sm tracking-widest uppercase transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              SOS Healthcare Services
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+212663219441"
              onClick={() => trackConversion('call')}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              06 63 21 94 41
            </a>
            <a
              href="#rendez-vous"
              className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-brand-500/25"
            >
              Prendre RDV
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {menuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block px-3 py-2.5 text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a
                href="#rendez-vous"
                onClick={handleNavClick}
                className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Prendre RDV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import { useTranslation } from 'next-i18next';

// NavbarItems function
function NavbarItems() {
  const { t } = useTranslation('default');
  return [
    { name: t('nav_Home'), url: '/' },
    // { name: 'About', url: '/about' },
    // { name: 'Contact', url: '/contact' },
    // More items can be added here
  ];
}

// Navbar component that includes HTML
export default function NavBar({ className }) {
  const items = NavbarItems();
  return (
    <nav className={className}>
      {items.map((item, index) => (
        <a key={index} href={item.url} style={{ color: '#fff', textDecoration: 'none' }}>
          {item.name}
        </a>
      ))}
    </nav>
  );
}
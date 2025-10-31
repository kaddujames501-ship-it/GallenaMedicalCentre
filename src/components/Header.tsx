import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      id="site-header"
      className={`sticky top-0 z-40 bg-transparent backdrop-blur border-b border-slate-200 dark:border-slate-700 ${elevated ? 'shadow' : ''}`}
    >
      <div className="container-1120 flex items-center justify-between py-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 no-underline text-slate-900 font-semibold"
        >
          <span className="grid place-items-center w-7 h-7 rounded-lg text-white font-bold bg-gradient-to-tr from-brand-blue to-brand-green">
            +
          </span>
          <span className="whitespace-nowrap dark:text-slate-100 text-xl md:text-2xl italic">
            Gallena Medical Centre
          </span>
        </Link>
        <nav className="relative" aria-label="Primary">
          <button
            aria-expanded={open}
            aria-controls="nav-menu"
            className="md:hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-900 dark:text-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
          <ul
            id="nav-menu"
            className={`md:flex gap-5 list-none m-0 p-0 absolute md:static right-0 top-12 bg-white dark:bg-slate-900 md:bg-transparent md:dark:bg-transparent border md:border-0 border-slate-200 dark:border-slate-700 rounded-xl md:rounded-none px-3 py-2 md:p-0 ${open ? 'flex flex-col' : 'hidden md:flex'}`}
          >
            <li>
              <NavLink
                to="/services"
                className="px-2 py-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-emerald-100 dark:hover:bg-emerald-900 font-bold text-xl md:text-2xl"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/staff"
                className="px-2 py-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-emerald-100 dark:hover:bg-emerald-900 font-bold text-xl md:text-2xl"
              >
                Staff
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="px-2 py-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-emerald-100 dark:hover:bg-emerald-900 font-bold text-xl md:text-2xl"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="px-2 py-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-emerald-100 dark:hover:bg-emerald-900 font-bold text-xl md:text-2xl"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <a href="#consultation" className="btn btn-primary hidden md:inline-flex">
            Book Consultation
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

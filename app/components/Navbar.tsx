 'use client';
 
 import { useEffect, useState } from 'react';
 
 const sections = ['services', 'about', 'office', 'faq', 'contact'];
 
 export default function Navbar() {
   const [open, setOpen] = useState(false);
   const [active, setActive] = useState<string>('');
 
   useEffect(() => {
     const handler = () => {
      const centerY = window.scrollY + window.innerHeight / 2;
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (centerY >= top && centerY < bottom) {
          current = id;
          break;
        }
      }
      setActive(current);
     };
     handler();
     window.addEventListener('scroll', handler, { passive: true });
     return () => window.removeEventListener('scroll', handler);
   }, []);
 
   const Link = ({ href, label }: { href: string; label: string }) => {
     const id = href.replace('#', '');
     const isActive = active === id;
     return (
       <a
         href={href}
         className={`navbar-link link-underline pb-1 text-[var(--color-muted-text)] hover:text-[var(--color-primary)] ${isActive ? 'active-link' : ''}`}
         onClick={() => setOpen(false)}
       >
         {label}
       </a>
     );
   };
 
   return (
    <header className="sticky top-0 z-50 bg-[var(--color-page-bg)]/75 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-page-bg)]/75 border-b border-[var(--color-border-soft)]/60">
      <div className="mx-auto max-w-6xl px-5 lg:px-12 flex items-center justify-between py-4 md:py-6">
        <a href="#" className="text-xl font-semibold tracking-wide md:text-2xl font-display text-[var(--color-primary)] transition-transform duration-300 hover:scale-105 hover:text-[var(--color-primary-light)]">
          Dr. Maya Reynolds, PsyD
        </a>
 
         <nav aria-label="Primary" className="hidden md:flex gap-8 text-sm md:text-base">
           <Link href="#services" label="Services" />
           <Link href="#about" label="About" />
           <Link href="#office" label="Office" />
           <Link href="#faq" label="FAQ" />
           <Link href="#contact" label="Contact" />
         </nav>
 
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] px-3 py-2 text-[var(--color-page-text)] transition-all duration-200 hover:bg-[var(--color-card-alt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-[3px]">
            <span className={`h-[2px] w-5 bg-[var(--color-page-text)] transition-transform ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-5 bg-[var(--color-page-text)] transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-[2px] w-5 bg-[var(--color-page-text)] transition-transform ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
          </span>
        </button>
        </div>
 
       {open && (
         <div className="md:hidden border-t border-[var(--color-border-soft)] bg-[var(--color-page-bg)]/95 backdrop-blur-sm">
           <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 lg:px-12 py-3 flex flex-col gap-3">
             <Link href="#services" label="Services" />
             <Link href="#about" label="About" />
             <Link href="#office" label="Office" />
             <Link href="#faq" label="FAQ" />
             <Link href="#contact" label="Contact" />
           </nav>
         </div>
       )}
     </header>
   );
 }

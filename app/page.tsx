"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BedDouble, CalendarDays, Car, ChevronRight, Coffee, Menu, Sparkles, Waves, X } from "lucide-react";
import { useState } from "react";

const photos = {
  hero: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2200&q=85",
  pool: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85",
  room: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85",
  room2: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
  garden: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85",
  beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
};

const nav = ["Stay", "Experience", "Dining", "Location", "Contact"];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="grain overflow-hidden">
      <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 rounded-full border border-white/30 bg-[#17231d]/85 p-2 text-white shadow-2xl backdrop-blur md:flex">
        {nav.map((item, i) => <a key={item} href={`#${item.toLowerCase()}`} aria-label={item} className="grid h-10 w-10 place-items-center rounded-full text-[10px] tracking-[.18em] transition hover:bg-white hover:text-[#17231d]">0{i + 1}</a>)}
      </div>

      <header className="absolute left-0 right-0 top-0 z-40 text-white">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-6 py-7 lg:px-10">
          <a href="#top" className="serif text-2xl tracking-[.08em]">MELICA<span className="text-[#d8c5a6]">.</span></a>
          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[.22em] lg:flex">
            {nav.map(item => <a className="navlink" key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
          <a href="#booking" className="hidden rounded-full border border-white/50 px-5 py-3 text-[10px] uppercase tracking-[.2em] transition hover:bg-white hover:text-[#17231d] sm:block">Reserve a stay</a>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
        </div>
        {open && <div className="mx-4 rounded-3xl bg-[#17231d] p-6 lg:hidden">{nav.map(item => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`} className="block border-b border-white/10 py-4 text-sm uppercase tracking-[.18em]">{item}</a>)}<a href="#booking" className="mt-5 block rounded-full bg-white px-5 py-4 text-center text-xs uppercase tracking-[.2em] text-[#17231d]">Reserve a stay</a></div>}
      </header>

      <section id="top" className="relative min-h-[92vh] overflow-hidden bg-[#17231d] text-white">
        <img src={photos.hero} alt="Tropical resort" className="absolute inset-0 h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-[#17231d]/90" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-[1450px] flex-col justify-end px-6 pb-16 pt-40 lg:px-10 lg:pb-20">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="max-w-5xl">
            <p className="mb-6 text-[10px] uppercase tracking-[.42em] text-[#e8d7bb]">Phu Quoc · Vietnam · Since 2018</p>
            <h1 className="serif max-w-4xl text-6xl leading-[.9] sm:text-8xl lg:text-[10rem]">A softer side<br/><i>of the island.</i></h1>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <p className="max-w-sm text-sm leading-7 text-white/75">A garden resort in Cua Lap, close to Long Beach and just 2 km from Phu Quoc International Airport.</p>
              <a href="#stay" className="group flex items-center gap-4 text-xs uppercase tracking-[.2em]">Explore the resort <span className="grid h-12 w-12 place-items-center rounded-full border border-white/40 transition group-hover:bg-white group-hover:text-[#17231d]"><ArrowDown size={17}/></span></a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="stay" className="bg-[#f5f0e7] px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-[1250px] gap-16 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div><p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#73846c]">01 — The resort</p><h2 className="serif text-5xl leading-tight sm:text-7xl">Come for the<br/><i>quiet.</i></h2></div>
          <div><p className="max-w-2xl text-lg leading-8 text-[#536057]">Melica is designed around the simple pleasures of an island stay: leafy paths, generous rooms, an open-air pool, and the freedom to slow down.</p><div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#17231d]/15 pt-6 text-sm sm:grid-cols-4"><div><b className="serif text-3xl">02</b><p className="mt-2 text-[#69736c]">km to airport</p></div><div><b className="serif text-3xl">12</b><p className="mt-2 text-[#69736c]">min to Long Beach</p></div><div><b className="serif text-3xl">24/7</b><p className="mt-2 text-[#69736c]">front desk</p></div><div><b className="serif text-3xl">9.0</b><p className="mt-2 text-[#69736c]">Wi-Fi rating</p></div></div></div>
        </div>
      </section>

      <section className="bg-[#f5f0e7] px-6 pb-24 lg:px-10 lg:pb-36"><div className="mx-auto grid max-w-[1250px] gap-5 md:grid-cols-12"><div className="image-wrap relative overflow-hidden md:col-span-7"><img src={photos.pool} className="image h-[520px] w-full object-cover lg:h-[680px]" alt="Resort pool"/><span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[.18em]">Pool & garden</span></div><div className="flex flex-col justify-end md:col-span-5 md:pl-10"><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-[#73846c]">A place to pause</p><h3 className="serif text-4xl leading-tight sm:text-5xl">Green mornings,<br/><i>blue afternoons.</i></h3><p className="mt-6 max-w-md leading-7 text-[#667168]">Swim beneath the palms, take your coffee outside, or simply find a shady corner and let the day unfold.</p></div></div></section>

      <section id="experience" className="bg-[#17231d] px-6 py-24 text-white lg:px-10 lg:py-32"><div className="mx-auto max-w-[1250px]"><div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#b8ad99]">02 — Stay your way</p><h2 className="serif text-5xl sm:text-7xl">Rooms with<br/><i>room to breathe.</i></h2></div><p className="max-w-sm text-sm leading-7 text-white/60">Garden views, balconies, terraces and pool views — each room keeps the tropical setting close.</p></div><div className="grid gap-5 md:grid-cols-3">
        {[['01','Standard Double','35 m²',photos.room],['02','Superior Triple','42 m²',photos.room2],['03','Private Suite','60 m²',photos.garden]].map(([no,name,size,img])=><article key={name} className="group"><div className="image-wrap overflow-hidden"><img src={img} alt={name} className="image aspect-[4/4.6] w-full object-cover"/></div><div className="flex items-start justify-between border-b border-white/15 py-6"><div><p className="mb-2 text-[9px] tracking-[.25em] text-[#b8ad99]">{no} · {size}</p><h3 className="serif text-2xl">{name}</h3></div><ArrowUpRight className="mt-1 opacity-60 transition group-hover:translate-x-1 group-hover:-translate-y-1"/></div></article>)}
      </div></div></section>

      <section id="dining" className="bg-[#ded8ca] px-6 py-24 lg:px-10 lg:py-36"><div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-2 lg:items-center"><div className="image-wrap overflow-hidden"><img src={photos.dining} alt="Dining" className="image h-[550px] w-full object-cover"/></div><div><p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#73846c]">03 — Melica Restaurant</p><h2 className="serif text-5xl leading-tight sm:text-7xl">Good food,<br/><i>no hurry.</i></h2><p className="mt-7 max-w-lg text-base leading-8 text-[#5d665f]">American and Vietnamese favourites, vegetarian options on request, and easygoing meals from breakfast through dinner.</p><div className="mt-10 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white/45 p-5"><Coffee size={20}/><p className="mt-8 text-xs uppercase tracking-[.16em]">Breakfast</p></div><div className="rounded-2xl bg-white/45 p-5"><Sparkles size={20}/><p className="mt-8 text-xs uppercase tracking-[.16em]">Dinner</p></div></div></div></div></section>

      <section className="bg-[#f5f0e7] px-6 py-24 lg:px-10"><div className="mx-auto max-w-[1250px]"><div className="grid gap-4 md:grid-cols-3"><div className="md:col-span-2 image-wrap overflow-hidden"><img src={photos.beach} alt="Long Beach" className="image h-[430px] w-full object-cover"/></div><div className="flex flex-col justify-between rounded-[2rem] bg-[#73846c] p-8 text-white"><Waves size={28}/><div><p className="mb-3 text-[10px] uppercase tracking-[.3em] text-white/60">Island access</p><h3 className="serif text-4xl">The beach is a short walk away.</h3><a href="#location" className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[.18em]">See location <ChevronRight size={16}/></a></div></div></div></div></section>

      <section id="location" className="bg-[#17231d] px-6 py-24 text-white lg:px-10 lg:py-32"><div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-[1fr_.8fr]"><div><p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#b8ad99]">04 — Find us</p><h2 className="serif text-5xl sm:text-7xl">Close to the<br/><i>island's rhythm.</i></h2><p className="mt-7 max-w-xl leading-8 text-white/60">Cua Lap, Duong To, Phu Quoc. Long Beach is around a 12-minute walk, while Phu Quoc International Airport is approximately 2 km away.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><div className="rounded-3xl border border-white/10 p-7"><Car/><p className="mt-10 text-xs uppercase tracking-[.18em]">Airport shuttle</p><p className="mt-2 text-sm text-white/50">Available on request.</p></div><div className="rounded-3xl border border-white/10 p-7"><BedDouble/><p className="mt-10 text-xs uppercase tracking-[.18em]">Check-in / check-out</p><p className="mt-2 text-sm text-white/50">From 14:00 · Until 12:00</p></div></div></div></section>

      <section id="booking" className="relative overflow-hidden bg-[#d8c5a6] px-6 py-24 lg:px-10 lg:py-36"><div className="mx-auto max-w-[1100px] text-center"><CalendarDays className="mx-auto mb-7" size={28}/><p className="text-[10px] uppercase tracking-[.4em]">05 — Your island days</p><h2 className="serif mx-auto mt-5 max-w-4xl text-6xl leading-[.95] sm:text-8xl">Make a little space<br/><i>for yourself.</i></h2><p className="mx-auto mt-8 max-w-xl leading-7 text-[#4e5a51]">Check current availability and rates for your dates. Prices vary by room, dates and offers.</p><a href="https://www.booking.com/hotel/vn/melica-resort.vi.html" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#17231d] px-8 py-5 text-xs uppercase tracking-[.2em] text-white transition hover:-translate-y-1">Check availability <ArrowUpRight size={17}/></a></div></section>

      <footer id="contact" className="bg-[#f5f0e7] px-6 py-16 lg:px-10"><div className="mx-auto flex max-w-[1250px] flex-col justify-between gap-10 border-b border-[#17231d]/15 pb-12 md:flex-row"><div><p className="serif text-3xl">MELICA.</p><p className="mt-4 max-w-sm text-sm leading-6 text-[#6a736d]">Melica Resort Phu Quoc<br/>Cua Lap, Duong To, Phu Quoc, Vietnam</p></div><div className="grid grid-cols-2 gap-x-16 gap-y-4 text-xs uppercase tracking-[.15em]"><a href="#stay">Stay</a><a href="#experience">Rooms</a><a href="#dining">Dining</a><a href="#location">Location</a></div></div><div className="mx-auto flex max-w-[1250px] justify-between pt-8 text-[10px] uppercase tracking-[.15em] text-[#7a817b]"><span>© 2026 Melica Resort</span><span>Phu Quoc · Vietnam</span></div></footer>
    </main>
  );
}

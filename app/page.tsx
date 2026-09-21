'use client'

import { useMemo, useState, type FormEvent } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronDown, ExternalLink, Menu, Send, X } from 'lucide-react'

const entities = [
  ['Dainik Jahan', 'Media', 'Media', 'A public-interest media direction within the wider UKSAI ecosystem.'],
  ['Vulture Eyes', 'Investigation', 'Investigation', 'An area of work for looking closely, asking better questions, and following evidence.'],
  ['Unacademy', 'Education', 'Learning', 'A learning-focused entry in the wider UKSAI directory.'],
  ['Shahnaz Pathology', 'Research', 'Investigation', 'A place in the directory for careful inquiry and research-led work.'],
  ['Queens Lesson', 'Education', 'Learning', 'An education-oriented entry for lessons, practice, and shared understanding.'],
  ['Dhaka Casino', 'Media', 'Media', 'A directory entry in the UKSAI media and culture landscape.'],
  ['en.Dainik Jahan', 'Open source / IPTV', 'Open source', 'An open-source, IPTV, and publishing-oriented area of work.'],
] as const

const principles = [
  ['01', 'Teach for agency', 'Learning should leave people with more agency than they started with.'],
  ['02', 'Investigate with care', 'Investigation is a practice of patience, context, and evidence.'],
  ['03', 'Publish in the open', 'Shared work becomes more useful when its path can be inspected.'],
  ['04', 'Build for the public', 'The public is not an audience to design around. It is who the work is for.'],
] as const

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [principle, setPrinciple] = useState('01')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const visibleEntities = useMemo(() => filter === 'All' ? entities : entities.filter((item) => item[2] === filter), [filter])
  const activePrinciple = principles.find((item) => item[0] === principle) ?? principles[0]
  const closeMenu = () => setMenuOpen(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (form.name && form.email && form.message) setSubmitted(true) }

  return <div className="uk-page">
    <header className="uk-header">
      <div className="uk-container uk-header-inner">
        <a className="uk-brand" href="#top" onClick={closeMenu}><span className="uk-mark">UK</span><span><strong>UKSAI Platform</strong><small>School of Artificial Intelligence Ltd</small></span></a>
        <nav className="uk-nav" aria-label="Primary navigation"><a href="#approach">Approach</a><a href="#directory">Directory</a><a href="#contact">Contact</a></nav>
        <a className="uk-header-cta" href="#directory">Explore the platform <ArrowUpRight size={15} /></a>
        <button className="uk-menu" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </div>
      {menuOpen && <nav className="uk-mobile-nav" aria-label="Mobile navigation"><a href="#approach" onClick={closeMenu}>Approach</a><a href="#directory" onClick={closeMenu}>Directory</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>}
    </header>

    <main id="top">
      <section className="uk-hero"><div className="uk-container"><div className="uk-hero-content"><div><div className="uk-kicker">UKSAI / Public mother portal</div><h1>Intelligence <em>in public.</em></h1><p className="uk-hero-intro">UK School of Artificial Intelligence Ltd is a home for education, responsible technology, public-interest media, investigation, and open-source work.</p><div className="uk-hero-actions"><a className="uk-button uk-button-primary" href="#directory">Browse the directory <ArrowDownRight size={16} /></a><a className="uk-button uk-button-outline" href="#approach">Read our approach <ArrowRight size={16} /></a></div></div><div className="uk-hero-note"><strong>What this is</strong>A public-facing map of the work, ideas, and named areas that make up the UKSAI platform. Start with a question. Leave with a clearer one.</div></div><div className="uk-hero-bottom"><span>Education / Media / Investigation / Open source</span><span>Scroll to discover ↓</span></div></div></section>

      <section className="uk-section" id="approach"><div className="uk-container"><div className="uk-section-header"><div><div className="uk-kicker">01 / Point of view</div><h2>A platform for making sense of the moment.</h2></div><p>Technology does not arrive alone. It changes what can be learned, reported, questioned, and shared. UKSAI keeps those things in the same conversation.</p></div><div className="uk-principles"><div className="uk-principle-list">{principles.map(([id, title]) => <button className={`uk-principle ${id === principle ? 'active' : ''}`} key={id} type="button" onClick={() => setPrinciple(id)}><span>{id}</span><strong>{title}</strong><ChevronDown size={19} /></button>)}</div><aside className="uk-principle-card"><strong>Working note / {activePrinciple[0]}</strong><p>{activePrinciple[2]}</p></aside></div></div></section>

      <section className="uk-signal"><div className="uk-container"><div className="uk-section-header"><div><div className="uk-kicker">02 / How we work</div><h2>Different disciplines. One public horizon.</h2></div><p>Education can sharpen media. Media can surface evidence. Open work can make the next question easier to pursue.</p></div><div className="uk-signal-inner"><h2>Make room for better questions.</h2><div><p>UKSAI is a directory as much as it is a destination: a way to see distinct names and areas of work in the same ecosystem.</p><a className="uk-link-arrow" href="#directory">See the ecosystem <ArrowRight size={16} /></a></div></div></div></section>

      <section className="uk-section uk-directory" id="directory"><div className="uk-container"><div className="uk-section-header"><div><div className="uk-kicker">03 / The directory</div><h2>Names to follow. Areas to explore.</h2></div><p>Browse the platform by direction. Each entry is a signpost, not a claim — a place to begin looking.</p></div><div className="uk-directory-tabs" role="tablist">{['All', 'Learning', 'Media', 'Investigation', 'Open source'].map((item) => <button className={filter === item ? 'active' : ''} key={item} type="button" role="tab" aria-selected={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="uk-directory-list">{visibleEntities.map(([name, type, , description]) => <article className="uk-entity" key={name}><div><div className="uk-entity-type">{type}</div><h3>{name}</h3><p>{description}</p></div><div className="uk-entity-footer"><span>Explore area</span><ExternalLink size={16} /></div></article>)}</div></div></section>

      <section className="uk-section uk-contact" id="contact"><div className="uk-container uk-contact-grid"><div><div className="uk-kicker">04 / Start a conversation</div><h2>Bring a sharp question.</h2><p>This is a presentation-only contact form. Nothing is sent to a backend yet.</p></div>{submitted ? <div className="uk-form-success"><strong>Note held locally.</strong>Nothing was submitted to a live service.<button type="button" className="uk-link-arrow uk-reset" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}>Write another note <ArrowRight size={16} /></button></div> : <form className="uk-contact-form" onSubmit={submit}><label>Your name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label><label>Email address<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label><label>The question<textarea required rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label><button className="uk-button uk-button-primary" type="submit">Hold the note <Send size={15} /></button></form>}</div></section>
    </main>
    <footer className="uk-footer"><div className="uk-container"><small>© UK School of Artificial Intelligence Ltd / UKSAI Platform</small><a href="#top">Back to top ↑</a></div></footer>
  </div>
}

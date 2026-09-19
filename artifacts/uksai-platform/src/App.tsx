import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Menu,
  Send,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activePrinciple, setActivePrinciple] = useState('01');
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    document.title = 'UKSAI Platform — Education, technology, media';
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        'UKSAI Platform is the public mother portal for UK School of Artificial Intelligence Ltd — education, responsible technology, public-interest media, investigation, and open-source work.',
      );
    }
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const entities = [
    {
      name: 'Dainik Jahan',
      type: 'Media',
      category: 'Media',
      description: 'A directory entry for a public-interest media direction within the UKSAI ecosystem.',
      tag: 'Explore media',
    },
    {
      name: 'Vulture Eyes',
      type: 'Investigation',
      category: 'Investigation',
      description: 'An area of work for looking closely, asking better questions, and following the evidence.',
      tag: 'View area',
    },
    {
      name: 'Unacademy',
      type: 'Education',
      category: 'Learning',
      description: 'A learning-focused entry in the wider UKSAI directory.',
      tag: 'Explore learning',
    },
    {
      name: 'Shahnaz Pathology',
      type: 'Research',
      category: 'Investigation',
      description: 'A place in the directory for careful inquiry and research-led work.',
      tag: 'View area',
    },
    {
      name: 'Queens Lesson',
      type: 'Education',
      category: 'Learning',
      description: 'An education-oriented entry for lessons, practice, and shared understanding.',
      tag: 'Explore learning',
    },
    {
      name: 'Dhaka Casino',
      type: 'Media',
      category: 'Media',
      description: 'A directory entry in the UKSAI media and culture landscape.',
      tag: 'Explore media',
    },
    {
      name: 'en.Dainik Jahan',
      type: 'Open source / IPTV',
      category: 'Open source',
      description: 'An open-source, IPTV, and publishing-oriented area of work.',
      tag: 'View open work',
    },
  ];

  const visibleEntities = useMemo(
    () => activeFilter === 'All' ? entities : entities.filter((entity) => entity.category === activeFilter),
    [activeFilter],
  );

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  const setField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const principleDetails: Record<string, string> = {
    '01': 'Learning should leave people with more agency than they started with.',
    '02': 'Investigation is a practice of patience, context, and evidence.',
    '03': 'Shared work becomes more useful when its path can be inspected.',
    '04': 'The public is not an audience to design around. It is who the work is for.',
  };

  return (
    <div className="uk-page">
      <header className={`uk-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="uk-container uk-header-inner">
          <a className="uk-brand" href="#top" onClick={closeMenu} data-testid="link-brand">
            <span className="uk-mark" aria-hidden="true">UK</span>
            <span className="uk-brand-copy">
              <span className="uk-brand-name">UKSAI Platform</span>
              <span className="uk-brand-sub">School of Artificial Intelligence Ltd</span>
            </span>
          </a>
          <nav className="uk-nav" aria-label="Primary navigation">
            <a href="#approach" data-testid="link-approach">Approach</a>
            <a href="#directory" data-testid="link-directory">Directory</a>
            <a href="#contact" data-testid="link-contact">Contact</a>
          </nav>
          <a className="uk-header-cta" href="#directory" data-testid="link-explore-directory">
            Explore the platform <ArrowUpRight size={15} />
          </a>
          <button
            className="uk-menu"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="uk-mobile-nav" aria-label="Mobile navigation">
            <a href="#approach" onClick={closeMenu} data-testid="mobile-link-approach">Approach</a>
            <a href="#directory" onClick={closeMenu} data-testid="mobile-link-directory">Directory</a>
            <a href="#contact" onClick={closeMenu} data-testid="mobile-link-contact">Contact</a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="uk-hero">
          <div className="uk-hero-grid" aria-hidden="true" />
          <div className="uk-container">
            <div className="uk-hero-content">
              <div className="uk-reveal">
                <div className="uk-kicker">UKSAI / Public mother portal</div>
                <h1 className="uk-display">
                  Intelligence <em>in public.</em>
                </h1>
                <p className="uk-hero-intro">
                  UK School of Artificial Intelligence Ltd is a home for education, responsible technology,
                  public-interest media, investigation, and open-source work.
                </p>
                <div className="uk-hero-actions">
                  <a className="uk-button uk-button-primary" href="#directory" data-testid="button-hero-directory">
                    Browse the directory <ArrowDownRight size={16} />
                  </a>
                  <a className="uk-button uk-button-outline" href="#approach" data-testid="button-hero-approach">
                    Read our approach <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <div className="uk-hero-side uk-reveal uk-reveal-delay">
                <div className="uk-hero-note">
                  <strong>What this is</strong>
                  A public-facing map of the work, ideas, and named areas that make up the UKSAI platform. Start
                  with a question. Leave with a clearer one.
                </div>
              </div>
            </div>
            <div className="uk-hero-bottom uk-mono" aria-label="Platform themes">
              <span>Education / Media / Investigation / Open source</span>
              <span>Scroll to discover ↓</span>
            </div>
          </div>
        </section>

        <section className="uk-section" id="approach">
          <div className="uk-container">
            <div className="uk-section-header">
              <div>
                <div className="uk-kicker">01 / Point of view</div>
                <h2 className="uk-display">A platform for making sense of the moment.</h2>
              </div>
              <p className="uk-section-lead">
                Technology does not arrive alone. It changes what can be learned, reported, questioned, and shared.
                UKSAI keeps those things in the same conversation.
              </p>
            </div>
            <div className="uk-principles">
              <div className="uk-principle-list">
                {[
                  ['01', 'Teach for agency'],
                  ['02', 'Investigate with care'],
                  ['03', 'Publish in the open'],
                  ['04', 'Build for the public'],
                ].map(([number, title]) => (
                  <button
                    className={`uk-principle ${activePrinciple === number ? 'active' : ''}`}
                    key={number}
                    type="button"
                    onClick={() => setActivePrinciple(number)}
                    data-testid={`button-principle-${number}`}
                  >
                    <span className="uk-principle-index">{number}</span>
                    <span className="uk-principle-title">{title}</span>
                    <ChevronDown className="uk-principle-arrow" size={19} />
                  </button>
                ))}
              </div>
              <aside className="uk-principle-card">
                <strong>Working note / {activePrinciple}</strong>
                <p>{principleDetails[activePrinciple]}</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="uk-signal">
          <div className="uk-container">
            <div className="uk-section-header">
              <div>
                <div className="uk-kicker">02 / How we work</div>
                <h2 className="uk-display">Different disciplines. One public horizon.</h2>
              </div>
              <p className="uk-section-lead">
                The platform is intentionally plural. Education can sharpen media. Media can surface evidence.
                Open work can make the next question easier to pursue.
              </p>
            </div>
            <div className="uk-signal-inner">
              <div>
                <p className="uk-mono" style={{ color: 'rgba(247,244,236,.55)', fontSize: 11 }}>A shared direction</p>
                <h2 className="uk-display">Make room for better questions.</h2>
              </div>
              <div className="uk-signal-copy">
                <p>
                  UKSAI is a directory as much as it is a destination: a way to see the distinct names and areas of
                  work that belong in the same ecosystem.
                </p>
                <a className="uk-link-arrow" href="#directory" data-testid="link-signal-directory">
                  See the ecosystem <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="uk-section uk-directory" id="directory">
          <div className="uk-container">
            <div className="uk-section-header">
              <div>
                <div className="uk-kicker">03 / The directory</div>
                <h2 className="uk-display">Names to follow. Areas to explore.</h2>
              </div>
              <p className="uk-section-lead">
                Browse the platform by direction. Each entry is a signpost, not a claim — a place to begin looking.
              </p>
            </div>
            <div className="uk-directory-tabs" role="tablist" aria-label="Filter directory">
              {['All', 'Learning', 'Media', 'Investigation', 'Open source'].map((filter) => (
                <button
                  className={`uk-tab ${activeFilter === filter ? 'active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                  key={filter}
                  data-testid={`tab-filter-${filter.toLowerCase().replaceAll(' ', '-')}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="uk-directory-list">
              {visibleEntities.length ? visibleEntities.map((entity) => (
                <article className="uk-entity" key={entity.name} data-testid={`card-entity-${entity.name.toLowerCase().replaceAll(' ', '-')}`}>
                  <div>
                    <div className="uk-entity-type">{entity.type}</div>
                    <h3 className="uk-display">{entity.name}</h3>
                    <p>{entity.description}</p>
                  </div>
                  <div className="uk-entity-footer">
                    <span>{entity.tag}</span>
                    <ExternalLink size={16} />
                  </div>
                </article>
              )) : (
                <div className="uk-empty" data-testid="empty-directory">No entries in this direction yet.</div>
              )}
            </div>
          </div>
        </section>

        <section className="uk-section uk-contact" id="contact">
          <div className="uk-container uk-contact-grid">
            <div>
              <div className="uk-kicker">04 / Start a conversation</div>
              <h2 className="uk-display">Bring a sharp question.</h2>
              <p className="uk-contact-note">
                This is a presentation-only contact form. Nothing is sent to a backend yet, but your note can still
                help you frame what you want to explore.
              </p>
            </div>
            {submitted ? (
              <div className="uk-form-success" data-testid="status-contact-success">
                <strong>Note held locally.</strong>
                Nothing was submitted to a live service. When the platform is ready for contact, this is where your
                message will begin.
                <button
                  type="button"
                  className="uk-link-arrow"
                  style={{ background: 'none', border: 0, padding: 0, marginTop: 22, cursor: 'pointer' }}
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                  data-testid="button-reset-contact"
                >
                  Write another note <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form className="uk-contact-form" onSubmit={handleSubmit} data-testid="form-contact">
                <div className="uk-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    value={form.name}
                    onChange={(event) => setField('name', event.target.value)}
                    placeholder="How should we address you?"
                    required
                    data-testid="input-contact-name"
                  />
                </div>
                <div className="uk-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(event) => setField('email', event.target.value)}
                    placeholder="Where can a future reply find you?"
                    required
                    data-testid="input-contact-email"
                  />
                </div>
                <div className="uk-field">
                  <label htmlFor="contact-message">The question</label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={form.message}
                    onChange={(event) => setField('message', event.target.value)}
                    placeholder="What are you trying to understand, teach, investigate, or make?"
                    required
                    data-testid="input-contact-message"
                  />
                </div>
                <button className="uk-button uk-button-primary" type="submit" data-testid="button-submit-contact">
                  Hold the note <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="uk-footer">
        <div className="uk-container uk-footer-inner">
          <small>© UK School of Artificial Intelligence Ltd / UKSAI Platform</small>
          <a href="#top" data-testid="link-back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

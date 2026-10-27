import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Search,
  BedDouble,
  Bath,
  Scan,
  Menu,
  X,
  MessageCircle,
  ShieldCheck,
  MoveUpRight,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import residence from "@/assets/sahiwal-residence.jpg";
import { properties, type Property } from "@/data/properties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G1 Properties — A place to call yours. | Sahiwal" },
      {
        name: "description",
        content:
          "Discover luxury homes across Sahiwal — Farid Town, Jeewan City, Razzaq Royals and beyond — with G1 Properties. Book a site visit for a considered approach to buying and selling.",
      },
      { property: "og:title", content: "G1 Properties — Real Estate in Sahiwal" },
      {
        property: "og:description",
        content:
          "A place to call yours. Explore luxury homes and property opportunities with G1 Properties, Sahiwal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const locations = [
  "Farid Town",
  "Razzaq Royals",
  "Jeewan City",
  "Sahiwal City",
  "Satellite Town",
  "Lowrance Road",
  "Kacha Khu",
  "Golf Course Road",
  "Chak 86/12-L",
];
const sizes = ["5 Marla", "7 Marla", "10 Marla", "1 Kanal", "2 Kanal"];
const budgets = ["Any budget", "Under 2 Crore", "2 - 3 Crore", "3 - 4 Crore", "Above 4 Crore"];

function matchesBudget(priceStr: string, selectedBudget: string): boolean {
  if (selectedBudget === "Any budget") return true;
  const val = parseFloat(priceStr);
  if (selectedBudget === "Under 2 Crore") return val < 2;
  if (selectedBudget === "2 - 3 Crore") return val >= 2 && val <= 3;
  if (selectedBudget === "3 - 4 Crore") return val > 3 && val <= 4;
  if (selectedBudget === "Above 4 Crore") return val > 4;
  return true;
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="G1 Properties home">
      <span className="brand-symbol">G1</span>
      <span className="brand-name">
        PROPERTIES<small>YOUR NEXT CHAPTER</small>
      </span>
    </a>
  );
}
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [purpose, setPurpose] = useState("Buy");
  const [location, setLocation] = useState("All locations");
  const [budget, setBudget] = useState("Any budget");
  const [area, setArea] = useState("Any size");
  const [filters, setFilters] = useState<{
    purpose: string;
    location: string;
    budget: string;
    area: string;
  } | null>(null);
  const [selected, setSelected] = useState<Property | null>(null);
  const [enquiry, setEnquiry] = useState<Property | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shown = properties.filter(
    (p) =>
      !filters ||
      (p.purpose === filters.purpose &&
        (filters.location === "All locations" || p.location.startsWith(filters.location)) &&
        matchesBudget(p.price, filters.budget) &&
        (filters.area === "Any size" || p.area === filters.area)),
  );
  const enquiryText = enquiry
    ? `Hello G1 Properties, I would like to book a site visit for ${enquiry.title} in ${enquiry.location}. Please share available days and times.`
    : "Hello G1 Properties, I would like to discuss property options in Sahiwal. Please share more information.";
  function search() {
    setFilters({ purpose, location, budget, area });
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  }
  function browseAll() {
    setFilters(null);
    setPurpose("Buy");
    setLocation("All locations");
    setBudget("Any budget");
    setArea("Any size");
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  }
  function openContact(property: Property | null) {
    setEnquiry(property);
    setContactOpen(true);
  }
  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(enquiryText);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <>
      <header id="home" className="site-header page-container">
        <Brand />
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {[
            ["Home", "#home"],
            ["Properties", "#properties"],
            ["About us", "#about"],
            ["Our expertise", "#expertise"],
          ].map(([name, href]) => (
            <a
              key={name}
              href={href}
              className={name === "Home" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>
        <Button
          variant="outline"
          size="lg"
          className="header-contact"
          onClick={() => openContact(null)}
        >
          Let’s talk <ArrowUpRight />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>
      <main>
        <section className="hero" aria-label="G1 Properties, Sahiwal">
          <img
            src={residence}
            width={1920}
            height={1024}
            className="hero-image"
            alt="Contemporary white residence with a landscaped lawn in a Pakistani architectural style"
            fetchPriority="high"
          />
          <div className="hero-content page-container">
            <h1>G1 Properties</h1>
            <p className="hero-tagline">A place to call yours.</p>
            <p className="hero-description">
              Exceptional spaces. Local understanding.
              <br />
              Find a home for your life, and an investment
              <br className="hidden sm:block" /> for your future.
            </p>
            <Button variant="hero" size="lg" onClick={browseAll}>
              Explore properties <ArrowUpRight />
            </Button>
          </div>
          <div className="hero-bottom">
            <MapPin size={13} />
            <div>Sahiwal, Pakistan</div>
            <span />
            <div>01 / 03</div>
          </div>
        </section>
        <section id="properties" className="section page-container">
          <div className="section-heading">
            <div>
              <h2>{filters ? "Your property shortlist" : "Good spaces. Better beginnings."}</h2>
              <p>
                {filters
                  ? `${shown.length} ${shown.length === 1 ? "property" : "properties"} matched your search.`
                  : "Nine homes across Sahiwal and its surroundings, from Farid Town to the orchards beyond the city."}
              </p>
            </div>
            <Button variant="subtle" className="all-properties" onClick={browseAll}>
              View all properties <ArrowUpRight />
            </Button>
          </div>
          <div className="search-bar-wrap" aria-label="Filter properties">
            <div className="search-inner">
              <div className="search-purpose" aria-label="Property purpose">
                {["Buy", "Rent"].map((p) => (
                  <Button
                    key={p}
                    variant={purpose === p ? "default" : "ghost"}
                    size="lg"
                    aria-pressed={purpose === p}
                    onClick={() => setPurpose(p)}
                  >
                    {p}
                  </Button>
                ))}
              </div>
              <div className="search-field">
                <label htmlFor="location">Location</label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>All locations</option>
                  {locations.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </div>
              <div className="search-field">
                <label htmlFor="budget">Budget</label>
                <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="search-field">
                <label htmlFor="size">Property size</label>
                <select id="size" value={area} onChange={(e) => setArea(e.target.value)}>
                  <option>Any size</option>
                  {sizes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <Button size="lg" onClick={search} className="search-button">
                <Search size={16} />
                Find a property
              </Button>
            </div>
          </div>
          <div className="property-grid">
            {shown.map((p) => (
              <article className="property-card" key={p.id}>
                <div className="property-image-wrap">
                  <img src={p.image} width={1536} height={1024} loading="lazy" alt={p.title} />
                  <span className="property-label">FOR SALE</span>
                </div>
                <div className="property-info">
                  <div className="property-location">
                    <MapPin size={13} />
                    {p.location}
                  </div>
                  <h3>{p.title}</h3>
                  <div className="property-features">
                    <span>
                      <BedDouble size={17} />
                      <span>
                        <strong>{p.beds}</strong>
                        <small>Bedrooms</small>
                      </span>
                    </span>
                    <span>
                      <Bath size={17} />
                      <span>
                        <strong>{p.baths}</strong>
                        <small>Bathrooms</small>
                      </span>
                    </span>
                    <span>
                      <Scan size={17} />
                      <span>
                        <strong>{p.area}</strong>
                        <small>Plot size</small>
                      </span>
                    </span>
                  </div>
                  <div className="property-footer">
                    <div>
                      <div className="property-price-label">Asking price</div>
                      <div className="property-price">
                        <small>PKR</small>
                        {p.price}
                      </div>
                    </div>
                  </div>
                  <div className="property-actions">
                    <Button
                      variant="outline"
                      size="sm"
                      className="btn-view-details"
                      onClick={() => setSelected(p)}
                    >
                      View details
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="btn-book-visit"
                      onClick={() => openContact(p)}
                    >
                      <CalendarCheck size={14} />
                      Book a visit
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {!shown.length && (
            <div className="empty-state">
              <h3>No homes match this combination.</h3>
              <p>Try another location or size, or explore the full collection.</p>
              <Button variant="outline" onClick={browseAll}>
                Clear filters <ArrowRight />
              </Button>
            </div>
          )}
          <p className="collection-note">
            Sample listing details with representative photography. Confirm current availability and
            pricing with G1 Properties.
          </p>
        </section>
        <section id="about" className="about-band">
          <div className="about-layout section page-container">
            <div>
              <h2>
                Local roots.
                <br />A higher standard.
              </h2>
              <p>
                Real estate is personal. It’s where your family grows, where your business begins,
                and where your future takes shape.
              </p>
              <p>
                At G1 Properties, our focus is simple: a clear, considered approach to real estate
                in Sahiwal, with your needs at the heart of every conversation.
              </p>
              <Button variant="subtle" className="mt-4 px-0" onClick={() => openContact(null)}>
                Get to know us <ArrowUpRight />
              </Button>
            </div>
            <div id="expertise">
              {[
                {
                  n: "01",
                  title: "Find your home",
                  text: "Homes that fit the way you live. A thoughtful approach to buying and renting.",
                },
                {
                  n: "02",
                  title: "Make your next investment",
                  text: "Explore opportunities in Sahiwal with a local perspective and a clear view of your goals.",
                },
                {
                  n: "03",
                  title: "Sell with confidence",
                  text: "Give your property the attention it deserves, from the first conversation to the next owner.",
                },
              ].map((s) => (
                <div className="service-row" key={s.n}>
                  <span className="number">{s.n}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                  <MoveUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="contact-band page-container">
          <div>
            <h2>Your next chapter starts here.</h2>
            <p>A home, an investment, or simply a conversation. Let’s find your next step.</p>
          </div>
          <Button size="lg" onClick={() => openContact(null)}>
            Let’s talk property <MessageCircle />
          </Button>
        </section>
      </main>
      <footer className="site-footer page-container">
        <Brand />
        <div className="footer-meta">
          Sahiwal, Punjab, Pakistan
          <br />© {new Date().getFullYear()} G1 Properties. All rights reserved.
        </div>
      </footer>
      <Dialog
        open={!!selected}
        onOpenChange={(v: boolean) => {
          if (!v) setSelected(null);
          setCopied(false);
        }}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto max-w-xl">
          <DialogTitle className="font-display text-2xl pr-5">{selected?.title}</DialogTitle>
          <DialogDescription>{selected?.location}</DialogDescription>
          {selected && (
            <>
              <img src={selected.image} alt={selected.title} className="details-image" />
              <div className="detail-facts">
                <span>{selected.beds} Bedrooms</span>
                <span>{selected.baths} Bathrooms</span>
                <span>{selected.area}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selected.description}
              </p>
              <div className="property-price">
                <small>PKR</small>
                {selected.price}
              </div>
              <p className="text-xs text-muted-foreground">
                Sample listing details. Ask G1 Properties for current inventory and verified
                information.
              </p>
              <Button size="lg" onClick={() => openContact(selected)}>
                Book a site visit <CalendarCheck />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={contactOpen}
        onOpenChange={(v: boolean) => {
          setContactOpen(v);
          setCopied(false);
        }}
      >
        <DialogContent>
          <ShieldCheck className="text-primary" size={28} />
          <DialogTitle className="font-display text-3xl">
            {enquiry ? "Book your site visit." : "Let’s talk property."}
          </DialogTitle>
          <DialogDescription>G1 Properties · Sahiwal, Pakistan</DialogDescription>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {enquiry
              ? `We’ll arrange a visit to ${enquiry.title}. Prepare your enquiry below to share with G1 Properties.`
              : "Our direct contact details will be available here soon. In the meantime, prepare your enquiry to share with G1 Properties."}
          </p>
          <div className="bg-secondary p-4 text-sm leading-relaxed">{enquiryText}</div>
          <Button size="lg" onClick={copyEnquiry}>
            {copied ? "Enquiry copied" : "Copy enquiry"}
            <ArrowUpRight />
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

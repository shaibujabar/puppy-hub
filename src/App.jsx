import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Heart,
  Menu,
  PawPrint,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";

const puppies = [
  {
    name: "Sunny",
    breed: "Golden Retriever",
    age: "10 weeks",
    price: 1200,
    category: "Family favorites",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Happy golden retriever puppy sitting in a garden",
    tag: "BEST SELLER",
    tone: "gold",
  },
  {
    name: "Milo",
    breed: "Cavalier King Charles",
    age: "9 weeks",
    price: 1500,
    category: "Small & cuddly",
    image:
      "https://images.unsplash.com/photo-1558917854-7d59d2a1f6d6?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Sweet Cavalier King Charles spaniel puppy",
    tag: "JUST ARRIVED",
    tone: "pink",
  },
  {
    name: "Coco",
    breed: "French Bulldog",
    age: "11 weeks",
    price: 2200,
    category: "Small & cuddly",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85",
    imageAlt: "French bulldog puppy relaxing at home",
    tag: "",
    tone: "lavender",
  },
  {
    name: "Teddy",
    breed: "Bernese Mountain Dog",
    age: "12 weeks",
    price: 1800,
    category: "Big softies",
    image:
      "https://images.unsplash.com/photo-1567490621857-1d83d60d0c84?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Fluffy Bernese mountain dog puppy outdoors",
    tag: "FAMILY PICK",
    tone: "blue",
  },
  {
    name: "Poppy",
    breed: "Dachshund",
    age: "8 weeks",
    price: 1350,
    category: "Small & cuddly",
    image:
      "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Curious dachshund puppy with floppy ears",
    tag: "",
    tone: "peach",
  },
  {
    name: "Biscuit",
    breed: "Cockapoo",
    age: "10 weeks",
    price: 1600,
    category: "Family favorites",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Soft-coated cockapoo puppy sitting in the grass",
    tag: "SO GENTLE",
    tone: "mint",
  },
];

const categories = ["All puppies", "Small & cuddly", "Family favorites", "Big softies"];
const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function App() {
  const [category, setCategory] = useState("All puppies");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [bag, setBag] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const visiblePuppies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return puppies.filter((puppy) => {
      const matchesCategory = category === "All puppies" || puppy.category === category;
      const matchesSearch =
        !normalizedQuery ||
        `${puppy.name} ${puppy.breed}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  function toggleFavorite(name) {
    setFavorites((current) =>
      current.includes(name) ? current.filter((favorite) => favorite !== name) : [...current, name],
    );
  }

  function addToBag(name) {
    setBag((current) => [...current, name]);
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Paw and Co. home">
          <span className="brand-icon">
            <PawPrint size={21} strokeWidth={2.5} />
          </span>
          <span>paw<span className="brand-amp">&</span>co.</span>
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#puppies" onClick={() => setMenuOpen(false)}>Our puppies</a>
          <a href="#promise" onClick={() => setMenuOpen(false)}>Our promise</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Visit us</a>
        </nav>
        <a className="bag-button" href="#puppies" aria-label={`Your bag, ${bag.length} puppies`}>
          <ShoppingBag size={18} strokeWidth={1.8} />
          <span>Your bag</span>
          <span className="bag-count">{bag.length}</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> GOOD PUPPIES. GOOD PEOPLE.</div>
            <h1>Your new best<br />friend is <span>waiting.</span></h1>
            <p>Big paws, little paws, wiggly tails and all — meet the puppy who makes your house feel like home.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#puppies">Meet the puppies <ArrowRight size={17} /></a>
              <a className="text-link" href="#promise">How we care <ArrowDown size={15} /></a>
            </div>
            <div className="hero-note">
              <div className="avatar-stack" aria-hidden="true">
                <span>🐶</span><span>🐾</span><span>🐕</span>
              </div>
              <span>Loved by <strong>2,400+</strong> happy families</span>
              <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-blob" />
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=90"
              alt="A cheerful puppy ready to meet its new family"
            />
            <div className="floating-note"><span className="note-heart">♥</span><span>All the love.<br /><strong>None of the guesswork.</strong></span></div>
            <span className="sparkle sparkle-one">✳</span>
            <span className="sparkle sparkle-two">✦</span>
          </div>
          <div className="hero-side-note">YOUR NEXT CHAPTER STARTS HERE <span>↗</span></div>
        </section>

        <section className="catalog section-wrap" id="puppies">
          <div className="section-heading">
            <div>
              <span className="section-kicker">THE GOOD STUFF</span>
              <h2>Meet the <span>cuties.</span></h2>
              <p>Every little face has a big personality. Find your match.</p>
            </div>
            <label className="search-box">
              <Search size={18} />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search breeds..."
                aria-label="Search puppy breeds"
              />
            </label>
          </div>

          <div className="filter-row" aria-label="Filter puppies by category">
            <div className="filter-tabs" role="group" aria-label="Puppy category">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? "filter-tab active" : "filter-tab"}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <span className="results-count">{visiblePuppies.length} little {visiblePuppies.length === 1 ? "friend" : "friends"}</span>
          </div>

          {visiblePuppies.length > 0 ? (
            <div className="puppy-grid">
              {visiblePuppies.map((puppy) => {
                const isFavorite = favorites.includes(puppy.name);
                return (
                  <article className="puppy-card" key={puppy.name}>
                    <div className={`puppy-photo ${puppy.tone}`}>
                      <img src={puppy.image} alt={puppy.imageAlt} loading="lazy" />
                      {puppy.tag && <span className="puppy-tag">{puppy.tag}</span>}
                      <button
                        className={isFavorite ? "favorite-button is-favorite" : "favorite-button"}
                        type="button"
                        aria-label={`${isFavorite ? "Remove" : "Add"} ${puppy.name} ${isFavorite ? "from" : "to"} favorites`}
                        aria-pressed={isFavorite}
                        onClick={() => toggleFavorite(puppy.name)}
                      >
                        <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
                      </button>
                    </div>
                    <div className="puppy-info">
                      <div className="puppy-title-row">
                        <div>
                          <h3>{puppy.name}</h3>
                          <p>{puppy.breed}</p>
                        </div>
                        <span className="puppy-price">{money.format(puppy.price)}</span>
                      </div>
                      <div className="puppy-card-footer">
                        <span className="puppy-age"><span className="age-dot" /> {puppy.age} old</span>
                        <button className="meet-button" type="button" onClick={() => addToBag(puppy.name)}>
                          {bag.includes(puppy.name) ? <><Check size={14} /> Added</> : <>Meet {puppy.name} <ArrowRight size={14} /></>}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <span>🐾</span>
              <h3>No pups found just yet</h3>
              <p>Try another breed or category — your new friend is out there.</p>
              <button type="button" onClick={() => { setCategory("All puppies"); setQuery(""); }}>Show all puppies</button>
            </div>
          )}
          <div className="catalog-footnote">Our puppy prices include a vet check, first vaccinations, and a whole lot of love.</div>
        </section>

        <section className="promise section-wrap" id="promise">
          <div className="promise-icon"><PawPrint size={23} /></div>
          <div>
            <span className="section-kicker">A LITTLE MORE PEACE OF MIND</span>
            <h2>Good beginnings matter.</h2>
            <p>We get to know every puppy before they meet you. They come with a health check, up-to-date vaccinations, and support from our team long after they head home.</p>
          </div>
          <a className="promise-link" href="#visit">Come say hello <ArrowRight size={16} /></a>
        </section>

        <section className="visit-banner section-wrap" id="visit">
          <div><span className="section-kicker">THE BEST PART IS IN PERSON</span><h2>Those little paws are even cuter up close.</h2><p>Drop by for a cuddle, a chat, and maybe a new best friend.</p></div>
          <a className="primary-button" href="mailto:hello@pawandco.example">Plan your visit <ArrowRight size={17} /></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home"><span className="brand-icon"><PawPrint size={20} strokeWidth={2.5} /></span><span>paw<span className="brand-amp">&</span>co.</span></a>
        <p>Little paws. Big love. Always.</p>
        <span className="footer-copy">© 2025 Paw & Co. Made with love and belly rubs.</span>
      </footer>
    </>
  );
}

export default App;

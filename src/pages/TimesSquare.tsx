import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const values = [
  { title: "Build your first real project", desc: "Go from idea to a working product with step-by-step guidance." },
  { title: "Work with mentors", desc: "Get paired with experienced founders and industry professionals." },
  { title: "Join an international teen community", desc: "Connect with ambitious teenagers from around the world." },
];

export default function TimesSquare() {
  useEffect(() => {
    document.title = "StarTTeen — Seen us in Times Square?";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "StarTTeen is an international startup academy for teenagers. Build real projects with mentor support. Featured in Times Square, NYC.");
    setMeta("og:title", "StarTTeen — Teen Founders Start Here", "property");
    setMeta("og:description", "International startup academy for teenagers. Build real projects with mentor support.", "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", "https://startteen.vercel.app/ts", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "StarTTeen — Teen Founders Start Here");
    setMeta("twitter:description", "International startup academy for teenagers. Featured in Times Square, NYC.");
    return () => { document.title = "StarTTeen"; };
  }, []);

  return (
    <div className="min-h-screen bg-[#ffffff] font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center px-6 pt-16 pb-12 md:pt-24 md:pb-16 animate-fade-in">
        {/* Times Square headline — dominant */}
        <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center text-foreground mb-12 whitespace-nowrap">
          Seen us in Times Square?
        </h1>

        {/* Logo */}
        <img
          src="/startteen-logo.png"
          alt="StarTTeen"
          className="w-[24rem] sm:w-[32rem] md:w-[40rem] lg:w-[48rem] mb-12 object-contain"
        />

        {/* Subheadline */}
        <p className="text-xl md:text-2xl font-semibold text-center text-foreground mb-3">
          Teen founders start here
        </p>

        {/* Supporting text */}
        <p className="text-base md:text-lg text-center max-w-sm text-muted-foreground mb-10 leading-relaxed">
          StarTTeen helps teenagers turn ideas into real projects with mentor support.
        </p>

        {/* CTA */}
        <Link
          to="/apply"
          className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-semibold bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-[1.02] shadow-elegant"
        >
          Join the waitlist
        </Link>
      </section>

      <div className="max-w-[4rem] mx-auto border-t border-border/30 my-2" />

      {/* Value Props */}
      <section className="px-6 py-12 md:py-16 max-w-2xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[4rem] mx-auto border-t border-border/30 my-2" />

      {/* Who is this for */}
      <section className="px-6 py-12 md:py-16 max-w-md mx-auto text-center">
        <h2 className="text-lg md:text-xl font-bold mb-4 text-foreground">Who is this for?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For teenagers and students aged 14–21 who want to build ideas, explore entrepreneurship, and work on real projects with support.
        </p>
      </section>


      {/* Footer */}
      <footer className="px-6 py-8 text-center">
        <p className="text-xs text-muted-foreground/60">StarTTeen — international startup academy for teenagers</p>
        <p className="text-xs text-muted-foreground/40 mt-1 tracking-wide uppercase">Featured in Times Square, NYC</p>
      </footer>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const values = [
  {
    title: "Build your first real project",
    desc: "Go from idea to a working product with step-by-step guidance.",
  },
  {
    title: "Work with mentors",
    desc: "Get paired with experienced founders and industry professionals.",
  },
  {
    title: "Join an international teen community",
    desc: "Connect with ambitious teenagers from around the world.",
  },
];

export default function TimesSquare() {
  useEffect(() => {
    document.title = "StarTTeen — Seen us in Times Square?";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta(
      "description",
      "StarTTeen is an international startup academy for teenagers. Build real projects with mentor support. Featured in Times Square, NYC."
    );
    setMeta("og:title", "StarTTeen — Teen Founders Start Here", "property");
    setMeta(
      "og:description",
      "International startup academy for teenagers. Build real projects with mentor support.",
      "property"
    );
    setMeta("og:type", "website", "property");
    setMeta("og:url", "https://startteen.vercel.app/ts", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "StarTTeen — Teen Founders Start Here");
    setMeta(
      "twitter:description",
      "International startup academy for teenagers. Featured in Times Square, NYC."
    );

    return () => {
      document.title = "StarTTeen";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="px-6 pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#94A3B8]">
            Featured in Times Square, NYC
          </p>

          <h1 className="max-w-6xl text-center text-5xl font-extrabold leading-[0.95] tracking-tight text-[#0B132B] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
            Seen us in Times Square?
          </h1>

          {/* Logo block with glow */}
          <div className="relative mt-8 mb-6 flex items-center justify-center">
            <div className="absolute h-[220px] w-[520px] rounded-full bg-[#8B6AF3]/18 blur-3xl md:h-[260px] md:w-[640px]" />
            <img
              src="/startteen-logo.png"
              alt="StarTTeen"
              className="relative z-10 w-[26rem] object-contain sm:w-[34rem] md:w-[44rem] lg:w-[54rem]"
            />
          </div>

          <p className="mb-3 text-xl font-semibold text-[#0F172A] md:text-2xl">
            Teen founders start here
          </p>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#51627E] md:text-lg">
            Turn ideas into real projects with mentor support.
          </p>

          <Link
            to="/apply"
            className="inline-flex items-center justify-center rounded-full bg-[#7E5BEF] px-10 py-4 text-base font-semibold text-white shadow-[0_12px_35px_rgba(126,91,239,0.30)] transition-all duration-200 hover:bg-[#6D49E2] hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(126,91,239,0.36)]"
          >
            Join the waitlist
          </Link>
        </div>
      </section>

      {/* Soft divider */}
      <div className="mx-auto h-px w-24 bg-[#E6EAF2]" />

      {/* Value Props */}
      <section className="px-6 py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 md:gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-[24px] border border-[#EEF2F7] bg-[#FCFCFE] px-8 py-8 text-center min-h-[180px] flex flex-col justify-center"
            >
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.04em] text-[#111827]">
                {v.title}
              </h3>
              <p className="text-[15px] leading-7 text-[#5B6B84]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Soft divider */}
      <div className="mx-auto h-px w-24 bg-[#E6EAF2]" />

      {/* Who is this for */}
      <section className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
            Who is this for?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#5B6B84] md:text-lg">
            For teenagers and students aged 14–21 who want to build ideas,
            explore entrepreneurship, and work on real projects with support.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pb-10 pt-4 text-center">
        <p className="text-sm text-[#7C8AA3]">
          StarTTeen — international startup academy for teenagers
        </p>
      </footer>
    </div>
  );
}
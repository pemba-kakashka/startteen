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
    <div className="relative min-h-screen overflow-x-hidden bg-[#FCFCFE] font-sans text-[#0F172A]">
      {/* soft background design */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-[280px] w-[700px] -translate-x-1/2 rounded-full bg-[#8B6AF3]/12 blur-3xl" />
        <div className="absolute left-[20%] top-[420px] h-[180px] w-[180px] rounded-full bg-[#C8B8FF]/20 blur-3xl" />
        <div className="absolute right-[18%] top-[460px] h-[220px] w-[220px] rounded-full bg-[#B79CFF]/14 blur-3xl" />
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="px-6 pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#94A3B8]">
              Featured in Times Square, NYC
            </p>

            <h1 className="max-w-5xl text-center text-5xl font-extrabold leading-[0.95] tracking-tight text-[#0B132B] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Seen us in Times Square?
            </h1>

            <div className="relative mt-8 mb-6 flex items-center justify-center">
              <div className="absolute h-[220px] w-[560px] rounded-full bg-[#8B6AF3]/18 blur-3xl md:h-[260px] md:w-[700px]" />
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
              className="inline-flex items-center justify-center rounded-full bg-[#7E5BEF] px-10 py-4 text-base font-semibold text-white shadow-[0_14px_35px_rgba(126,91,239,0.28)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#6D49E2] hover:shadow-[0_18px_42px_rgba(126,91,239,0.34)]"
            >
              Join the waitlist
            </Link>
          </div>
        </section>

        <div className="mx-auto h-px w-24 bg-[#E7EAF2]" />

        {/* Value Props */}
        <section className="px-6 py-12 md:py-14">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 md:gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex min-h-[190px] flex-col justify-center rounded-[26px] border border-[#ECEFF6] bg-gradient-to-b from-white to-[#FAF9FF] px-8 py-8 text-center shadow-[0_10px_30px_rgba(16,24,40,0.03)]"
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

        <div className="mx-auto h-px w-24 bg-[#E7EAF2]" />

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
        <footer className="px-6 pb-10 pt-2 text-center">
          <p className="text-sm text-[#7C8AA3]">
            StarTTeen — international startup academy for teenagers
          </p>
        </footer>
      </main>
    </div>
  );
}
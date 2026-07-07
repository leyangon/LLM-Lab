import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/tutorials", label: t("nav.tutorials") },
    { to: "/simulator", label: t("nav.simulator") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/resources", label: t("nav.resources") },
    { to: "/about", label: t("nav.about") }
  ];

  const languageSwitch = (
    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
      {(["zh", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          className={`rounded-full px-3 py-1.5 text-xs font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
            language === item ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
          onClick={() => setLanguage(item)}
        >
          {item === "zh" ? t("language.zh") : t("language.en")}
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-glow">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <span>
            <span className="block font-display text-base font-black text-white">LLM Learning Lab</span>
            <span className="block text-xs text-slate-400">{t("brand.subtitle")}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                  isActive ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="ml-2">{languageSwitch}</div>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden"
          aria-label={open ? t("nav.close") : t("nav.open")}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                    isActive ? "bg-cyan-300 text-slate-950" : "text-slate-200 hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="px-1 pt-2">{languageSwitch}</div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

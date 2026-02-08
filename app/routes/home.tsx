import type { Route } from "./+types/home";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "circuitX - Private Swap & Perp DEX" },
    {
      name: "description",
      content:
        "CircuitX: Private Swap DEX on mainnet and Private Perp DEX on testnet.",
    },
  ];
}

const MENU_ICON = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const X_ICON = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const X_SOCIAL_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const TELEGRAM_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);
const EXTERNAL_ICON = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const SOL_CA = "2FcRaEB4NCoUvR5NNLCrPM9iTT3pGaKTh823zjFjBAGS";
const CHEVRON_DOWN = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuSlideReady, setMenuSlideReady] = useState(false);
  const [tokenDropdownOpen, setTokenDropdownOpen] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    if (mobileMenuOpen) {
      setMenuSlideReady(false);
      const t = requestAnimationFrame(() => setMenuSlideReady(true));
      return () => cancelAnimationFrame(t);
    }
    setMenuSlideReady(false);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    video.volume = 0.2;
    const tryUnmute = () => {
      video.muted = false;
      video.volume = 0.2;
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    };
    video.addEventListener("canplay", tryUnmute, { once: true });
    return () => video.removeEventListener("canplay", tryUnmute);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" aria-hidden />
      {/* Header */}
      <header className="relative z-20 w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.jpg"
              alt="CircuitX"
              width={40}
              height={40}
              className="rounded-lg w-8 h-8 sm:w-10 sm:h-10 object-cover"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">circuitX</span>
          </a>

          {/* Center: Navigation box (desktop) */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex">
            <div className="flex items-center border border-gray-700 rounded-lg bg-gray-900/50 backdrop-blur-sm overflow-hidden">
              <a
                href="/"
                className="px-5 py-2.5 text-sm font-medium text-white transition-colors border-r border-gray-700"
              >
                Home
              </a>
              <a
                href="https://swap.circuitx.live"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors border-r border-gray-700"
              >
                Swap
              </a>
              <a
                href="https://testnet.circuitx.live"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors border-r border-gray-700"
              >
                Perp
              </a>
              <a
                href="https://swap.circuitx.live/tokenomics"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors border-r border-gray-700"
              >
                Tokenomics
              </a>
              <a
                href="#team"
                className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors border-r border-gray-700"
              >
                Team
              </a>
              <a
                href="https://swap.circuitx.live/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Docs
              </a>
            </div>
          </nav>

          {/* Right: Mobile menu + social */}
          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            <div className="lg:hidden relative">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? X_ICON : MENU_ICON}
              </button>
              {mobileMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 bg-black/60 z-30 transition-opacity duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-hidden
                  />
                  <div
                    className={`fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-gray-800 z-40 flex flex-col shadow-xl transition-transform duration-300 ease-out ${
                      menuSlideReady ? "translate-x-0" : "translate-x-full"
                    }`}
                  >
                    <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
                      <span className="text-lg font-bold text-white">Menu</span>
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="Close menu"
                      >
                        {X_ICON}
                      </button>
                    </div>
                    <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile">
                      <a
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-white hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="text-sm font-medium">Home</span>
                      </a>
                      <a
                        href="https://swap.circuitx.live"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="text-sm font-medium">Swap</span>
                        {EXTERNAL_ICON}
                      </a>
                      <a
                        href="https://testnet.circuitx.live"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="text-sm font-medium">Perp</span>
                        {EXTERNAL_ICON}
                      </a>
                      <a
                        href="https://swap.circuitx.live/tokenomics"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="text-sm font-medium">Tokenomics</span>
                        {EXTERNAL_ICON}
                      </a>
                      <a
                        href="#team"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="text-sm font-medium">Team</span>
                      </a>
                      <a
                        href="https://swap.circuitx.live/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="text-sm font-medium">Docs</span>
                        {EXTERNAL_ICON}
                      </a>
                    </nav>
                    <div className="border-t border-gray-800 p-4 space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-green-400/90 mb-2">Token addresses</p>
                        <div className="flex items-center justify-between gap-2 min-w-0 rounded-lg bg-gray-800/50 px-3 py-2">
                          <span className="text-xs font-medium uppercase tracking-wider text-green-400/90 flex-shrink-0">SOL</span>
                          <button
                            type="button"
                            onClick={() => navigator.clipboard.writeText(SOL_CA)}
                            title="Click to copy"
                            className="text-xs text-gray-300 font-mono truncate text-right cursor-pointer hover:text-white transition-colors focus:outline-none min-w-0 flex-1"
                          >
                            {SOL_CA}
                          </button>
                        </div>
                        <a
                          href="https://dex.coinmarketcap.com/token/solana/2FcRaEB4NCoUvR5NNLCrPM9iTT3pGaKTh823zjFjBAGS/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="inline-flex items-center gap-2 mt-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          View on CoinMarketCap
                        </a>
                      </div>
                      <div className="flex items-center gap-4 pt-2">
                        <a
                          href="https://x.com/circuitx_app"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                          aria-label="X"
                        >
                          {X_SOCIAL_ICON}
                          <span>X</span>
                        </a>
                        <a
                          href="https://t.me/cuitcommunity"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                          aria-label="Telegram"
                        >
                          {TELEGRAM_ICON}
                          <span>Telegram</span>
                        </a>
                        <a
                          href="https://github.com/circuitx-dex"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                          aria-label="GitHub"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <a
              href="https://x.com/circuitx_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="X"
            >
              {X_SOCIAL_ICON}
            </a>
            <a
              href="https://t.me/cuitcommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              {TELEGRAM_ICON}
            </a>
            <a
              href="https://github.com/circuitx-dex"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors hidden sm:inline-block"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Token dropdown */}
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setTokenDropdownOpen(!tokenDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50"
                aria-expanded={tokenDropdownOpen}
                aria-haspopup="true"
                aria-label="Token contract address"
              >
                Token
                {CHEVRON_DOWN}
              </button>
              {tokenDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setTokenDropdownOpen(false)}
                    aria-hidden
                  />
                  <div className="absolute right-0 top-full mt-2 w-96 max-w-[calc(100vw-2rem)] bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-40 overflow-hidden">
                    <div className="p-4 pb-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-green-400/90 mb-3">
                        Token addresses
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-3 min-w-0">
                          <span className="text-xs font-medium uppercase tracking-wider text-green-400/90 flex-shrink-0">SOL</span>
                          <button
                            type="button"
                            onClick={() => navigator.clipboard.writeText(SOL_CA)}
                            title="Click to copy"
                            className="text-xs text-gray-300 font-mono truncate select-all text-right cursor-pointer hover:text-white transition-colors focus:outline-none focus:ring-0 min-w-0 flex-1"
                          >
                            {SOL_CA}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 px-4 py-3">
                      <a
                        href="https://dex.coinmarketcap.com/token/solana/2FcRaEB4NCoUvR5NNLCrPM9iTT3pGaKTh823zjFjBAGS/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
                        onClick={() => setTokenDropdownOpen(false)}
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        View on CoinMarketCap
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        {/* Hero - big title + two-column layout (title top, description right) */}
        <section className="px-4 sm:px-6 md:px-8 pt-20 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-12 md:mb-16">
              Privacy is not an Option
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-7 w-full min-w-0 aspect-video overflow-hidden rounded-lg">
                <video
                  ref={heroVideoRef}
                  src="/swap-demo.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-hidden
                />
              </div>
              <div className="lg:col-span-5 w-full">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-snug text-left mb-10 md:mb-14">
                  Compliant, Auditable Privacy for Trading, Swap and trade futures privately
                </p>
                <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mt-10 md:mt-14">
                  <div className="relative inline-block">
                    <span className="absolute -top-1.5 right-2 px-2 py-0.5 rounded text-xs font-medium bg-green-500/30 text-white border border-green-400/50 z-10">
                      Mainnet
                    </span>
                    <a
                      href="https://swap.circuitx.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-3 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
                    >
                      Try Swap DEX
                    </a>
                  </div>
                  <div className="relative inline-block">
                    <span className="absolute -top-1.5 right-2 px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-700 border border-gray-300 z-10">
                      Testnet
                    </span>
                    <a
                      href="https://testnet.circuitx.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      Perp DEX
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features - What we build */}
        <section className="relative z-10 px-4 sm:px-6 md:px-8 py-16 md:py-24 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:mb-12">
              <span className="inline-block px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-gray-800/80 text-gray-300 border border-gray-700">
                What we build
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Sovereign Trade Execution
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-6 md:p-8 hover:border-green-500/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20 text-green-400 border border-green-500/40 mb-5">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Privacy Service</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Application-level privacy using ZK proofs and TEE. Create private notes, deposit assets, and receive untraceable payments for any privacy-enabled service.
                </p>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-6 md:p-8 hover:border-green-500/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20 text-green-400 border border-green-500/40 mb-5">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 16V4m0 0L3 8m4-4l4 4" />
                    <path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Swap DEX</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Private swap DEX on mainnet. Trade SOL, USDC, and more with full privacy—shield assets and swap without exposing amounts or addresses on-chain.
                </p>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-6 md:p-8 hover:border-orange-500/50 transition-colors sm:col-span-2 lg:col-span-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/40 mb-5">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 16 4 4 4-4" />
                    <path d="M7 20V4" />
                    <path d="m21 8-4-4-4 4" />
                    <path d="M17 4v16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Perp DEX</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Private perpetual futures on testnet. Trade with leverage while position size, entry price, and PnL stay hidden via ZK proofs—MEV resistant and fully verifiable on-chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Core - horizontal marquee */}
        <section className="relative z-10 px-4 sm:px-6 md:px-8 border-t border-gray-800/50 py-8 md:py-10" aria-label="Privacy Core">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="inline-block px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-gray-800/80 text-gray-300 border border-gray-700">
                Privacy Core
              </span>
            </div>
            <div className="overflow-hidden select-none">
              <div className="marquee-track">
<p className="flex items-center gap-8 whitespace-nowrap py-2 text-4xl sm:text-3xl md:text-4xl font-medium text-white/90">
                Privacy is a human right • Reclaim your financial sovereignty • Trade without surveillance • No middlemen, no masters • Secure. Anonymous. Limitless. • Decouple your identity from your wealth • Join the silent revolution.
              </p>
              <p className="flex items-center gap-8 whitespace-nowrap py-2 text-2xl sm:text-3xl md:text-4xl font-medium text-white/90" aria-hidden>
                  Privacy is a human right • Reclaim your financial sovereignty • Trade without surveillance • No middlemen, no masters • Secure. Anonymous. Limitless. • Decouple your identity from your wealth • Join the silent revolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="relative z-10 px-4 sm:px-6 md:px-8 border-t border-gray-800/50 py-16 md:py-24" aria-label="About Us">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left: text */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <span className="inline-block px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-gray-800/80 text-gray-300 border border-gray-700">
                  About Us
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Defining the future of
                  <br />
                  private trading
                </h2>
                <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                  circuitX is a privacy-preserving DeFi platform—private swap on mainnet and private perpetuals on testnet. We use zero-knowledge proofs so you can trade without exposing amounts or addresses on-chain.
                </p>
                <p className="mt-4 text-lg text-gray-400 leading-relaxed">
                  Our mission is to make compliant, auditable privacy the default for trading so users reclaim financial sovereignty.
                </p>
                <a
                  href="https://swap.circuitx.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-8 px-5 py-3 rounded-lg border border-gray-600 bg-transparent text-white text-sm font-medium hover:bg-gray-800 hover:border-gray-500 transition-colors"
                >
                  Try Swap DEX
                </a>
              </div>
              {/* Right: image */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center lg:items-end">
                <img
                  src="/logo.jpg"
                  alt="circuitX"
                  className="w-full max-w-lg h-auto object-contain"
                />
                <div className="mt-4 text-center lg:text-right">
                  <p className="text-white font-bold text-lg">Private</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Auditable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="relative z-10 px-4 sm:px-6 md:px-8 border-t border-gray-800/50 py-16 md:py-24" aria-label="Team">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:mb-12">
              <span className="inline-block px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-gray-800/80 text-gray-300 border border-gray-700">
                Team
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* mankind */}
              <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-6 md:p-8 hover:border-green-500/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <img
                    src="/mankind.jpg"
                    alt="mankind"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-white uppercase tracking-tight">mankind</h3>
                      <a
                        href="https://github.com/MakindeAhmed2110"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href="https://x.com/thatweb3gee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="X"
                      >
                        {X_SOCIAL_ICON}
                      </a>
                    </div>
                    <p className="mt-1 text-sm font-medium text-green-400/90 uppercase tracking-wider">Founder, Developer</p>
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                      Serial entrepreneur, founder of circuitX, and a passionate advocate for the future of compliant privacy.
                    </p>
                  </div>
                </div>
              </div>

              {/* RythaGod */}
              <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-6 md:p-8 hover:border-green-500/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <img
                    src="/RythaGOD.jpg"
                    alt="RythaGod"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-white uppercase tracking-tight">RythaGod</h3>
                      <a
                        href="https://github.com/RYthaGOD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href="https://x.com/Moneybag_Fin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="X"
                      >
                        {X_SOCIAL_ICON}
                      </a>
                    </div>
                    <p className="mt-1 text-sm font-medium text-green-400/90 uppercase tracking-wider">Developer</p>
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                      Full-stack development and technical implementation. Building the interfaces that bring circuitX to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token contract addresses */}
        <section className="relative z-10 border-t border-gray-800/50 py-16 md:py-20" aria-label="Token contract addresses">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Token contract addresses
            </h2>
          </div>
          <div className="w-full border-y border-gray-700 bg-gray-900/50 py-4 pl-8 sm:pl-12 md:pl-16 pr-4 sm:pr-6 md:pr-8 flex items-center gap-4 min-w-0">
            <span className="text-xs font-medium uppercase tracking-wider text-green-400/90 flex-shrink-0">SOL</span>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(SOL_CA)}
              title="Click to copy"
              className="text-sm text-gray-300 font-mono whitespace-nowrap overflow-x-auto select-all min-w-0 flex-1 text-left cursor-pointer hover:text-white transition-colors focus:outline-none focus:ring-0"
            >
              2FcRaEB4NCoUvR5NNLCrPM9iTT3pGaKTh823zjFjBAGS
            </button>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8 flex justify-center">
              <a
                href="https://dex.coinmarketcap.com/token/solana/2FcRaEB4NCoUvR5NNLCrPM9iTT3pGaKTh823zjFjBAGS/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                View on CoinMarketCap
              </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8 md:py-10 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Left: brand */}
            <a href="/" className="text-lg font-bold text-white hover:text-gray-300 transition-colors">
              circuitX
            </a>
            {/* Center: nav */}
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8" aria-label="Footer">
              <a href="https://swap.circuitx.live" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
                Swap
              </a>
              <a href="https://testnet.circuitx.live" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
                Perp
              </a>
              <a href="https://swap.circuitx.live/docs" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
                Docs
              </a>
              <a href="https://swap.circuitx.live/tokenomics" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
                Tokenomics
              </a>
              <a href="#team" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
                Team
              </a>
            </nav>
            {/* Right: copyright + social */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} circuitX. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/circuitx_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="X"
                >
                  {X_SOCIAL_ICON}
                </a>
                <a
                  href="https://t.me/cuitcommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  {TELEGRAM_ICON}
                </a>
                <a
                  href="https://github.com/circuitx-dex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import type { Route } from "./+types/home";
import { useEffect, useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CircuitX - Private Perpetual Futures DEX" },
    { name: "description", content: "Trade Private Perpetuals. Prove Validity, Never Identity. A privacy-native perpetual futures DEX built on Ztarknet." },
  ];
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const tokenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    [heroRef, dashboardRef, featuresRef, tokenRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/logo_green.png" alt="CircuitX Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
            <span className="text-lg md:text-xl font-bold">CircuitX</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="https://x.com/circuitx_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              X
            </a>
            <a
              href="https://github.com/YieldStark/perpl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative z-10 pt-16 md:pt-32 pb-0 px-4 md:px-6 container mx-auto"
        style={{ opacity: 0 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-0 leading-tight">
            <span className="gradient-text">CircuitX</span>
            <br />
            <span className="text-white">Private Perpetual Futures DEX</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light mt-1 md:mt-2 mb-0">
            Trade Private Perpetuals. Prove Validity, Never Identity.
          </p>
        </div>
      </section>

      {/* Dashboard Image Section */}
      <section
        ref={dashboardRef}
        className="relative z-10 px-4 md:px-6 container mx-auto mb-0 md:mb-2 mt-2 md:mt-8"
        style={{ opacity: 0 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl p-0 m-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-orange-500/10 blur-3xl"></div>
            <img
              src="/circuitx-web.png"
              alt="CircuitX Dashboard"
              className="relative w-full h-auto animate-float block m-0 p-0"
              style={{ animationDelay: "0.5s", display: "block", margin: 0, padding: 0, verticalAlign: "top" }}
            />
          </div>
        </div>
      </section>

      {/* Why CircuitX Section */}
      <section className="relative z-10 px-4 md:px-6 container mx-auto mb-4 md:mb-20 -mt-1 md:-mt-2" style={{ opacity: 0 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 text-center">
            Why <span className="gradient-text">CircuitX</span> Fits
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-2 md:mb-4">
            CircuitX delivers <span className="text-green-400 font-semibold">true privacy</span>{" "}
            in perpetual trading—a category explicitly mentioned in the wildcard bounty. Unlike
            traditional DEXs that expose all trading data on-chain, CircuitX uses ZK proofs to hide
            position details (size, entry price, margin, direction) while maintaining full
            on-chain verification.
          </p>
          <div className="bg-gradient-to-r from-green-900/20 to-orange-900/20 border border-green-500/30 rounded-lg p-3 md:p-6 mt-3 md:mt-6">
            <p className="text-base md:text-lg font-semibold text-green-400 mb-1 md:mb-2">Key Innovation:</p>
            <p className="text-sm md:text-base text-gray-300">
              Only commitment hashes are stored on-chain. Position details are cryptographically
              hidden, making it impossible for MEV bots, competitors, or even the protocol itself
              to see your trading strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="relative z-10 px-4 md:px-6 container mx-auto mb-4 md:mb-20"
        style={{ opacity: 0 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-12 text-center">
            Key <span className="gradient-text">Features</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            <div className="bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/30 rounded-xl p-3 md:p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="text-2xl md:text-4xl mb-2 md:mb-4">🔐</div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3 text-green-400">Complete Privacy</h3>
              <p className="text-xs md:text-base text-gray-400">
                Strategy, entry prices, and sizes are completely hidden. Only commitment hashes
                are stored on-chain.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/30 rounded-xl p-3 md:p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-2xl md:text-4xl mb-2 md:mb-4">⚡</div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3 text-orange-400">Full Leverage</h3>
              <p className="text-xs md:text-base text-gray-400">
                Trade with up to 20x leverage. Multiple order types including Market, Limit, and
                TWAP.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900/20 to-orange-900/20 border border-green-500/30 rounded-xl p-3 md:p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="text-2xl md:text-4xl mb-2 md:mb-4">🛡️</div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3 text-green-400">MEV Resistant</h3>
              <p className="text-xs md:text-base text-gray-400">
                Private positions can't be front-run. Your trading strategy remains completely
                hidden from bots and competitors.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/30 rounded-xl p-3 md:p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-2xl md:text-4xl mb-2 md:mb-4">🔗</div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3 text-orange-400">On-Chain Verification</h3>
              <p className="text-xs md:text-base text-gray-400">
                All proofs are verified on-chain. Fully decentralized with no intermediaries.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/30 rounded-xl p-3 md:p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="text-2xl md:text-4xl mb-2 md:mb-4">💰</div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3 text-green-400">Automatic PnL</h3>
              <p className="text-xs md:text-base text-gray-400">
                Profit/loss calculated and settled automatically on position close. Real-time
                oracle prices from Pyth Network.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/20 to-green-900/20 border border-orange-500/30 rounded-xl p-3 md:p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-2xl md:text-4xl mb-2 md:mb-4">🔒</div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3 text-orange-400">Self-Custody</h3>
              <p className="text-xs md:text-base text-gray-400">
                Users control their funds. No intermediaries. Built on Ztarknet for maximum
                security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Details Section */}
      <section
        ref={tokenRef}
        className="relative z-10 px-4 md:px-6 container mx-auto mb-4 md:mb-20"
        style={{ opacity: 0 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-12 text-center">
            Token <span className="gradient-text">Details</span>
          </h2>
          <div className="bg-gradient-to-br from-green-900/20 via-black to-orange-900/20 border border-green-500/30 rounded-2xl p-4 md:p-8 lg:p-12">
            <div className="text-center mb-4 md:mb-8">
              <div className="inline-block bg-gradient-to-br from-green-500/20 to-orange-500/20 rounded-full p-3 md:p-6 mb-2 md:mb-4">
                <div className="text-3xl md:text-5xl">🪙</div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">CircuitX Token</h3>
            </div>
            <div className="space-y-2 md:space-y-4">
              <div className="flex justify-between items-center py-2 md:py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm md:text-lg">Name</span>
                <span className="text-base md:text-xl font-bold text-white">CircuitX</span>
              </div>
              <div className="flex justify-between items-center py-2 md:py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm md:text-lg">Ticker</span>
                <span className="text-base md:text-xl font-bold gradient-text">$CUIT</span>
              </div>
              <div className="flex justify-between items-center py-2 md:py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm md:text-lg">Total Supply</span>
                <span className="text-base md:text-xl font-bold gradient-text">1 Billion</span>
              </div>
              <div className="flex justify-between items-center py-2 md:py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm md:text-lg">Contract Address</span>
                <span className="text-xs md:text-sm font-mono text-green-400 break-all text-right max-w-[60%]">
                  2FcRaEB4NCoUvR5NNLCrPM9iTT3pGaKTh823zjFjBAGS
                </span>
              </div>
              <div className="flex justify-center gap-3 md:gap-6 mt-4 md:mt-8 flex-wrap">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("2FcRaEB4NCoUvR5NNLCrPM9iTT3pGaKTh823zjFjBAGS");
                    alert("Contract address copied to clipboard!");
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>Buy $CUIT</span>
                </button>
                <a
                  href="https://x.com/circuitx_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>Follow on X</span>
                </a>
                <a
                  href="https://github.com/YieldStark/perpl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 mt-4 md:mt-20 py-4 md:py-8 px-4 md:px-6">
        <div className="container mx-auto text-center text-gray-400">
          <p className="text-sm md:text-base">Built for Zypherpunk Hackathon 2025</p>
          <div className="flex justify-center gap-4 md:gap-6 mt-3 md:mt-4">
            <a
              href="https://x.com/circuitx_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              X
            </a>
            <a
              href="https://github.com/YieldStark/perpl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

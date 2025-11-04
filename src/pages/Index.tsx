import { Button } from "@/components/ui/button";
import { StarField } from "@/components/StarField";
import { NeonGrid } from "@/components/NeonGrid";
import { NeonCard } from "@/components/NeonCard";
import { Sparkles, Zap, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated starfield background */}
      <StarField />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-32">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Glowing title */}
            <h1 className="text-6xl md:text-8xl font-bold font-orbitron">
              <span className="neon-text-cyan animate-pulse-glow">NEON</span>
              <br />
              <span className="neon-text-pink">SYNTHWAVE</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl neon-text-purple max-w-2xl mx-auto font-mono">
              Experience the retro-futuristic world of 80s aesthetics
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Button variant="neon" size="lg" className="font-orbitron">
                <Zap className="mr-2" />
                ENTER GRID
              </Button>
              <Button variant="neonPink" size="lg" className="font-orbitron">
                <Sparkles className="mr-2" />
                EXPLORE
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 pb-32 relative z-20">
          <div className="grid md:grid-cols-3 gap-8">
            <NeonCard glowColor="cyan" className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center neon-border-cyan">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-orbitron neon-text-cyan">
                RETRO VIBES
              </h3>
              <p className="text-muted-foreground font-mono">
                Immerse yourself in the nostalgic glow of 80s neon aesthetics with pixel-perfect design.
              </p>
            </NeonCard>

            <NeonCard glowColor="pink" className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center neon-border-pink">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold font-orbitron neon-text-pink">
                NEON DREAMS
              </h3>
              <p className="text-muted-foreground font-mono">
                Watch as vibrant colors pulse and glow, bringing your digital world to life.
              </p>
            </NeonCard>

            <NeonCard glowColor="purple" className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center border-2 border-neon-purple shadow-[0_0_20px_rgba(176,38,255,0.6)]">
                <Rocket className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="text-2xl font-bold font-orbitron neon-text-purple">
                SPACE ODYSSEY
              </h3>
              <p className="text-muted-foreground font-mono">
                Journey through infinite starfields and retro-futuristic landscapes.
              </p>
            </NeonCard>
          </div>
        </section>
      </div>

      {/* Neon grid horizon effect */}
      <NeonGrid />
      
      {/* Scan line effect */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-b from-primary/50 to-transparent animate-scan-line pointer-events-none"
        style={{ zIndex: 100 }}
      />
    </div>
  );
};

export default Index;

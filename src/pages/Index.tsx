import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { StatBadge } from "@/components/StatBadge";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import heroCharacters from "@/assets/hero-characters.png";
import { 
  Flame, 
  Trophy, 
  Zap, 
  Target, 
  Users, 
  Shield, 
  Star,
  Sparkles,
  Timer,
  Coins,
  TrendingUp
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Flame className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl text-foreground">DareUp</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Features</Button>
            <Button variant="ghost" size="sm">Community</Button>
            <Button variant="neon" size="sm">Join Beta</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-8 md:pt-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">The Ultimate Dare Platform</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                ACCEPT THE{" "}
                <span className="text-gradient-primary neon-text-primary">DARE</span>
                <br />
                BECOME A{" "}
                <span className="text-gradient-fire">LEGEND</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                Challenge friends, complete epic dares, earn coins & rewards. 
                Build your streak, climb the leaderboard, and prove you're the ultimate dare champion.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
                <Button variant="hero" size="xl" className="group">
                  <Zap className="w-5 h-5 group-hover:animate-bounce" />
                  Start Your Journey
                </Button>
                <Button variant="outline" size="xl">
                  <Trophy className="w-5 h-5" />
                  View Leaderboard
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
                <StatBadge value="50K+" label="Dare Takers" icon="🔥" color="primary" />
                <StatBadge value="1M+" label="Dares Complete" icon="⚡" color="secondary" />
                <StatBadge value="100+" label="Colleges" icon="🎓" color="accent" />
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-3xl scale-110 animate-pulse-glow" />
                
                {/* Tagline Behind */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-center z-0 w-full">
                  <span className="font-display text-6xl md:text-8xl lg:text-9xl text-muted/20 whitespace-nowrap select-none">
                    DARE ME
                  </span>
                </div>
                
                {/* Characters */}
                <img 
                  src={heroCharacters} 
                  alt="Dare challenge characters" 
                  className="relative z-10 w-full max-w-md lg:max-w-lg animate-float drop-shadow-2xl"
                />

                {/* Floating Elements */}
                <div className="absolute -right-4 top-20 animate-float-delayed">
                  <div className="glass-card px-4 py-2 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-neon-orange" />
                    <span className="font-semibold text-foreground">7 Day Streak!</span>
                  </div>
                </div>
                <div className="absolute -left-4 bottom-32 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="glass-card px-4 py-2 flex items-center gap-2">
                    <Coins className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">+500 Coins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              EPIC <span className="text-gradient-primary">FEATURES</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to become the ultimate dare legend
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Target className="w-12 h-12" />}
              title="Dare Categories"
              description="Fun, Skill, Fitness, Knowledge & Social Good dares. All safe and community-friendly challenges."
              glowColor="primary"
              delay={200}
            />
            <FeatureCard
              icon={<Timer className="w-12 h-12" />}
              title="Token System"
              description="Accept dares with countdown timers. Complete before time runs out or face the consequences!"
              glowColor="secondary"
              delay={300}
            />
            <FeatureCard
              icon={<Coins className="w-12 h-12" />}
              title="Coins & Rewards"
              description="Earn coins, unlock badges, customize your profile, and climb the coin leaderboard."
              glowColor="accent"
              delay={400}
            />
            <FeatureCard
              icon={<TrendingUp className="w-12 h-12" />}
              title="Streak System"
              description="Maintain daily streaks, unlock streak rewards, and use streak freeze power-ups."
              glowColor="secondary"
              delay={500}
            />
            <FeatureCard
              icon={<Users className="w-12 h-12" />}
              title="Friends Mode"
              description="Private 1v1 battles, group dares, and fun PG-safe punishments for losers."
              glowColor="primary"
              delay={600}
            />
            <FeatureCard
              icon={<Shield className="w-12 h-12" />}
              title="AI Safety Filter"
              description="Advanced AI moderation ensures all dares are safe, appropriate, and community-friendly."
              glowColor="accent"
              delay={700}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              HOW IT <span className="text-gradient-secondary">WORKS</span>
            </h2>
          </div>

          <div className="space-y-2">
            <HowItWorksStep
              step={1}
              icon="🎯"
              title="Browse Dares"
              description="Explore trending dares, weekly challenges, or create your own. Pick from categories like Fun, Skill, Fitness & more."
              delay={200}
            />
            <HowItWorksStep
              step={2}
              icon="⚡"
              title="Accept & Complete"
              description="Accept a dare and the countdown begins! Record your attempt, show your proof, and complete before time expires."
              delay={400}
            />
            <HowItWorksStep
              step={3}
              icon="🏆"
              title="Earn & Climb"
              description="Earn coins, build streaks, unlock achievements, and climb the leaderboard. Become the legend of your campus!"
              delay={600}
              isLast
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card gradient-border p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-3">
                {["🔥", "⚡", "💎", "🏆", "✨"].map((emoji, i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl border-2 border-background animate-bounce-slow"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              READY TO PROVE YOURSELF?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands of dare legends. Start your journey today and show the world what you're made of.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Star className="w-5 h-5" />
                Join the Beta
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-10 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Flame className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl text-foreground">DareUp</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 DareUp. Accept the dare. Become legendary.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

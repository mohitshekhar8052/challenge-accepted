import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { StatBadge } from "@/components/StatBadge";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import heroVideo from "@/assets/hero-characters.mp4";
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
      {/* Soft Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pastel-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-pastel-blue/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pastel-yellow/20 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-soft">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">DareUp</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Features</Button>
            <Button variant="ghost" size="sm">Community</Button>
            <Button variant="default" size="sm">Join Beta</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-8 md:pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 text-pastel-coral" />
                <span className="text-sm text-muted-foreground font-medium">The Ultimate Dare Platform</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 opacity-0 animate-fade-in font-extrabold" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                Accept the{" "}
                <span className="text-primary">Dare</span>
                <br />
                Become a{" "}
                <span className="text-secondary">Legend</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in leading-relaxed" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                Challenge friends, complete epic dares, earn coins & rewards. 
                Build your streak and prove you're the ultimate dare champion!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
                <Button variant="hero" size="xl" className="group">
                  <Zap className="w-5 h-5 group-hover:animate-bounce" />
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  <Trophy className="w-5 h-5" />
                  View Leaderboard
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
                <StatBadge value="50K+" label="Dare Takers" icon="🔥" bgClass="bg-muted" />
                <StatBadge value="1M+" label="Dares Complete" icon="⚡" bgClass="bg-muted" />
                <StatBadge value="100+" label="Colleges" icon="🎓" bgClass="bg-muted" />
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Tagline Behind */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center z-0 w-full">
                  <span className="font-display text-6xl md:text-7xl lg:text-8xl text-muted/40 whitespace-nowrap select-none font-extrabold">
                    DARE ME
                  </span>
                </div>
                
                {/* Characters Video */}
                <video 
                  src={heroVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="relative z-10 w-full max-w-md lg:max-w-xl xl:max-w-2xl drop-shadow-xl rounded-3xl"
                />

                {/* Floating Elements */}
                <div className="absolute -right-2 top-16 animate-float-delayed">
                  <div className="soft-card px-4 py-2 flex items-center gap-2 shadow-medium">
                    <Flame className="w-4 h-4 text-pastel-coral" />
                    <span className="font-semibold text-foreground text-sm">7 Day Streak!</span>
                  </div>
                </div>
                <div className="absolute -left-2 bottom-28 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="soft-card px-4 py-2 flex items-center gap-2 shadow-medium">
                    <Coins className="w-4 h-4 text-pastel-yellow" />
                    <span className="font-semibold text-foreground text-sm">+500 Coins</span>
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
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 opacity-0 animate-fade-in font-extrabold" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              Epic <span className="text-primary">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to become the ultimate dare legend
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Target className="w-10 h-10" />}
              title="Dare Categories"
              description="Fun, Skill, Fitness, Knowledge & Social Good dares. All safe and community-friendly."
              colorClass="text-primary"
              delay={200}
            />
            <FeatureCard
              icon={<Timer className="w-10 h-10" />}
              title="Token System"
              description="Accept dares with countdown timers. Complete before time runs out!"
              colorClass="text-secondary"
              delay={300}
            />
            <FeatureCard
              icon={<Coins className="w-10 h-10" />}
              title="Coins & Rewards"
              description="Earn coins, unlock badges, customize your profile, and climb leaderboards."
              colorClass="text-pastel-yellow"
              delay={400}
            />
            <FeatureCard
              icon={<TrendingUp className="w-10 h-10" />}
              title="Streak System"
              description="Maintain daily streaks, unlock rewards, and use power-ups."
              colorClass="text-pastel-coral"
              delay={500}
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Friends Mode"
              description="Private 1v1 battles, group dares, and fun challenges with friends."
              colorClass="text-primary"
              delay={600}
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="AI Safety Filter"
              description="Advanced AI moderation ensures all dares are safe and appropriate."
              colorClass="text-warm-tan"
              delay={700}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-extrabold">
              How It <span className="text-secondary">Works</span>
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
              description="Accept a dare and the countdown begins! Record your attempt and complete before time expires."
              delay={400}
            />
            <HowItWorksStep
              step={3}
              icon="🏆"
              title="Earn & Climb"
              description="Earn coins, build streaks, unlock achievements, and become the legend of your campus!"
              delay={600}
              isLast
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="soft-card p-8 md:p-12 text-center shadow-medium">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                {["🔥", "⚡", "💎", "🏆", "✨"].map((emoji, i) => (
                  <div 
                    key={i}
                    className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-lg border-2 border-background animate-bounce-gentle"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-extrabold">
              Ready to Prove Yourself?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands of dare legends. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Star className="w-5 h-5" />
                Join the Beta
              </Button>
              <Button variant="soft" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-10 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-soft">
              <Flame className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">DareUp</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 DareUp. Accept the dare. Become legendary.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

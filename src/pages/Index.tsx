import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { StatBadge } from "@/components/StatBadge";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import heroVideo from "@/assets/hero-characters.mp4";
import characterCelebrating from "@/assets/character-celebrating.png";
import characterThinking from "@/assets/character-thinking.png";
import characterPointing from "@/assets/character-pointing.png";
import characterJumping from "@/assets/character-jumping.png";
import charactersHighfive from "@/assets/characters-highfive.png";
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
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Soft Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pastel-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-pastel-blue/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pastel-yellow/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 overflow-hidden h-screen max-h-[1000px] min-h-[500px] flex items-center" style={{ zoom: '0.8' }}>
        {/* Background Video */}
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-right z-0 opacity-60"
        />
        
        {/* Overlay to enhance text readability - stronger on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-[1]" />
        
        <div className="max-w-6xl mx-auto relative z-10 w-full px-2 sm:px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center py-8">
            {/* Hero Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 py-4 lg:py-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border mb-3 md:mb-4 animate-fade-in">
                <Sparkles className="w-3.5 h-3.5 text-pastel-coral" />
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">The Ultimate Dare Platform</span>
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-foreground leading-tight mb-3 md:mb-5 opacity-0 animate-fade-in font-extrabold" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                Accept the{" "}
                <span className="text-primary">Dare</span>
                <br />
                Become a{" "}
                <span className="text-secondary">Legend</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-5 md:mb-6 opacity-0 animate-fade-in leading-relaxed" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                Challenge friends, complete epic dares, earn coins & rewards. 
                Build your streak and prove you're the ultimate dare champion!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3 justify-center lg:justify-start mb-5 md:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
                <Button variant="hero" size="xl" className="group">
                  <Zap className="w-4 h-4 group-hover:animate-bounce" />
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  <Trophy className="w-4 h-4" />
                  View Leaderboard
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
                <StatBadge value="50K+" label="Dare Takers" icon="🔥" bgClass="bg-muted" />
                <StatBadge value="1M+" label="Dares Complete" icon="⚡" bgClass="bg-muted" />
                <StatBadge value="100+" label="Colleges" icon="🎓" bgClass="bg-muted" />
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2 flex justify-center items-center min-h-[250px] lg:min-h-[350px]">
              <div className="relative w-full max-w-sm">
                {/* Tagline */}
                <div className="text-center mb-6 lg:mb-0">
                  <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground/80 whitespace-nowrap select-none font-extrabold">
                    DARE ME
                  </span>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -right-2 top-10 lg:top-12 animate-float-delayed">
                  <div className="soft-card px-2.5 py-1.5 lg:px-3 lg:py-2 flex items-center gap-1.5 shadow-medium border border-pastel-coral/20 bg-gradient-to-br from-background to-pastel-coral/5">
                    <Flame className="w-3 h-3 text-pastel-coral animate-pulse" />
                    <span className="font-semibold text-foreground text-xs">7 Day Streak!</span>
                  </div>
                </div>
                <div className="absolute -left-2 bottom-16 lg:bottom-20 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="soft-card px-2.5 py-1.5 lg:px-3 lg:py-2 flex items-center gap-1.5 shadow-medium border border-pastel-yellow/20 bg-gradient-to-br from-background to-pastel-yellow/5">
                    <Coins className="w-3 h-3 text-pastel-yellow animate-bounce" />
                    <span className="font-semibold text-foreground text-xs">+500 Coins</span>
                  </div>
                </div>
                
                {/* Additional Floating Trophy Badge */}
                <div className="absolute -right-4 bottom-10 lg:bottom-12 animate-float-delayed" style={{ animationDelay: "1.5s" }}>
                  <div className="soft-card px-2 py-1.5 flex items-center gap-1.5 shadow-medium border border-primary/20 bg-gradient-to-br from-background to-primary/5">
                    <Trophy className="w-3 h-3 text-primary" />
                    <span className="font-semibold text-foreground text-xs">Top 10!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="relative z-10 px-6 py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-bounce-gentle">
            <Star className="w-5 h-5 text-primary animate-spin-slow" />
            <span className="text-sm font-bold text-primary">START YOUR JOURNEY</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 font-extrabold">
            Ready to Accept the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pastel-coral">
              Challenge?
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of dare legends. Sign in to start completing challenges, 
            earning coins, and climbing the leaderboards!
          </p>

          {/* CTA Button */}
          <Link to="/auth">
            <Button variant="hero" size="xl" className="group animate-pulse-slow">
              <span className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Sign In to Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="soft-card p-6 text-center animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Epic Challenges</h3>
              <p className="text-sm text-muted-foreground">Complete dares and prove yourself</p>
            </div>
            
            <div className="soft-card p-6 text-center animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Coins className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">Collect coins and unlock badges</p>
            </div>
            
            <div className="soft-card p-6 text-center animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 rounded-full bg-pastel-coral/10 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-pastel-coral" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Leaderboards</h3>
              <p className="text-sm text-muted-foreground">Compete and become a legend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dare Cards Carousel */}
      <section className="relative z-10 py-20 overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-extrabold">
              Today's <span className="text-primary">Hot Dares</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Swipe to accept and become a legend!
            </p>
          </div>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll-infinite">
            {/* First set of cards */}
            {[
              {
                title: "Dance Challenge",
                description: "Perform a 30-second dance in a public place",
                category: "Fun",
                coins: 500,
                difficulty: "Easy",
                emoji: "💃"
              },
              {
                title: "Fitness Beast",
                description: "Complete 50 push-ups without stopping",
                category: "Fitness",
                coins: 750,
                difficulty: "Medium",
                emoji: "💪"
              },
              {
                title: "Random Act",
                description: "Buy coffee for a stranger and share their story",
                category: "Social Good",
                coins: 1000,
                difficulty: "Easy",
                emoji: "☕"
              },
              {
                title: "Skill Master",
                description: "Learn and perform a magic trick",
                category: "Skill",
                coins: 800,
                difficulty: "Hard",
                emoji: "🎩"
              },
              {
                title: "Brain Teaser",
                description: "Solve 10 riddles in under 5 minutes",
                category: "Knowledge",
                coins: 600,
                difficulty: "Medium",
                emoji: "🧠"
              }
            ].map((dare, index) => (
              <div 
                key={`dare-1-${index}`}
                className="flex-shrink-0 w-80 soft-card p-6 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{dare.emoji}</div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    {dare.category}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {dare.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {dare.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-pastel-yellow" />
                    <span className="font-semibold text-foreground">{dare.coins}</span>
                  </div>
                  <span className={`text-xs font-medium ${
                    dare.difficulty === 'Easy' ? 'text-green-500' : 
                    dare.difficulty === 'Medium' ? 'text-yellow-500' : 
                    'text-red-500'
                  }`}>
                    {dare.difficulty}
                  </span>
                </div>

                {/* Slide to Accept */}
                <div className="relative h-12 rounded-full bg-muted overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Slide to Accept →
                    </span>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-14 bg-primary rounded-full flex items-center justify-center cursor-pointer group-hover:w-20 transition-all duration-300">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              {
                title: "Dance Challenge",
                description: "Perform a 30-second dance in a public place",
                category: "Fun",
                coins: 500,
                difficulty: "Easy",
                emoji: "💃"
              },
              {
                title: "Fitness Beast",
                description: "Complete 50 push-ups without stopping",
                category: "Fitness",
                coins: 750,
                difficulty: "Medium",
                emoji: "💪"
              },
              {
                title: "Random Act",
                description: "Buy coffee for a stranger and share their story",
                category: "Social Good",
                coins: 1000,
                difficulty: "Easy",
                emoji: "☕"
              },
              {
                title: "Skill Master",
                description: "Learn and perform a magic trick",
                category: "Skill",
                coins: 800,
                difficulty: "Hard",
                emoji: "🎩"
              },
              {
                title: "Brain Teaser",
                description: "Solve 10 riddles in under 5 minutes",
                category: "Knowledge",
                coins: 600,
                difficulty: "Medium",
                emoji: "🧠"
              }
            ].map((dare, index) => (
              <div 
                key={`dare-2-${index}`}
                className="flex-shrink-0 w-80 soft-card p-6 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{dare.emoji}</div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    {dare.category}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {dare.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {dare.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-pastel-yellow" />
                    <span className="font-semibold text-foreground">{dare.coins}</span>
                  </div>
                  <span className={`text-xs font-medium ${
                    dare.difficulty === 'Easy' ? 'text-green-500' : 
                    dare.difficulty === 'Medium' ? 'text-yellow-500' : 
                    'text-red-500'
                  }`}>
                    {dare.difficulty}
                  </span>
                </div>

                {/* Slide to Accept */}
                <div className="relative h-12 rounded-full bg-muted overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Slide to Accept →
                    </span>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-14 bg-primary rounded-full flex items-center justify-center cursor-pointer group-hover:w-20 transition-all duration-300">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dare of the Day */}
      <section className="relative z-10 px-6 py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-bounce-gentle">
              <Star className="w-5 h-5 text-primary animate-spin-slow" />
              <span className="text-sm font-bold text-primary">FEATURED</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 font-extrabold animate-fade-in">
              Dare of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pastel-coral animate-gradient-shift">Day</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The ultimate challenge awaits. Are you brave enough?
            </p>
          </div>

          {/* Main Dare Card */}
          <div className="relative">
            {/* Animated Background Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-4 border-primary/20 rounded-full animate-ping-slow" />
              <div className="absolute w-80 h-80 border-4 border-secondary/20 rounded-full animate-ping-slower" />
              <div className="absolute w-96 h-96 border-4 border-pastel-coral/20 rounded-full animate-ping-slowest" />
            </div>

            {/* Central Card */}
            <div className="relative soft-card p-8 md:p-12 shadow-2xl border-2 border-primary/30 animate-float-slow hover:scale-105 transition-all duration-500">
              {/* Sparkle Effects */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full blur-md animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-pastel-coral rounded-2xl blur-xl opacity-50 animate-pulse" />
                  <div className="relative text-6xl md:text-7xl animate-bounce-gentle">
                    🏆
                  </div>
                </div>
              </div>

              {/* Category & Difficulty */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                  EPIC CHALLENGE
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg animate-pulse">
                  🔥 LEGENDARY
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-6 text-foreground animate-fade-in">
                The Ultimate Social Dare
              </h3>

              {/* Description */}
              <p className="text-center text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Compliment 10 strangers in creative ways and capture their genuine reactions. 
                Spread positivity and make someone's day brighter! Share your most heartwarming moment.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-2xl bg-muted/50 border border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <Coins className="w-6 h-6 mx-auto mb-2 text-pastel-yellow" />
                  <div className="font-bold text-2xl text-foreground">2500</div>
                  <div className="text-xs text-muted-foreground">Coins</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-muted/50 border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Timer className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-2xl text-foreground">24h</div>
                  <div className="text-xs text-muted-foreground">Time Limit</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-muted/50 border border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <Users className="w-6 h-6 mx-auto mb-2 text-secondary" />
                  <div className="font-bold text-2xl text-foreground">1.2K</div>
                  <div className="text-xs text-muted-foreground">Accepted</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group relative overflow-hidden text-lg px-12 py-6 animate-pulse-slow"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Accept the Challenge
                    <Flame className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient-flow" />
                </Button>
              </div>

              {/* Timer Countdown */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-2">Expires in:</p>
                <div className="flex items-center justify-center gap-2 font-display text-2xl font-bold text-primary animate-pulse">
                  <span>18</span>:<span>32</span>:<span>45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
            <img 
              src={characterCelebrating} 
              alt="Celebrating character" 
              className="w-32 h-32 object-contain animate-float"
            />
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 opacity-0 animate-fade-in font-extrabold" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
                Epic <span className="text-primary">Features</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Everything you need to become the ultimate dare legend
              </p>
            </div>
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
          
          {/* Character decoration */}
          <div className="flex justify-end mt-8">
            <img 
              src={characterThinking} 
              alt="Thinking character" 
              className="w-28 h-28 object-contain animate-float"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-extrabold">
                How It <span className="text-secondary">Works</span>
              </h2>
            </div>
            <img 
              src={characterPointing} 
              alt="Pointing character" 
              className="w-28 h-28 object-contain animate-float"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
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
            
            <div className="flex justify-center">
              <img 
                src={charactersHighfive} 
                alt="Characters high-fiving" 
                className="w-full max-w-sm rounded-3xl shadow-medium animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="soft-card p-8 md:p-12 shadow-medium relative overflow-hidden">
            {/* Background character decorations */}
            <img 
              src={characterJumping} 
              alt="Jumping character" 
              className="absolute -left-4 -bottom-4 w-32 h-32 object-contain opacity-80 animate-bounce-gentle hidden md:block"
            />
            <img 
              src={characterCelebrating} 
              alt="Celebrating character" 
              className="absolute -right-4 -bottom-4 w-32 h-32 object-contain opacity-80 animate-bounce-gentle hidden md:block"
              style={{ animationDelay: "0.3s" }}
            />
            
            <div className="text-center relative z-10">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-10 pb-32 border-t border-border">
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

      {/* Floating Bottom Navigation */}
      <nav 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-full backdrop-blur-xl bg-background/80 border border-border/50 shadow-2xl transition-all duration-500 translate-y-0 opacity-100"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-soft">
              <Flame className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground hidden sm:inline">DareUp</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">Features</Button>
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">Community</Button>
            <Link to="/auth">
              <Button variant="default" size="sm" className="text-xs sm:text-sm">Sign In</Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;

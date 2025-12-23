"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Flame, 
  Trophy, 
  Zap, 
  Star, 
  Timer, 
  Coins,
  TrendingUp,
  LogOut,
  Crown,
  Medal,
  Target,
  Sparkles,
  Home,
  Play,
  Award,
  Calendar
} from "lucide-react";
import { toast } from "sonner";
import { gsap } from "gsap";

// Mock data - replace with real data from your database
const DARE_OF_THE_DAY = {
  id: 1,
  title: "The Karaoke Challenge",
  description: "Sing your favorite song in public and get 3 people to join you!",
  difficulty: "Epic",
  reward: 500,
  timeLeft: "12h 34m",
  participants: 1234,
  image: "🎤"
};

const DARES = [
  {
    id: 2,
    title: "Coffee Shop Compliment",
    description: "Compliment 5 strangers at a coffee shop",
    difficulty: "Easy",
    reward: 100,
    participants: 456,
    image: "☕"
  },
  {
    id: 3,
    title: "Dance Battle",
    description: "Challenge someone to a dance-off in a public place",
    difficulty: "Hard",
    reward: 300,
    participants: 789,
    image: "💃"
  },
  {
    id: 4,
    title: "Random Act of Kindness",
    description: "Pay for the person behind you in line",
    difficulty: "Medium",
    reward: 200,
    participants: 234,
    image: "❤️"
  },
  {
    id: 5,
    title: "Ice Bucket Sprint",
    description: "Run through campus with an ice bucket on your head",
    difficulty: "Epic",
    reward: 450,
    participants: 567,
    image: "🧊"
  },
  {
    id: 6,
    title: "Backwards Day",
    description: "Wear your clothes backwards for the entire day",
    difficulty: "Medium",
    reward: 150,
    participants: 890,
    image: "👕"
  },
  {
    id: 7,
    title: "Accent Challenge",
    description: "Speak in a different accent for 2 hours straight",
    difficulty: "Hard",
    reward: 250,
    participants: 345,
    image: "🗣️"
  }
];

const LEADERBOARD = [
  { rank: 1, name: "Priya Sharma", points: 12500, streak: 45, avatar: null },
  { rank: 2, name: "Arjun Patel", points: 11200, streak: 38, avatar: null },
  { rank: 3, name: "Ananya Reddy", points: 10800, streak: 42, avatar: null },
  { rank: 4, name: "Rohan Kapoor", points: 9500, streak: 30, avatar: null },
  { rank: 5, name: "Kavya Singh", points: 8900, streak: 25, avatar: null },
  { rank: 6, name: "Aditya Verma", points: 8200, streak: 28, avatar: null },
  { rank: 7, name: "Sneha Gupta", points: 7800, streak: 22, avatar: null },
  { rank: 8, name: "Vikram Joshi", points: 7300, streak: 20, avatar: null },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "bg-green-500/10 text-green-600 border-green-500/20";
    case "medium":
      return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
    case "hard":
      return "bg-orange-500/10 text-orange-600 border-orange-500/20";
    case "epic":
      return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-5 h-5 text-yellow-500" />;
    case 2:
      return <Medal className="w-5 h-5 text-gray-400" />;
    case 3:
      return <Medal className="w-5 h-5 text-orange-600" />;
    default:
      return <span className="text-muted-foreground font-bold">#{rank}</span>;
  }
};

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDare, setSelectedDare] = useState<any>(null);
  const router = useRouter();
  
  const headerRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const dareOfDayRef = useRef<HTMLDivElement>(null);
  const daresGridRef = useRef<HTMLDivElement>(null);
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const floatingCoinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/auth");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (!loading && user) {
      const tl = gsap.timeline();

      // Header animation
      if (headerRef.current) {
        tl.from(headerRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }

      // Welcome section with text reveal
      if (welcomeRef.current) {
        tl.from(welcomeRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.4");
      }

      // Stats cards with bounce and rotation
      if (statsRef.current) {
        tl.from(statsRef.current.children, {
          opacity: 0,
          scale: 0.5,
          y: 100,
          rotation: -10,
          duration: 0.8,
          stagger: 0.15,
          ease: "elastic.out(1, 0.6)"
        }, "-=0.3");

        // Add hover animations to stats cards
        Array.from(statsRef.current.children).forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }

      // Dare of the day with scale and shine effect
      if (dareOfDayRef.current) {
        tl.from(dareOfDayRef.current, {
          opacity: 0,
          scale: 0.8,
          rotateY: -180,
          duration: 1,
          ease: "back.out(1.2)"
        }, "-=0.5");
      }

      // Dares grid with wave effect
      if (daresGridRef.current) {
        tl.from(daresGridRef.current.children, {
          opacity: 0,
          y: 60,
          scale: 0.8,
          rotateX: 45,
          duration: 0.7,
          stagger: {
            amount: 0.8,
            from: "start"
          },
          ease: "power3.out"
        }, "-=0.7");

        // Add hover animations to dare cards
        Array.from(daresGridRef.current.children).forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -15,
              scale: 1.03,
              duration: 0.4,
              ease: "power2.out"
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        });
      }

      // Leaderboard with slide and fade
      if (leaderboardRef.current) {
        tl.from(leaderboardRef.current.children, {
          opacity: 0,
          x: 100,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out"
        }, "-=0.8");
      }

      // Floating coins animation
      if (floatingCoinsRef.current) {
        gsap.to(floatingCoinsRef.current, {
          y: -10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }
    }
  }, [loading, user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Signed out successfully");
      router.push("/");
    } catch (error: any) {
      toast.error("Failed to sign out");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Soft Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pastel-rose/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-pastel-blue/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pastel-yellow/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      {/* Header */}
      <header ref={headerRef} className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-xl shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <Flame className="w-6 h-6 text-primary-foreground animate-pulse" />
              </div>
              <span className="font-display text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DareUp
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <div ref={floatingCoinsRef} className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-2 border-yellow-500/30 backdrop-blur-sm shadow-lg">
                <Coins className="w-5 h-5 text-yellow-500 animate-spin-slow" />
                <span className="font-bold text-lg bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">2,450</span>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-muted/50 border border-border backdrop-blur-sm">
                <Avatar className="w-10 h-10 ring-2 ring-primary/50">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold text-lg">
                    {user?.displayName?.[0] || user?.email?.[0].toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline font-semibold text-foreground">
                  {user?.displayName || "User"}
                </span>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleSignOut}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-all"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Welcome Section */}
        <div ref={welcomeRef} className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="font-display text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Welcome back!
            </h1>
          </div>
          <p className="text-muted-foreground text-xl ml-11">
            Ready to crush some dares, <span className="text-primary font-bold">{user?.displayName || "Legend"}</span>?
          </p>
        </div>

        {/* Stats Cards */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="soft-card p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-orange-400/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Flame className="w-7 h-7 text-white" />
                </div>
                <Calendar className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-3xl font-extrabold text-foreground mb-1">15</p>
              <p className="text-sm text-muted-foreground font-medium">Day Streak 🔥</p>
            </div>
          </Card>

          <Card className="soft-card p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-yellow-400/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <Award className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-3xl font-extrabold text-foreground mb-1">42</p>
              <p className="text-sm text-muted-foreground font-medium">Completed ✓</p>
            </div>
          </Card>

          <Card className="soft-card p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-green-400/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <Target className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-3xl font-extrabold text-foreground mb-1">#12</p>
              <p className="text-sm text-muted-foreground font-medium">Your Rank 📊</p>
            </div>
          </Card>

          <Card className="soft-card p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-400/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
                  <Coins className="w-7 h-7 text-white" />
                </div>
                <Sparkles className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-3xl font-extrabold text-foreground mb-1">2,450</p>
              <p className="text-sm text-muted-foreground font-medium">Total Coins 💰</p>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dares Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dare of the Day */}
            <div ref={dareOfDayRef}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Dare of the Day</h2>
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-3 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
              
              <Card className="soft-card overflow-hidden shadow-2xl hover:shadow-3xl transition-all border-2 border-purple-500/30 relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
                <div className="relative p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="text-8xl transform group-hover:scale-110 transition-transform">{DARE_OF_THE_DAY.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={`${getDifficultyColor(DARE_OF_THE_DAY.difficulty)} border font-bold text-sm px-3 py-1`}>
                          ⚡ {DARE_OF_THE_DAY.difficulty}
                        </Badge>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30">
                          <Coins className="w-5 h-5 text-yellow-600" />
                          <span className="font-extrabold text-yellow-700">{DARE_OF_THE_DAY.reward}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-display text-3xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {DARE_OF_THE_DAY.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg mb-5">
                        {DARE_OF_THE_DAY.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-5 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Timer className="w-5 h-5 text-orange-500" />
                          <span className="font-semibold">{DARE_OF_THE_DAY.timeLeft} left</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Target className="w-5 h-5 text-blue-500" />
                          <span className="font-semibold">{DARE_OF_THE_DAY.participants.toLocaleString()} participants</span>
                        </div>
                      </div>

                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="w-full md:w-auto shadow-2xl hover:shadow-3xl group/btn px-8 py-6 text-lg transform hover:scale-105 transition-all"
                      >
                        <Play className="w-5 h-5 group-hover/btn:animate-bounce" />
                        Accept Dare Now
                        <Zap className="w-5 h-5 ml-2 group-hover/btn:rotate-12 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* All Dares */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Available Dares</h2>
                </div>
                <Button variant="outline" size="sm" className="rounded-full font-semibold">
                  View All
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div ref={daresGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {DARES.map((dare) => (
                  <Card 
                    key={dare.id} 
                    className="soft-card p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-2 border-transparent hover:border-primary/30 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-all">{dare.image}</div>
                        <Badge className={`${getDifficultyColor(dare.difficulty)} border text-xs font-bold`}>
                          {dare.difficulty}
                        </Badge>
                      </div>
                      
                      <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                        {dare.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {dare.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                          <Coins className="w-4 h-4 text-yellow-600" />
                          <span className="font-bold text-sm text-yellow-700">{dare.reward}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">
                          {dare.participants} joined
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">Leaderboard</h2>
            </div>

            <Card className="soft-card shadow-2xl border-2 border-yellow-500/20 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 border-b border-border">
                <p className="text-sm font-semibold text-muted-foreground text-center">🏆 Top Dare Champions 🏆</p>
              </div>
              <div ref={leaderboardRef} className="p-5 space-y-3">
                {LEADERBOARD.map((player) => (
                  <div
                    key={player.rank}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all hover:bg-muted/50 cursor-pointer group ${
                      player.rank <= 3 ? 'bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent border-2 border-yellow-500/20' : 'hover:border-2 hover:border-primary/20'
                    }`}
                  >
                    <div className="w-10 flex items-center justify-center transform group-hover:scale-125 transition-transform">
                      {getRankIcon(player.rank)}
                    </div>

                    <Avatar className={`w-12 h-12 ${player.rank <= 3 ? 'ring-4 ring-yellow-500/50' : 'ring-2 ring-border'}`}>
                      <AvatarFallback className={`font-bold text-foreground text-lg ${
                        player.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' :
                        player.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white' :
                        player.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                        'bg-gradient-to-br from-primary/20 to-secondary/20'
                      }`}>
                        {player.name[0]}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-foreground text-base truncate group-hover:text-primary transition-colors">
                        {player.name}
                      </p>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/10">
                          <Flame className="w-3 h-3 text-orange-500" />
                          <span className="font-bold text-orange-600">{player.streak}</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="font-bold text-muted-foreground">{player.points.toLocaleString()} pts</span>
                      </div>
                    </div>

                    {player.rank <= 3 && (
                      <Star className="w-6 h-6 text-yellow-500 fill-yellow-500 animate-pulse" />
                    )}
                  </div>
                ))}

                <div className="pt-4 mt-4 border-t border-border">
                  <Button variant="outline" className="w-full rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                    View Full Leaderboard
                    <Trophy className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

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
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-soft">
              <Flame className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground hidden sm:inline">DareUp</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Home className="w-3 h-3 sm:mr-1" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              <Trophy className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline">Leaderboard</span>
            </Button>
            <Button variant="default" size="sm" className="text-xs sm:text-sm bg-gradient-to-r from-primary to-secondary">
              <Zap className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

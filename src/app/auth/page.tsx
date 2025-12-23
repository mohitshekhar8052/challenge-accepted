"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Flame, Mail, Lock, User, ArrowRight, Sparkles, Trophy, Zap } from "lucide-react";
import { z } from "zod";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });
const passwordSchema = z.string().min(6, { message: "Password must be at least 6 characters" });

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const validateInputs = () => {
    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      toast.error(emailResult.error.errors[0].message);
      return false;
    }

    const passwordResult = passwordSchema.safeParse(password);
    if (!passwordResult.success) {
      toast.error(passwordResult.error.errors[0].message);
      return false;
    }

    if (!isLogin && name.trim().length === 0) {
      toast.error("Please enter your name");
      return false;
    }

    return true;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateInputs()) return;
    
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email.trim(), password);
        toast.success("Welcome back, Dare Legend! 🔥");
        router.push("/dashboard");
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
        
        // Update user profile with name
        if (userCredential.user) {
          await updateProfile(userCredential.user, {
            displayName: name.trim()
          });
        }
        
        toast.success("Account created! Welcome to DareUp! 🎉");
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      
      // Handle Firebase auth errors
      if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password") {
        toast.error("Invalid email or password. Please try again.");
      } else if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered. Try logging in instead.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password is too weak. Please use a stronger password.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email.");
      } else {
        toast.error(error.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-hidden relative">
      {/* Soft Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pastel-rose/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-pastel-blue/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pastel-yellow/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative z-10 items-center justify-center p-12 bg-gradient-to-br from-background/50 to-transparent">
        <div className="text-center max-w-lg">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-medium">
              <Flame className="w-8 h-8 text-primary-foreground" />
            </div>
            <span className="font-display text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DareUp
            </span>
          </div>
          
          <Image 
            src={isLogin ? "/assets/character-waving.png" : "/assets/character-celebrating.png"}
            alt="Welcome character" 
            width={280}
            height={280}
            className="object-contain mx-auto mb-10 animate-float drop-shadow-2xl"
          />
          
          <h2 className="font-display text-4xl text-foreground mb-5 font-extrabold leading-tight">
            {isLogin ? "Welcome Back, Legend!" : "Join the Adventure!"}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto mb-10">
            {isLogin 
              ? "Ready to accept more dares and prove you're unstoppable?" 
              : "Create your account and start your journey to becoming the ultimate dare champion!"}
          </p>
          
          {/* Floating badges */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="soft-card px-6 py-3 flex items-center gap-3 shadow-medium hover:shadow-lg transition-shadow duration-300">
              <div className="text-left">
                <p className="font-bold text-foreground text-lg">50K+</p>
                <p className="text-xs text-muted-foreground">Dare Takers</p>
              </div>
            </div>
            <div className="soft-card px-6 py-3 flex items-center gap-3 shadow-medium hover:shadow-lg transition-shadow duration-300">
              <span className="text-2xl">⚡</span>
              <div className="text-left">
                <p className="font-bold text-foreground text-lg">1M+</p>
                <p className="text-xs text-muted-foreground">Dares Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative z-10">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft">
              <Flame className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DareUp
            </span>
          </div>

          <div className="soft-card p-8 lg:p-10 shadow-medium backdrop-blur-sm bg-card/80">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-5 shadow-sm">
                {isLogin ? (
                  <>
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground font-semibold">
                      Sign In
                    </span>
                  </>
                ) : (
                  <>
                    <Trophy className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-foreground font-semibold">
                      Create Account
                    </span>
                  </>
                )}
              </div>
              <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-foreground mb-2">
                {isLogin ? "Welcome Back!" : "Start Your Journey"}
              </h1>
              <p className="text-muted-foreground">
                {isLogin 
                  ? "Sign in to continue your dare streak" 
                  : "Join thousands of dare champions"}
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="name" className="text-foreground font-semibold">Your Name</Label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-12 h-14 bg-background border-2 border-border focus:border-primary rounded-2xl text-base font-medium transition-all"
                      maxLength={100}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">Email Address</Label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 bg-background border-2 border-border focus:border-primary rounded-2xl text-base font-medium transition-all"
                    maxLength={255}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-semibold">Password</Label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 h-14 bg-background border-2 border-border focus:border-primary rounded-2xl text-base font-medium transition-all"
                    maxLength={72}
                  />
                </div>
                {!isLogin && (
                  <p className="text-xs text-muted-foreground mt-1 ml-1">
                    Must be at least 6 characters
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full mt-6 text-base font-bold shadow-lg hover:shadow-xl" 
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    {isLogin ? "Signing in..." : "Creating account..."}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {isLogin ? (
                      <>
                        <Zap className="w-5 h-5" />
                        Sign In
                      </>
                    ) : (
                      <>
                        <Trophy className="w-5 h-5" />
                        Create Account
                      </>
                    )}
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>

            {/* Toggle between login/signup */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-center text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </p>
              <Button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setEmail("");
                  setPassword("");
                  setName("");
                }}
                variant="outline"
                size="lg"
                className="w-full mt-3 font-semibold"
              >
                {isLogin ? (
                  <>
                    <Trophy className="w-5 h-5" />
                    Create New Account
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Sign In Instead
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Back to home */}
          <div className="text-center mt-6">
            <Link 
              href="/" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

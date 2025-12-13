import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Flame, Mail, Lock, User, ArrowRight, Sparkles } from "lucide-react";
import { z } from "zod";
import characterWaving from "@/assets/character-waving.png";
import characterCelebrating from "@/assets/character-celebrating.png";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });
const passwordSchema = z.string().min(6, { message: "Password must be at least 6 characters" });

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          navigate("/");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

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
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            toast.error("Invalid email or password. Please try again.");
          } else {
            toast.error(error.message);
          }
          return;
        }

        toast.success("Welcome back, Dare Legend! 🔥");
      } else {
        const redirectUrl = `${window.location.origin}/`;
        
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: redirectUrl,
            data: {
              name: name.trim(),
            },
          },
        });

        if (error) {
          if (error.message.includes("User already registered")) {
            toast.error("This email is already registered. Try logging in instead.");
          } else {
            toast.error(error.message);
          }
          return;
        }

        toast.success("Account created! Welcome to DareUp! 🎉");
      }
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-hidden">
      {/* Soft Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pastel-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-pastel-blue/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pastel-yellow/20 rounded-full blur-3xl" />
      </div>

      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative z-10 items-center justify-center p-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-soft">
              <Flame className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-display text-4xl font-bold text-foreground">DareUp</span>
          </div>
          
          <img 
            src={isLogin ? characterWaving : characterCelebrating} 
            alt="Welcome character" 
            className="w-64 h-64 object-contain mx-auto mb-8 animate-float drop-shadow-lg"
          />
          
          <h2 className="font-display text-3xl text-foreground mb-4 font-extrabold">
            {isLogin ? "Welcome Back!" : "Join the Adventure!"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-sm mx-auto">
            {isLogin 
              ? "Ready to accept more dares and become a legend?" 
              : "Create your account and start your journey to becoming a dare champion!"}
          </p>
          
          {/* Floating badges */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="soft-card px-4 py-2 flex items-center gap-2 shadow-medium animate-bounce-gentle">
              <span className="text-lg">🔥</span>
              <span className="font-semibold text-foreground text-sm">50K+ Players</span>
            </div>
            <div className="soft-card px-4 py-2 flex items-center gap-2 shadow-medium animate-bounce-gentle" style={{ animationDelay: "0.2s" }}>
              <span className="text-lg">⚡</span>
              <span className="font-semibold text-foreground text-sm">1M+ Dares</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative z-10">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-soft">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">DareUp</span>
          </div>

          <div className="soft-card p-8 shadow-medium">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-4">
                <Sparkles className="w-4 h-4 text-pastel-coral" />
                <span className="text-sm text-muted-foreground font-medium">
                  {isLogin ? "Sign In" : "Create Account"}
                </span>
              </div>
              <h1 className="font-display text-2xl font-extrabold text-foreground">
                {isLogin ? "Welcome Back, Legend!" : "Start Your Journey"}
              </h1>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Your Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 h-12 bg-background border-border"
                      maxLength={100}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-background border-border"
                    maxLength={255}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-12 bg-background border-border"
                    maxLength={72}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full" 
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    {isLogin ? "Signing in..." : "Creating account..."}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-primary font-semibold hover:underline"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>

          {/* Back to home */}
          <div className="text-center mt-6">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  glowColor?: "primary" | "secondary" | "accent";
  delay?: number;
}

export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  glowColor = "primary",
  delay = 0 
}: FeatureCardProps) => {
  const glowClasses = {
    primary: "hover:shadow-[0_0_40px_hsl(185_100%_50%/0.3)] border-primary/20 hover:border-primary/50",
    secondary: "hover:shadow-[0_0_40px_hsl(320_100%_60%/0.3)] border-secondary/20 hover:border-secondary/50",
    accent: "hover:shadow-[0_0_40px_hsl(95_100%_50%/0.3)] border-accent/20 hover:border-accent/50",
  };

  const iconGlowClasses = {
    primary: "text-primary neon-text-primary",
    secondary: "text-secondary neon-text-secondary",
    accent: "text-accent neon-text-accent",
  };

  return (
    <div 
      className={cn(
        "glass-card p-6 md:p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2",
        "opacity-0 animate-fade-in",
        glowClasses[glowColor]
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className={cn("text-4xl md:text-5xl mb-4", iconGlowClasses[glowColor])}>
        {icon}
      </div>
      <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
};

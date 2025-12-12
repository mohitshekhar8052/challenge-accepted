import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  colorClass?: string;
  delay?: number;
}

export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  colorClass = "text-primary",
  delay = 0 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "soft-card p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className={cn("text-4xl md:text-5xl mb-4", colorClass)}>
        {icon}
      </div>
      <h3 className="font-display text-xl md:text-2xl text-foreground font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
};

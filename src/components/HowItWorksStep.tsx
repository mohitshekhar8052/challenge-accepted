import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HowItWorksStepProps {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
  isLast?: boolean;
  delay?: number;
}

export const HowItWorksStep = ({ 
  step, 
  title, 
  description, 
  icon,
  isLast = false,
  delay = 0
}: HowItWorksStepProps) => {
  return (
    <div 
      className="flex gap-4 md:gap-6 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-display text-xl shadow-lg">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full min-h-[60px] bg-gradient-to-b from-secondary to-transparent mt-2" />
        )}
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{icon}</span>
          <h3 className="font-display text-xl md:text-2xl text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

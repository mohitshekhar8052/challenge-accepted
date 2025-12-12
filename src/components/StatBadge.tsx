import { cn } from "@/lib/utils";

interface StatBadgeProps {
  value: string;
  label: string;
  icon: string;
  color?: "primary" | "secondary" | "accent";
}

export const StatBadge = ({ value, label, icon, color = "primary" }: StatBadgeProps) => {
  const colorClasses = {
    primary: "from-primary/20 to-primary/5 border-primary/30 text-primary",
    secondary: "from-secondary/20 to-secondary/5 border-secondary/30 text-secondary",
    accent: "from-accent/20 to-accent/5 border-accent/30 text-accent",
  };

  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-2xl border",
      "bg-gradient-to-r backdrop-blur-sm",
      colorClasses[color]
    )}>
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="font-display text-lg text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
};

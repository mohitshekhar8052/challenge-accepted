import { cn } from "@/lib/utils";

interface StatBadgeProps {
  value: string;
  label: string;
  icon: string;
  bgClass?: string;
}

export const StatBadge = ({ value, label, icon, bgClass = "bg-muted" }: StatBadgeProps) => {
  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-2xl",
      bgClass
    )}>
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="font-display text-lg font-bold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
};

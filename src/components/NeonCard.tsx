import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'pink' | 'purple' | 'blue';
}

export const NeonCard = ({ children, className, glowColor = 'cyan' }: NeonCardProps) => {
  const glowClasses = {
    cyan: 'shadow-[0_0_30px_rgba(0,240,255,0.3)] border-primary',
    pink: 'shadow-[0_0_30px_rgba(255,16,240,0.3)] border-secondary',
    purple: 'shadow-[0_0_30px_rgba(176,38,255,0.3)] border-neon-purple',
    blue: 'shadow-[0_0_30px_rgba(0,128,255,0.3)] border-accent',
  };

  return (
    <Card 
      className={cn(
        "backdrop-blur-md bg-card/50 border-2 transition-all duration-300 hover:scale-105",
        glowClasses[glowColor],
        className
      )}
    >
      {children}
    </Card>
  );
};

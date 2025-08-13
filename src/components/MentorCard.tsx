import { Card } from "@/components/ui/card";

interface MentorCardProps {
  name: string;
  description: string;
  image: string;
  color: 'yellow' | 'blue' | 'pink' | 'green' | 'purple';
  className?: string;
}

const colorClasses = {
  yellow: 'bg-yellow-card text-foreground',
  blue: 'bg-blue-card text-white',
  pink: 'bg-pink-card text-white',
  green: 'bg-green-card text-white',
  purple: 'bg-purple-card text-white',
};

export function MentorCard({ name, description, image, color, className = "" }: MentorCardProps) {
  return (
    <Card className={`${colorClasses[color]} p-4 rounded-2xl border-none shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}>
      <div className="flex flex-col items-center text-center space-y-3">
        <img 
          src={image} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
        />
        <div>
          <h3 className="font-semibold text-sm">{name} helps</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </Card>
  );
}
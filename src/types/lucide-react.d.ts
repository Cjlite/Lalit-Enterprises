declare module "lucide-react" {
  import * as React from "react";

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const PlayCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const MapPin: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Images: LucideIcon;
  export const Maximize2: LucideIcon;
  export const X: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Layers: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const Check: LucideIcon;
  export const Phone: LucideIcon;
  export const Mail: LucideIcon;
  export const Clock: LucideIcon;
  export const Award: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Zap: LucideIcon;
  export const Sun: LucideIcon;
  export const FileText: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Menu: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Star: LucideIcon;
  export const Users: LucideIcon;
  export const Building: LucideIcon;
  export const Building2: LucideIcon;
  export const Home: LucideIcon;
  export const Factory: LucideIcon;
  export const Send: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Info: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Gauge: LucideIcon;
  export const Tractor: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const PhoneCall: LucideIcon;
  export const Map: LucideIcon;
  export const Calendar: LucideIcon;
  export const Wrench: LucideIcon;
  export const Activity: LucideIcon;
  export const Search: LucideIcon;
  export const FileCheck: LucideIcon;
  export const Shield: LucideIcon;
  export const UserCheck: LucideIcon;
  export const ThumbsUp: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const ChevronUp: LucideIcon;

  const icons: { [key: string]: LucideIcon };
  export default icons;
}

interface LogoProps { size?: number; className?: string; color?: string }
export default function Logo({ size = 28, className }: LogoProps) {
  return <img src="/better-sidebar/plugin-icon.png" width={size} height={size}
    alt="Better Sidebar" className={className} style={{ display: 'block', flexShrink: 0 }} />;
}

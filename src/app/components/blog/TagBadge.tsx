interface TagBadgeProps {
  tag: string;
  onClick?: () => void;
  active?: boolean;
}

export function TagBadge({ tag, onClick, active }: TagBadgeProps) {
  const base =
    "inline-block px-3 py-1 rounded-full text-[12px] tracking-wide transition-colors cursor-pointer select-none";
  const activeStyle = "bg-primary text-primary-foreground";
  const inactiveStyle =
    "bg-secondary text-secondary-foreground hover:bg-muted";

  return (
    <span
      className={`${base} ${active ? activeStyle : inactiveStyle}`}
      style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
      onClick={onClick}
    >
      {tag}
    </span>
  );
}

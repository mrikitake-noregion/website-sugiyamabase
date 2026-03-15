import { TagBadge } from "./TagBadge";

interface TagFilterProps {
  tags: string[];
  selected: string[];
  onChange: (tags: string[]) => void;
}

export function TagFilter({ tags, selected, onChange }: TagFilterProps) {
  const toggle = (tag: string) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag));
    } else {
      onChange([...selected, tag]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <TagBadge
          key={tag}
          tag={tag}
          active={selected.includes(tag)}
          onClick={() => toggle(tag)}
        />
      ))}
    </div>
  );
}

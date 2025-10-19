import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="搜索导航..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 pr-16 h-11 text-base rounded-2xl border shadow-card focus:shadow-card-hover transition-shadow bg-card/50 backdrop-blur-xl"
      />
      <kbd className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
    </div>
  );
};

export default SearchBar;

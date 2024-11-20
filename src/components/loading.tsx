import { Loader2Icon } from "lucide-react";

interface LoadingProps {
  color?: string;
  size?: number;
}
function Loading({ color = "#08B744", size = 24 }: LoadingProps) {
  return (
    <div className="animate-pulse">
      <div className="animate-spin">
        <Loader2Icon color={color} size={size} />
      </div>
    </div>
  );
}

export default Loading;

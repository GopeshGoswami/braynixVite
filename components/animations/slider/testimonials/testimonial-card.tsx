import { cn } from "../../../../lib/utils";
import { Avatar, AvatarImage } from "./Avatar";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const Card = href ? "a" : "div";

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t border-[#ffffff5a]",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="font-helvatica text-md font-semibold leading-none text-white">
            {author.name}
          </h3>
          <p className="font-helvatica text-sm text-muted-foreground text-white">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="font-helvatica sm:text-md mt-4 text-sm text-muted-foreground text-white">
        {text}
      </p>
    </Card>
  );
}

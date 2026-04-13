import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const MemberItem = ({
  image,
  name,
  desc,
  variant = "default",
}: {
  image: string;
  name: string;
  desc?: string;
  variant?: "default" | "secondary";
}) => {
  return (
    <div
      className={cn("max-mobile:gap-4 flex items-center gap-8 pr-8", {
        "max-mobile:flex-col": variant === "secondary",
      })}
    >
      <Image
        src={image}
        width={112}
        height={112}
        alt={name}
        className="shrink-0 rounded-[4px] object-cover"
      />

      <div
        className={cn("flex flex-col gap-1", {
          "max-mobile:items-center max-mobile:justify-center":
            variant === "secondary",
        })}
      >
        <Typography
          className={cn({
            "max-mobile:text-center": variant === "secondary",
          })}
          variant="header-s"
          tag="p"
        >
          {name}
        </Typography>

        {desc && (
          <Typography
            className={cn({
              "max-mobile:text-center": variant === "secondary",
            })}
            variant="subtitle-serif-s"
            tag="p"
          >
            {desc}
          </Typography>
        )}
      </div>
    </div>
  );
};

export { MemberItem };

import { cn } from "../lib/utils";

export type TypographyVariant =
  | "body-small-strong"
  | "body-strong"
  | "body-m"
  | "body-m-strong"
  | "menu-font"
  | "serif-l"
  | "serif-m"
  | "serif-s"
  | "capton-strong"
  | "capton"
  | "header-xxl"
  | "header-xl"
  | "header-l"
  | "header-caps"
  | "header-m";

export type TypographyTag = "h1" | "h2" | "h3" | "h4" | "span" | "div" | "p";
export type TypographyProps<Tag extends TypographyTag> = ReactTagProps<
  Exclude<Tag, "span">
> & {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: React.ReactNode;
};

export const Typography = <T extends TypographyTag>({
  children,
  variant,
  tag: Tag = "div",
  className = "",
  ...props
}: TypographyProps<T>) => (
  <Tag className={cn(variant, [className])} {...props}>
    {children}
  </Tag>
);

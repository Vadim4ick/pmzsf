import { cn } from "../lib/utils";

export type TypographyVariant =
  | "header-serif-xl"
  | "header-xxl"
  | "header-l"
  | "header-m"
  | "header-m-caps"
  | "header-s"
  | "subtitle-l"
  | "subtitle-serif-s"
  | "subtitle-serif-l"
  | "body-l"
  | "body-m"
  | "body-m-strong"
  | "body-s"
  | "body-s-strong"
  | "body-serif"
  | "button-link"
  | "button-l"
  | "button-m"
  | "button-s";

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

import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ARTICLE_CONTENT } from "../model/article-content.const";

const NewsContent = () => {
  return (
    <div className="flex flex-col gap-6">
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <Typography tag="h2" variant="header-l">
              {children}
            </Typography>
          ),
          h3: ({ children }) => (
            <Typography tag="h2" variant="header-m">
              {children}
            </Typography>
          ),
          span: ({ children }) => (
            <Typography tag="span" variant="body-serif">
              {children}
            </Typography>
          ),
          p: ({ children }) => (
            <Typography tag="p" variant="body-serif">
              {children}
            </Typography>
          ),
          ol: ({ children }) => (
            <ol className="flex list-outside list-decimal flex-col gap-5 pl-5">
              {children}
            </ol>
          ),
          img: ({ src, alt }) => (
            <div className="max-mobile:h-52 relative my-4 h-100 w-full">
              <Image
                src={String(src) ?? ""}
                alt={alt ?? ""}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          ),
          ul: ({ children }) => (
            <ul className="flex list-outside list-disc flex-col gap-5 pl-5">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li>
              <Typography variant="body-serif">{children}</Typography>
            </li>
          ),
        }}
      >
        {ARTICLE_CONTENT}
      </ReactMarkdown>
    </div>
  );
};

export { NewsContent };

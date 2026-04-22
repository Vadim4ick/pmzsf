"use client";

import { GetDocumentsPageQuery } from "@/shared/graphql/__generated__";
import { Pdf } from "@/shared/icons/pdf";
import { dateFormatter, pathImage } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const DocumentsPage = ({
  documents,
}: {
  documents: GetDocumentsPageQuery["documents"];
}) => {
  const handleDownload = async (url: string, filename: string) => {
    const res = await fetch(url);
    const blob = await res.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section>
      <Container className="flex flex-col gap-10">
        <Typography variant="header-xxl" tag="h1">
          Документы
        </Typography>

        <div className="flex flex-col gap-2.5">
          {!documents?.items || documents.items.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <Pdf className="text-text-disabled size-12" />
              <Typography variant="subtitle-serif-l" tag="p">
                Документы не найдены
              </Typography>
              <Typography
                className="text-text-subtle"
                variant="body-m"
                tag="span"
              >
                В данный момент документы отсутствуют
              </Typography>
            </div>
          ) : (
            documents.items.map((document, idx) => (
              <div
                key={idx}
                onClick={() =>
                  handleDownload(
                    pathImage(document.document_id.file.id),
                    document.document_id.title,
                  )
                }
                className="bg-background-primary group flex cursor-pointer items-center gap-2.5 rounded-[12px] p-4 transition-all hover:shadow-xl"
              >
                <Pdf className="group-hover:text-text-accent-hover transition-all" />
                <div className="flex flex-col gap-1">
                  <Typography variant="header-s" tag="p">
                    {document.document_id.title}
                  </Typography>
                  <Typography
                    className="text-text-secondary"
                    variant="body-s-strong"
                    tag="span"
                  >
                    {dateFormatter(document.document_id.date_created)}
                  </Typography>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export { DocumentsPage };

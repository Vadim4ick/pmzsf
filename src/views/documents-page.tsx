import { Pdf } from "@/shared/icons/pdf";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const documents = [
  {
    name: "Постановление о создании",
    date: "10.09.2026",
  },
  {
    name: "Регламент",
    date: "10.09.2026",
  },
  {
    name: "Итоги работы Палаты молодых законодателей за 2024 год",
    date: "10.09.2026",
  },
  {
    name: "Итоги работы Палаты молодых законодателей за 2025 год",
    date: "10.09.2026",
  },
];

const DocumentsPage = () => {
  return (
    <section>
      <Container className="flex flex-col gap-10">
        <Typography variant="header-xxl" tag="h1">
          Документы
        </Typography>

        <div className="flex flex-col gap-2.5">
          {documents.map((document, idx) => (
            <a
              key={idx}
              href="#"
              download
              className="bg-background-primary group flex items-center gap-2.5 rounded-[8px] p-4 transition-all hover:shadow-xl"
            >
              <Pdf className="group-hover:text-text-accent-hover transition-all" />

              <div className="flex flex-col gap-1">
                <Typography variant="header-s" tag="p">
                  {document.name}
                </Typography>
                <Typography
                  className="text-text-secondary"
                  variant="body-s-strong"
                  tag="span"
                >
                  {document.date}
                </Typography>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { DocumentsPage };

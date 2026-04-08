import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";

const NewsSubscription = () => {
  return (
    <section>
      <Container>
        <div className="bg-background-primary flex flex-col items-start gap-6 rounded-[12px] p-6 md:flex-row md:items-center md:justify-between md:gap-4 md:p-8">
          <div className="flex w-full flex-col gap-2">
            <Typography tag="p" variant="header-m-caps">
              Подписка
            </Typography>
            <Typography
              className="text-text-secondary"
              tag="span"
              variant="body-m"
            >
              Оставьте ваш email, чтобы получать новости
            </Typography>
          </div>

          <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <Input
              placeholder="Электронная почта"
              className="border-border-secondary h-[56px] w-full p-4 sm:max-w-[550px]"
            />
            <Button variant="secondary" className="h-[56px] shrink-0">
              Подписаться
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { NewsSubscription };

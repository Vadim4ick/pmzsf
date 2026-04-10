import { User } from "@/shared/icons/user";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";

const SignInBtn = ({
  className,
  classNameIcon,
  onClick,
}: {
  className?: string;
  classNameIcon?: string;
  onClick?: () => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={onClick}
          className={cn("gap-1.5", className)}
          icon={<User className={cn(classNameIcon)} />}
        >
          Вход
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="p" variant="header-m">
              Вход
            </Typography>
          </DialogTitle>
        </DialogHeader>

        <DialogDescription asChild>
          <form className="flex flex-col gap-6">
            <label className="flex flex-col gap-1.5">
              <Typography tag="span" variant="body-l">
                Логин
              </Typography>

              <Input className="bg-background-primary border-border-secondary h-[44px] border-2" />
            </label>
            <label className="flex flex-col gap-1.5">
              <Typography tag="span" variant="body-l">
                Пароль
              </Typography>

              <Input className="bg-background-primary border-border-secondary h-[44px] border-2" />
            </label>

            <Button className="h-[48px]" variant={"secondary"}>
              Войти
            </Button>

            <button type="button" className="w-fit cursor-pointer">
              <Typography tag="span" variant="body-s">
                Забыли пароль?
              </Typography>
            </button>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export { SignInBtn };

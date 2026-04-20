import { useFormContext } from "react-hook-form";
import { SettingsFormValues } from "../../model/settings-form.type";
import { Input } from "@/shared/ui/input";
import { memo } from "react";
import { Typography } from "@/shared/ui/typography";

export const StepContacts = memo(() => {
  const { register } = useFormContext<SettingsFormValues>();

  return (
    <div className="flex flex-col gap-10">
      <label className="flex flex-col gap-2">
        <Typography variant="body-l">
          <span className="text-text-error">*</span> Телефон
        </Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите телефон"
          {...register("phone")}
        />
      </label>

      <label className="flex flex-col gap-2">
        <Typography variant="body-l">
          <span className="text-text-error">*</span> Электронная почта
        </Typography>

        <Input
          type="email"
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите почту"
          {...register("email")}
        />
      </label>

      <label className="flex flex-col gap-2">
        <Typography variant="body-l">Telegram аккаунт</Typography>

        <Input
          type="email"
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите Telegram аккаунт"
          {...register("telegram")}
        />
      </label>

      <label className="flex flex-col gap-2">
        <Typography variant="body-l">Vk аккаунт</Typography>

        <Input
          type="email"
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите Vk аккаунт"
          {...register("vk")}
        />
      </label>

      <label className="flex flex-col gap-2">
        <Typography variant="body-l">Сайт правительства региона</Typography>

        <Input
          type="email"
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите сайт правительства региона"
          {...register("governmentWebsite")}
        />
      </label>

      <label className="flex flex-col gap-2">
        <Typography variant="body-l">Сайт администрации региона</Typography>

        <Input
          type="email"
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите сайт администрации региона"
          {...register("administrationWebsite")}
        />
      </label>
    </div>
  );
});

StepContacts.displayName = "StepContacts";

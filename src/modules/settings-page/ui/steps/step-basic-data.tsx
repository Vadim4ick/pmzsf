import { Input } from "@/shared/ui/input";
import { Controller, useFormContext } from "react-hook-form";
import { SettingsFormValues } from "../../model/settings-form.type";
import { Typography } from "@/shared/ui/typography";
import { Lock } from "@/shared/icons/lock";
import { AvatarUploader } from "@/components/avatar-uploader";
import { DatePickerInp } from "@/shared/ui/date-range-picker-inp";
import { useState, memo } from "react";

export const StepBasicData = memo(() => {
  const { register, control, setValue } = useFormContext<SettingsFormValues>();

  // Локальное превью для отображения выбранного файла
  const [avatarPreview, setAvatarPreview] = useState("/img/noavatar.png");

  const handleAvatarUpload = (file: File) => {
    // Сохраняем файл в стейт формы
    setValue("avatar", file);

    // Генерируем превью для отображения
    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex w-full items-end gap-6">
        <AvatarUploader url={avatarPreview} onUpload={handleAvatarUpload} />

        <label className="flex w-full flex-col gap-2">
          <Typography variant="body-l" tag="span">
            Дата рождения
          </Typography>

          <Controller
            control={control}
            name="birthDate"
            render={({ field }) => (
              <DatePickerInp
                onChange={field.onChange}
                value={field.value}
                className="bg-background-tertiary h-[56px]"
              />
            )}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <Typography variant="body-l" tag="span">
          Фамилия
        </Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите имя"
          rightIcon={<Lock />}
          {...register("lastName")}
        />
      </label>

      <label className="flex flex-col gap-2">
        <Typography variant="body-l" tag="span">
          Имя
        </Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите имя"
          rightIcon={<Lock />}
          {...register("firstName")}
        />
      </label>

      <label className="flex flex-col gap-2">
        <Typography variant="body-l" tag="span">
          Отчество
        </Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите отчество"
          rightIcon={<Lock />}
          {...register("surname")}
        />
      </label>

      <label className="flex flex-col gap-2">
        <Typography variant="body-l" tag="span">
          Место работы
        </Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите место работы"
          {...register("workplace")}
        />
      </label>
    </div>
  );
});

StepBasicData.displayName = "StepBasicData";

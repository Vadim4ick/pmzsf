import { useFormContext } from "react-hook-form";
import { SettingsFormValues } from "../../model/settings-form.type";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import { Lock } from "@/shared/icons/lock";
import { memo } from "react";

export const StepPmzActivity = memo(() => {
  const { register } = useFormContext<SettingsFormValues>();

  return (
    <div className="flex flex-col gap-10">
      <label className="flex flex-col gap-2">
        <Typography variant="body-l" tag="span">
          Орган гос.власти направивший в ПМЗ
        </Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите орган гос.власти"
          rightIcon={<Lock />}
          {...register("governmentAgency")}
        />
      </label>
      <label className="flex flex-col gap-2">
        <Typography variant="body-l" tag="span">
          Субъект РФ
        </Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите субъект"
          rightIcon={<Lock />}
          {...register("subject")}
        />
      </label>
      <label className="flex flex-col gap-2">
        <Typography variant="body-l" tag="span">
          Комитет
        </Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите комитет"
          rightIcon={<Lock />}
          {...register("committee")}
        />
      </label>
      <label className="flex flex-col gap-2">
        <Typography variant="body-l" tag="span">
          Должность в ПМЗ
        </Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите должность"
          rightIcon={<Lock />}
          {...register("positionPmz")}
        />
      </label>
    </div>
  );
});

StepPmzActivity.displayName = "StepPmzActivity";

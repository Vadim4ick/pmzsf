import { memo } from "react";
import { SettingsFormValues } from "../../model/settings-form.type";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import { Basket } from "@/shared/icons/basket";
import { DatePickerInp } from "@/shared/ui/date-range-picker-inp";
import { Typography } from "@/shared/ui/typography";
import { Textarea } from "@/shared/ui/textarea";

export const StepSocialActivity = memo(() => {
  const { register, control } = useFormContext<SettingsFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialActivities",
  });

  return (
    <div className="flex flex-col gap-10">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="border-border-secondary flex flex-col gap-6 border-b pb-10"
        >
          <label className="flex flex-col gap-2">
            <Typography variant="body-l">Деятельность</Typography>

            <Textarea
              className="h-auto min-h-[80px] resize-none"
              placeholder="Введите описание деятельности"
              {...register(`socialActivities.${index}.activity`)}
            />
          </label>

          <label className="flex flex-col gap-2">
            <Typography variant="body-l">Период деятельности</Typography>

            <Controller
              control={control}
              name={`socialActivities.${index}.period`}
              render={({ field }) => (
                <DatePickerInp
                  mode="range"
                  onChange={field.onChange}
                  value={field.value}
                  className="bg-background-tertiary h-[56px]"
                />
              )}
            />
          </label>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              disabled={index !== fields.length - 1}
              onClick={() => append({ activity: "", period: {} })}
            >
              Добавить
            </Button>

            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-text-error/80 hover:text-text-error transition-color cursor-pointer p-1"
                aria-label="Удалить блок"
              >
                <Basket />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
});

StepSocialActivity.displayName = "StepSocialActivity";

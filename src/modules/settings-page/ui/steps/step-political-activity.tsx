import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { SettingsFormValues } from "../../model/settings-form.type";
import { Textarea } from "@/shared/ui/textarea";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { memo } from "react";
import { Typography } from "@/shared/ui/typography";
import { Basket } from "@/shared/icons/basket";
import { DatePickerInp } from "@/shared/ui/date-range-picker-inp";

export const StepPoliticalActivity = memo(() => {
  const { register, control } = useFormContext<SettingsFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "politicalActivities",
  });

  return (
    <div className="flex flex-col gap-10">
      <label className="flex flex-col gap-2">
        <Typography variant="body-l">Полномочия</Typography>

        <Input
          className="bg-background-tertiary h-[56px] border-none"
          placeholder="Введите полномочия"
          {...register("powers")}
        />
      </label>

      <label className="border-border-secondary flex flex-col gap-2 border-b pb-10">
        <Typography variant="body-l">Дата наделения полномочиями</Typography>

        <Controller
          control={control}
          name={`dateOfPowers`}
          render={({ field }) => (
            <DatePickerInp
              onChange={field.onChange}
              value={field.value}
              className="bg-background-tertiary h-[56px]"
            />
          )}
        />
      </label>

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
              {...register(`politicalActivities.${index}.activity`)}
            />
          </label>

          <label className="flex flex-col gap-2">
            <Typography variant="body-l">Период деятельности</Typography>

            <Controller
              control={control}
              name={`politicalActivities.${index}.period`}
              render={({ field }) => (
                <DatePickerInp
                  mode="range"
                  value={field.value}
                  onChange={field.onChange}
                  className="bg-background-tertiary h-[56px]"
                />
              )}
            />
          </label>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              disabled={index !== fields.length - 1}
              onClick={() =>
                append({
                  activity: "",
                  period: {},
                })
              }
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

StepPoliticalActivity.displayName = "StepPoliticalActivity";

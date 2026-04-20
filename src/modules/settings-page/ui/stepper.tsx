import { Check } from "@/shared/icons/check";
import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/typography";
import { memo } from "react";
import { SETTINGS_STEPS } from "../model/steps.const";

export const Stepper = memo(({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex flex-col items-start gap-0">
      {SETTINGS_STEPS.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={index} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",
                  isCompleted &&
                    "border-border-accent bg-background-accent text-text-primary-on-color",
                  isCurrent && "bg-background-primary border-blue-500",
                  !isCompleted && !isCurrent && "bg-background-tertiary",
                )}
              >
                {isCompleted ? (
                  <Check />
                ) : (
                  <Typography variant="body-l" tag="span">
                    {index + 1}
                  </Typography>
                )}
              </div>

              {index < SETTINGS_STEPS.length - 1 && (
                <div
                  className={cn(
                    "min-h-[40px] w-0.5 flex-1",
                    index < currentStep
                      ? "bg-blue-500"
                      : "border-l-2 border-dashed border-gray-300",
                  )}
                />
              )}
            </div>

            <Typography
              className={cn("pt-2.5", {
                "text-text-secondary": !isCompleted && !isCurrent,
              })}
              variant="button-m"
              tag="span"
            >
              {step.label}
            </Typography>
          </div>
        );
      })}
    </div>
  );
});

Stepper.displayName = "Stepper";

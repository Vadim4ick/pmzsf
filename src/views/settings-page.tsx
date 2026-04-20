"use client";

import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import {
  SETTINGS_STEPS,
  SettingsFormValues,
  STEP_COMPONENTS,
  Stepper,
} from "@/modules/settings-page";

const SettingsPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === SETTINGS_STEPS.length - 1;

  const methods = useForm<SettingsFormValues>({
    defaultValues: {
      // 1
      avatar: null,
      firstName: "",
      lastName: "",
      surname: "",
      birthDate: "",
      workplace: "",

      //   2
      governmentAgency: "",
      subject: "",
      committee: "",
      positionPmz: "",

      // 3
      phone: "",
      email: "",
      telegram: "",
      vk: "",
      governmentWebsite: "",
      administrationWebsite: "",

      // 4
      powers: "",
      dateOfPowers: "",
      politicalActivities: [{ activity: "", period: {} }],

      // 5
      socialActivities: [{ activity: "", period: {} }],
    },
  });

  const handleContinue = () => {
    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = (data: SettingsFormValues) => {
    console.log("Form data:", data);
    // TODO: отправка на сервер
  };

  const StepContent = STEP_COMPONENTS[currentStep];

  return (
    <FormProvider {...methods}>
      <section>
        <Container className="flex flex-col gap-10">
          <Typography variant="header-l" tag="h1">
            Настройки профиля
          </Typography>

          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="max-tablet:grid-cols-1 max-tablet:gap-6 grid grid-cols-[222px_1fr] gap-10"
          >
            {/* Степпер */}
            <Stepper currentStep={currentStep} />

            {/* Контент шага */}
            <div className="flex max-w-[550px] flex-col gap-8">
              <StepContent />

              <div className="flex items-center justify-end gap-4">
                {currentStep > 0 && (
                  <Button type="button" onClick={handlePrev}>
                    Назад
                  </Button>
                )}

                {isLastStep ? (
                  <Button type="submit" variant="secondary">
                    Сохранить
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleContinue}
                  >
                    Продолжить
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Container>
      </section>
    </FormProvider>
  );
};

export { SettingsPage };

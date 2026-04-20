// import Image from "next/image";
// import { Pencil } from "@/shared/icons/pencil";

// const AvatarUploader = ({ url }: { url: string }) => {
//   return (
//     <div className="max-mobile:size-[100px] relative size-[136px] shrink-0 overflow-hidden rounded-[6px]">
//       <Image src={url} alt="Avatar" fill className="object-cover" />

//       <button
//         type="button"
//         className="bg-background-primary absolute right-2 bottom-2 flex size-8 cursor-pointer items-center justify-center rounded-full"
//         aria-label="Редактировать фото"
//       >
//         <Pencil className="h-4 w-4" />
//       </button>
//     </div>
//   );
// };

// export { AvatarUploader };

"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Pencil } from "@/shared/icons/pencil";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

interface AvatarUploaderProps {
  url: string;
  onUpload?: (file: File) => void;
}

const AvatarUploader = ({ url, onUpload }: AvatarUploaderProps) => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    },
    [],
  );

  const handleSave = () => {
    if (selectedFile) {
      onUpload?.(selectedFile);
    }
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setPreview(null);
    setSelectedFile(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  }, []);

  return (
    <>
      <div className="max-mobile:size-[100px] relative size-[136px] shrink-0 overflow-hidden rounded-[6px]">
        <Image src={url} alt="Avatar" fill className="object-cover" />

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-background-primary absolute right-2 bottom-2 flex size-8 cursor-pointer items-center justify-center rounded-full"
          aria-label="Редактировать фото"
        >
          <Pencil className="h-4 w-4" />
        </button>
      </div>

      <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
        <DialogContent className="sm:max-w-[440px]">
          <DialogHeader>
            <DialogTitle asChild>
              <Typography variant="header-m" tag="h4">
                Загрузка фото
              </Typography>
            </DialogTitle>
          </DialogHeader>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {preview ? (
            <div className="flex flex-col items-center gap-4">
              <div className="relative size-[200px] overflow-hidden rounded-[6px]">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>

              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="text-sm text-blue-500 hover:underline"
              >
                Выбрать другое фото
              </button>
            </div>
          ) : (
            <div
              onClick={() => inputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-border-secondary hover:bg-background-secondary flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[8px] border-2 border-dashed p-10 transition-colors"
            >
              <Typography variant="body-m" className="text-text-secondary">
                Перетащите изображение сюда
              </Typography>
              <Typography variant="body-s" className="text-text-secondary">
                или нажмите для выбора файла
              </Typography>
            </div>
          )}

          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" onClick={handleClose}>
              Отмена
            </Button>
            <Button
              type="button"
              variant="secondary"
              disabled={!selectedFile}
              onClick={handleSave}
            >
              Сохранить
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { AvatarUploader };
export type { AvatarUploaderProps };

import localFont from "next/font/local";

export const lato = localFont({
  display: "swap",
  variable: "--font-lato",
  src: [
    {
      path: "./lato/Lato-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./lato/Lato-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./lato/Lato-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const trola = localFont({
  display: "swap",
  variable: "--font-trola",
  src: [
    {
      path: "./trola-latCyr/Trola-LatCyr-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./trola-latCyr/Trola-LatCyr-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./trola-latCyr/Trola-LatCyr-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./trola-latCyr/Trola-LatCyr-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

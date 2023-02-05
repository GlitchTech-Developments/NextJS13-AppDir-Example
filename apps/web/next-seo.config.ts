// next-seo.config.ts
import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: "%s | GlitchTech NextJS > AppDir",
  description: "This is a NextJS 13 website using the new AppDir flow.",
  themeColor: "#0f172a",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://appdir.glitchtech.dev",
    title: "GlitchTech NextJS AppDir",
    description: "This is a NextJS 13 website using the new AppDir flow.",
    images: [
      {
        url: "https://www.test.ie/og-image-a-01.jpg",
        width: 800,
        height: 600,
        alt: "This is a NextJS 13 website using the new AppDir flow.",
        type: "image/jpeg",
        secureUrl: "https://www.test.ie/secure-og-image-a-01.jpg",
      },
    ],
    siteName: "GlitchTech NextJS AppDir",
  },
  twitter: {
    handle: "@GlitchTechEU",
    cardType: "summary_large_image",
  },
};

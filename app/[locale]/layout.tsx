import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/footer/footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import FlyingButton from "@/components/flying-button/flying-button";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <Head>
        <link
          rel="icon"
          href="/UrbanHuiseLogo.jpg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body>
        <main
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </main>
        <Footer />
        <FlyingButton />
      </body>
    </html>
  );
}

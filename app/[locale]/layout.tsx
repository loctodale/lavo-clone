// 'use client';
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import {ReactNode, Suspense} from "react";
import {dir} from "i18next";
import i18nConfig from "@/i18nConfig";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }));
}
const i18nNamespaces = ['home'];
export default async function RootLayout(props: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {

    const { locale } = await props.params;

    const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html
        lang={locale} dir={dir(locale)}
        className={"w-screen h-full overflow-x-hidden scrollbar-hide"}>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
        <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
            rel="stylesheet"/>
    </head>
    <body className=" w-screen">
    <Suspense fallback={<div>Loading...</div>}>
        <TranslationsProvider namespaces={i18nNamespaces}
                              locale={locale}
                              resources={resources} >
            <NavBar/>
            <div className={"w-full min-h-screen "}>
                {props.children}
            </div>
            <Footer/>
        </TranslationsProvider>

    </Suspense>
    </body>
    </html>
  );
}

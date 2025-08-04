'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import Image from 'next/image';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const searchParams = useSearchParams();

    const handleToggle = () => {
        const newLocale = currentLocale === 'vi' ? 'en' : 'vi';

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

        // Build the query string from current search params
        const queryString = searchParams.toString();
        const fullQueryString = queryString ? `?${queryString}` : '';

        // redirect to the new locale path while preserving query parameters
        let newPath: string;
        if (currentLocale === i18nConfig.defaultLocale) {
            newPath = `/${newLocale}${currentPathname}${fullQueryString}`;
        } else {
            const pathnameWithoutLocale = currentPathname.replace(`/${currentLocale}`, '');
            newPath = `/${newLocale}${pathnameWithoutLocale}${fullQueryString}`;
        }

        router.push(newPath);
        router.refresh();
    };

    return (
        <button
            onClick={handleToggle}
            className="flex items-center gap-2 px-3 py-1 border rounded-full hover:bg-gray-100 transition"
        >
            <Image
                src={currentLocale === 'vi' ? '/vn.png' : '/uk.png'}
                alt="Language"
                width={20}
                height={20}
            />
            <span className="text-sm">
                {currentLocale === 'vi' ? 'Tiếng Việt' : 'English'}
            </span>
        </button>
    );
}

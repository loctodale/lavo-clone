'use client';

import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { ChangeEvent } from 'react';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const searchParams = useSearchParams();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

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
        <select onChange={handleChange} value={currentLocale}>
            <option value="en">English</option>
            <option value="vi">Vietnamese</option>
        </select>
    );
}
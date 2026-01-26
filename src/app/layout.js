import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import {Metrika} from '@/components/Metrika'
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://endo.mskdoctor.ru'),
    title: 'Эндопротезирование суставов — восстановление движения и жизни без боли',
    description: 'Современное эндопротезирование тазобедренных и коленных суставов. Опытные хирурги, передовые импланты, быстрая реабилитация. Запишитесь на консультацию.',
    keywords: ['эндопротезирование суставов, роботизированная операция колена, эндопротезирование тазобедренного сустава, роботизированная хирургия суставов, замена коленного сустава, замена тазобедренного сустава, эндопротез колена, эндопротез тазобедренного сустава, операция в Москве, лечение артроза'],
    other: {
        ['yandex-verification']: '63b15477d46dd1f6',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Эндопротезирование суставов в Москве — роботизированная операция колена и тазобедренного сустава. Звоните! 8 (499) 719-81-00, 24/7',
        description: 'Современное эндопротезирование коленного и тазобедренного суставов в Москве. Роботизированные операции, минимальная травматичность, быстрый восстановительный период. Запись на консультацию.',
        images: ['/images/banner.webp'],
        url: 'https://endo.mskdoctor.ru',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika/>
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}

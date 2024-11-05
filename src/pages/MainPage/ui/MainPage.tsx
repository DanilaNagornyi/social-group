import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
// import { Counter } from 'entities/Counter';

interface MainPageProps {
    className?: string;
}
const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <Page className={className}>
            {t('Главная')}
            {/* <Counter /> */}
        </Page>
    );
};

export default MainPage;

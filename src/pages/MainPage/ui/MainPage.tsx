import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Counter } from 'entities/Counter';

interface MainPageProps {
    className?: string;
}
const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={className}>
            {t('Главная')}
            {/* <Counter /> */}
        </div>
    );
};

export default MainPage;

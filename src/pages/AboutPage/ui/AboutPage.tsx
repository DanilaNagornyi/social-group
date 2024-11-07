import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

interface AboutPageProps {
    className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <Page className={className}>
            {t('О Сайте')}
        </Page>
    );
};

export default AboutPage;

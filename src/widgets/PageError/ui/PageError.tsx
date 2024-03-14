import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router';
import s from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleReloadPage = (): void => {
        navigate(0);
    };

    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={handleReloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};

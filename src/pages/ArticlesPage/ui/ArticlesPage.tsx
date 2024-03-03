import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
}

const ArticlesPage = (props?: ArticlesPageProps) => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [])}>
            Articles Page
        </div>
    );
};

export default memo(ArticlesPage);

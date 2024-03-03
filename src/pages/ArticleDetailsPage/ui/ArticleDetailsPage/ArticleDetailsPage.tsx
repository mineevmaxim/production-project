import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
}

const ArticleDetailsPage = () => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [])}>
            Article Details
        </div>
    );
};

export default memo(ArticleDetailsPage);

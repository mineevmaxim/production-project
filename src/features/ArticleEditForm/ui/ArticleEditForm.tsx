import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleEditForm.module.scss';

interface ArticleEditFormProps {
    className?: string;
}

export const ArticleEditForm = memo((props: ArticleEditFormProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleEditForm, {}, [className])}>
            /
        </div>
    );
});

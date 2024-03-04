import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const ArticleImageBlockComponent = memo(() => {
    const { t } = useTranslation();

    return (
        <div>
            ArticleImageBlockComponent
        </div>
    );
});

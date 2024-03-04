import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleTextBlockComponent = memo(() => {
    const { t } = useTranslation();

    return (
        <div>
            ArticleTextBlockComponent
        </div>
    );
});

export default ArticleTextBlockComponent;

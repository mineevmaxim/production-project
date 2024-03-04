import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleCodeBlockComponent = memo(() => {
    const { t } = useTranslation();

    return (
        <div>
            ArticleCodeBlockComponent
        </div>
    );
});

export default ArticleCodeBlockComponent;

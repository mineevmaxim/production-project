import { lazy, Suspense, SuspenseProps } from 'react';
import { ArticleRatingProps } from '@/features/articleRating';
import { Loader } from '@/shared/ui/Loader/Loader';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Loader />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};

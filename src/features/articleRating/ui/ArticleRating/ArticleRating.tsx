import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const rateArticleHandler = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    rate: starsCount,
                    articleId,
                    feedback,
                });
            } catch (e) {
                // eslint-disable-next-line
                console.error(e);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onCancel = useCallback((starsCount: number) => {
        rateArticleHandler(starsCount);
    }, [rateArticleHandler]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        rateArticleHandler(starsCount, feedback);
    }, [rateArticleHandler]);

    if (isLoading) {
        return (<Skeleton width="100%" height={120} />);
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={className}
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    );
};

export default memo(ArticleRating);

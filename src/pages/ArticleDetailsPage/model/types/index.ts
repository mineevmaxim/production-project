import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { ArticleDetailsPageRecommendationsSchema } from '../types/ArticleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationsSchema;
}

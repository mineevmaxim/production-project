import { ArticleDetailsCommentsSchema, ArticleDetailsPageRecommendationsSchema } from 'pages/ArticleDetailsPage';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationsSchema;
}

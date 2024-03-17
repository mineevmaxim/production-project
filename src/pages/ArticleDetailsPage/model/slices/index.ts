import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../../index';
import {
    articleDetailsPageRecommendationsReducer,
} from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

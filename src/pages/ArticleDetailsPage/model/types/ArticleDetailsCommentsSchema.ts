import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentSchema {
	isLoading?: boolean;
	error?: string;
	data?: Comment[];
}

export enum ArticleBLockType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT',
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBLockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
	type: ArticleBLockType.CODE;
	code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
	type: ArticleBLockType.IMAGE;
	src: string;
	title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
	type: ArticleBLockType.TEXT;
	paragraphs: string[];
	title?: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export enum ArticleType {
	IT = 'IT',
	SCIENCE = 'SCIENCE',
	ECONOMICS = 'ECONOMICS',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

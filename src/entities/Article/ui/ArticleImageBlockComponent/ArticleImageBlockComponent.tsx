import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock;
    className?: string;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} className={cls.img} alt="" />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});

import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    block: ArticleCodeBlock;
    className?: string;
}

const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});

export default ArticleCodeBlockComponent;

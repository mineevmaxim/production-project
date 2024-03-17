import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const {
        className,
        onViewClick,
        view,
    } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
};

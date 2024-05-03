import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '../../assets/icons/star.svg';
import { Icon } from '@/shared/ui/Icon/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        selectedStars = 0,
        onSelect,
        size = 30,
    } = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = useCallback((starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    }, [isSelected]);

    const onLeave = useCallback(() => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    }, [isSelected]);

    const onClick = useCallback((starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    }, [isSelected, onSelect]);

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    key={starNumber}
                    Svg={StarIcon}
                    className={classNames(
                        cls.starIcon,
                        {
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.selected]: isSelected,
                        },
                        [cls.normal],
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});

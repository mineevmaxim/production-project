import { ChangeEvent, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
	value: string;
	content: string;
}

interface Selectprops {
	className?: string;
	label?: string;
	options?: SelectOption[];
	value?: string;
	onChange?: (value: string) => void;
	readonly?: boolean;
}

export const Select = memo((props: Selectprops) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            key={opt.value}
            className={cls.option}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});

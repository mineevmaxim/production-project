import { Currency } from 'entities/Currency/model/types/currency';
import {
    memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

interface CurrencySelectProps {
	className?: string;
	value?: string;
	onChange?: (value: Currency) => void;
	readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

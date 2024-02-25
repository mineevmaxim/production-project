import {
    memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../model/types/country';

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

interface CountrySelectProps {
	className?: string;
	value?: string;
	onChange?: (value: Country) => void;
	readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency) => void;
	readonly?: boolean;
}

const options = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
	({ className, value, onChange, readonly }: CurrencySelectProps) => {
		const { t } = useTranslation();

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Currency);
			},
			[onChange],
		);

		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				on={
					<ListBox
						className={className}
						value={value}
						defaultValue={t('Укажите валюту')}
						label={t('Укажите валюту')}
						items={options}
						onChange={onChangeHandler}
						readonly={readonly}
						direction="top right"
					/>
				}
				off={
					<ListBoxDeprecated
						className={className}
						value={value}
						defaultValue={t('Укажите валюту')}
						label={t('Укажите валюту')}
						items={options}
						onChange={onChangeHandler}
						readonly={readonly}
						direction="top right"
					/>
				}
			/>
		);
	},
);

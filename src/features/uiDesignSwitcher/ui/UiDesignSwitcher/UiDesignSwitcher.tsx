import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignSwitcherProps {
	className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const isAppRedesigned = getFeatureFlag('isAppRedesigned');
	const dispatch = useAppDispatch();
	const authData = useSelector(getUserAuthData);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const items = [
		{
			content: t('Новый'),
			value: 'new',
		},
		{
			content: t('Старый'),
			value: 'old',
		},
	];

	const onChange = async (value: string) => {
		if (authData) {
			setIsLoading(true);
			await dispatch(
				updateFeatureFlags({
					features: {
						isAppRedesigned: value === 'new',
					},
					userId: authData?.id,
				}),
			).unwrap();
			setIsLoading(false);
		}
	};

	return (
		<HStack>
			<Text text={t('Вариант интерфейса')} />
			{isLoading ? (
				<Skeleton width={150} height={40} />
			) : (
				<ListBox
					onChange={onChange}
					value={isAppRedesigned ? 'new' : 'old'}
					items={items}
					className={className}
				/>
			)}
		</HStack>
	);
});

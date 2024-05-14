import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { getUserAuthData } from '@/entities/User';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
	className?: string;
}

export const EditableProfileCardHeader = memo(
	(props: EditableProfileCardHeaderProps) => {
		const { className } = props;

		const { t } = useTranslation('profile');
		const authData = useSelector(getUserAuthData);
		const profileData = useSelector(getProfileData);
		const canEdit = authData?.id === profileData?.id;
		const readonly = useSelector(getProfileReadonly);
		const dispatch = useAppDispatch();

		const onEdit = useCallback(() => {
			dispatch(profileActions.setReadonly(false));
		}, [dispatch]);

		const onCancelEdit = useCallback(() => {
			dispatch(profileActions.cancelEdit());
		}, [dispatch]);

		const onSave = useCallback(() => {
			dispatch(updateProfileData());
		}, [dispatch]);

		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				on={
					<Card max border="partial" padding="24">
						<HStack
							max
							justify="between"
							className={classNames('', {}, [className])}
						>
							<Text title={t('Профиль')} />
							{canEdit && (
								<div>
									{readonly ? (
										<Button
											variant="outline"
											onClick={onEdit}
											data-testid="EditableProfileCardHeader.EditButton"
										>
											{t('Редактировать')}
										</Button>
									) : (
										<HStack gap="8">
											<Button
												variant="outline"
												color="error"
												onClick={onCancelEdit}
												data-testid="EditableProfileCardHeader.CancelButton"
											>
												{t('Отменить')}
											</Button>
											<Button
												variant="outline"
												color="success"
												onClick={onSave}
												data-testid="EditableProfileCardHeader.SaveButton"
											>
												{t('Сохранить')}
											</Button>
										</HStack>
									)}
								</div>
							)}
						</HStack>
					</Card>
				}
				off={
					<HStack
						max
						justify="between"
						className={classNames('', {}, [className])}
					>
						<TextDeprecated title={t('Профиль')} />
						{canEdit && (
							<div>
								{readonly ? (
									<ButtonDeprecated
										theme={ButtonTheme.OUTLINE}
										onClick={onEdit}
										data-testid="EditableProfileCardHeader.EditButton"
									>
										{t('Редактировать')}
									</ButtonDeprecated>
								) : (
									<HStack gap="8">
										<ButtonDeprecated
											theme={ButtonTheme.OUTLINE_RED}
											onClick={onCancelEdit}
											data-testid="EditableProfileCardHeader.CancelButton"
										>
											{t('Отменить')}
										</ButtonDeprecated>
										<ButtonDeprecated
											theme={ButtonTheme.OUTLINE}
											onClick={onSave}
											data-testid="EditableProfileCardHeader.SaveButton"
										>
											{t('Сохранить')}
										</ButtonDeprecated>
									</HStack>
								)}
							</div>
						)}
					</HStack>
				}
			/>
		);
	},
);

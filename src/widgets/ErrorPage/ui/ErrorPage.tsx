import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import cls from './ErrorPage.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface ErrorPageProps {
	className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<div className={classNames(cls.ErrorPage, {}, [className])}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<ToggleFeatures
				feature="isAppRedesigned"
				on={
					<Button onClick={reloadPage}>
						{t('Обновить страницу')}
					</Button>
				}
				off={
					<ButtonDeprecated onClick={reloadPage}>
						{t('Обновить страницу')}
					</ButtonDeprecated>
				}
			/>
		</div>
	);
};

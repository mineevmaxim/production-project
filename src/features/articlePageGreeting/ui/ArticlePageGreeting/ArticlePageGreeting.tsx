import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const ArticlePageGreeting = memo(() => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const { isArticlesPageWasOpened } = useJsonSettings();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!isArticlesPageWasOpened) {
			setIsOpen(true);
			dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
		}
	}, [isArticlesPageWasOpened]);

	return (
		<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} lazy>
			<Text
				title={t('Добро пожаловать')}
				text={t(
					'Здесь вы можете искать и просматривать статьи на различные темы',
				)}
			/>
		</Modal>
	);
});

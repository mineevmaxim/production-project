import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIconDeprecated from '@/shared/assets/icons/copy-20-20.svg';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from '../../deprecated/Button/Button';
import cls from './Code.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';

interface CodeProps {
	className?: string;
	text: string;
}

export const Code = memo((props: CodeProps) => {
	const { className, text } = props;

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			on={
				<pre
					className={classNames(cls.CodeRedesigned, {}, [className])}
				>
					<Icon
						Svg={CopyIcon}
						width={40}
						height={40}
						onClick={onCopy}
						clickable
						className={cls.copyBtn}
					/>
					<code>{text}</code>
				</pre>
			}
			off={
				<pre className={classNames(cls.Code, {}, [className])}>
					<ButtonDeprecated
						onClick={onCopy}
						className={cls.copyBtn}
						theme={ButtonTheme.CLEAR}
					>
						<CopyIconDeprecated className={cls.copyIcon} />
					</ButtonDeprecated>
					<code>{text}</code>
				</pre>
			}
		/>
	);
});

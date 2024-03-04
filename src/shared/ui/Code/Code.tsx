import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
	text: string;
	className?: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});

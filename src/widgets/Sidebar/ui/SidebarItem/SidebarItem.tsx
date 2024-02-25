import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import cls from './Sidebaritem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};

import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserInited, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeature } from '@/shared/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

function App() {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);

	useEffect(() => {
		dispatch(initAuthData());
	}, [dispatch]);

	if (!inited) return <PageLoader />;

	return (
		<ToggleFeature
			feature="isAppRedesinged"
			on={
				<div className={classNames('app_redesinged', {}, [theme])}>
					<Suspense fallback={<PageLoader />}>
						<MainLayout
							header={<Navbar />}
							content={<AppRouter />}
							sidebar={<Sidebar />}
							toolbar={<div>toolbar</div>}
						/>
					</Suspense>
				</div>
			}
			off={
				<div className={classNames('app', {}, [theme])}>
					<Suspense fallback={<PageLoader />}>
						<Navbar />
						<div className="content-page">
							<Sidebar />
							<AppRouter />
						</div>
					</Suspense>
				</div>
			}
		/>
	);
}

export default App;

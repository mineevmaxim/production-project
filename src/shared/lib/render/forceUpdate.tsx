import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

const ForceUpdateContext = createContext({
	value: true,
	forceUpdate: () => {},
});

export const useForceUpdate = () => {
	const { forceUpdate } = useContext(ForceUpdateContext);

	return forceUpdate;
};

export function ForceUpdateProvider({ children }: { children: ReactNode }) {
	const [value, setValue] = useState<boolean>(true);

	const forceUpdate = () => {
		setValue((prev) => !prev);
		setTimeout(() => {
			setValue((prev) => !prev);
		}, 0);
	};

	const valueContext = useMemo(() => ({ value, forceUpdate }), []);

	if (!value) return null;

	return (
		<ForceUpdateContext.Provider value={valueContext}>
			{children}
		</ForceUpdateContext.Provider>
	);
}

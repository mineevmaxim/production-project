import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
};

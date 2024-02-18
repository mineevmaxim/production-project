import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import type { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { Counter } from 'entities/Counter/ui/Counter';

export {
    counterReducer,
    Counter,
    CounterSchema,
};

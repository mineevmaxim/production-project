import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { CounterSchema, counterReducer } from 'entities/Counter';

describe('counterSlice.test', () => {
    test('decrement test', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decrement),
        ).toEqual({ value: 9 });
    });
    test('increment test', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.increment),
        ).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment),
        ).toEqual({ value: 1 });
    });
});

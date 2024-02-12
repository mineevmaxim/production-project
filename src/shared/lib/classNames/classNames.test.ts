import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });

    test('with mods', () => {
        expect(classNames('someClass', {
            hovered: true,
            scrollable: true,
        }, []))
            .toBe('someClass hovered scrollable');
    });

    test('with mods false', () => {
        expect(classNames('someClass', {
            hovered: true,
            scrollable: false,
        }, []))
            .toBe('someClass hovered');
    });

    test('with mods undefined', () => {
        expect(classNames('someClass', {
            hovered: true,
            scrollable: undefined,
        }, []))
            .toBe('someClass hovered');
    });
});

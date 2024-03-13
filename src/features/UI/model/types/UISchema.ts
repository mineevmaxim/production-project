// <Адрес страницы, позиция скрола>
export type ScrollSchema = Record<string, number>;

export interface UISchema {
    scroll: ScrollSchema;
}

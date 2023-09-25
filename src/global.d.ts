declare module '*.scss' {
    interface IClassNames {
        [s: string]: string
    }
    const s: IClassNames;
    export = s;
}

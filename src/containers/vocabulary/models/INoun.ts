export enum WordGender {
    MASCULINE = "masculine",
    FEMININE = "feminine",
    NEUTER = "neuter",
    PLURAL = "plural"
}

interface INoun {
    pl: string,
    ru: string,
    gender: WordGender
}

export default INoun
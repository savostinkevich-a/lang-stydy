interface IAdjective {
    antonym?: string,
    masculine: {
        pl: string
        ru: string
    },
    feminine: {
        pl: string
        ru: string
    },
    neuter: {
        pl: string
        ru: string
    },
    plural: {
        pl: string,
        ru: string
    }
}

export default IAdjective
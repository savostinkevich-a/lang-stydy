export interface IVerbExercise {
    pronoun: "ja" | "ty" | "on/ona/ono" | "my" | "wy" | "oni/one" | "infinitive",
    sentence: string
}

interface IVerb {
    infinitive: string,
    ja: string
    ty: string
    "on/ona/ono": string
    my: string
    wy: string
    "oni/one": string
    exercises: Array<IVerbExercise>
}

export default IVerb
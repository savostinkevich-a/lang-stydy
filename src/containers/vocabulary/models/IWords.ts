import INoun from "./INoun";
import IAdjective from "./IAdjective";
import INumeral from "./INumeral";

interface IWords {
    lectureIndex: number
    nouns: Array<INoun>
    adjectives: Array<IAdjective>
    numerals: Array<INumeral>
}

export default IWords
import INoun from "../../containers/nouns/models/INoun";
import IAdjective from "../../containers/adjectives/models/IAdjective";
import IVerb from "../../containers/verbs/models/IVerb";

interface ILecture {
    nouns: Array<INoun>
    adjectives: Array<IAdjective>
    verbs: Array<IVerb>
}

export default ILecture
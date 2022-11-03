import ILecture from "../models/ILecture";
import nouns from "../../containers/nouns/data";
import adjectives from "../../containers/adjectives/data";
import verbs from "../../containers/verbs/data";

type TLecturesData = {
    [lecture: number]: ILecture
}

const lectures: TLecturesData = {
    2: {
        adjectives: adjectives[2],
        nouns: nouns[2],
        verbs: verbs[2]
    },
    3: {
        adjectives: adjectives[3],
        nouns: nouns[3],
        verbs: verbs[3]
    },
    4: {
        adjectives: [],
        nouns: nouns[4],
        verbs: []
    }
}

export default lectures
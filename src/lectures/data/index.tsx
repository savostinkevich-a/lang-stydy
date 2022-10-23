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
    }
}

export default lectures
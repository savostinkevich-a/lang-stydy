import INoun, {WordGender} from "../models/INoun";

type TNounsData = {
    [lecture: number]: Array<INoun>
}

const nouns: TNounsData = {
    2: [
        {
            pl: "kava",
            ru: "кофе",
            gender: WordGender.NEUTER
        },
        {
            pl: "okulary",
            ru: "очки",
            gender: WordGender.PLURAL
        },
        {
            pl: "radio",
            ru: "радио",
            gender: WordGender.NEUTER
        },
        {
            pl: "imię",
            ru: "имя",
            gender: WordGender.NEUTER
        },
        {
            pl: "autobus",
            ru: "автобус",
            gender: WordGender.MASCULINE
        },
        {
            pl: "telefon",
            ru: "телефон",
            gender: WordGender.MASCULINE
        },
        {
            pl: "kino",
            ru: "кино",
            gender: WordGender.NEUTER
        },
        {
            pl: "komputer",
            ru: "компьютер",
            gender: WordGender.MASCULINE
        },
        {
            pl: "lampa",
            ru: "лампа",
            gender: WordGender.FEMININE
        },
        {
            pl: "artysta",
            ru: "художник",
            gender: WordGender.MASCULINE
        },
        {
            pl: "artystka",
            ru: "художница",
            gender: WordGender.FEMININE
        },
        {
            pl: "krzesło",
            ru: "стул",
            gender: WordGender.NEUTER
        },
        {
            pl: "okno",
            ru: "окно",
            gender: WordGender.NEUTER
        },
        {
            pl: "gazeta",
            ru: "газета",
            gender: WordGender.FEMININE
        },
        {
            pl: "kobieta",
            ru: "женщина",
            gender: WordGender.FEMININE
        },
        {
            pl: "mężczyzna",
            ru: "мужчина",
            gender: WordGender.MASCULINE
        },
        {
            pl: "stół",
            ru: "стол",
            gender: WordGender.MASCULINE
        },
        {
            pl: "słońce",
            ru: "солнце",
            gender: WordGender.NEUTER
        },
        {
            pl: "dziecko",
            ru: "ребенок",
            gender: WordGender.NEUTER
        },
        {
            pl: "dom",
            ru: "дом",
            gender: WordGender.MASCULINE
        },
        {
            pl: "książka",
            ru: "книга",
            gender: WordGender.FEMININE
        },
        {
            pl: "długopis",
            ru: "ручка",
            gender: WordGender.MASCULINE
        },
        {
            pl: "nazwisko",
            ru: "фамилия",
            gender: WordGender.NEUTER
        },
        {
            pl: "samochód",
            ru: "машина",
            gender: WordGender.MASCULINE
        },
        {
            pl: "drzwi",
            ru: "дверь",
            gender: WordGender.PLURAL
        },
    ]
}

export default nouns
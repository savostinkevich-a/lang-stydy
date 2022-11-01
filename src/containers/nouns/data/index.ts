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
    ],
    3: [
        {
            pl: "inżynier",
            ru: "инженер",
            gender: WordGender.MASCULINE
        },
        {
            pl: "rolnik",
            ru: "земледелец",
            gender: WordGender.MASCULINE
        },
        {
            pl: "architekt",
            ru: "архитектор (мужчина)",
            gender: WordGender.MASCULINE
        },
        {
            pl: "architektka",
            ru: "архитектор (женщина)",
            gender: WordGender.FEMININE
        },
        {
            pl: "nauczyciel",
            ru: "учитель",
            gender: WordGender.MASCULINE
        },
        {
            pl: "nauczycielka",
            ru: "учительница",
            gender: WordGender.FEMININE
        },
        {
            pl: "bezrobotny",
            ru: "безработный",
            gender: WordGender.MASCULINE
        },
        {
            pl: "lekarka",
            ru: "доктор (женщина)",
            gender: WordGender.FEMININE
        },
        {
            pl: "lekarz",
            ru: "доктор (мужчина)",
            gender: WordGender.MASCULINE
        },
        {
            pl: "kelnerka",
            ru: "официантка",
            gender: WordGender.FEMININE
        },
        {
            pl: "kelner",
            ru: "официант",
            gender: WordGender.MASCULINE
        },
        {
            pl: "muzyk",
            ru: "музыкант",
            gender: WordGender.MASCULINE
        },
        {
            pl: "emeryt",
            ru: "пенсионер",
            gender: WordGender.MASCULINE
        },
        {
            pl: "urzędnik",
            ru: "служащий (прим. банковский)",
            gender: WordGender.MASCULINE
        },
        {
            pl: "urzędniczka",
            ru: "служащая (прим. банковская)",
            gender: WordGender.FEMININE
        },
        {
            pl: "fotograf",
            ru: "фотограф",
            gender: WordGender.MASCULINE
        },
        {
            pl: "dentysta",
            ru: "дантист",
            gender: WordGender.MASCULINE
        },
        {
            pl: "dentystka",
            ru: "дантист (женщина)",
            gender: WordGender.FEMININE
        },
        {
            pl: "dziennikarz",
            ru: "журналист",
            gender: WordGender.MASCULINE
        },
        {
            pl: "dziennikarka",
            ru: "журналистка",
            gender: WordGender.FEMININE
        },
        {
            pl: "kierowca",
            ru: "водитель",
            gender: WordGender.MASCULINE
        },
        {
            pl: "student",
            ru: "студент",
            gender: WordGender.MASCULINE
        },
        {
            pl: "studentka",
            ru: "студентка",
            gender: WordGender.MASCULINE
        },
        {
            pl: "rano",
            ru: "утро",
            gender: WordGender.NEUTER
        },
        {
            pl: "dzień",
            ru: "день",
            gender: WordGender.MASCULINE
        },
        {
            pl: "noc",
            ru: "ночь",
            gender: WordGender.FEMININE
        },
        {
            pl: "czas",
            ru: "время",
            gender: WordGender.MASCULINE
        },
        {
            pl: "miesiąc",
            ru: "месяц",
            gender: WordGender.MASCULINE
        },
        {
            pl: "tydzień",
            ru: "неделя",
            gender: WordGender.MASCULINE
        },
        {
            pl: "pytanie",
            ru: "вопрос",
            gender: WordGender.FEMININE
        },
        {
            pl: "odpowiedź",
            ru: "ответ",
            gender: WordGender.FEMININE
        },
        {
            pl: "spotkanie",
            ru: "встреча",
            gender: WordGender.NEUTER
        },
        {
            pl: "rzecz",
            ru: "вещь",
            gender: WordGender.FEMININE
        },
    ]
}

export default nouns
import IWords from "../models/IWords";
import {WordGender} from "../models/INoun";

const lecture2: IWords = {
    lectureIndex: 2,
    nouns: [
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
    adjectives: [
        {
            antonym: "niski",
            masculine: {
                pl: "wysoki",
                ru: "высокий"
            },
            feminine: {
                pl: "wysoka",
                ru: "высокая"
            },
            neuter: {
                pl: "wysokie",
                ru: "высокое"
            },
            plural: {
                pl: "wysocy",
                ru: "высокие"
            }
        },
        {
            masculine: {
                pl: "średniego wzrostu",
                ru: "среднего роста"
            },
            feminine: {
                pl: "średniego wzrostu",
                ru: "среднего роста"
            },
            neuter: {
                pl: "średniego wzrostu",
                ru: "среднего роста"
            },
            plural: {
                pl: "średniego wzrostu",
                ru: "среднего роста"
            }
        },
        {
            antonym: "wysoki",
            masculine: {
                pl: "niski",
                ru: "низкий"
            },
            feminine: {
                pl: "niska",
                ru: "низкая"
            },
            neuter: {
                pl: "niskie",
                ru: "низкое"
            },
            plural: {
                pl: "niscy",
                ru: "низкие"
            }
        },
        {
            antonym: "szczupły",
            masculine: {
                pl: "gruby",
                ru: "толстый"
            },
            feminine: {
                pl: "gruby",
                ru: "толстая"
            },
            neuter: {
                pl: "gruby",
                ru: "толстое"
            },
            plural: {
                pl: "gruby",
                ru: "толстые"
            }
        },
        {
            antonym: "gruby",
            masculine: {
                pl: "szczupły",
                ru: "стройный"
            },
            feminine: {
                pl: "szczupła",
                ru: "стройная"
            },
            neuter: {
                pl: "szczupłe",
                ru: "стройное"
            },
            plural: {
                pl: "szczupli",
                ru: "стройные"
            }
        },
        {
            masculine: {
                pl: "wysportowany",
                ru: "спортивный"
            },
            feminine: {
                pl: "wysportowana",
                ru: "спортивная"
            },
            neuter: {
                pl: "wysportowane",
                ru: "спортивное"
            },
            plural: {
                pl: "wysportowani",
                ru: "спортивные"
            }
        },
        {
            antonym: "brzydki",
            masculine: {
                pl: "przystojny",
                ru: "красивый"
            },
            feminine: {
                pl: "przystojna",
                ru: "красивая"
            },
            neuter: {
                pl: "przystojne",
                ru: "красивое"
            },
            plural: {
                pl: "przystojni",
                ru: "красивые"
            }
        },
        {
            antonym: "zły",
            masculine: {
                pl: "ładny",
                ru: "хороший"
            },
            feminine: {
                pl: "ładna",
                ru: "хорошая"
            },
            neuter: {
                pl: "ładne",
                ru: "хорошое"
            },
            plural: {
                pl: "ładni",
                ru: "хорошие"
            }
        },
        {
            antonym: "ładny",
            masculine: {
                pl: "zły",
                ru: "плохой"
            },
            feminine: {
                pl: "zła",
                ru: "плохая"
            },
            neuter: {
                pl: "złe",
                ru: "плохое"
            },
            plural: {
                pl: "źli",
                ru: "плохие"
            }
        },
        {
            antonym: "smutny",
            masculine: {
                pl: "wesoły",
                ru: "веселый"
            },
            feminine: {
                pl: "wesoła",
                ru: "веселая"
            },
            neuter: {
                pl: "wesołe",
                ru: "веселое"
            },
            plural: {
                pl: "weseli",
                ru: "веселые"
            }
        },
        {
            antonym: "wesoły",
            masculine: {
                pl: "smutny",
                ru: "печальный"
            },
            feminine: {
                pl: "smutna",
                ru: "печальная"
            },
            neuter: {
                pl: "smutne",
                ru: "печальное"
            },
            plural: {
                pl: "smutni",
                ru: "печальные"
            }
        },
        {
            antonym: "przystojny",
            masculine: {
                pl: "brzydki",
                ru: "уродливый"
            },
            feminine: {
                pl: "brzydka",
                ru: "уродливая"
            },
            neuter: {
                pl: "brzydkie",
                ru: "уродливое"
            },
            plural: {
                pl: "brzydcy",
                ru: "уродливые"
            }
        },
        {
            antonym: "młody",
            masculine: {
                pl: "stary",
                ru: "старый"
            },
            feminine: {
                pl: "stara",
                ru: "старая"
            },
            neuter: {
                pl: "stare",
                ru: "старое"
            },
            plural: {
                pl: "starzy",
                ru: "старые"
            }
        },
        {
            antonym: "stary",
            masculine: {
                pl: "młody",
                ru: "молодой"
            },
            feminine: {
                pl: "młoda",
                ru: "молодая"
            },
            neuter: {
                pl: "młode",
                ru: "молодое"
            },
            plural: {
                pl: "młodzi",
                ru: "молодая"
            }
        },
        {
            antonym: "zdrowy",
            masculine: {
                pl: "chory",
                ru: "больной"
            },
            feminine: {
                pl: "chora",
                ru: "больная"
            },
            neuter: {
                pl: "chore",
                ru: "больное"
            },
            plural: {
                pl: "chorzy",
                ru: "больные"
            }
        },
        {
            antonym: "chory",
            masculine: {
                pl: "zdrowy",
                ru: "здоровый"
            },
            feminine: {
                pl: "zdrowa",
                ru: "здоровая"
            },
            neuter: {
                pl: "zdrowe",
                ru: "здоровое"
            },
            plural: {
                pl: "zdrowi",
                ru: "здоровые"
            }
        },
    ],
    numerals: [
        {
            number: 0,
            pl: "zero",
            ru: "ноль"
        },
        {
            number: 1,
            pl: "jeden",
            ru: "один"
        },
        {
            number: 2,
            pl: "jeden",
            ru: "два"
        },
        {
            number: 3,
            pl: "trzy",
            ru: "три"
        },
        {
            number: 4,
            pl: "cztery",
            ru: "четыре"
        },
        {
            number: 5,
            pl: "pięć",
            ru: "пять"
        },
        {
            number: 6,
            pl: "sześć",
            ru: "шесть"
        },
        {
            number: 7,
            pl: "siedem",
            ru: "семь"
        },
        {
            number: 8,
            pl: "osiem",
            ru: "восемь"
        },
        {
            number: 9,
            pl: "dziewięć",
            ru: "девять"
        },
        {
            number: 10,
            pl: "dziesięć",
            ru: "10"
        },
    ]
}

export default lecture2
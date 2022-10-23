import IAdjective from "../models/IAdjective";

type TAdjectivesData = {
    [lecture: string]: Array<IAdjective>
}

const adjectives: TAdjectivesData = {
    2: [
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
        },]
}

export default adjectives
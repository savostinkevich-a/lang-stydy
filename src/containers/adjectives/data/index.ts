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
                pl: "gruba",
                ru: "толстая"
            },
            neuter: {
                pl: "grube",
                ru: "толстое"
            },
            plural: {
                pl: "grubi",
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
    3: [
        {
            masculine: {
                pl: "inny",
                ru: "другой"
            },
            feminine: {
                pl: "inny",
                ru: "другая"
            },
            neuter: {
                pl: "inne",
                ru: "другое"
            },
            plural: {
                pl: "inni",
                ru: "другие"
            }
        },
        {
            masculine: {
                pl: "cały",
                ru: "целый"
            },
            feminine: {
                pl: "cała",
                ru: "целая"
            },
            neuter: {
                pl: "całe",
                ru: "целое"
            },
            plural: {
                pl: "cali",
                ru: "целые"
            }
        },
        {
            masculine: {
                pl: "różny",
                ru: "разный"
            },
            feminine: {
                pl: "różna",
                ru: "разная"
            },
            neuter: {
                pl: "różne",
                ru: "разное"
            },
            plural: {
                pl: "różni",
                ru: "разные"
            }
        },
        {
            masculine: {
                pl: "każdy",
                ru: "каждый"
            },
            feminine: {
                pl: "każda",
                ru: "каждая"
            },
            neuter: {
                pl: "każde",
                ru: "каждое"
            },
            plural: {
                pl: "każde",
                ru: "каждые"
            },
        },
        {
            antonym: "mały",
            masculine: {
                pl: "wielki",
                ru: "большой"
            },
            feminine: {
                pl: "wielka",
                ru: "большая"
            },
            neuter: {
                pl: "wielkie",
                ru: "большое"
            },
            plural: {
                pl: "wielcy",
                ru: "большие"
            }
        },
        {
            antonym: "wielki",
            masculine: {
                pl: "wielki",
                ru: "маленький"
            },
            feminine: {
                pl: "mała",
                ru: "маленькая"
            },
            neuter: {
                pl: "małe",
                ru: "маленькое"
            },
            plural: {
                pl: "mali",
                ru: "маленькие"
            }
        },
        {
            antonym: "prawy",
            masculine: {
                pl: "lewy",
                ru: "левый"
            },
            feminine: {
                pl: "lewa",
                ru: "левая"
            },
            neuter: {
                pl: "lewe",
                ru: "левое"
            },
            plural: {
                pl: "lewe",
                ru: "левые"
            }
        },
        {
            antonym: "lewy",
            masculine: {
                pl: "prawy",
                ru: "правый"
            },
            feminine: {
                pl: "prawa",
                ru: "правая"
            },
            neuter: {
                pl: "prawe",
                ru: "правое"
            },
            plural: {
                pl: "prawi",
                ru: "правые"
            }
        },
        {
            masculine: {
                pl: "zwykły",
                ru: "обычный"
            },
            feminine: {
                pl: "zwykła",
                ru: "обычная"
            },
            neuter: {
                pl: "zwykłe",
                ru: "обычное"
            },
            plural: {
                pl: "zwykli",
                ru: "обычные"
            }
        },
        {
            antonym: "krótki",
            masculine: {
                pl: "długi",
                ru: "длинный"
            },
            feminine: {
                pl: "długa",
                ru: "длинная"
            },
            neuter: {
                pl: "długie",
                ru: "длинное"
            },
            plural: {
                pl: "długie",
                ru: "длинные"
            }
        },
        {
            antonym: "długi",
            masculine: {
                pl: "krótki",
                ru: "короткий"
            },
            feminine: {
                pl: "krótka",
                ru: "короткая"
            },
            neuter: {
                pl: "krótkie",
                ru: "короткое"
            },
            plural: {
                pl: "krótcy",
                ru: "короткие"
            }
        },
        {
            antonym: "wolny",
            masculine: {
                pl: "szybki",
                ru: "быстрый"
            },
            feminine: {
                pl: "szybka",
                ru: "быстрая"
            },
            neuter: {
                pl: "szybkie",
                ru: "быстрое"
            },
            plural: {
                pl: "szybcy",
                ru: "быстрые"
            }
        },
        {
            antonym: "szybki",
            masculine: {
                pl: "wolny",
                ru: "медленный"
            },
            feminine: {
                pl: "wolna",
                ru: "медленная"
            },
            neuter: {
                pl: "wolne",
                ru: "медленное"
            },
            plural: {
                pl: "wolni",
                ru: "медленные"
            }
        },
        {
            antonym: "ciężki",
            masculine: {
                pl: "lekki",
                ru: "легкие"
            },
            feminine: {
                pl: "lekka",
                ru: "лекгая"
            },
            neuter: {
                pl: "lekkie",
                ru: "легкое"
            },
            plural: {
                pl: "leccy",
                ru: "легкие"
            }
        },
        {
            antonym: "lekki",
            masculine: {
                pl: "ciężki",
                ru: "легкие"
            },
            feminine: {
                pl: "ciężka",
                ru: "лекгая"
            },
            neuter: {
                pl: "ciężkie",
                ru: "легкое"
            },
            plural: {
                pl: "ciężcy",
                ru: "легкие"
            }
        },
        {
            antonym: "twardy",
            masculine: {
                pl: "miękki",
                ru: "мягкий"
            },
            feminine: {
                pl: "miękka",
                ru: "мягкая"
            },
            neuter: {
                pl: "miękkie",
                ru: "мягкое"
            },
            plural: {
                pl: "miękcy",
                ru: "мягкие"
            }
        },
        {
            antonym: "miękki",
            masculine: {
                pl: "twardy",
                ru: "твердый"
            },
            feminine: {
                pl: "twarda",
                ru: "твердая"
            },
            neuter: {
                pl: "twarde",
                ru: "твердое"
            },
            plural: {
                pl: "twardzi",
                ru: "твердые"
            }
        },
    ]
}

export default adjectives
import IVerb from "../models/IVerb";

type TVerbsData = {
    [lecture: string]: Array<IVerb>
}

const verbs: TVerbsData = {
    2: [
        {
            infinitive: "być",
            ja: "jestem",
            ty: "jesteś",
            "on/ona/ono": "jest",
            my: "jesteśmy",
            wy: "jesteście",
            "oni/one": "są",
            exercises: [
                {
                    pronoun: "oni/one",
                    sentence: "Państwo Kowalscy ... w domu."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Adam teraz ... w pracy."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Adam teraz ... w pracy."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Gdzie ... Ewa?"
                },
                {
                    pronoun: "oni/one",
                    sentence: "To nie ... moje rzeczy."
                },
                {
                    pronoun: "wy",
                    sentence: "Jak długo ... w Polsce? [wy]"
                },
                {
                    pronoun: "ty",
                    sentence: "Skąd ... ? [ty]"
                },
                {
                    pronoun: "my",
                    sentence: "My tu ... od soboty. A wy?"
                },
                {
                    pronoun: "ja",
                    sentence: "... chora. [ja]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Skąd pan ... ?"
                },
                {
                    pronoun: "oni/one",
                    sentence: "One nie ... stąd."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: " Czy pan ... z Polski?"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "To ... krzesło."
                },
                {
                    pronoun: "oni/one",
                    sentence: "Skąd państwo ... ?"
                },
                {
                    pronoun: "oni/one",
                    sentence: "One ... z Francji."
                },
                {
                    pronoun: "oni/one",
                    sentence: "To ... drzwi."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Skąd pan ... ?"
                },
                {
                    pronoun: "oni/one",
                    sentence: "To ... okulary."
                },
                {
                    pronoun: "ja",
                    sentence: "... w dużym sklepie."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "... w starej Warszawie."
                },
                {
                    pronoun: "ty",
                    sentence: "Widać, że ... zmęczony."
                },
                {
                    pronoun: "my",
                    sentence: "... na wystawie."
                },
                {
                    pronoun: "wy",
                    sentence: "... starszy od Ewy. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "... nad rzeką."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Gazeta ... na stole."
                },
                {
                    pronoun: "ty",
                    sentence: "... na uniwersytecie czy na poczcie? [ty]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "One ... ładnymi kobietami."
                },
            ]
        },
        {
            infinitive: "mieć",
            ja: "mam",
            ty: "masz",
            "on/ona/ono": "ma",
            my: "mamy",
            wy: "macie",
            "oni/one": "mają",
            exercises: [
                {
                    pronoun: "ty",
                    sentence: "... czas dzisiaj wieczorem? [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Czy on ... brata?"
                },
                {
                    pronoun: "my",
                    sentence: "... bilety na samolot? [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Czy ... pracę? [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Czy oni ... dzieci?"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Co oni ...?"
                },
                {
                    pronoun: "ty",
                    sentence: "Kiedy ... czas? [ty]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Dlaczego oni nie ... dzieci?"
                },
                {
                    pronoun: "ty",
                    sentence: "Jak ... na imię? [ty]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Oni ... problem."
                },
                {
                    pronoun: "oni/one",
                    sentence: "Dlaczego oni nie ... dzieci?"
                },
                {
                    pronoun: "ja",
                    sentence: "... na imię Andrzej. [ja]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "On ... nowe auto"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Jak oni się ... ?"
                },
                {
                    pronoun: "my",
                    sentence: "... dom w Krakowie. [my]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Ona ... na imię Ania."
                },
            ]
        },
        {
            infinitive: "mieszkać",
            ja: "mieszkam",
            ty: "mieszkasz",
            "on/ona/ono": "mieszka",
            my: "mieszkamy",
            wy: "mieszkacie",
            "oni/one": "mieszkają",
            exercises: [
                {
                    pronoun: "on/ona/ono",
                    sentence: "Gdzie on ... ?"
                },
                {
                    pronoun: "ja",
                    sentence: "Teraz ... w Krakowie. [ja]"
                },
                {
                    pronoun: "my",
                    sentence: "... w Poznaniu. [my]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Oni ... w Gdańsku."
                },
                {
                    pronoun: "wy",
                    sentence: "Czy ... teraz w Łodzi? [wy]"
                },
                {
                    pronoun: "my",
                    sentence: "... w Warszawie. [my]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Ona ... w Krakowie."
                },
                {
                    pronoun: "my",
                    sentence: "... w Poznaniu. [my]"
                },
                {
                    pronoun: "ja",
                    sentence: "... w Warszawie. [ja]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "... w Poznaniu. [my]"
                },
                {
                    pronoun: "ty",
                    sentence: "Gdzie ... ?"
                },
            ]
        },
        {
            infinitive: "rozumieć",
            ja: "rozumiem",
            ty: "rozumiesz",
            "on/ona/ono": "rozumie",
            my: "rozumiemy",
            wy: "rozumiecie",
            "oni/one": "rozumieją",
            exercises: [
                {
                    pronoun: "wy",
                    sentence: "Czy ... ? [wy]"
                },
                {
                    pronoun: "ty",
                    sentence: "Czy ... ? [ty]"
                },
                {
                    pronoun: "ja",
                    sentence: "Przepraszam ,nie ... . [ja]"
                },
                {
                    pronoun: "my",
                    sentence: "Przepraszamy ,nie ... . [my]"
                },
                {
                    pronoun: "oni/one",
                    sentence: " Oni nie ... po niemiecku."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Mój ojciec mnie nie ... ."
                },
                {
                    pronoun: "oni/one",
                    sentence: "Ale dzieci nie ... logiki."
                },
                {
                    pronoun: "ty",
                    sentence: "Czy naprawdę , co ... robisz? [ty]"
                },
            ]
        },
        {
            infinitive: "przepraszać",
            ja: "przepraszam",
            ty: "przepraszasz",
            "on/ona/ono": "przeprasza",
            my: "przepraszamy",
            wy: "przepraszacie",
            "oni/one": "przepraszają",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "... ,nie rozumiem. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "... , czy może Pani powtórzyć? [ja]"
                },
                {
                    pronoun: "my",
                    sentence: "...  ,nie rozumiemy. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Bardzo ... . [my]"
                },
                {
                    pronoun: "ja",
                    sentence: "Zniszczyłem część twojej pracy, ... . [ja]"
                },
            ]
        },
        {
            infinitive: "czytać",
            ja: "czytam",
            ty: "czytasz",
            "on/ona/ono": "czyta",
            my: "czytamy",
            wy: "czytacie",
            "oni/one": "czytają",
            exercises: [
                {
                    pronoun: "oni/one",
                    sentence: "One ... książkę."
                },
                {
                    pronoun: "ty",
                    sentence: "Co ... ? [ty]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Co panstwo ... ? [oni]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Co pan ... ? [on]"
                },
                {
                    pronoun: "ja",
                    sentence: "... francuski magazyn. [ja]"
                },
                {
                    pronoun: "my",
                    sentence: "... gazetę. [my]"
                },
            ]
        },
        {
            infinitive: "pytać",
            ja: "pytam",
            ty: "pytasz",
            "on/ona/ono": "pyta",
            my: "pytamy",
            wy: "pytacie",
            "oni/one": "pytają",
            exercises: [
                {
                    pronoun: "wy",
                    sentence: "O co ... ? [wy]"
                },
                {
                    pronoun: "ty",
                    sentence: "O co ... ? [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "On ... ? [on]"
                },
                {
                    pronoun: "ja",
                    sentence: "Ja ... . [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "My ... . [my]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "On ... ? [on]"
                },
            ]
        },
    ]
}

export default verbs
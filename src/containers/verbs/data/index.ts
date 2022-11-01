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
    ],
    3: [
        {
            infinitive: "mówić",
            ja: "mówię",
            ty: "mówisz",
            "on/ona/ono": "mówi",
            my: "mówimy",
            wy: "mówicie",
            "oni/one": "mówią",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "... o białasie. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Tak jak zawsze ... [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Rozumiesz o czym ... ? [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: " Krótko ...: eksploatować.. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Wiem, o czym ... [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Ledwo ... po portugalsku. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Czemu tak dziwnie ...? [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Czemu ... mi to wszystko? [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Doktorze, cokolwiek ..., ja przyjmę. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Nie, nie mam pojęcia o czym ... [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Ona ... prawdę."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Czegoś nam nie ... [on]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "... mu: Tyś powiedział. [ona]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Nie wiemy, co ... [on]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "..., że chce prywatnego spotkania. [ona]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "... po prostu, \"Nie, dziękuję.\". [on]"
                },
                {
                    pronoun: "my",
                    sentence: "... o Europie przyszłości. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "... tutaj o statystykach. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "O czym dziś ...? [my]"
                },
                {
                    pronoun: "my",
                    sentence: "... do czegoś. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "My ..., że nie!"
                },
                {
                    pronoun: "wy",
                    sentence: "Ale ...: Czemuż? [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Jak wy to ...?"
                },
                {
                    pronoun: "wy",
                    sentence: "... państwo, że popieracie te działania. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "... też: O jakaż to praca! [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Czemu nie ... nam, co mówią dyplomaci w Radzie. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Dlatego też ... takie kłamstwa. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Co oni ...? [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Tak ... wszyscy. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "... o korupcji. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "... państwo, że 23? [oni]"
                },
            ]
        },
        {
            infinitive: "lubić",
            ja: "lubię",
            ty: "lubisz",
            "on/ona/ono": "lubi",
            my: "lubimy",
            wy: "lubicie",
            "oni/one": "lubią",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "... jego teksty. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Bardzo ... kanapki z serem. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Skąd wiesz, że ... inne dziewczyny? [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "... cię o tyle. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Lubisz francuskie tosty? [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "... sushi, czyż nie? [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Tę część bardzo ...! [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "On lubi ciebie a ty ... jego. [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "On ... ciebie a ty lubisz jego."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Historia ... się powtarzać."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Nigdy nie myślałem, że to dlatego, że mnie nie ... [on]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Nikt nie ... się do tego przyznawać."
                },
                {
                    pronoun: "my",
                    sentence: "... tworzyć. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "... dawać i dajemy wiele. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "... debatować. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Cóż, ... się z tym bawić. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Co ... jeść?. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Co ... jeść?. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Dzieci go nie ..."
                },
                {
                    pronoun: "oni/one",
                    sentence: "Widocznie tak ... [oni]"
                },
                {
                    pronoun: "wy",
                    sentence: "Widocznie tak ... [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Studenci ... się bawić."
                },
                {
                    pronoun: "wy",
                    sentence: "Studenci ... się bawić."
                },
            ]
        },
        {
            infinitive: "robić",
            ja: "robię",
            ty: "robisz",
            "on/ona/ono": "robi",
            my: "robimy",
            wy: "robicie",
            "oni/one": "robią",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Co ja ...?"
                },
                {
                    pronoun: "ja",
                    sentence: " ... to dla ciebie. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "... wywiady i zdjęcia. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "..., co mogę. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Co ty ...?"
                },
                {
                    pronoun: "ty",
                    sentence: "Co ... dziś wieczorem? [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Dlaczego to ...? [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Lepiej uważaj co ... [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "... wrażenie. [ona]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "... tak każdego semestru. [on]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: " Co ona ... robi?."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Widzicie co on ...?"
                },
                {
                    pronoun: "my",
                    sentence: "Cóż, ... stosunkowo dużo. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Dziś tego nie ... [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Dlaczego to ...? [my]"
                },
                {
                    pronoun: "my",
                    sentence: "To właśnie dzisiaj ... [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Co ... w domu mojego ojca? [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Dużo bierzecie za to co ...? [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Powiesz mi dlaczego to ...? [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Dobra, ale czemu to ...? [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Dobra, ale czemu to ...? [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Widziałaś co ... [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Jak one to ...?"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Oni ... wspaniałe rzeczy."
                },
                {
                    pronoun: "oni/one",
                    sentence: "Już tego nie ... [oni]"
                }
            ]
        },
        {
            infinitive: "uczyć się",
            ja: "uczę się",
            ty: "uczysz się",
            "on/ona/ono": "uczy się",
            my: "uczymy się",
            wy: "uczycie się",
            "oni/one": "uczą się",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Ja ... języka angielskiego"
                },
                {
                    pronoun: "ty",
                    sentence: "Ty ... języka angielskiego"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "On ... języka angielskiego"
                },
                {
                    pronoun: "my",
                    sentence: "My ... języka angielskiego"
                },
                {
                    pronoun: "wy",
                    sentence: "Wy ... języka angielskiego"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Oni ... języka angielskiego"
                },
                {
                    pronoun: "ja",
                    sentence: "Ja ... języka polskiego"
                },
                {
                    pronoun: "ty",
                    sentence: "Ty ... języka polskiego"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "On ... języka polskiego"
                },
                {
                    pronoun: "my",
                    sentence: "My ... języka polskiego"
                },
                {
                    pronoun: "wy",
                    sentence: "Wy ... języka polskiego"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Oni ... języka polskiego"
                },
            ]
        },
        {
            infinitive: "tańczyć",
            ja: "tańczę",
            ty: "tańczysz",
            "on/ona/ono": "tańczy",
            my: "tańczymy",
            wy: "tańczycie",
            "oni/one": "tańczą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "... na stole. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Pięknie ... [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Miałem ostanio przyjemność widzieć jak pani ..."
                },
                {
                    pronoun: "my",
                    sentence: "Okazyjnie, ... walca w Dragonwyck. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Ludzie powinni zobaczyć, jak razem ... [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "W Indiach mężczyźni często ... ze sobą."
                },
            ]
        },
        {
            infinitive: "brać",
            ja: "biorę",
            ty: "bierzesz",
            "on/ona/ono": "bierze",
            my: "bierzemy",
            wy: "bierzecie",
            "oni/one": "biorą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Jeśli czegoś potrzebuję, ... to. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Na wrzód ... połówkę tej tabletki. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "... $50 za godzinę konsultacji. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Jak ... szklankę wody to ją kończ. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Nie wierzę, że ... kasę od Masona. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Ale kiedy umrze, ... wszystko. [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Nie wiem, skąd się ... [on]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "W wystawie udział ... ponad 100 krajów."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Każdy ... długopis i kartkę papieru."
                },
                {
                    pronoun: "my",
                    sentence: "Skąd ... te modele? [my]"
                },
                {
                    pronoun: "my",
                    sentence: "... ich wiele. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Nie ... pieniędzy od innych narodów. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Zwierzę, od którego ... mleko jest waszą matką. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: " Skąd ... pieniądze? [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Skąd ... pieniądze? [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Skąd się ... te zalety?"
                },
            ]
        },
        {
            infinitive: "dawać",
            ja: "daję",
            ty: "dajesz",
            "on/ona/ono": "daje",
            my: "dajemy",
            wy: "dajecie",
            "oni/one": "dają",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Kiedy ... tobie słowo, zdmuchujesz jego głowę. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Stałeś się mężczyzną, dlatego ... ci to. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Może ... temu miastu drugą szansę. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Albo ... mi pieniądze, albo wciskam guzik. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Ale ... koncerty... więc przezwyciężysz to. [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Teraz ... ci rozkaz. [on]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "18 trójek ... 54."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Co ... przystąpienie? [ono]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Historia ... nam nauczki."
                },
                {
                    pronoun: "my",
                    sentence: "... tobie białe kartki. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "... sobą manipulować. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "My im to ..."
                },
                {
                    pronoun: "wy",
                    sentence: "Trzymam towar tak jak mi go ... [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Nie chce tego co mu ... [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "... tyle ile zechcesz. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Żarówki ... światło dzienne."
                },
                {
                    pronoun: "oni/one",
                    sentence: "Ludzie ... trzy dolary."
                }
            ]
        },
        {
            infinitive: "widzieć",
            ja: "widzę",
            ty: "widzisz",
            "on/ona/ono": "widzi",
            my: "widzimy",
            wy: "widzicie",
            "oni/one": "widzą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "... dym! [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Nie ... jej. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "... to tak wyraźnie. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Ja jednak jej nie ... [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "... go? [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Dalej, co ...? [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Widzisz ten mur z kamieni? [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "... pan coś niezwykłego?"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Kto nie ...?"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "... pan strach i gniew. [ono]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Czas, nikt nie ... czasu."
                },
                {
                    pronoun: "my",
                    sentence: "Co ...? [my]"
                },
                {
                    pronoun: "my",
                    sentence: "... je. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Obecnie ... rezultaty. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "... różnicę? [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "... problem. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Czy ... ten telefon komórkowy? [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "...? [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "... dorosłych. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Niektórzy ... dalmatyńczyka."
                },
                {
                    pronoun: "oni/one",
                    sentence: "Tutaj ... państwo wybrane ujęcie."
                }
            ]
        },
    ]
}

export default verbs


// {
//     infinitive: "dać",
//         ja: "dam",
//     ty: "dasz",
//     "on/ona/ono": "da",
//     my: "damy",
//     wy: "dacie",
//     "oni/one": "dadzą",
//     exercises: [
//     {
//         pronoun: "ja",
//         sentence: "Później ... wam polatać. [ja]"
//     },
//     {
//         pronoun: "ja",
//         sentence: "Dzięki, ... ci znać. [ja]"
//     },
//     {
//         pronoun: "ja",
//         sentence: "... wam przykład. [ja]"
//     },
//     {
//         pronoun: "ty",
//         sentence: "Teraz powiedz komu to ...? [ty]"
//     },
//     {
//         pronoun: "ty",
//         sentence: "Ty mi ... kasę, a ja ci dam przepis. [ty]"
//     },
//     {
//         pronoun: "ty",
//         sentence: "Ale kiedy umrze, ... wszystko. [ty]"
//     },
//     {
//         pronoun: "on/ona/ono",
//         sentence: "Nie wiem, skąd się ... [on]"
//     },
//     {
//         pronoun: "on/ona/ono",
//         sentence: "W wystawie udział ... ponad 100 krajów."
//     },
//     {
//         pronoun: "on/ona/ono",
//         sentence: "Każdy ... długopis i kartkę papieru."
//     },
//     {
//         pronoun: "my",
//         sentence: "Skąd ... te modele? [my]"
//     },
//     {
//         pronoun: "my",
//         sentence: "... ich wiele. [my]"
//     },
//     {
//         pronoun: "my",
//         sentence: "Nie ... pieniędzy od innych narodów. [my]"
//     },
//     {
//         pronoun: "wy",
//         sentence: "Zwierzę, od którego ... mleko jest waszą matką. [wy]"
//     },
//     {
//         pronoun: "wy",
//         sentence: " Skąd ... pieniądze? [wy]"
//     },
//     {
//         pronoun: "oni/one",
//         sentence: "Skąd ... pieniądze? [oni]"
//     },
//     {
//         pronoun: "oni/one",
//         sentence: "Skąd się ... te zalety?"
//     },
// ]
// },
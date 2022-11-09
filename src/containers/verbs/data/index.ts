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
                    sentence: "Ale ... koncerty. Więc przezwyciężysz to. [ty]"
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
                    sentence: "... ten mur z kamieni? [ty]"
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
    ],
    4: [
        {
            infinitive: "słyszeć",
            ja: "słyszę",
            ty: "słyszysz",
            "on/ona/ono": "słyszy",
            my: "słyszymy",
            wy: "słyszycie",
            "oni/one": "słyszą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Teraz ..., że zmieniłeś zdanie. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Takie historyjki ... pięć razy dziennie. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Rodney, ... mnie? [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Jeśli ktoś mnie ..., odpowiedzcie."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "W dyskotece nikt mnie nie ..."
                },
                {
                    pronoun: "my",
                    sentence: "Ale potem, ... dźwięk. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Obecnie w radiu ... prawie wszystko. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Jak ..., muszę rozwiązać problem. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Jeśli mnie ..., odezwijcie się. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Kiedy ... ostry dźwięk, przewracają się. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Petrodesie, zmarli ... nasze myśli. [oni]"
                },
            ]
        },
        {
            infinitive: "słuchać",
            ja: "słucham",
            ty: "słuchasz",
            "on/ona/ono": "słucha",
            my: "słuchamy",
            wy: "słuchacie",
            "oni/one": "słuchają",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Mimo takich opinii ... wszystkich krytyk. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Kiedy ... twojej mamy, słyszę jego śmiech. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Valera, dlaczego ... tego pajaca? [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Potem ci mówi czego dokładnie ... [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Kiedy mówi, każdy ... go."
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Twój ojciec już mnie nie ... [on]"
                },
                {
                    pronoun: "my",
                    sentence: "Mamy brzydkie ubrania i ... złej muzyki. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "W tym miejscu ... moich nagrań. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Jeśli tego ..., jesteście ruchem oporu. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Jesteście tam gdzieś ukryci i ... tego. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Ludzie nie ... muzyki dla ironii. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Oni oglądają telewizję, ... radia. [oni]"
                },
            ]
        },
        {
            infinitive: "czuć",
            ja: "czuję",
            ty: "czujesz",
            "on/ona/ono": "czuje",
            my: "czujemy",
            wy: "czujecie",
            "oni/one": "czują",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Nagle ... się naprawdę dobrze o jutrze. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "To będzie dobry występ, ... to. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Nieważne jak się ..., Henry. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Jak się ... w tym wspaniałym dniu? [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Moreno ... presję. [on]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Panna Trixie nie ... się dobrze. [ona]"
                },
                {
                    pronoun: "my",
                    sentence: "Widzisz, ... się tak zagubieni. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Szczerze, ... dyskomfort pijąc ze starszym oficerem. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "To co ... to magia aktywująca medalion. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Wszystko co ..., jest ważne. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Nasi partnerzy ... potencjał tej produkcji. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Ale jeśli dźgnąć ich widelcem to ... [oni]"
                },
            ]
        },
        {
            infinitive: "myśleć",
            ja: "myślę",
            ty: "myślisz",
            "on/ona/ono": "myśli",
            my: "myślimy",
            wy: "myślicie",
            "oni/one": "myślą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Ok, ... że potrzebujemy nowej historyjki. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Mogę teraz powiedzieć o czym ... [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "MacGyver, wiem o czym ... [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Teraz ... jak przywódca swoich ludzi. [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Oczywiście Hex tak naprawdę nie ... [on]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "On nie umrze, on ... [on]"
                },
                {
                    pronoun: "my",
                    sentence: "Zupełnie jakby wiedzieli, o czym ... [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Szefie, ... o podłożeniu telefonu. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "To nie jest tak jak ... [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Może ... o grubym gumowym kombinezonie. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Małpy nie ... w kategoriach rodzaju. [one]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Jeśli ... o tym poważnie, znajdą sposób. [oni]"
                },
            ]
        },
    ],
    5: [
        {
            infinitive: "jeść",
            ja: "jem",
            ty: "jesz",
            "on/ona/ono": "je",
            my: "jemy",
            wy: "jecie",
            "oni/one": "jedzą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "... chleb. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "... mięso. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Co ... ? [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "... kurczaka. [ona]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "... frytki. [on]"
                },
                {
                    pronoun: "my",
                    sentence: "... ryby. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "... makaron. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "... zupę. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "... bułkę. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "... masło. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "... jabłko. [oni]"
                },
            ]
        },
        {
            infinitive: "wiedzieć",
            ja: "wiem",
            ty: "wiesz",
            "on/ona/ono": "wie",
            my: "wiemy",
            wy: "wiecie",
            "oni/one": "wiedzą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Nie ..., gdzie będziesz teraz spał. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Nie ..., ale możemy spróbować. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Oczywiście ..., czym jest źródło. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Nie ... gdzie mogę go znaleźć. [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Ona nie ... jak opowiadać historie. [ona]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Niewiele osób ..., co czujesz. [on]"
                },
                {
                    pronoun: "my",
                    sentence: "Dobrze, ... jak weszli tutaj. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Jednak wiemy, że jesteśmy przeklęci. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Panie, ... gdzie nas znaleźć. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Jak ... dzisiaj są urodziny papieża. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Byli częścią operacji i sporo ... [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Nie ..., co to Starbucks. [oni]"
                },
            ]
        },
        {
            infinitive: "chodzić",
            ja: "chodzę",
            ty: "chodzisz",
            "on/ona/ono": "chodzi",
            my: "chodzimy",
            wy: "chodzicie",
            "oni/one": "chodzą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Cały czas ... tam z przyjaciółmi. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Raz w miesiącu ... do fryzjera. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Nie narzekam, ale ... za szybko. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Ty chyba nie ... do klubów. [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Codziennie ... na stacje szukając mordercy. [ona]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Cała banda kochasiów ... do kościoła."
                },
                {
                    pronoun: "my",
                    sentence: "Co niedziela ... do moich rodziców. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Dlaczego ..., a nie siedzimy. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Gdzie jeszcze ... poza domem i szkołą? [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Ostatnio ... na dużo kursów dla par. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Tacy przyjaciele nie ... pod rękę. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Dzieci ... do ogrodu i grać. [oni]"
                },
            ]
        },
        {
            infinitive: "chcieć",
            ja: "chcę",
            ty: "chcesz",
            "on/ona/ono": "chce",
            my: "chcemy",
            wy: "chcecie",
            "oni/one": "chcą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Przypadkiem uruchomiłam alarm, ... odwołać. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Nie ... bohatera, ... męża. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Więc ... dostać swój kawałek ciasta. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Wypuść nas, a stanę, gdzie ... [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Cóż naprawdę nie ... otworzyć restaurację. [ona]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Jimmy tez ... ci cos powiedziec."
                },
                {
                    pronoun: "my",
                    sentence: "Jesteśmy wolni, jeżeli ... być. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Ale teraz, ... być wybierającymi. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Jeśli ... pograć, dajcie znać. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Jeśli ... mnie śledzić, śmiało. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Pytasz, co ..., i przynosisz im. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Niektórzy w tym domu ... spać. [oni]"
                },
            ]
        },
        {
            infinitive: "pisać",
            ja: "piszę",
            ty: "piszesz",
            "on/ona/ono": "pisze",
            my: "piszemy",
            wy: "piszecie",
            "oni/one": "piszą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "On nienawidzi kiedy do ciebie ... [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Ale słuchaj, ... coś dla ciebie. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Pomijając jakość ... tyle co autor. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "To jest fantastyczne, że ... [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Twój ojciec ..., że lubisz samotność. [ona]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "I stale coś ... w notatnikach. [on]"
                },
                {
                    pronoun: "my",
                    sentence: "Kiedy ..., kodujemy nasze myśli. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Jestem u koleżanki, ... referat. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Tu nie chodzi o żadną książkę, którą ... [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Ale czy nie ... do siebie? [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Dlatego ... najlepsze piosenki o miłości. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Nie są tak zdrowe jak ... na opakowaniu. [oni]"
                },
            ]
        },
        {
            infinitive: "móc",
            ja: "mogę",
            ty: "możesz",
            "on/ona/ono": "może",
            my: "możemy",
            wy: "możecie",
            "oni/one": "mogą",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Nie ... tego naprawić. [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "Nie ... żyć wiedząc, że ... zginąć. [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Podobno ... rozmawiać z duszami zmarłych. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Następnie ... usunąć resztki normalnej serwetki. [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Patrzcie, ... mówić prawdę. [co]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Jednak tylko on ... podjąć decyzję. [on]"
                },
                {
                    pronoun: "my",
                    sentence: "Razem ... ziścić nasze niemożliwe marzenie.[my]"
                },
                {
                    pronoun: "my",
                    sentence: "Przynajmniej ... spróbować odnaleźć jego córkę. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Podobno ... ściągnąć z niej DNA. [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Na zdjęciu poniżej ... zobaczyć różnicę. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Sny ... być manifestacją naszej podświadomości.. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Deweloperzy ... korzystać z biblioteki do tworzenia złożonych eksploracji danych. [oni]"
                },
            ]
        },
        {
            infinitive: "pracować",
            ja: "pracuję",
            ty: "pracujesz",
            "on/ona/ono": "pracuje",
            my: "pracujemy",
            wy: "pracujecie",
            "oni/one": "pracują",
            exercises: [
                {
                    pronoun: "ja",
                    sentence: "Jestem dobrą osobą i ciężko ... [ja]"
                },
                {
                    pronoun: "ja",
                    sentence: "A kiedy jestem zdenerwowana, ... [ja]"
                },
                {
                    pronoun: "ty",
                    sentence: "Przecież ... w klinice kontroli urodzeń. [ty]"
                },
                {
                    pronoun: "ty",
                    sentence: "Słyszałem, że ... nad książką. [ty]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Obecnie ... nad drugą książką poetycką. [ona]"
                },
                {
                    pronoun: "on/ona/ono",
                    sentence: "Zawiadomcie Philippe'a, że jutro ... [on]"
                },
                {
                    pronoun: "my",
                    sentence: "Cały tydzień ... nad tymi zagrywkami. [my]"
                },
                {
                    pronoun: "my",
                    sentence: "Przez ich zaginięcie, ... sami. [my]"
                },
                {
                    pronoun: "wy",
                    sentence: "Nie, ale wiem jak wy ... [wy]"
                },
                {
                    pronoun: "wy",
                    sentence: "Nie wiedziałam, że ... dzisiaj. [wy]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Niektórzy tutaj nie ... w banku. [oni]"
                },
                {
                    pronoun: "oni/one",
                    sentence: "Kobiety w mojej rodzinie nie ... [one]"
                },
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
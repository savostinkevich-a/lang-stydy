import React from 'react';
import {Route, Routes} from "react-router-dom";
import routes from "./index";
import VocabularyPage from "../../containers/vocabulary/pages/VocabularyPage";
import VocabularyLecturePage from "../../containers/vocabulary/pages/VocabularyLecturePage";
import VocabularyNounsPage from "../../containers/vocabulary/pages/VocabularyNounsPage";
import HomePage from "../pages/HomePage";
import VocabularyAdjectivesPage from "../../containers/vocabulary/pages/VocabularyAdjectivesPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"}>
                <Route index element={<HomePage/>}/>
                <Route path={routes.VERBS} element={<h1>VERBS</h1>}/>
                <Route path={routes.VOCABULARY}>
                    <Route index element={<VocabularyPage/>}/>
                    <Route path={":lecture"}>
                        <Route index element={<VocabularyLecturePage/>}/>
                        <Route path={"nouns"} element={<VocabularyNounsPage/>}/>
                        <Route path={"adjectives"} element={<VocabularyAdjectivesPage/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRouter;
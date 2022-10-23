import React from 'react';
import {Route, Routes} from "react-router-dom";
import LecturesIndexPage from "../../lectures/pages/LecturesIndexPage";
import LecturesDetailPage from "../../lectures/pages/LecturesDetailPage";
import LecturesNounsPage from "../../lectures/pages/LecturesNounsPage";
import LecturesAdjectivesPage from "../../lectures/pages/LecturesAdjectivesPage";
import LecturesVerbsPage from "../../lectures/pages/LecturesVerbsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"}>
                <Route index element={<LecturesIndexPage/>}/>
                <Route path={":lecture"}>
                    <Route index element={<LecturesDetailPage/>}/>
                    <Route path={"nouns"} element={<LecturesNounsPage/>}/>
                    <Route path={"adjectives"} element={<LecturesAdjectivesPage/>}/>
                    <Route path={"verbs"} element={<LecturesVerbsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRouter;
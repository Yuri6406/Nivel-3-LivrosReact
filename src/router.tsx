import {
    Routes,
    Route,
    Link
} from "react-router-dom"

import Home from "./page/Home";
import LivroLista from "./components/LivroLista";
import LivroDados from "./components/LivroDados";

function MainRoutes() {

    return (

        <>
            <Home />
            <Routes>
                <Route path="/" element={<LivroLista />} />
                <Route path="dados" element={<LivroDados />} />
            </Routes>
        </>
    );

}

export default MainRoutes;
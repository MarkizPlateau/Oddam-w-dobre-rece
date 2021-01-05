import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constans/routes";

const Signout = () => {

    return (
        <>
            <section className={"section-signout"}>
                <h2 className={"title-decoration"}> Wylogowanie nastąpiło pomyślnie <div></div></h2>
                <button><Link to={ROUTES.HOME}> Strona główna </Link></button>
            </section>
        </>
    )
}

export default Signout;
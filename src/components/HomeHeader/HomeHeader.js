import React from "react";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constans/routes";
import { ReactComponent as Decoration} from "../../assets/Decoration.svg";


const HomeHeader = () => {
    return (
        <>
                <HomeNavigation />
                <section className={"header-section"}>
                    <h1 className={"header-section-title"}>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <Decoration className={"header-section-decoration"} />
                    <div className={"header-section-buttons"}>
                        <Link to={ROUTES.SIGNIN}> ODDAJ RZECZY </Link>
                        <Link to={ROUTES.SIGNIN}> ZORGANIZUJ ZBIÓRKĘ </Link>
                    </div>
                </section>

        </>
    )
}

export default HomeHeader;
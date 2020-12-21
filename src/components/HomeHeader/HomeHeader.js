import React from "react";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constans/routes";
import homeImage from "../../assets/Home-Hero-Image.jpg";
import { ReactComponent as Decoration} from "../../assets/Decoration.svg";


const HomeHeader = () => {
    return (
        <>
            {/*<div className={"header-image-container"}>*/}
                {/*<img src={homeImage} alt={"Some stuff (keyboard, clock etc.) inside the box"} className={"header-background-picture"}></img>*/}
            {/*</div>*/}
                <HomeNavigation />
                <section className={"header-section"}>
                    <h1 className={"header-section-title"}>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <Decoration className={"header-section-decoration"} />
                    <div className={"header-section-buttons"}>
                        <Link to={ROUTES.SIGNIN}> Oddaj rzeczy </Link>
                        <Link to={ROUTES.SIGNIN}> Zorganizuj zbiórkę </Link>
                    </div>
                </section>

        </>
    )
}

export default HomeHeader;
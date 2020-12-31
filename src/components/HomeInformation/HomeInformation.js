import React from "react";
import {ReactComponent as Decoration2} from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constans/routes";


const HomeInformation = () => {
    return (
        <>
            <FourSteps/>
            <div className={"background-for-information"}>
                <div className={"container container-information"}>

                    <div className={"information-column"}>
                        <div className={"information-icon information-icon-1"}/>
                        <p className={"information-title"}> Wybierz rzeczy </p>
                        <p className={"information-description"}> ubrania, zabawki, sprzęt i inne </p>
                    </div>
                    <div className={"information-column"}>
                        <div className={"information-icon information-icon-2"}/>
                        <p className={"information-title"}> Spakuj je </p>
                        <p className={"information-description"}> skorzystaj z worków na śmieci </p>
                    </div>
                    <div className={"information-column"}>
                        <div className={"information-icon information-icon-3"}/>
                        <p className={"information-title"}> Zdecyduj komu chcesz pomóc </p>
                        <p className={"information-description"}> wybierz zaufane miejsce </p>
                    </div>
                    <div className={"information-column"}>
                        <div className={"information-icon information-icon-4"}/>
                        <p className={"information-title"}> Zamów kuriera </p>
                        <p className={"information-description"}> kurier przyjedzie w dogodnym terminie </p>
                    </div>
                </div>
            </div>
            <Link to={ROUTES.SIGNIN}> ODDAJ RZECZY </Link>

        </>
    )
}

const FourSteps = () => {
    return (
        <>
            <h2> Wystarczą 4 proste kroki </h2>
            <Decoration2/>
        </>
    )
}

export default HomeInformation;
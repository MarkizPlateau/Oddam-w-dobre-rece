import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constans/routes";
import { Link as LinkScroll } from "react-scroll";

const HomeNavigation = () => {

    return (
        <nav className={"header-navigation"}>
                <ul className={"header-top-navigation"}>
                    <li>
                        <Link to={ROUTES.SIGNIN}> Zaloguj </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SIGNUP}> Załóż konto </Link>
                    </li>
                </ul>
                <ul className={"header-bottom-navigation"}>
                    <li>
                        {/*sprawdź jak to działa*/}
                        <LinkScroll
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Start
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            O co chodzi?
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            O nas
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Fundacja i organizacje
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Kontakt
                        </LinkScroll>
                    </li>
                </ul>
        </nav>
    )
}

export default HomeNavigation;
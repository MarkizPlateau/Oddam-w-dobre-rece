import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeThreeColumns from "../HomeThreeColumns/HomeThreeColumns";

const Home = () => {
    return (
        <>
            <header>
                <div className={"container header-container"}>
                    <HomeHeader />
                </div>
            </header>

            <section className={"section-three-columns"}>
                <div className={"container container-three-columns"}>
                    <HomeThreeColumns />
                </div>
            </section>
        </>

    )
}

export default Home;
import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeThreeColumns from "../HomeThreeColumns/HomeThreeColumns";
import HomeInformation from "../HomeInformation/HomeInformation";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";

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
            <section className={"section-information"}>
                <HomeInformation />
            </section>
            <article className={"article-aboutus"}>
                <HomeAboutUs />
            </article>

        </>

    )
}

export default Home;
import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeThreeColumns from "../HomeThreeColumns/HomeThreeColumns";
import HomeInformation from "../HomeInformation/HomeInformation";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import HomeMain from "../HomeMain/HomeMain";
import HomeForm from "../HomeForm/HomeForm";
import HomeFooter from "../HomeFooter/HomeFooter";

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
            <section className={"section-information"} id={"o-co-chodzi"}>
                <HomeInformation />
            </section>
            <article className={"article-aboutus"} id={"o-nas"}>
                <HomeAboutUs />
            </article>
            <main className={"container container-main"} id={"main"}>
                <HomeMain />
            </main>
            <section className={"section-form"} id={"contact"}>
                <HomeForm />
                <HomeFooter />
            </section>

        </>

    )
}

export default Home;
import React, { useState } from "react";
import {ReactComponent as Decoration4} from "../../assets/Decoration.svg";

const HomeMain = () => {

    const [article, setArticle] = useState(1);

    const toFoundation = () => {
        setArticle(prevState => 1)
    }
    const toOranization = () => {
        setArticle(prevState => 2)
    }
    const toLokal = () => {
        setArticle(prevState => 3)
    }

    return (
        <>

            <h2> Komu pomagamy </h2>
            <Decoration4 />
            <div className={"main-buttons"}>
                <button className={"button-foundation"} onClick={toFoundation}> Fundacjom </button>
                <button className={"button-organization"} onClick={toOranization}> Organizacjom pozarządowym </button>
                <button className={"button-lokal"} onClick={toLokal}> Lokalnym zbiórkom </button>
            </div>
            {article === 1 && <ArticleFoundation /> }
            {article === 2 && <ArticleOrganization /> }
            {article === 3 && <ArticleLokal /> }

        </>
    )
}

const ArticleFoundation = () => {

    const [page, setPage] = useState(1);

    const pageChange1 = () => {
        setPage(prevState => 1)
    }

    const pageChange2 = () => {
        setPage(prevState => 2)
    }

    const pageChange3 = () => {
        setPage(prevState => 3)
    }

    return (
        <>
            {page === 1 && <ArticleFoundation1 />}
            {page === 2 && <ArticleFoundation2 />}
            {page === 3 && <ArticleFoundation3 />}
            <div>
                <button className={"button-page"} onClick={pageChange1}> 1 </button>
                <button className={"button-page"} onClick={pageChange2}> 2 </button>
                <button className={"button-page"} onClick={pageChange3}> 3 </button>
            </div>
        </>
    )
}


const ArticleFoundation1 = () => {
    return (
        <article className={"main-article"}>
            <p className={"main-article-description"}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className={"article-row"}>
                <div>Fundacja “Dbam o Zdrowie” <br/> Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</div>
                <div>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
            </div>
            <div className={"article-row"}>
                <div>Fundacja “Dla dzieci” <br/> Cel i misja: Pomoc dzieciom z ubogich rodzin.</div>
                <div>ubrania, meble, zabawki</div>
            </div>
            <div className={"article-row"}>
                <div>Fundacja “Bez domu” <br/> Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</div>
                <div>ubrania, jedzenie, ciepłe koce</div>
            </div>
        </article>
    )
}

const ArticleFoundation2 = () => {
    return (
        <article className={"main-article"}>
            <p className={"main-article-description"}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className={"article-row"}>
                <div>Fundacja “Dbam o Zdrowie” <br/> Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej. 2</div>
                <div>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
            </div>
            <div className={"article-row"}>
                <div>Fundacja “Dla dzieci” <br/> Cel i misja: Pomoc dzieciom z ubogich rodzin. 2</div>
                <div>ubrania, meble, zabawki</div>
            </div>
            <div className={"article-row"}>
                <div>Fundacja “Bez domu” <br/> Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania. 2</div>
                <div>ubrania, jedzenie, ciepłe koce</div>
            </div>
        </article>
    )
}

const ArticleFoundation3 = () => {
    return (
        <article className={"main-article"}>
            <p className={"main-article-description"}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className={"article-row"}>
                <div>Fundacja “Dbam o Zdrowie” <br/> Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.3</div>
                <div>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
            </div>
            <div className={"article-row"}>
                <div>Fundacja “Dla dzieci” <br/> Cel i misja: Pomoc dzieciom z ubogich rodzin.3</div>
                <div>ubrania, meble, zabawki</div>
            </div>
            <div className={"article-row"}>
                <div>Fundacja “Bez domu” <br/> Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.3</div>
                <div>ubrania, jedzenie, ciepłe koce</div>
            </div>
        </article>
    )
}


const ArticleOrganization = () => {
    return (
        <>
            <article className={"main-article"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </article>
        </>
    )
}

const ArticleLokal = () => {
    return (
        <>
            <article className={"main-article"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </article>
        </>
    )
}

export default HomeMain;
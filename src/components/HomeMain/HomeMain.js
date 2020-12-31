import React, { useState } from "react";
import {ReactComponent as Decoration4} from "../../assets/Decoration.svg";

const HomeMain = () => {

    const [article, setArticle] = useState("toFoundation");

    const toFoundation = () => {
        setArticle(prevState => "toFoundation")
    }
    const toOrganization = () => {
        setArticle(prevState => "toOrganization")
    }
    const toLokal = () => {
        setArticle(prevState => "toLokal")
    }

    return (
        <>

            <h2> Komu pomagamy </h2>
            <Decoration4 />
            <div className={"main-buttons"}>
                <button className={"button-foundation"} onClick={toFoundation}> Fundacjom </button>
                <button className={"button-organization"} onClick={toOrganization}> Organizacjom pozarządowym </button>
                <button className={"button-lokal"} onClick={toLokal}> Lokalnym zbiórkom </button>
            </div>
            <article className={"main-article"}>
                {article === "toFoundation" && <ArticleFoundation /> }
                {article === "toOrganization" && <ArticleOrganization /> }
                {article === "toLokal" && <ArticleLokal /> }
            </article>

        </>
    )
}

const ArticleFoundation = () => {

    const list = [
        {id:1, name: "Dbam o Zdrowie", description: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", stuff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"},
        {id:2, name: "Dla dzieci", description: "Pomoc dzieciom z ubogich rodzin.", stuff: "ubrania, meble, zabawki"},
        {id:3, name: "Bez domu", description: "Pomoc dla osób nie posiadających miejsca zamieszkania.", stuff: "ubrania, jedzenie, ciepłe koce"},
        {id:4, name: "Foundation", description: "Description", stuff: "items"},
        {id:5, name: "Foundation", description: "Description", stuff: "items"},
        {id:6, name: "Foundation", description: "Description", stuff: "items"},
        {id:7, name: "Foundation", description: "Description", stuff: "items"},
    ]

    // const [page, setPage] = useState(1);
    const [elementsToShow, setElementsToShow] = useState(list.slice(0,3));

    // const pageChange1 = () => {
    //     setPage(prevState => 1)
    // }
    //
    // const pageChange2 = () => {
    //     setPage(prevState => 2)
    // }
    //
    // const pageChange3 = () => {
    //     setPage(prevState => 3)
    // }

    return (
        <>
            <p className={"main-article-description"}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            {elementsToShow.map(fund => (
                <div className={"article-row"}>
                    <div>Fundacja {fund.name} <br/> Cel i misja {fund.description}</div>
                    <div>{fund.stuff}</div>
                </div>
            ))}
            <Pagination qtyPerPage={3} items={list} actionToUpdateList={setElementsToShow}/>
            {/*{page === 1 && <ArticleFoundation1 />}*/}
            {/*{page === 2 && <ArticleFoundation2 />}*/}
            {/*{page === 3 && <ArticleFoundation3 />}*/}
            {/*<div>*/}
            {/*    <button className={"button-page"} onClick={pageChange1}> 1 </button>*/}
            {/*    <button className={"button-page"} onClick={pageChange2}> 2 </button>*/}
            {/*    <button className={"button-page"} onClick={pageChange3}> 3 </button>*/}
            {/*</div>*/}
        </>
    )
}

const Pagination = ({qtyPerPage, items, actionToUpdateList}) =>{
    const totalPages = Math.ceil(items.length / qtyPerPage);

    const pages = [];
    for (let i = 1; i <= totalPages ; i++) {
        pages.push(i);
    }

    const handleChangePage = pageNumber => {
        const startIndex = (pageNumber-1)*qtyPerPage;
        const endIndex = pageNumber*qtyPerPage;
        const elementsToShow = items.slice(startIndex, endIndex);
        actionToUpdateList(elementsToShow);
    }

    return (
        <>
            <div className={`pagination-box ${pages <= 1 && "pagination-hidden"}`} >
              {pages.map( pageNumber => <button key={pageNumber} onClick={ e => handleChangePage(pageNumber)}>{pageNumber}</button>)}
            </div>
        </>
    );
}


const ArticleFoundation1 = () => {
    return (
        <>
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
        </>
    )
}


const ArticleOrganization = () => {
    const list = [
        {id:1, name: "Lorem Ipsum 1", description: "Quis varius quam quisque id diam vel quam elementum pulvinar.", stuff: "Egestas, sed, tempus"},
        {id:2, name: "Lorem Ipsum 2", description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", stuff: "Ut, aliquam, purus, sit, amet"},
        {id:3, name: "Lorem Ipsum 3", description: "Scelerisque in dictum non consectetur a erat nam.", stuff: "Mi, quis, hendrerit, dolor"},
        {id:4, name: "Lorem Ipsum 4", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quo.", stuff: "items"},
        {id:5, name: "Lorem Ipsum 5", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos obcaecati omnis suscipit.", stuff: "items"},
        {id:6, name: "Lorem Ipsum 6", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum.", stuff: "items"},
    ]

    const [elementsToShow, setElementsToShow] = useState(list.slice(0,3));

    return (
        <>
            <p className={"main-article-description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            {elementsToShow.map(fund => (
                <div className={"article-row"}>
                    <div>Fundacja {fund.name} <br/> Cel i misja {fund.description}</div>
                    <div>{fund.stuff}</div>
                </div>
            ))}
            <Pagination qtyPerPage={3} items={list} actionToUpdateList={setElementsToShow}/>
        </>
    )
}

const ArticleLokal = () => {
    const list = [
        {id:1, name: "Lorem Ipsum 1", description: "Quis varius quam quisque id diam vel quam elementum pulvinar.", stuff: "Egestas, sed, tempus"},
        {id:2, name: "Lorem Ipsum 2", description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", stuff: "Ut, aliquam, purus, sit, amet"},
        {id:3, name: "Lorem Ipsum 3", description: "Scelerisque in dictum non consectetur a erat nam.", stuff: "Mi, quis, hendrerit, dolor"},
    ]

    const [elementsToShow, setElementsToShow] = useState(list.slice(0,3));

    return (
        <>
            <p className={"main-article-description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            {elementsToShow.map(fund => (
                <div className={"article-row"}>
                    <div>Zbiórka {fund.name} <br/> Cel i misja {fund.description}</div>
                    <div>{fund.stuff}</div>
                </div>
            ))}
            <Pagination qtyPerPage={3} items={list} actionToUpdateList={setElementsToShow}/>
        </>
    )
}

export default HomeMain;
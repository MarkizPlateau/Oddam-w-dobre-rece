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
    const toLocal = () => {
        setArticle(prevState => "toLocal")
    }

    return (
        <>

            <h2> Komu pomagamy </h2>
            <Decoration4 />
            <div className={"main-buttons"}>
                <button className={"button-foundation"} onClick={toFoundation}> Fundacjom </button>
                <button className={"button-organization"} onClick={toOrganization}> Organizacjom pozarządowym </button>
                <button className={"button-local"} onClick={toLocal}> Lokalnym zbiórkom </button>
            </div>
            <article className={"main-article"}>
                {article === "toFoundation" && <ArticleFoundation /> }
                {article === "toOrganization" && <ArticleOrganization /> }
                {article === "toLocal" && <ArticleLocal /> }
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


    const [elementsToShow, setElementsToShow] = useState(list.slice(0,3));


    return (
        <>
            <p className={"main-article-description"}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            {elementsToShow.map(fund => (
                <div key={fund.id} className={"article-row"}>
                    <div>Fundacja {fund.name} <br/> Cel i misja {fund.description}</div>
                    <div>{fund.stuff}</div>
                </div>
            ))}
            <Pagination qtyPerPage={3} items={list} actionToUpdateList={setElementsToShow}/>
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

const ArticleLocal = () => {
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
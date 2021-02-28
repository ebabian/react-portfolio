import React, {useState} from 'react';
import './Projects.css';


const ArtPortfolio = () => {

    const [desc7, showDesc7] = useState(false)
    const [desc8, showDesc8] = useState(false)


    function toggleDescription(event) {
        if(event.target.className === 'desc7') {
            showDesc7(!desc7);
        } else if (event.target.className === 'desc8') {
            showDesc8(!desc8);
        }
    }
    return (
        <>
        {/* <h2 className="design-h2">Design & Production Portfolio</h2> */}
        <div className="proj-wrapper2">
            {/* NYT Holocaust Survivors */}
            <div className="img-wrapper fade-in">
                <a href="https://www.nytimes.com/interactive/2020/01/24/opinion/auschwitz-anniversary-holocaust.html"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src="https://i.imgur.com/9xEE0wS.png" alt="NYT Survivors"/>
                </a>
                <h4 id="proj-title">SURVIVORS: Faces of life after the Holocaust</h4>
                <h5 id="proj-description" className="desc" 
                onClick={toggleDescription}>Book Design, Adobe Suite 
                    
                    {!desc7 ? 
                       ( <img 
                            onClick={toggleDescription}
                            className="desc7"
                            id="proj-arrow" 
                            alt="arrow down"
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc7"
                        alt="arrow up"
                        id="proj-up-arrow"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc7 ? <p id="proj-details" className="fade-in">I supported Martin Schoeller with one of his most influential projects: Survivors, where he partnered with Yad Vashem to photograph 75 Holocaust survivors to honor the 75 years since the liberation of Auschwitz.<br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://martinschoeller.com/EXHIBITIONS/Survivors,-Zeche-Zollverein,-Essen,-2020/1"
                        rel="noreferrer"
                        target="_blank">Martin Schoeller</a>
                    </p>
                    : ("")}
                </h5>
            </div>


             {/* Exhibtion in Germany*/}
             <div className="img-wrapper fade-in">
                <a href="https://www.nrw-forum.de/en/exhibitions/martin-schoeller"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src="https://i.imgur.com/UvP6EFk.png" alt="Martin Schoeller Exhbition"/>
                </a>
                <h4 id="proj-title">Works, NRW Forum, Dusseldorf</h4>
                <h5 id="proj-description" className="desc" 
                onClick={toggleDescription}>Assist Curate Exhibition
                    
                    {!desc8 ? 
                       ( <img 
                            onClick={toggleDescription}
                            className="desc8"
                            id="proj-arrow" 
                            alt="arrow down"
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc8"
                        alt="arrow up"
                        id="proj-up-arrow"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc8 ? <p id="proj-details" className="fade-in">Martin Schoeller is one of the most famous and sought-after photographers in the world. Barack Obama, Angelina Jolie, George Clooney, and Angela Merkel have all stood before his camera. But he has also taken portraits of homeless people, drag queens, and bodybuilders. We present the most comprehensive exhibition of his work in Germany to date, featuring works from his new series Drag Queens for the first time alongside the series Close Up and Female Bodybuilders, as well as new works from a series on acquitted death row inmates.<br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://martinschoeller.com/EXHIBITIONS/Works,-NRW-Forum,-Dusseldorf,-2020/1/thumbs"
                        rel="noreferrer"
                        target="_blank">Martin Schoeller</a>
                    </p>
                    : ("")}
                </h5>
            </div>


            
            
        </div>
        </>
    );
};

export default ArtPortfolio;
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
        
        <div className="proj-wrapper2">

        {/* Death Row Exonerees */}
        <div className="img-wrapper fade-in">
                <a href="https://www.fotografiska.com/nyc/exhibition/death-row-exonerees/full/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src="https://i.imgur.com/zo00FKM.png" alt="Death Row Exonerees"/>
                </a>
                <h4 id="proj-title">Death Row Exonerees</h4>
                <h5 id="proj-description" className="desc" 
                onClick={toggleDescription}>Production, Davinci Resolve, Premiere Pro
                    
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

                    { desc8 ? <p id="proj-details" className="fade-in">I assisted Martin Schoeller with his powerful project on injustice in the incarceration system. As the lead audio editor for this project I was responsible for helping capture the stories of Americans that were accused of crimes they did not commit. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://martinschoeller.com/EXHIBITIONS/Death-Row-Exonerees,-Fotografiska,-NYC,-2020/2"
                        rel="noreferrer"
                        target="_blank">Martin Schoeller</a>
                    </p>
                    : ("")}
                </h5>
            </div>







            {/* NYT Holocaust Survivors */}
            <div className="img-wrapper fade-in">
                <a href="https://www.nytimes.com/interactive/2020/01/24/opinion/auschwitz-anniversary-holocaust.html"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src="https://i.imgur.com/9xEE0wS.png" alt="NYT Survivors"/>
                </a>
                <h4 id="proj-title">SURVIVORS</h4>
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


            
            
        </div>
        </>
    );
};

export default ArtPortfolio;
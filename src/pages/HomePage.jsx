import { Fragment } from "react";
import './HomePage.css';
import tomAndJerry1 from '../assets/images/tomAndJerry1.jpg';
import Popye2 from '../assets/images/Popye2.jpg';
import MickeyMouse from '../assets/images/MickeyMouse.jpg'
import scoobyDoo from '../assets/images/scoobyDoo.jpg'
import dennisTheMenace from '../assets/images/dennisTheMenace.jpg'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const goToPopyePage = () => {
        navigate("/popye")
    }
    return (
        <Fragment>
            <main>
                <div className="homeHeadin">
                    <h1 className="gradientText">Welcome</h1>
                </div>

                <div className="justImage">
                    <figure>
                        <img src={tomAndJerry1} alt="tomAndJerry1" className="respImg"></img>
                    </figure>
                    {/* <div className="aboutImage">
                        <h3>Tom and jerry</h3>
                    </div> */}
                </div>

                <div className="threeGridBox">
                    <div className="popularCatoons">
                        <h1 className="gradientText">Popular Cartoons</h1>
                    </div>

                    {/* FIRST CARD UNDER POPULAR CARTOON */}
                    <div className="card">
                        <div className="cardHeading">
                            <h3>Popye The Sailor Man</h3>
                        </div>
                        <figure>
                            <img src={Popye2} alt="Popye2" className="respImg"/>
                        </figure>
                        <div className="cardDiscription">
                            <ul>
                                <li>Created by Elzie Crisler Segar.</li>
                                <li>Introduced the character into his existing newspaper cartoon strip, Thimble Theatre.</li>
                                <li>First appeared in 1929.</li>
                            </ul>
                        </div>
                        <div>
                            <button className="cardBtn" onClick={goToPopyePage}>Read more</button>
                        </div>
                    </div>

                    {/* SECOND CARD UNDER POPULAR CARTOON */}
                    <div className="card">
                        <div className="cardHeading">
                            <h3>Mickey Mouse</h3>
                        </div>
                        <figure>
                            <img src={MickeyMouse} alt="MickeyMouse" className="respImg"/>
                        </figure>
                        <div className="cardDiscription">
                            <ul>
                                <li>Created by Walt Disney.</li>
                                <li>Created as a replacement for a prior Disney character, Oswald the Lucky Rabbit, Mickey first appeared in the short Plane Crazy, debuting publicly in the short film Steamboat Willie.</li>
                                <li>First appeared in November 18, 1928.</li>
                            </ul>
                        </div>
                        <div>
                            <button className="cardBtn">Read more</button>
                        </div>
                    </div>

                    {/* THIRD CARD UNDER POPULAR CARTOON */}
                    <div className="card">
                        <div className="cardHeading">
                            <h3>Scoobiy Doo</h3>
                        </div>
                        <figure>
                            <img src={scoobyDoo} alt="scoobyDoo" className="respImg"/>
                        </figure>
                        <div className="cardDiscription">
                            <ul>
                                <li>Created by Joe Ruby and Ken Spears.</li>
                                <li>The first episode of Scooby-Doo, Where Are You! "What a Night for a Knight" debuted on the CBS network.</li>
                                <li>First appeared in September 13, 1969.</li>
                            </ul>
                        </div>
                        <div>
                            <button className="cardBtn">Read more</button>
                        </div>
                    </div>

                    {/* THIRD CARD UNDER POPULAR CARTOON */}
                    <div className="card">
                        <div className="cardHeading">
                            <h3>Dennis The Menace</h3>
                        </div>
                        <figure>
                            <img src={dennisTheMenace} alt="Popye2" className="respImg"/>
                        </figure>
                        <div className="cardDiscription">
                            <ul>
                                <li>Created by Hank Ketcham.</li>
                                <li>First appeared in <b>The Beano</b> a British anthology comic magazine.</li>
                                <li>First appeared in March 12, 1951.</li>
                            </ul>
                        </div>
                        <div>
                            <button className="cardBtn">Read more</button>
                        </div>
                    </div>

                </div>
            </main>
        </Fragment>
    );
}

export default HomePage;
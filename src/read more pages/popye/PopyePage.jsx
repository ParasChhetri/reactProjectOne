import './PopyePage.css'
import { Fragment } from "react";



const PopyePage = () => {
    return (
        <Fragment>
            <main>
                <div>
                    <div className="popyePageHeading">
                        <h1 className='gradientText'>Popye The Sailor Man</h1>
                    </div>
                    <div>
                        <div className="forParagraph"></div>
                        <div className="paragraphImage"></div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default PopyePage;
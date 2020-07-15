import React, { useState, useEffect } from 'react';
import Header from './Header';

function Employment(props) {

    const [question1, setQuestion1] = useState('1');

    const onSiteChanged = (e) => {

        setQuestion1(e.currentTarget.value);


    }




    return (
        <React.Fragment>
            <Header />
            <div className="mainbody">
                <div className="leftside">
                    <p>20%</p>
                    <p>Account Setup</p>
                    <div className="hr"></div>
                    <div className="list-item">
                        <div className="icon"><i className="fa fa-bell"></i></div>
                        <div className="text">Payment Option</div>
                        <div className="number"><span mark="false">1</span></div>
                    </div>
                    <div className="list-item">
                        <div className="icon"><i className="fa fa-bell"></i></div>
                        <div className="text">Employment Details</div>
                        <div className="number"><span mark="true">2</span></div>
                    </div>
                    <div className="list-item">
                        <div className="icon"><i className="fa fa-bell"></i></div>
                        <div className="text">Financial Information</div>
                        <div className="number"><span mark="false">3</span></div>
                    </div>
                    <div className="list-item">
                        <div className="icon"><i className="fa fa-bell"></i></div>
                        <div className="text">Rent Information</div>
                        <div className="number"><span mark="false">4</span></div>
                    </div>
                    <div className="list-item">
                        <div className="icon"><i className="fa fa-bell"></i></div>
                        <div className="text">Landlord Details</div>
                        <div className="number"><span mark="false">5</span></div>
                    </div>
                    <div className="list-item">
                        <div className="icon"><i className="fa fa-bell"></i></div>
                        <div className="text">Referee Details</div>
                        <div className="number"><span mark="false">6</span></div>
                    </div>
                </div>
                <div className="rightside">
                    <p>You are getting up your account</p>
                    <p className="po">Employment Details</p>
                    <div className="do">
                        <p>Tell us a bit about what you do</p>
                        <p>Step 2 of 6</p>

                    </div>
                    <div className="line">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>
                    <div className="question">
                        <p className="quest">Whats your type?</p>
                        <div className="answer1">
                            <div className={"option " + (question1 === '1' ? "optionSelected" : "optionNotSelected")}>
                                <input type="radio" onChange={onSiteChanged} checked={question1 === '1'} value="1" name="answer" />
                                <p className="text">Looking to renew my rent</p>
                            </div>
                            <div className={"option " + (question1 === '2' ? "optionSelected" : "optionNotSelected")}>
                                <input type="radio" onChange={onSiteChanged} checked={question1 === '2'} value="2" name="answer" />
                                <p className="text">Want to pay for a new place</p>
                            </div>
                            <div className={"option " + (question1 === '3' ? "optionSelected" : "optionNotSelected")}>
                                <input type="radio" onChange={onSiteChanged} checked={question1 === '3'} value="3" name="answer" />
                                <p className="text">I'm still searching</p>
                            </div>
                        </div>
                    </div>
                    <div className="question">
                        <p className="quest">How much is your rent request amount?</p>
                        <div className="answer2">

                            <i className="fa fa-dollar"></i>
                            <input type="text" placeholder="Enter Amount" />

                        </div>
                    </div>
                    <div className="fin">
                        <p></p>
                        <button type="button" className="finn">Finish</button>
                    </div>
                </div>
            </div >
        </React.Fragment>
    );

}

export default Employment;
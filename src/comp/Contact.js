import React , { useRef } from 'react';
import PropTypes from 'prop-types';
// let mongo = require("mongodb");

export default function Contact(props) {
    const fname = useRef(null);
    const lname = useRef(null);
    const sub = useRef(null);
    const mail = useRef(null);
    const msg = useRef(null);

    const styletxt = {
        color : props.mode === "light"?'#363845':'#DEE4CE',    
    }

    const styletxt2 = {
        backgroundColor : props.mode === "light"?"#DEE4CE":"#363845",
        color : props.mode === "light"?"black":"white",
        border : "1px solid",
        borderColor : props.mode === "light"?"#363845":"#DEE4CE",    }

    const FormExe = (e) =>{
        e.preventDefault();
        let obj1 = {
            Name : `${fname.current.value} ${lname.current.value}`,
            Subject : sub.current.value ,
            Email : mail.current.value,
            txtMsg : msg.current.value,
        }
        fname.current.value = "";
        lname.current.value = "";
        sub.current.value = "";
        mail.current.value = "";
        msg.current.value = "";
        // console.log(obj1);
        // props.saveCol(obj1);
        props.showAlert("Feedback send Successfully !" , "success");
    };
    
    return (
        <div className="container my-3" style={styletxt}>
            <h1 className="font-link">Contact Us</h1>
        <form onSubmit={FormExe}>
        <div className="row my-3">
            <div className="col">
                <label htmlFor="validationCustom01" className="font-link">First name</label>
                <input type="text" className="form-control" id="validationCustom01" placeholder="First name" style={styletxt2}  ref={fname} required/>
            </div>
            <div className="col">
                <label htmlFor="validationCustom02" className="font-link" >Last name</label>
                <input type="text" className="form-control" id="validationCustom02" style={styletxt2} placeholder="Last name"ref={lname} />
            </div>
        </div>
        <div className="row my-3">
            <div className="col">
                <label htmlFor="validationDefault03" className="font-link" >Subject</label>
                <input type="text" className="form-control" id="validationDefault03" style={styletxt2} placeholder="Subject" ref={sub} required/>
            </div>
            <div className="form-group col">
                <label htmlFor="exampleFormControlInput1" className="font-link" >Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" style={styletxt2} placeholder="name@example.com" ref={mail} required/>
            </div> 
        </div>
        <div className="mb-3 my-3">
            <label htmlFor="validationTextarea" className="font-link">Enter the Message</label>
            <textarea className="form-control" id="validationTextarea" style={styletxt2} placeholder="your Msg" row="4" ref={msg} required></textarea>
            <div className="feedback">
                <small>Please enter a message in the textarea.</small>
            </div>
        </div>        

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       </div>
    )
}

Contact.propTypes = {
    mode : PropTypes.string,
    showAlert : PropTypes.func,
}
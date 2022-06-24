import React, { useState } from "react";

function CountactUs() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);
    const [showErrors, setShowErrors] = useState(false);



    let errors = [];
//validate email input 
function ValidateEmail(email) {
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {return true;}
return false;
}
const formValidation = () => {
  setErrorMessages([]);
   const isNameValid = (name !== "");
   const isMessageValid = ( message !== "");
   const isSubjectValid = (subject !== "");
 if (!isNameValid) {
   errors.push("Name is not valid, please try again.");
}
if (!ValidateEmail(email)) {
   errors.push("Email is not valid, please try again.");
}
if (email === "") {
   errors.push("Email field is empty, please try again.")
}
if (!isMessageValid) {
  errors.push("Message is not valid, please try again.");
}
if (!isSubjectValid) {
   errors.push("Subject is not valid, please try again.");
}
if (errors.length > 0) {
  alert(errors)
} 
else {
   setShowErrors({ showErrors: false });
   alert("Registeration Successful");
}
};


  return(
    <center>
        <div> <hr></hr>
            <h2>Registeration</h2><br></br>
     <form> 
           <input placeholder="Name" type ="text" onChange = {e => setName({name: e.target.value})}/><br/><br/>
           <input placeholder="Email"  type ="email" onChange ={e => setEmail({email: e.target.value})}/><br/><br/>
            <input placeholder="Password" type ="password"  onChange = {e => setSubject({subject: e.target.value})}/><br/><br/>
           <input placeholder="Confirm Password" type ="password" onChange  ={e => setMessage({message: e.target.value})}/><br/><br/>
           <input variant="contained" color="primary" type="button" onClick = {formValidation} value="Register"/><br/><br/>   
          </form>
   </div>
   <hr></hr>
    </center>
   
  )
}

export default CountactUs;
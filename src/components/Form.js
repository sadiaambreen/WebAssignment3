import React from 'react'
import './App.css'

function Form (){
    const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phone=document.getElementById('phone');

form.addEventListener('submit', (e) => {  
    e.preventDefault();

    const usernameValue = username.value;
    const emailValue = email.value;
    const phoneValue=phone.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
  
  

    if (usernameValue === '') {
        errorMessage(username, "Username is empty");
    } else {
        successMessage(username);
    }

    if (emailValue === '') {
        errorMessage(email, "Email is empty");
    } else if (!validateEmail(emailValue)) {
        errorMessage(email, "Email is invalid");
    } else {
        successMessage(email);
    }
    if (phoneValue === '') {
      errorMessage(phone, "Phone Number is empty");
  } else {
      successMessage(phone);
  }

    if (passwordValue === '') {
        errorMessage(password, "Password is empty");
    } else {
        successMessage(password);
    }

    if (password2Value === '') {
        errorMessage(password2, "Password is empty");
    } else if (password2Value !== passwordValue) {
        errorMessage(password2, "Both Passwords does not match");
    } else {
        successMessage(password2);
    }

    if (username.parentElement.classList.contains('success') && email.parentElement.classList.contains('success') && password.parentElement.classList.contains('success') && password2.parentElement.classList.contains('success')) {

        const obj = {}
        obj.username = usernameValue;
        obj.email = emailValue;
        obj.number = phoneValue;
        obj.password = passwordValue;
        obj.password2 = password2Value;
        console.log(obj);
        username.value = '';
        email.value = '';
        phone.value = '';
        password.value = '';
        password2.value = '';
    }
    
});



function errorMessage(value, message) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('success')) {
        formControl.classList.remove('success');
        formControl.classList.add('error');
    } else {
        formControl.classList.add('error');
    }
    formControl.querySelector('.errorMessage').textContent = message;


}


function successMessage(value) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('error')) {
        formControl.classList.remove('error');
        formControl.classList.add('success');
    } else {
        formControl.classList.add('success');
    }
}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    return(
        <center>
        <section
          className="registration"
          id="registration"
          style={{backgroundColor: "#808080"}}
        >
          <h3
            style={{
          fontSize: "22",
          marginBottom: "5px",
          textAlign: "center",
          paddingTop: "20px"}}
        
          >
            Members Registration Form
          </h3>

          <div className="containerRegistration">
            <div className="header">
              <h2>Create an Account</h2>
            </div>
            <form className="form" id="form">
              <div className="form-control">
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your Username"
                />
                <i
                  className="fa fa-smile-o"
                  style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <i
                  className="fa fa-frown-o"
                  style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <p className="errorMessage">Error Message</p>
              </div>

              <div className="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your Email" />
                <i
                  className="fa fa-smile-o"
                  style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <i
                  className="fa fa-frown-o"
                style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <p className="errorMessage">Error Message</p>
              </div>
              <div className="form-control">
                <label for="phone">Phone Number</label>
                <input
                  type="phone"
                  id="phone"
                  placeholder="Enter your Phone Number"
                />
                <i
                  className="fa fa-smile-o"
                  style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <i
                  className="fa fa-frown-o"
                  style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <p className="errorMessage">Error Message</p>
              </div>

              <div className="form-control">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your Password"
                />
                <i
                  className="fa fa-smile-o"
                  style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <i
                  className="fa fa-frown-o"
                  style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <p className="errorMessage">Error Message</p>
              </div>

              <div className="form-control">
                <label for="password2">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  placeholder="Confirm your Password"
                />
                <i
                  className="fa fa-smile-o"
                  style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <i
                  className="fa fa-frown-o"
                  style={{paddingTop:" 15px",paddingRight: "15px"}}
                ></i>
                <p className="errorMessage">Error Message</p>
              </div>

              <button>Submit</button>
            </form>

            <div className="complete-modal">
              <h2>Successful!</h2>
            </div>
          </div>
        </section>
      </center>
    )
}
export default Form
import React, {useState} from 'react'
import "../includes/css/home.css"
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import TsParticles from '../components/TsParticles';
import linkedin from '../includes/icons/linkedin.svg';
import fb from '../includes/icons/fb.svg';
import hackerrank from '../includes/icons/hackerrank.svg';
import github from '../includes/icons/github.svg';
import insta from '../includes/icons/insta.svg';
import leetcode from '../includes/icons/leetcodeColor.svg';
import whatsapp from '../includes/icons/whatsapp.svg';
import gmail from '../includes/icons/gmail.svg';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';

import validator from 'validator';

const Contact = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxvq8bHO-s5UZ6zPKrzeF_RXnbZSEggG3ziNstkHMdNMDV2KHFNste2Djo_bcxLud7G/exec'

    var [alert, setAlert] = useState(false);
    var [alertMsg, setAlertMsg] = useState("");
    var [alertType, setAlertType] = useState("");

    var [formData, setFormData] = useState({name:"", email:"", contact:"", message:""}); 

    const onChange = (parameter) =>{

        var value = document.getElementById(parameter).value;
        if(parameter === "Name") formData.name = value;
        else if(parameter === "Email") formData.email = value;
        else if(parameter === "Contact") formData.contact = value;
        else  if(parameter === "Message") formData.message = value;

        console.log(formData);
    }

    const toggleAlert = () =>{
        setAlert(true)
        setTimeout(()=>{setAlert(false)},2500);
    }



    const submitForm = async(e) => {

        toggleAlert();
        console.log(alert);
        e.preventDefault();
        const form = document.forms['submit-to-google-sheet']
        //Form Validation
        alertMsg = "";
        alertType = "";
        if(!validator.isByteLength(formData.name, {min : 3})) alertMsg="Name must have minimum 3 characters!";
        else if(!validator.isByteLength(formData.name, {max : 50})) alertMsg="Name must have maximim 50 characters!";
        else if(!validator.isEmail(formData.email)) alertMsg="Please Enter a valid email";
        else if(!validator.isByteLength(formData.contact, {min : 10, max:10})) alertMsg="Invalid Contact Number";
        else if(!validator.isByteLength(formData.message, {min : 10})) alertMsg="Message must have minimum 10 characters!";
        else if(!validator.isByteLength(formData.message, {max:250})) alertMsg="Message must have and maximum 250 characters!";
        
        setFormData(formData);
        console.log(alertMsg);
        
        if(alertMsg!==""){
            setAlertType("Invalid");
            setAlertMsg(alertMsg);
            return;
        }
        
        //Form Submit 
        alertMsg = "Form submitted successfully";
        setAlertType("Success");
        setAlertMsg(alertMsg);
        const formDetails = new FormData(form);
        form.reset();

        await fetch(scriptURL, {
            method: 'POST',
            body: formDetails
        }).then(response => console.log({success: true, response})).catch(error => console.error({success: false, error: error.message}));

        setFormData({name:"", email:"", contact:"", message:""});
    }


    return (
        <div className="w-full mt-[80px] ml-0 md:ml-[200px] md:mt-0">
            <TsParticles/>

            <div className={
                `z-10 flex flex-col justify-end md:bg-[url('${blackBg1}')] bg-[url('${blackBg2}')] backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>
                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; Contact</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>Contact</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>
            </div>


            <div className="contactPage flex flex-col px-2 md:p-2 md:mx-8" >
                <div className="relative -z-10 text-center self-center w-fit contact-head-text text-white text-xl md:text-3xl py-4 px-4 animate-pulse">Reach Out to Me!</div>
                <div className='flex text-white flex-col lg:flex-row items-center justify-between'>

                    <div className="contact-form border border-white p-2 rounded-xl w-full lg:w-[50%] " style={{background:'rgba(128, 128, 128, 0.412)'}}>
                        <div className="form-title m-2 p-2 text-2xl text-center">
                            Send Me a Message!
                        </div>
                        <hr/>
                        <form id="contactForm" className="flex flex-col my-2 items-center just0fy-center" name="submit-to-google-sheet">
                            <input autoComplete="off" onChange = {()=>onChange("Name")} className='z-10 text-black m-2 w-full p-4 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' id="Name" name="Name" type="text" placeholder="Name"/>
                            <input autoComplete="off" onChange = {()=>onChange("Email")} className='z-10 text-black m-2 w-full p-4 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' id="Email" name="Email" type="email" placeholder="Email"/>
                            <input autoComplete="off" onChange = {()=>onChange("Contact")} className='z-10 text-black m-2 w-full p-4 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' id="Contact" name="Contact" type="number" placeholder="Contact"/>
                            <input autoComplete="off" onChange = {()=>onChange("Message")} className='z-10 text-black m-2 w-full p-4 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' id="Message" name="Message" type="text" placeholder="Message"/>
                            {!alert && <button type="submit" id="contactFormSubmit" className='z-10 border border-white w-[100px] text-wihte p-2 rounded-xl hover:bg-gray-800'
                                onClick={submitForm}>Send</button>}
                        </form>
                    {alert && <Alert message={alertMsg} type={alertType}/>}
                    </div>
                    <div className="contact-details w-full  lg:w-[50%] p-2 m-2 text-justify">

                        <div className="codeProfiles flex flex-col my-4">
                            <div className='text-2xl text-cyan-500 text-center p-2'>Checkout my profiles...</div>
                            <div className="codeProfiles-body flex flex-row items-center justify-around">
                                <Link className="z-10" to="https://www.hackerrank.com/anmolksharma2003"><img className=" w-[60px]" src={hackerrank} alt=""/></Link>
                                <Link className="z-10" to="https://leetcode.com/Anmol2363/"><img className=" w-[36px]" src={leetcode} alt=""/></Link>
                                <Link className="z-10" to="https://github.com/Akshar2363"><img className=" w-[48px]" src={github} alt=""/></Link>
                            </div>
                        </div>
                        <div className="socialProfiles flex flex-col my-4">
                            <div className='text-2xl text-cyan-500 text-center p-2'>Follow me on...</div>
                            <div className="socialProfiles-body flex flex-row items-center justify-around">
                                <Link className="z-10" to="https://www.linkedin.com/in/anmol-kumar-sharma-2706b4228/"><img className=" w-[60px]" src={linkedin} alt=""/></Link>
                                <Link className="z-10" to="https://www.facebook.com/Anmol2363"><img className=" w-[48px]" src={fb} alt=""/></Link>
                                <Link className="z-10" to="https://www.instagram.com/aksharma_2363/"><img className=" w-[60px]"src={insta} alt=""/></Link>
                            </div>
                        </div>

                        <div className="socialProfiles flex flex-col my-4">
                            <div className='text-2xl text-cyan-500 text-center p-2'>Contact Me...</div>
                            <div className="socialProfiles-body flex flex-row flex-wrap items-center justify-around">
                                <Link className="z-10 flex flex-row text-xs my-2  sm:text-lg" to='mailto:anmolksharma2003@gmail.com'><img className="w-[24px]" src={gmail} alt=""/> &nbsp; anmolksharma2003@gmail.com</Link>
                                <Link className="z-10 flex flex-row text-xs my-2  sm:text-lg" to='tel:+91-9771729061'><img className="w-[24px]" src={whatsapp} alt=""/> &nbsp;+91-9771729061</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

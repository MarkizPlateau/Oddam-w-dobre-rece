import React, {useState} from "react";
import {ReactComponent as Decoration5} from "../../assets/Decoration.svg";

const HomeForm = () => {
    return (
        <article className={"contact"}>
            <h2> Komu pomagamy </h2>
            <Decoration5 />
            <ContactForm />
        </article>
    )
}



const ContactForm = () => {

    const [form, setForm] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    )

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
           return {
               ...prevState,
               [name]:value
           }
        });
    };

    return (
        <form className={"contact-form"}>
            <div className={"form-name-email"}>
                <label>
                    Wpisz swoje imię
                    <br/>
                    <input type={"text"} name={"name"} value={form.name} placeholder={"Krzysztof"} onChange={handleChange}/>
                </label>
                <label>
                    Wpisz swój email
                    <br/>
                    <input type={"text"} name={"email"} value={form.email} placeholder={"abc@xyz.pl"} onChange={handleChange}/>
                </label>
            </div>
            <label className={"form-label-message"}>
                Wpisz swoją wiadomość
                <br/>
                <textarea  rows={8} cols={30} wrap={"soft"} name={"message"} value={form.message} placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} onChange={handleChange}/>
            </label>
            <input className={"submit-button"} type="submit" value="Wyślij" />
        </form>

    )
}

export default HomeForm
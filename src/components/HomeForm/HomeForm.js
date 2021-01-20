import React, {useEffect, useState} from "react";

const HomeForm = () => {
    return (
        <article className={"contact"}>
            <h2 className={"title-decoration"}> Skontaktuj się z nami <div></div></h2>
            <ContactForm />
        </article>
    )
}



const ContactForm = (props) => {

    const [form, setForm] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    )

    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [success, setSuccess] = useState(false);



    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
           return {
               ...prevState,
               [name]:value
           }
        });
    };


    const validation = e => {

        let errors = {};

        if (!form.name.trim()) {
            errors.name = 'Imię jest wymagane';
        }    else if (form.name.split(" ").length > 1){
           errors.name = 'Podane imię jest nieprawidłowe';
         }

        if (!form.email) {
            errors.email = "Email jest wymagany"
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = "Podany email jest nieprawidłowy"
        }

        if (!form.message) {
            errors.message = "Wiadomość jest wymagana"
        } else if (form.message.length < 120) {
            errors.message = "Wiadomość musi mieć conajmniej 120 znaków"
        }


        return errors;
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validation);
        setIsSubmitting(true);
    }

    useEffect(() =>{
        if (Object.keys(errors).length === 0 && isSubmitting) {
            setSuccess(true);
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact" , {
                method: "POST" ,
                body: JSON.stringify(form) ,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
              if (!response.ok) throw Error (response.statusText);
              return response.json();
            })
                .then(data => console.log(data))
                .then (() => {
                setForm(() => {
                    return {
                        name: "",
                        email: "",
                        message: "",
                    }
                })
            }).catch(error => console.log(error));
        } else if (Object.keys(errors).length !== 0) {
            setSuccess(false);
        }
    }, [errors])

    return (
        <form className={"contact-form"} onSubmit={handleSubmit}>
            {success && <p className={"form-success"}>Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy</p>}
            <div className={"form-name-email"}>
                <label>
                    Wpisz swoje imię
                    <br/>
                    <input type={"text"} name={"name"} value={form.name} className={errors.name && "invalid"} placeholder={"Krzysztof"} onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </label>
                <label>
                    Wpisz swój email
                    <br/>
                    <input type={"text"} name={"email"} value={form.email} className={errors.email && "invalid"} placeholder={"abc@xyz.pl"} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </label>
            </div>
            <label className={"form-label-message"}>
                Wpisz swoją wiadomość
                <br/>
                <textarea  rows={4} cols={30} wrap={"hard"} name={"message"} value={form.message} className={errors.message && "invalid"}
                           placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} onChange={handleChange}/>
                {errors.message && <p>{errors.message}</p>}
            </label>
            <input className={"submit-button"} type="submit" value="Wyślij" />
        </form>

    )
}

export default HomeForm
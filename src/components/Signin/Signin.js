import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constans/routes";

const Signin = (props) => {

    const [form, setForm] = useState(
        {
            email: "",
            password: "",
        }
    )
    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const validation = e => {

        let errors = {};

        if (!form.email) {
            errors.email = "Email required"
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = "Email address is invalid"
        }

        if (!form.password) {
            errors.password = "Password is required"
        } else if (form.password.length < 6) {
            errors.password = "Password need to be 6 characters or more"
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
            props.history.push(ROUTES.HOME);
        }
    }, [errors])


    return (
        <>
            <section className={"section-signin"}>
                <h2 className={"title-decoration"}> Zaloguj się <div></div></h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email
                        <br/>
                        <input type={"text"} name={"email"} className={errors.email && "invalid"} value={form.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                    </label>
                    <label>
                        Hasło
                        <br/>
                        <input type={"password"} name={"password"} className={errors.email && "invalid"} value={form.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                    </label>
                    <div>
                        <button type={"submit"}> Zaloguj się </button>
                        <Link to={ROUTES.SIGNUP}> Załóż konto </Link>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Signin;
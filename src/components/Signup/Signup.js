import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constans/routes";
import {HOME} from "../../constans/routes";

const Signup = (props) => {

    const [form, setForm] = useState(
        {
            email: "",
            passwordOne: "",
            passwordTwo: "",
        }
    )

    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);


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

        if (!form.email) {
            errors.email = "Email required"
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = "Email address is invalid"
        }

        if (!form.passwordOne) {
            errors.passwordOne = "Password is required"
        } else if (form.passwordOne.length < 6) {
            errors.passwordOne = "Password need to be 6 characters or more"
        }

        if (!form.passwordTwo) {
            errors.passwordTwo = "Confirm your password";
        } else if (form.passwordTwo !== form.passwordOne) {
            errors.passwordTwo = "Password do not match";
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
            <section className={"section-signup"}>
                <h2 className={"title-decoration"}> Załóż konto <div></div></h2>
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
                        <input type={"password"} name={"passwordOne"} className={errors.email && "invalid"} value={form.password} onChange={handleChange}/>
                    {errors.passwordOne && <p>{errors.passwordOne}</p>}
                    </label>
                    <label>
                        Powtórz hasło
                        <br/>
                        <input type={"password"} name={"passwordTwo"} className={errors.email && "invalid"} value={form.password} onChange={handleChange}/>
                    {errors.passwordTwo && <p>{errors.passwordTwo}</p>}
                    </label>
                    <div>
                        <Link to={ROUTES.SIGNIN}> Zaloguj się </Link>
                        <button type={"submit"}> Załóż konto </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Signup;
import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constans/routes";

const Signin = () => {

    const [form, setForm] = useState(
        {
            email: "",
            password: "",
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
        <>
            <section className={"section-signin"}>
                <h2 className={"title-decoration"}> Zaloguj się <div></div></h2>
                <form>
                    <label>
                        Email
                        <br/>
                        <input type={"text"} name={"email"} value={form.email} onChange={handleChange}/>
                    </label>
                    <label>
                        Hasło
                        <br/>
                        <input type={"text"} name={"password"} value={form.password} onChange={handleChange}/>
                    </label>
                    <div>
                        <Link to={ROUTES.HOME}> Zaloguj się </Link>
                        <Link to={ROUTES.SIGNUP}> Załóż konto </Link>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Signin;
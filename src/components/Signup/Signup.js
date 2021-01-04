import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constans/routes";

const Signup = () => {

    const [form, setForm] = useState(
        {
            email: "",
            passwordOne: "",
            passwordTwo: "",
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
            <section className={"section-signup"}>
                <h2 className={"title-decoration"}> Załóż konto <div></div></h2>
                <form>
                    <label>
                        Email
                        <br/>
                        <input type={"text"} name={"email"} value={form.email} onChange={handleChange}/>
                    </label>
                    <label>
                        Hasło
                        <br/>
                        <input type={"password"} name={"passwordOne"} value={form.password} onChange={handleChange}/>
                    </label>
                    <label>
                        Powtórz hasło
                        <br/>
                        <input type={"password"} name={"passwordTwo"} value={form.password} onChange={handleChange}/>
                    </label>
                    <div>
                        <Link to={ROUTES.SIGNIN}> Zaloguj się </Link>
                        <Link to={ROUTES.HOME}> Załóż konto </Link>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Signup;
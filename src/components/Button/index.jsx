import { useState, useRef } from "react";

function Button() {
    let [firstName, setFirstName] = useState("");

    const lastNameRef = useRef();

    const handleSetLastName = (e) => {
        lastNameRef.current = e.target.value;
    };
    const handleOK = () => {
        if (firstName === "" || lastNameRef.current.value === "") {
            return alert("Enter text!");
        }
    };

    console.log("re-render");
    return (
        <>
            <input
                defaultValue={firstName}
                onChange={(e) => (firstName = e.currentTarget.value)}
            />
            <input onChange={handleSetLastName} />
            <button onClick={handleOK}>OK</button>
        </>
    );
}

export default Button;

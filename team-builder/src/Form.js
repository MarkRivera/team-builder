import React, { useState } from 'react';

function Form({ addTeamMember }) {
    const [newUser, setNewUser] = useState({role: "Meme King"});

    const handleChange = event => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        });
    };


    return (
        <form>
            <label>
                First Name:
                <input type="text" name="name" onChange={ event => handleChange(event) } />
            </label>

            <label>
                Email:
                <input type="email" name="email" onChange={ event => handleChange(event) } />
            </label>

            <label>
                Role:
                <select value={newUser.role}  onChange={ event => handleChange(event) } name="role">
                    <option value="Developer">Developer</option>
                    <option value="CEO">CEO</option>
                    <option defaultValue value="Meme King">Meme King</option>
                    <option value="Designer">Designer</option>
                </select>
            </label>

            <button onClick={event => {
                        event.preventDefault();
                        addTeamMember(newUser);
                    }
                }>Submit</button>
        </form>
    )
}

export default Form;
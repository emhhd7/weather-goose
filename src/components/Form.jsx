import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <center>
                    <label>Please enter a zip code:
                        <input name="zip_code" type="text"></input>
                    </label>
                    <button type="button">Honk!</button>
                    <br></br>
                    <br></br>
                </center>
            </form>
        </div>
    )
}

export default Form;
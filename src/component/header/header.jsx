import { useContext, useState } from "react";
import { photoContext } from "../photoscontext";
import "./header.css"
const Header = () => {
    const [inputTxt, seInputText] = useState("")
    const wordContext = useContext(photoContext);

    const handlBtnInput = (event) => {
        wordContext.setInputField(event.target.value);
    }
    const handleInputText = () => {
        wordContext.setInputField(inputTxt);
        console.log(wordContext.inputField)

    }

    return (
        <>
            <header>
                <h1>SnapShot</h1>
                <label htmlFor="search">
                    <input onChange={(e) => seInputText(e.target.value)} value={inputTxt} className="search" placeholder="cat,mountain..etc" />
                    <button onClick={handleInputText} className="search">Search</button>
                </label>
                <section>
                    <button onClick={(e) => { handlBtnInput(e) }} value="mountain">Mountain</button>
                    <button onClick={(e) => { handlBtnInput(e) }} value="bird">Bird</button>
                    <button onClick={(e) => { handlBtnInput(e) }} value="beaches">Beaches</button>
                    <button onClick={(e) => { handlBtnInput(e) }} value="food">Food</button>
                </section>

            </header>
        </>
    )
}
export default Header;
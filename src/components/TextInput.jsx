/* eslint-disable react/prop-types */
const TextInput = (props) => {
    return (
        <div className="input-div">
            <label htmlFor="input-field" className="text-input-label">{props.inputLable}</label>
            <input 
                type="text" 
                id="input-field"
                className="text-input"
                placeholder={props.placeholder}
                onChange={(e) => {props.handleChange(e)}} />
        </div>
    );
}

export default TextInput;
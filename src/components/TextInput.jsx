/* eslint-disable react/prop-types */
const TextInput = (props) => {
    return (
        <div className="form-div">
            <label htmlFor={`input-field-${props.val}`} className="text-input-label form-lable">{props.inputLable}</label>
            <input 
                type="text" 
                id={`input-field-${props.val}`}
                className="text-input"
                placeholder={props.placeholder} />
        </div>
    );
}

export default TextInput;
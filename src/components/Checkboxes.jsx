/* eslint-disable react/prop-types */
const Checkboxes = (props) => {
    return (
        <>
            <label htmlFor="checkbox-container">{props.label}</label>
            <div className="checbox-container">
                {props.filterList.map((item, index) => {
                    return (
                        <div className="check-elem" key={`${props.type}-${index}`}>
                            <label htmlFor={item}>{item}</label>
                            <input 
                                type="checkbox" 
                                className="filter-checkbox"
                                id={item} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Checkboxes;
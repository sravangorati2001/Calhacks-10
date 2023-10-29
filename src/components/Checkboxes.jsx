/* eslint-disable react/prop-types */
const Checkboxes = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor={`filter-${props.type}`} className="sideNav-label">{props.label}</label>
            <div className="checbox-container">
                {props.filterList.map((item, index) => {
                    return (
                        <div className="check-elem" key={`${props.type}-${index}`}>
                            <input 
                                type="checkbox" 
                                className="filter-checkbox"
                                id={item} />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Checkboxes;
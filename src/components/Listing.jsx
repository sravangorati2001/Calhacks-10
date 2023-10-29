/* eslint-disable react/prop-types */
import "./Listing.css"

const Listing = (props) => {
    return (
        <div className="listing-card">
            <img 
                src="https://placehold.co/150x200" 
                alt="placeholder-img"
                className="card-img" />
            <div className="card-info">
                <p className="tBook-name">{props.bookName}</p>
                <p className="isbn card-text">ISBN: {props.isbn}</p>
                <p className="condition card-text">Condition: {props.condition}</p>
                <p className="price">${props.price}</p>
            </div>
        </div>
    );
}

export default Listing;
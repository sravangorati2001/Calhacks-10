import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";

import { useState } from "react";

const NewListing = () => {
    const [bookInfo, setBookInfo] = useState({
        bookName: '',
        isbn: 0,
        condition: "",
        course: "",
        subject: "",
        professor: "",
        description: "",
    })
    return (
        <>
            <Navbar />
            <div className="listing-body">
                {/* <TextInput 
                    inputLabel="Textbook Name"
                    placeholder=""
                    handleChange={}
                /> */}
            </div>
        </>
    );
}

export default NewListing;
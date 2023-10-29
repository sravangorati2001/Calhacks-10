import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import FILTERS from "./filters"

import { useState } from "react";
import "./NewListing.css";
const NewListing = () => {
    const filters = JSON.parse(FILTERS);
    
    const [bookInfo, setBookInfo] = useState({
        bookName: '',
        isbn: 0,
        condition: "",
        course: "",
        subject: "",
        professor: "",
        description: "",
    });


    return (
        <>
            <Navbar />
            <form className="listing-body">
                <TextInput 
                    inputLable="Textbook Name"
                    placeholder="Name"
                    val="name" />
                <TextInput 
                    inputLable="ISBN"
                    placeholder="###-##-#####-##-#" />
                <div className="form-div">
                    <label htmlFor="sub-select" className="form-lable">Subject</label>
                    <select name="sub-select" id="sub-select">
                        <option defaultChecked="Select a Subject" value="default" hidden>Select a Subject</option>
                        {filters.subject.map(subject => {
                            return <option value={subject} key={subject}>{subject}</option>
                        })}
                    </select>
                </div>
                <div className="quality-info form-div">
                    <label htmlFor="quality-select" className="form-lable">Quality</label>
                    <select name="quality-select" id="quality-select">
                        <option defaultChecked="Quality of Book" value="default" hidden>Quality of Book</option>
                        {filters.condition.map(con => {
                            return <option value={con} key={con}>{con}</option>
                        })}
                    </select>
                </div>
                <TextInput 
                    inputLable="Course"
                    placeholder="Course used in" />
                <TextInput 
                    inputLable="Professor"
                    placeholder="Professor Name" />
                <TextInput 
                    inputLable="Description"
                    placeholder="Add any notes here" />

                <input type="submit" name="addListing" id="addListing" />
            </form>
        </>
    );
}

export default NewListing;
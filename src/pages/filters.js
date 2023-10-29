const filters = `{
    "subject": [
        "Accounting",
        "Anthropology",
        "Art",
        "Biology",
        "Business",
        "Chemistry",
        "Computer Science",
        "Economics",
        "Engineering",
        "English",
        "Geography",
        "History",
        "Law",
        "Linguistics",
        "Marketing",
        "Math",
        "Music",
        "Physics",
        "Psycology",
        "Social Science",
        "Other"
    ],
    
    "condition": [
        "New",
        "Like New",
        "Good",
        "Acceptable"
    ],

    "avalibility": [
        "Avalible",
        "Sold"
    ],

    "price": [
        {
            "str-rep": "$100 and under", 
            "val": 100
        },
        {
            "str-rep": "$50 and under", 
            "val": 50
        }
    ]
}`;

export default filters;
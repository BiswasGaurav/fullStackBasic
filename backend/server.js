import express, { response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get('/' , (req , res) => {
    res.send("Hello World");
})

//get a route for 5 jokes
app.get('/api/jokes' , (req , res) => {
    const jokes = [
        {
            id: 1,
            question: "Why did the chicken cross the road?",
            content: "this is the first joke",
            answer: "To get to the other side!"
        },
        {
            id: 2,
            question: "What do you call a fake noodle?",
            content: "this is the second joke",
            answer: "Noodle soup"
        },
        {
            id: 3,
            question: "Why don't scientists trust atoms?",
            content: "this is the third joke",
            answer: "Because they make up everything!"
        },
        {
            id: 4,
            question: "Why did the invisible man turn down the job offer?",
            content: "this is the fourth joke",
            answer: "He was framed for it!"
        },
        {
            id: 5,
            question: "Why did the chicken cross the road?",
            content: "this is the fifth joke",
            answer: "To get to the other side!"
        }
    ]
    res.send(jokes);
})

app.listen(port , () => {
    console.log(`Listening on port ${port}`);
})
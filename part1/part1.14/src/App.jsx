import { useState } from 'react';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick} className="randButton">
        {text}
    </button>
);

const GetRandom = (max) => {
    return Math.floor(Math.random() * max);
};

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ];

    const [selected, setSelected] = useState(0);
    const [upvotes, setUpvotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });

    const handleButton = () => {
        const rdIdx = GetRandom(anecdotes.length);
        setSelected(rdIdx);
    };

    const handleUpvote = () => {
        setUpvotes(prevUpvotes => ({
            ...prevUpvotes,
            [selected]: prevUpvotes[selected] + 1
        }));
    };
    
    const getMax = () => {
        const maxVotes = Math.max(...Object.values(upvotes));
        const maxIndex = Object.keys(upvotes).reduce((a, b) => upvotes[a] > upvotes[b] ? a : b);
        return { maxVotes, maxIndex };
    };

    const { maxVotes, maxIndex } = getMax();

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <Button text="Upvote 🫵" handleClick={handleUpvote} />
            <Button text="New Anecdote" handleClick={handleButton} />
            <h5>Upvotes +{upvotes[selected]} </h5>
            <h5>Top Anecdote has {maxVotes} votes:</h5>
            <p>{anecdotes[maxIndex]}</p>

        </div>
    );
};

export default App;
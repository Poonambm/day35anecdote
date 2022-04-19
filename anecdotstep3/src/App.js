import React, {useState} from "react";

const App = () => {
	const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
	
	const anecdotes = [
	  'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients']
	
	const handleChange = () => {
		setSelected(Math.floor(Math.random()*anecdotes.length))
	}
	
  const voteChange = () => {
		let copy = [...points]
		
		copy[selected]++
		
		setPoints(copy)
	}

  const findMax = () => {
		let max = -1, maxKey = -1
		
		for(let key in points) {
			if (points[key] > max) {
				maxKey = key
				max = points[key]
			}
		}
		return maxKey
	}

	return (
		<div>
      <p><b>Anecdote of the Day</b></p>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick = {voteChange}>vote</button>
			<button onClick = {handleChange}>next anecdote</button>
	    <p><b>Anecdote with most Votes</b></p>
			<p>{anecdotes[findMax()]}</p>
		</div>
	)
}
export default App
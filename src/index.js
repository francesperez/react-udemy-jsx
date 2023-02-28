//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';


//Get a reference to the div with ID root
const el = document.getElementById('root');


//Tell React to take control of that element
const root = ReactDOM.createRoot(el);

//Create a component
function App(){
    const name = 'Samantha';
    const age = 23;

    return(
        <h1>
            Hi, my name is {name} and I'm {age}.
        </h1>
    )


}

//Show the component on the screen
root.render(<App />);

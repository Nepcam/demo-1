const fetch = require('node-fetch');

// function printJoke(){
//   fetch('http://api.icndb.com/jokes/random')
//   .then(response => response.json()).then(data => console.log(data.value.joke))
//   .catch(err => console.log(err.message));
// }

async function printJoke(){
  try 
  {
    const response = await fetch('http://api.icndb.com/jokes/random');
    if (response.ok) 
    {
      const data = await response.json();

      console.log(data.value.joke);
    }
    
  } 
  catch (err) 
  {
    console.log(err.message);
  }
}

printJoke();
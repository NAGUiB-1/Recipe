







import styled from 'styled-components'
import { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Searched() {
  const [result , setResult] = useState([]);
  const res = useParams();
  useEffect(()=> {
    getResult(res.search);
    console.log(result);
  },[res.search])
  
  const getResult = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=704068a69ce641579eea1e2a3ba9a56d&query=${name}`);
    const recipes = await data.json();
    setResult(recipes.results);
    
  }
  return !result.length?(<Error className=''>not found</Error>)
  : (
        <Grid>
      {
        result.map((item) => (
        <Link to={'/recipe/' + item.id} key={item.id} >
          <Card >
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
          </Card>
        </Link>
        ))
      }
    </Grid>
  );
}
const Grid = styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
grid-gap:3rem;
@media screen and (max-width:1140px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width:640px) {
  grid-template-columns: 1fr;
}
`
const Card = styled.div`
img {
  width:100%;
  border-radius:2rem;
}
h4 {
  text-align:center;
  padding:1rem;
}

`
const Error = styled.div`
height:100%;
width:100%;
font-size:3rem;
display: flex;
align-items: center;
justify-content:center;

`
export default Searched;





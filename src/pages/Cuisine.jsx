




import {useState, useEffect} from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'
function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  useEffect(() => {
    getCuisine(params.type);
  },[params.type])
  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=704068a69ce641579eea1e2a3ba9a56d&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
 
  }
  return (
    <Grid
      animate ={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
    >
      {
        cuisine.map((item) => (
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

const Grid = styled(motion.div)`
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
export default Cuisine;





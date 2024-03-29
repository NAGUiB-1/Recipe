import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=704068a69ce641579eea1e2a3ba9a56d&number=12`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3> Popular Picks</h3>
        <Splide
          options={{
            perPage: 1,
            autoplay: 'pause',
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
            /*
            fixedWidth:250,
            */
            autoWidth: true,
          }}
        >
          {popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={'/recipe/' + recipe.id} >
                <Card>
                  <p>{recipe.title} </p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
margin: 4rem 0;
h3 {
  margin:1rem 0;
}
`;
const Card = styled.div`
min-height:25rem;
border-radius:2rem;
overflow:hidden;
position: relative;
width:300px;
img {
  border-radius:2rem;
  position: absolute;
  left:0;
  width:100%;
  height:100%;
  object-fit: cover;
  
}
p {
  position: absolute;
  z-index:10;
  left:50%;
  bottom:0;
  transform: translate(-50%,0);
  color:white;
  width:50%;
  text-align:center;
  font-weight:600;
  font-size:1rem;
  height:40%;
  display:flex;
  justify-content: center;
  align-items: center;
}
  @media screen and (max-width: 1140px) {
  width: 200px;
  min-height:20rem
}
@media screen and (max-width: 640px) {
  width: 180px;
  p {
    font-size:.7rem;
  }
}

`;
const Gradient = styled.div`
z-index:3;
position: absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`;
export default Popular;

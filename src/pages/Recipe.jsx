








import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=704068a69ce641579eea1e2a3ba9a56d`);
    const dataDetails = await data.json();
    setDetails(dataDetails)
  }
  useEffect(() => {
    fetchDetails();
  },[params.id])
  return (
    <DetailWrapper>
      <div className='header'>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title}/>
      </div>
      <Info>
        <div className='navigation'>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=>setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=>setActiveTab('ingredients')}>Ingredients</Button>
        </div>
        { activeTab ==='instructions' && (
         <div>
          <h3 dangerouslySetInnerHTML ={{__html:details.summary}}></h3>
          <h3 dangerouslySetInnerHTML ={{__html:details.instructions}}></h3>
        </div>
        )}
       {activeTab === 'ingredients' && (
        <ul>
          {
            details.extendedIngredients.map((ing) => (
            <li key={ing.id}>{ing.original} </li>
            ))
         }
        </ul>
       )}
       
      </Info>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
margin:10rem 0 5rem 0;
display:flex;
.active {
  background: linear-gradient(35deg, #494949, #313131);
  color:white;
}
.header {
  width:100%;
  img {
    width:100%;
  }
}
h2 {
  margin-bottom: 2rem;
}
li {
  font-size:1.2rem;
  line-height:2.5rem;
}
ul {
  margin-top:2rem;
}
@media screen and (max-width: 1140px) {
margin-top:4rem;
  flex-direction: column;
  .header {
    h2 {
      text-align:center;
      font-size:3rem;
      
    }
    img {
      border-radius:4rem;
    }
  }
  
}
@media screen and (max-width: 640px) {
  .header {
  
    h2 {
      font-size:2rem;
    }
    img {
      border-radius: 2rem;
    }
  }
}

`
const Button = styled.button`
padding: 1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
`
const Info = styled.div`
max-width:100%;
margin-left:10rem;

@media screen and (max-width: 1140px) {
.navigation {
  button {
    margin-right:0;
  }
  width:100%;
  display:flex;
  gap:1rem;
  align-items: center;
  justify-content:center;
  padding:2rem;
}
  margin:auto;
  padding:2rem;
  h3 {
    font-size: 1rem;
    line-height:1.5rem;
  }
}

`
export default Recipe;
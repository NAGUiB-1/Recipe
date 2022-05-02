import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/american'}>
        <FaHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}
const List = styled.div`
display:flex;
justify-content:center;
margin:2rem 0;
gap:1.2rem;
 .active {
    background: linear-gradient(35deg, orange, red);
}
a {

  display: flex;
  padding:1rem;
  color:#fff;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap:.2rem;
  background: linear-gradient(35deg, #494949, #313131);
  min-width:6rem;
  border-radius:50%;
  min-height:6rem;
  h4 {
    color:#fff;
  }
}
@media screen and (max-width:640px) {
gap: 0rem;
  a {
  
    transform:scale(0.8);
    h4 {
    font-size:.8rem;
  }
}
`
//const SLink = styled(NavLink)``


export default Category;

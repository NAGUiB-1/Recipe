


import Pages from './pages/Pages'
import Category from './components/Category'
import Search from './components/Search'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiKnifeFork} from 'react-icons/gi'
function App() {
  return (
    <>
    <Nav>
    <GiKnifeFork />
      <Logo to={'/'}> Delicious</Logo>
    </Nav>
    <Search />
    <Category />
      <Pages />
    </>
  );
}
const Logo = styled(Link)`
font-size:1.5rem;
font-weight:400;
font-family: 'Lobster Two', cursive;

`
const Nav = styled.nav`
padding:4rem 0;
display:flex;
justify-content:flex-start;
align-items: center;
svg {
  font-siE:2rem;
}
`
export default App;





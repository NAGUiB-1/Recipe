










import styled from 'styled-components'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  };
  return (
    <Form onSubmit={submitHandler}>
    <FaSearch />
      <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
   
    </Form>
  );
}

const Form = styled.form`
margin: 0 auto;
position: relative;
width:100%;

input {
width:100%;
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  padding:1rem 3rem;
  color: #fff;
 border-radius:1rem;
 outline:none;
  
}
svg {
  position: absolute;
  top:50%;
  left:0;
  transform: translate(100%, -50%);
  color:#fff;
}

`






export default Search;
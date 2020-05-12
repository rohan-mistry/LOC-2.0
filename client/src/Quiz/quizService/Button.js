import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  text-transform: uppercase;
  border: none;
  outline: none;
  width:200px;
  height:150px;
  justify-align:center;
  margin-left:370px;
  margin-top:30px;
  margin-bottom:30px;
  padding: ${props => (props.primary ? '1rem' : '0.8rem 1.3rem')};
  border-radius: 0.1875rem;
  color: green;
  font-size: 2rem;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: background 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background: yellow;
  }
`;

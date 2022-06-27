import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .orange {
    background-color: #ff8c00;
  }
  .duplo {
    flex-grow: 150;
  }
  h1 {
    margin-bottom: 80px;
  }

 
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  background: #dcdcdc;

  
  
`;



export const Result = styled.div`
    height: 50px;
    display: flex;
    width: 290px;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5em;
    background: #fff;
    color: #000;
    padding-right: 10px;
    border: 1px solid black;
  
`;

export const Button = styled.button`
  background: #fff;
  flex-wrap: wrap;
  margin: 10px;
  display: flex;
  flex: 1 1 55px;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

import styled from "styled-components"


export const Heading = styled.header` 
display:grid;
grid-template-columns: repeat(4, 1fr);
margin:2rem;
justify-content: center;
width:80%;
margin:2rem auto;
`

export const LogoWrapper = styled.div`
width:auto;
justify-content: left;
  
  .logo {
    width:150px;
  
  }
  
`


export const Wrapper = styled.div`

`
  
export const IconWrapper = styled.div`
display:flex;
gap:3rem;
align-items: center;
margin-top:-.5rem;

   .avatar > img{
     width:45px;
     height:45px;
     cursor:pointer;
   }
   
   .avatar > img:hover {
     border: 1px ${({theme})=> theme.colors.regularOrange} solid;
     border-radius:25px;
   }
   
   .cart > img{
     width:20px;
     height:20px;
     cursor:pointer;
   }
`
  
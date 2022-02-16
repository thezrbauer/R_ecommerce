import styled from "styled-components"


export const Heading = styled.header` 
display:grid;
font-family: 'Kumbh Sans', sans-serif;
grid-template-columns: repeat(4, 1fr);
margin:2rem auto;
justify-content: center;
align-items:center;
width:80%;


@media only screen and (max-width: 600px) { 
  margin:1.5rem auto;
  grid-template-columns: repeat(4, 1fr);

}

`


export const BurgerWrapper = styled.div`
display:none;
  
@media only screen and (max-width: 600px) { 
  display:inline;


  #menuToggle
   {
  display: block;
  position: relative;
  z-index: 1;
  margin-left:-1rem;
}

#menuToggle a
{
  text-decoration: none;
  color: white;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
 color:red;
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -11px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; 
  z-index: 2; 

}


#menuToggle span
{
  display: block;
  width: 32px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
 
  background: ${({theme})=> theme.colors.darkGrayishBlue};
  
  
  z-index: 1;
  
  transform-origin: 5px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}


#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}


#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}


#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}


#menu
{
  position: absolute;
  display:flex;
  flex-direction:column;
  width: 24rem;
  height:60rem;
  margin: -100px 0 0 -60px;
  padding: 10rem 3.4rem;
  
  
  background: ${({theme})=> theme.colors.lightGrayishBlue};
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  
  color:black;
  padding: 10px 0;
  font-weight:bold;
  font-size: 18px;
  line-height:40px;
}


#menuToggle input:checked ~ ul
{
  transform: none;
}

}



`

export const LogoWrapper = styled.div`
width:auto;
justify-content: left;
margin-right:1rem; 
margin-bottom:.4rem; 
  .logo {
    width:200px;
  
  }
  
`


export const Wrapper = styled.div`
margin-top:3px;


@media only screen and (max-width: 600px) { 
display:none;


}

`
  
export const IconWrapper = styled.div`
display:flex;
align-items: center;

   .avatar > img{
     width:30px;
     height:30px;
     margin-right:1rem;
     cursor:pointer;
   }
   
   .avatar > img:hover {
     border: 1px ${({theme})=> theme.colors.regularOrange} solid;
     border-radius:25px;
   }
   
   .cart > img{
     width:25px;
     height:25px;
     margin-right:1rem;
     cursor:pointer;
   }


   @media only screen and (max-width: 600px) { 
    margin-right:-2rem;
    gap:1rem;


    .cart {
   padding-left:2.5rem;
 }

     }

`
  
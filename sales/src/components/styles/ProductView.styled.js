import styled from "styled-components"


export const ProductViewer = styled.div` 
  .desktop {
    display:grid;
    grid-template-columns:repeat(4, 80px);
    grid-auto-rows: 80px;
    grid-gap:1rem;
    margin:1rem;
    width:auto;
    height:auto;
  }
  
  .slider-mob {
    display:none;
  }
  
  .img {
    width:100%;
    border-radius:10px;
  }
  
  .img-product {
   grid-column: 1/5;
   grid-row:1/5
  }

  @media only screen and (max-width: 600px) { 

  .desktop  {
    display:none;
  }

  .img {
 
    border-radius:0px;
  }

  .slider-mob__item{
  
  }

  .slider-mob__item img{
    width: 100%;
    object-fit: cover;
    }

  .slider-mob{
    position: relative;
    display:inline;
    height:80vh;
}

.slider-mob__control {

  position:absolute;
  
  top:10rem;
  height:auto;
  width:100%;
  margin:1rem;
}

.slider-mob__prev-btn,
.slider-mob__next-btn {
  position:relative;
  background-color:white;
  border-radius:50%;
  width:3.5rem;
  height:3.5rem;
  display:flex;
  justify-content: center;
  align-items: center;

}

.slider-mob__next-btn {
float:right;
margin-top:-3.5rem;
right:-29rem;
}
.slider-mob__next-btn img {
  width: 1rem;
}
.slider-mob__prev-btn  {

}

.slider-mob__prev-btn img {
  width: 1rem;
  
}
}


`
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
    height:50vh;
    }

  .slider-mob{
    position:relative;
    display:inline;
 
}

.slider-mob__control {

  align-items:center;

  
}

.slider-mob__prev-btn,
.slider-mob__next-btn {
  position:absolute;
  display:flex;
  background-color:white;
  border-radius:50%;
   top:30vh;
  width:3.5rem;
  height:3.5rem;
  display:flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);

}

.slider-mob__next-btn {
float:right;
right:-32rem;

}
.slider-mob__next-btn img {
  width: 1rem;

}
.slider-mob__prev-btn  {
  left:2rem;
}

.slider-mob__prev-btn img {
  width: 1rem;
  
}
}


`
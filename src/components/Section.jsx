import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg }) => {
  return (
      <Wrap bgImage={backgroundImg}>
         <Fade bottom>
          <ItemText>
                <h1> {title}</h1>
                <p>{description}</p>
              </ItemText>
              </Fade>
          <BottonArrow>
              <Fade bottom>
                  <Bottons>
                  <LeftBotton>
                        {leftBtnText}
                  </LeftBotton>
                  {rightBtnText && 
                  <RightBotton>
                    {rightBtnText}
                  </RightBotton>
                  }
              </Bottons>
              </Fade>
          <DownArrow src="/images/down-arrow.svg"/>
          </BottonArrow>

      </Wrap>
  )
}

export default Section


const Wrap = styled.div`
    width:100%;
    height:100vh;
    background-image: url('/images/model-s.jpg');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`};

    /* @media (max-width:1024px){
       background-size: cover;
       object-fit:cover;
       width:100%;
    height:100vh;   
    };
    @media (max-width:600px){
       background-size: cover;
       width:100%;
        height:100vh;   
    }; */
`
const ItemText = styled.div`
    padding: 15vh 0 0 0;
    text-align: center;
    
    font-weight:400;
h1{
    font-weight:400;
    color:black;
    font-size:2.5rem;
}
`

const Bottons = styled.div`
    display:flex;
    margin-bottom:2rem;
    gap:1rem;
    @media (max-width:1024px){
        flex-direction:column;
    };
    @media (max-width:600px){
        flex-direction:column;
    }
        
    
`

const BottonArrow = styled.div``
    

const LeftBotton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 2.5rem;
    width: 16rem;
    color: white;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 5.5rem;
    opacity:0.9;
    text-transform:uppercase;
    font-size:.8rem;
    cursor: pointer;
`
                          

const RightBotton = styled(LeftBotton)`
    background-color: white;
    color: black;
`

const DownArrow = styled.img`
    margin-top:1.2rem;
    height : 2.5rem;
    animation: animateDown infinite 1.5s;
    overflow-x:hidden;
    
`
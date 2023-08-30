import styled, {keyframes} from 'styled-components';

const backgroundAnimationMinus = keyframes`
    from{
      background-position: 0 center;
    }
    to{
      background-position:-200% center;
    }
`
const backgroundAnimationPlus = keyframes`
    from{
      background-position: 0 center;
    }
    to{
      background-position:+200% center;
    }
`

const StyledPotatoSpan = styled.span`
  animation: ${props => props.sign && props.sign === "-" ? backgroundAnimationPlus:backgroundAnimationMinus } 6s infinite linear;
  background: linear-gradient(to right,
  ${props => props.colors && props.colors[0] ? props.colors[0] : "red"},
  ${props => props.colors && props.colors[1] ? props.colors[1] : "white"},
  ${props => props.colors && props.colors[2] ? props.colors[2] : "white"},
  ${props => props.colors && props.colors[3] ? props.colors[3] : "blue"},
  ${props => props.colors && props.colors[4] ? props.colors[4] : "blue"},
  ${props => props.colors && props.colors[0] ? props.colors[0] : "red"}
  );
  font-weight: bold;
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default StyledPotatoSpan;
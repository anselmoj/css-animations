import { Content, Separator } from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const Button = styled.div``

export const Container = styled(Content)`
  animation: growDown 500ms ease-in-out forwards;
  animation-name: growDown;
  background-color: #9400d3;
  border: 1px solid #d3d3d3;
  border-radius: 1rem;
  margin-left: 1rem;
  padding: 0.7rem;
  transform-origin: top center;
  width: 15rem;
  height: 9rem;

  @keyframes growDown {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    80% {
      opacity: 0.5;
      transform: scaleY(1.1);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }
`

export const Item = styled.a`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  color: #ffff;
  font-family: 'Kanit';
`

export const ContainerSeparator = styled(Separator)`
  border: 0;
  border-top: 1px solid #fff;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`

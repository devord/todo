import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 3.5rem;
  background-color: #EEE;

  && > * {
    margin: 0 auto;
    max-width: 960px;
    width: 100%;
  }
`

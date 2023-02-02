import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  color: white;
  gap: 1rem;
  font-weight: 600;

  button:nth-child(1) {
    background-color: #ffbe00;
    width: 25%;
  }

  button:nth-child(2) {
    background-color: #008b47;
    width: 25%;
  }

  button {
    padding: 0.25rem;
    border-radius: 2px;
    animation-duration: 0.2s;
  }

  button:hover {
    filter: brightness(0.9);
  }
`

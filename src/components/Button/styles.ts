import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: ${(props) => props.theme.BACKGROUND_BUTTON_PRIMARY};
  color: ${(props) => props.theme.TEXT_WHITE};

  border: 0;
  border-radius: 5px;

  margin-right: 32px;
  padding: 10px 50px;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  transition: background 0.5s ease;

  > span,
  strong {
    color: ${(props) => props.theme.TEXT_WHITE};
    font-size: 1.4rem;
    font-weight: bold;
  }

  > svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background: ${(props) => props.theme.BACKGROUND_BUTTON_SECONDARY};
  }
`

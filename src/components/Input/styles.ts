import styled from 'styled-components'

export const InputContainer = styled.div`
  height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;

  background: ${(props) => props.theme.BACKGROUND_INPUT_PRIMARY};
  border-radius: 5px;

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.TEXT_ICON};

    margin-left: 100px;
  }

  input {
    height: 4.8rem;
    width: 100%;

    border-radius: 5px;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.TEXT_GRAY_200};

    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.TEXT_PLACEHOLDER};
    }
  }
`

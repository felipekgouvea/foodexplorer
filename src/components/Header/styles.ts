import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.BACKGROUND_BLUE_850};
  height: 10.4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 12.3rem;

  > button {
    margin-left: 32px;
  }

  > svg {
    width: 30px;
    height: 30px;

    color: ${(props) => props.theme.TEXT_WHITE};

    cursor: pointer;

    transition: color 0.5s ease;

    &:hover {
      color: ${(props) => props.theme.TEXT_GRAY_100};
    }
  }
`

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > h1 {
    font-size: 2rem;
    font-weight: bold;

    margin-right: 32px;

    color: ${(props) => props.theme.TEXT_WHITE};
  }

  > img {
    width: 30px;
    height: 30px;
  }
`

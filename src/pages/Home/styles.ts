import styled from 'styled-components'

export const HomeContainer = styled.div``

export const HomeContent = styled.main``

export const HomeBanner = styled.div`
  display: flex;
  align-items: end;
  height: 260px;
  border-radius: 8px;
  margin: 174px 124px 62px 124px;
  background: linear-gradient(
    356deg,
    rgba(9, 30, 38, 1) 0%,
    rgba(0, 19, 28, 1) 100%
  );

  img {
    width: 656px;
    height: 412px;

    margin-left: -58px;

    object-fit: cover;
  }
`

export const HomeBannerInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 3.8rem;
    color: ${(props) => props.theme.TEXT_GRAY_200};
    font-weight: 500;
    line-height: 50px;
    letter-spacing: 1px;
    font-family: 'Poppins', sans-serif;

    padding-left: 100px;
  }
  > p {
    color: ${(props) => props.theme.TEXT_GRAY_200};
    font-weight: 100;
    font-size: 1.5rem;
    padding-left: 100px;
  }
`

import { Header } from '../../components/Header'
import {
  HomeContainer,
  HomeContent,
  HomeBanner,
  HomeBannerInfo,
} from './styles'
import bannerImage from '../../assets/banner.svg'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <HomeBanner>
          <img src={bannerImage} alt="Foto do banner principal" />
          <HomeBannerInfo>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </HomeBannerInfo>
        </HomeBanner>
      </HomeContent>
    </HomeContainer>
  )
}

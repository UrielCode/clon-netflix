import request from "../Request"
import Main from "../components/Main"
import Row from "../components/Row"

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID = '1' title='Ver ahora' fetchURL={request.requestNowPlaying} />
      <Row rowID = '2' title='Próximamente' fetchURL={request.requestUpcoming} />
      <Row rowID = '3' title='Popular' fetchURL={request.requestPopular} />
      <Row rowID = '4' title='Tendencias' fetchURL={request.requestTrending} />
      <Row rowID = '5' title='Los más valorados' fetchURL={request.requestTopRated} />
      <Row rowID = '6' title='Aventura' fetchURL={request.requestAventure} />
      <Row rowID = '7' title='Terror' fetchURL={request.requestHorror} />
    </>
  )
}

export default Home

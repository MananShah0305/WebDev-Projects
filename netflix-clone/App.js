import './App.css';
import Row from './Row.js'
import requests from './requests.js'
import Banner from './Banner.js'
import Navbar from './Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      {/* isLargeRow is not a pre-defined prop-name.you can have any other name like large,isLarge,isisLarge,etc. .Note that the default value of any attribute declared in the component is true */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;

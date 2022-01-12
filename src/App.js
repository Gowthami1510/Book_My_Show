import logo from './logo.svg';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import ImageSlider from './components/ImageSlider';
import CardSlider from './components/CardSlider/CardSlider';
import ClickPic from './components/ClickPic';
import DifferentCards from './components/DifferentCards';

function App() {
  return (
    <div >
    <Header/>
    <ImageSlider/>
    <CardSlider/>
    <ClickPic/>
    <DifferentCards/>
    </div>
  );
}

export default App;

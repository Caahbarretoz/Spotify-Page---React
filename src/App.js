import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Section from './Main-section/Section';
import Footer from './Footer/Footer';

function App() {
  return (
    <body>
      <Sidebar></Sidebar>
      <div class="main-conteiner">
        <Header></Header>
        <Section></Section>
      </div>
      <Footer></Footer>
    </body>
  );
}

export default App;

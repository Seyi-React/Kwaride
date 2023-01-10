import react from 'react';

import Kwaride from './Home/Home';
import Section, {Location} from './Section/Section';
import SectionII from './sectionTwo/Section';
import Book,{Download} from './sectionTwo/Book';
import Driver from './sectionTwo/Driver';
import { Footer } from './sectionTwo/Driver';


function App() {
  return (
    <div>
      <Kwaride />
      <Section />
      <Location />
      <SectionII />
      <Book/>
      <Download />
      <Driver/>
      <Footer/>
    </div>
  );
}

export default App;

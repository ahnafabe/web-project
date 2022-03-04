import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ScrollConatainer, ScrollPage, Animator, batch, Sticky, Fade, MoveOut, MoveIn, StickyIn, FadeIn, ZoomIn, Move} from 'react-scroll-motion'
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


function App() {
  return (
    <ScrollConatainer>
      <ScrollPage page={0}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
    </Animator>
  </ScrollPage>
  <ScrollPage page={1}>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
    </Animator>
  </ScrollPage>
  <ScrollPage page={2}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
    </Animator>
  </ScrollPage>
  <ScrollPage page={3}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage page={4}>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage>

      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" />
          <Route path="/products" />
          <Route path="/contact" />
          <Route path="/about" />
        </Routes>
      </Router> 
    </ScrollConatainer>
  );
}

export default App;

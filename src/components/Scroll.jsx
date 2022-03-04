import React, { Component } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
//import 'bootstrap/dist/css/bootstrap.css';


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

class Scroll extends Component{
      
    render() { 
      return (
          <div>
             <h1>
                <ScrollContainer>
                    <ScrollPage page={0}>
                      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "30px" }}>AceProductionsInc 😀</span>
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
                          <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Sanan -
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
                </ScrollContainer>
                  </h1>
                
          </div>
            )
      }
}
export default Scroll;
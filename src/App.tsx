import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import Joke from "./Joke";
import Profess from "./Profess";
import Profile from "./Profile";
import Projects from "./Projects";
import Space from "./Space";
import Headers from "./Headers";

export default function App() {

  return (
    <>
      <div className="bg-wrapper">
        <div className="main-wrapper">
          <Profile />
          <Space />
          <Headers />
          <Space />
          <Profess />
          <Space />
          <Projects />
          <Space />
          <Joke />
        </div>

      </div>        
      <footer>
          <div className="foot-wrapper">
            <FooterLeft />
            <Space />
            <FooterRight />
          </div>
      </footer>
    </>
  )
}

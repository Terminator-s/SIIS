import React , {Component} from 'react';
import './Home.css'
import BM from './resources/BM.jpg'
import IT from './resources/IT.jpg'
import HR from './resources/HR.jpg'
import AD from './resources/Architectural Design.jpg'
import Avatar from './resources/Avatar.png'
import './Slideshow.scss'
import Header from './Header'
import Footer from './Footer'
import Navigator from './Navigator'
class Home extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Navigator/>
          <Slide />
            <h1> Courses</h1>
            <Card />
            <div>
            <i className=" fa fa-quote-right w3-xxxlarge w3-opacity" style={{padding:30}}>&nbsp; <p>Start where you are.Use what you have. <br/>Do what you can</p></i>
            </div>
            <div>
                <div className="text-block w3-panel w3-leftbar w3-light-grey">

                    We are a leading non-state degree awarding institute approved by the University Grants Commission (UGC) under the Universities Act.
                    We are also members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU),
                    and the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology, UK.
                    We are proud to be listed as a leading and formidable awarding institute authorised and approved by the University Grants Commission (UGC) under the Universities Act,
                    and the International Association of Universities (IAU). Furthermore, not only are we the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology (IET.),
                    UK, our IT degrees are also in turn accredited by the Engineering Council, UK.
                </div>
            </div>
             <Footer/>
        </div>
    );
  }
}
class Slide extends Component{
    render(){
        return(

            <div className="wrapper">
                <div className="slideshows">
                    <div className="slideshow slideshow--hero">
                        <div className="slides">
                            <div className="slide slide1"></div>
                            <div className="slide slide2"></div>
                            <div className="slide slide3"></div>
                        </div>
                    </div>
                    <div className="slideshow slideshow--contrast slideshow--contrast--before">
                        <div className="slides">
                            <div className="slide slide1"></div>
                            <div className="slide slide2"></div>
                            <div className="slide slide3"></div>
                        </div>
                    </div>
                    <div className="slideshow slideshow--contrast slideshow--contrast--after">
                        <div className="slides">
                            <div className="slide slide1"></div>
                            <div className="slide slide2"></div>
                            <div className="slide slide3"></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

class Card extends Component{
    render(){
        return(

            <div className="row">
                <div className="column">
            <div className = "flip-card" >
                <div className = "flip-card-inner" >
                    <div className = "flip-card-front" >
                        < img
                            src = {IT}
                            alt = "Avatar"
                            style = {{width:255,height:400}} />
                            </div>
                                <div className="flip-card-back">
                                    <h2>John Doe</h2>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                </div>
            </div>
                </div>
                <div className="column">
                    <div className = "flip-card" >
                        <div className = "flip-card-inner" >
                    <div className = "flip-card-front" >
                        < img
                            src = {BM}
                            alt = "Avatar"
                            style = {{width:255,height:400}} />
                    </div>
                    <div className="flip-card-back">
                        <h2>John Doe</h2>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
                    </div></div>

                <div className="column">
                    <div className = "flip-card" >
                        <div className = "flip-card-inner" >
                            <div className = "flip-card-front" >
                                < img
                                    src = {HR}
                                    alt = "Avatar"
                                    style = {{width:255,height:400}} />
                            </div>
                            <div className="flip-card-back">
                                <h2>John Doe</h2>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div></div>

                <div className="column">
                    <div className = "flip-card" >
                        <div className = "flip-card-inner" >
                            <div className = "flip-card-front" >
                                < img
                                    src = {AD}
                                    alt = "Avatar"
                                    style = {{width:255,height:400}} />
                            </div>
                            <div className="flip-card-back">
                                <h2>John Doe</h2>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div></div>
            </div>



        )
    }
}
export default Home;

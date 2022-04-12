import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carusel1  from "../../Assets/img/carusel1.jpg"
import carusel2  from "../../Assets/img/carusel2.jpg"
import carusel3  from "../../Assets/img/carusel3.jpg"
import carusel4  from "../../Assets/img/carusel4.jpg"


class Carusel extends Component{
    render() {
        return (
            <Carousel>
                <div>
                    <img src={carusel1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={carusel2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={carusel3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={carusel4} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
}
export default Carusel;

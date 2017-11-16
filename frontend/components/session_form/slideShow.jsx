import React from "react";

class SlideShow extends React.Component {
    render() {
        const { title, imageSrc, display } = this.props
        console.log(imageSrc)
        return(
            <div className="slide-show" style={display}>
                <h1>{title}</h1>
                <img src={imageSrc}/>
            </div>
        );
    }
} 

export default SlideShow;
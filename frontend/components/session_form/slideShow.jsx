import React from "react";

class SlideShow extends React.Component {
    render() {
        const { title, imageSrc} = this.props

        return(
            <div className="slide-show">
                <img src="imageSrc" alt=""/>
            </div>
        );
    }
} 

export default SlideShow;
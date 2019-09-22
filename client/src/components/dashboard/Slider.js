import React from "react";

function Slider() {
    return (
        <div>
            <div className="sliderParent">
                <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider" />
                    Youtube
        </label>
                <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider" />
                    LinkedIn
        </label>
                <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider" />
                    LMS(Moodle)
        </label>
                <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider" />
                    Udemy
        </label>
            </div>
        </div>
    );
};

export default Slider;

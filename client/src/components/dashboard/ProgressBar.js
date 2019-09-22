import React from "react";

function ProgressBar() {

    return (
        <div>
            <div className="set-size charts-container">
                <div className="pie-wrapper progress-30">
                    <span className="label">
                        50<span className="smaller">%</span>
                    </span>
                    <div className="pie">
                        <div className="left-side half-circle" />
                        <div className="right-side half-circle" />
                    </div>
                </div>
                <div className="pie-wrapper progress-45 style-2">
                    <span className="label">
                        45<span className="smaller">%</span>
                    </span>
                    <div className="pie">
                        <div className="left-side half-circle" />
                        <div className="right-side half-circle" />
                    </div>
                    <div className="shadow" />
                </div>

                <div className="pie-wrapper pie-wrapper--solid progress-65">
                    <span className="label">
                        65<span className="smaller">%</span>
                    </span>
                </div>
            </div>
            <div className="labels">
                <div className="progressBarTitle" style={{ color: "#3498db" }}>
                    Mandatory Learning
        </div>
                <div className="progressBarTitle" style={{ color: "#1abc9c" }}>
                    LMS Learning
        </div>
                <div className="progressBarTitle" style={{ color: "#e67e22" }}>
                    Informal Learning
        </div>
            </div>
        </div>
    );
};

export default ProgressBar;

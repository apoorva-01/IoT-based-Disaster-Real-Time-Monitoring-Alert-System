import ReactGauge from "react-gauge-capacity";
import React from "react";
let contWidth = 360;
let contHeight = 160;
let gaugeRadius = 60;
let centerLineHeight = 180;




export default function HumidityGauge(props) {
    let options = {
        isInnerNumbers: false,
        aperture: 180,
        radius: gaugeRadius,
        tickOffset: 20,
        arcStrokeWidth: 20,
        miniTickLength: 1,
        miniTickStrokeWidth: 1,
        tickLabelOffset: 12,
        scaleDivisionNumber: 5,
        centralCircleRadius: 10,
        marks: [
            "30%",
            null,
            "40%",
            "",
            "",
            "",
            "60%",
            null,
            "70%",
        ],
        contentWidth: contWidth,
        svgContainerWidth: contWidth,
        svgContainerHeight: contHeight,
        arrowValue: (4.5 * (props.value - 30)) / 180,
        arrowColor: "#354357",
        gaugeCenterLineHeight: centerLineHeight,
        viewBox: "30 0 300 200",
        ranges: [
            {
                start: 0,
                end: 45 / 180,
                color: "#FF0000",
            },

            {
                start: 45 / 180,
                end: 135 / 180,
                color: "#37b400",
            },
            {
                start: 135 / 180,
                end: 180 / 180,
                color: "#FF0000",
            },
        ],
    };

    return (
        <>
            <ReactGauge {...options} />
        </>
    );
}

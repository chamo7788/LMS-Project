import React, { useState, useEffect } from "react";
import "../../assets/css/Foram/customSlider.css";

function CustomSlider({ children, autoPlay = true }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);

    useEffect(() => {
        if (autoPlay && slideDone && children.length > 1) {
            setSlideDone(false);
            setTimeID(
                setTimeout(() => {
                    slideNext();
                    setSlideDone(true);
                }, 5000)
            );
        }
        return () => clearTimeout(timeID); // Clean up timeout on unmount
    }, [slideDone, autoPlay, children.length]);

    const slideNext = () => {
        setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
    };

    const slidePrev = () => {
        setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
    };

    const AutoPlayStop = () => {
        if (timeID > 0) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };

    const AutoPlayStart = () => {
        if (autoPlay && !slideDone) {
            setSlideDone(true);
        }
    };

    return (
        <div
            className="container__slider"
            onMouseEnter={AutoPlayStop}
            onMouseLeave={AutoPlayStart}
        >
            {children.map((item, index) => (
                <div
                    className={"slider__item slider__item-active-" + (activeIndex + 1)}
                    key={index}
                >
                    {item}
                </div>
            ))}

            {children.length > 1 && (
                <>
                    <div className="container__slider__links">
                        {children.map((item, index) => (
                            <button
                                key={index}
                                className={
                                    activeIndex === index
                                        ? "container__slider__links-small container__slider__links-small-active"
                                        : "container__slider__links-small"
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveIndex(index);
                                }}
                            ></button>
                        ))}
                    </div>

                    <button
                        className="slider__btn-next"
                        onClick={(e) => {
                            e.preventDefault();
                            slideNext();
                        }}
                    >
                        {">"}
                    </button>
                    <button
                        className="slider__btn-prev"
                        onClick={(e) => {
                            e.preventDefault();
                            slidePrev();
                        }}
                    >
                        {"<"}
                    </button>
                </>
            )}
        </div>
    );
}

export default CustomSlider;

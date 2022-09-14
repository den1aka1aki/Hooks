import React, { useEffect, useRef, useState } from "react";
import { Collapse as BsCollapse } from "bootstrap";
import PropTypes from "prop-types";
const CollapseWrapper = ({ children, title, name }) => {
    const [display, setDisaplay] = useState(false);
    const collapseRef = useRef();
    const toggleDisplay = () => {
        setDisaplay((prevState) => !prevState);
    };
    useEffect(() => {
        const newCollapse = new BsCollapse(collapseRef.current, {
            toggle: false
        });
        display ? newCollapse.show() : newCollapse.hide();
    }, [display]);

   const list = React.Children.map(children, (child, index) => {
        if (child.type.name === "Component") {
            return (
                <div className='d-flex'>
                    {index + "-"} {child}
                </div>
            );
        } else {
            return child;
        }
    });
    return (
        <div className="card  my-2">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    {title}
                    <i
                        className={
                            "bi bi-caret-" +
                            (!display ? "down-fill" : "up-fill")
                        }
                        onClick={toggleDisplay}
                    ></i>
                </div>
                <div className="collapse" ref={collapseRef} id={name + title}>
                    {list}
                </div>
            </div>
        </div>
    );
};
CollapseWrapper.defaultProps = {
    title: "Информация"
};
CollapseWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    title: PropTypes.string,
    name: PropTypes.string
};

export default CollapseWrapper;

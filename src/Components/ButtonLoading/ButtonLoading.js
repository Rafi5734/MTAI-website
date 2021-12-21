import React from "react";
import Switch from "@mui/material/Switch";

import { Badge } from "react-bootstrap";

const ButtonLoading = ({ checked, handleChange }) => {
    //new button loading
    // const [checked, setChecked] = React.useState(true);

    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };
    return (
        <div className="loading-btn mt-5">
            {checked ? (
                <div>
                    <p
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                        }}
                    >
                        Yearly
                        <Badge
                            bg="danger"
                            style={{
                                position: "relative",
                                marginBottom: "-30px",
                            }}
                        >
                            -20%
                        </Badge>
                    </p>
                </div>
            ) : (
                <div>
                    <p
                        style={{
                            fontFamily: "Courier New",
                            fontWeight: "bold",
                        }}
                    >
                        Monthly
                    </p>
                </div>
            )}
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                className="control-btn"
            />
        </div>
    );
};

export default ButtonLoading;

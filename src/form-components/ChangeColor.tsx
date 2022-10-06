import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "yellow",
    "white",
    "pink"
];

export function ChangeColor(): JSX.Element {
    const [Color, setColor] = useState<string>("red");
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        onChange={changeColor}
                        label={
                            <span style={{ background: color }}>{color}</span>
                        }
                        value={color}
                        checked={Color === color}
                    />
                ))}
                <div>
                    <span>You have chosen </span>
                    <span
                        data-testid="colored-box"
                        style={{ background: Color }}
                    >
                        {Color}
                    </span>
                    <span>.</span>
                </div>
            </div>
        </div>
    );
}

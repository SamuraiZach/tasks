import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [bVal, setbVal] = useState<boolean>(false);
    function changeValue(): void {
        setbVal(!bVal);
    }
    return (
        <div>
            <Button onClick={changeValue}>Reveal Answer</Button>
            {bVal === true ? <span>42</span> : <span></span>}
        </div>
    );
}

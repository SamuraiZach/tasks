import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [valueAnswer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Enter Answer:</Form.Label>
                <Form.Control
                    value={valueAnswer}
                    onChange={updateAnswer}
                    placeholder={"Enter Answer Here:"}
                />
            </Form.Group>
            {valueAnswer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}

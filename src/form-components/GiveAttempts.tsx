import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setRQ] = useState<string>("");
    const parsedValue = parseInt(reqAttempts) || 0;
    function updateBOXvalue(event: React.ChangeEvent<HTMLInputElement>) {
        setRQ(event.target.value);
    }
    function gainButton() {
        if (parsedValue !== 0) {
            setAttempts(parsedValue + attempts);
        }
    }
    function useButton() {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>{attempts}</span>
            <Form.Group controlId="Give Attempt">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    placeholder={"Enter Answer Here:"}
                    onChange={updateBOXvalue}
                />
            </Form.Group>
            <div>
                <Button onClick={gainButton}>gain</Button>
                <Button onClick={useButton} disabled={attempts <= 0}>
                    use
                </Button>
            </div>
        </div>
    );
}

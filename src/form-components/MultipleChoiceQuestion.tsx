import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentChoice, setChoice] = useState<string>("");
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Select Answer:</Form.Label>
                <Form.Select value={currentChoice} onChange={updateChoice}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {currentChoice === expectedAnswer ? (
                    <span>✔️</span>
                ) : (
                    <span>❌</span>
                )}
            </div>
        </div>
    );
}

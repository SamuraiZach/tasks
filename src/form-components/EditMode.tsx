import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setMode] = useState<boolean>(false);
    const [userName, setName] = useState<string>("Your Name");
    const [studentCheck, setStudent] = useState<boolean>(true);
    function updateModeX(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateStudentX(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateNameX(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editMode-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateModeX}
            />
            {editMode === true ? (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student"
                    checked={studentCheck}
                    onChange={updateStudentX}
                />
            ) : null}
            <div>
                {editMode === true ? (
                    <Form.Group controlId="NameChanger">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={userName} onChange={updateNameX} />
                    </Form.Group>
                ) : null}
            </div>
            <div>
                {studentCheck === true ? (
                    <span>{userName} is a student</span>
                ) : (
                    <span>{userName} is not a student</span>
                )}
            </div>
        </div>
    );
}

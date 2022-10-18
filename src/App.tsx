import React, { useState } from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    const [quizzer, setQuizzer] = useState<boolean>(true);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript (Zachariah Barraza /
                SamuraiZach)
                <Button
                    onClick={() => {
                        setQuizzer(!quizzer);
                    }}
                >
                    {quizzer ? "Quizzer" : "Tasks"}
                </Button>
            </header>
            <div style={{ display: quizzer ? "block" : "none" }}>
                <Quizzer></Quizzer>
            </div>
            <div style={{ display: !quizzer ? "block" : "none" }}>
                <h1>Header</h1>
                <img
                    src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
                    alt="HUGE CAPYBARA STARING AT YOU"
                />
                <ol>
                    <li>Capybaras are cool as heck</li>
                    <li>Capybaras are big ginuea pigs</li>
                    <li>Capybaras are cool forver</li>
                    <li>TEST</li>
                </ol>
                <p>
                    <code>Zachariah Barraza SamuraiZach Hello World</code>
                </p>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            <div className="Col1">
                                <p>FIRST COLUMN</p>
                                <div id="rectangle"></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="Col2">
                                <p>SECOND COLUMN</p>
                                <div id="rectangle"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <DoubleHalf></DoubleHalf>
                <hr></hr>
                <CheckAnswer expectedAnswer="42"></CheckAnswer>
                <hr></hr>
                <GiveAttempts></GiveAttempts>
                <hr></hr>
                <EditMode></EditMode>
                <hr></hr>
                <ChangeColor></ChangeColor>
                <hr></hr>
                <MultipleChoiceQuestion
                    options={["a", "b", "c"]}
                    expectedAnswer="b"
                ></MultipleChoiceQuestion>
                <hr></hr>
                <ChooseTeam></ChooseTeam>
                <hr></hr>
                <ColoredBox></ColoredBox>
                <hr></hr>
                <ShoveBox></ShoveBox>
                <hr></hr>
                <Counter></Counter>
                <hr></hr>
                <RevealAnswer></RevealAnswer>
                <hr></hr>
                <StartAttempt></StartAttempt>
                <hr></hr>
                <TwoDice></TwoDice>
                <hr></hr>
                <ChangeType></ChangeType>
                <hr></hr>
                <CycleHoliday></CycleHoliday>
            </div>
        </div>
    );
}

export default App;

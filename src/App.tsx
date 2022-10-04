import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript (Zachariah Barraza /
                SamuraiZach)
            </header>
            <h1>Header :)</h1>
            <img
                src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
                alt="HUGE CAPYBARA STARING AT YOU"
            />
            <ol>
                <li>Capybaras are cool as heck</li>
                <li>Capybaras are big ginuea pigs</li>
                <li>Capybaras are cool forver</li>
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
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;

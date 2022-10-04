import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [tries, setTry] = useState<number>(4);
    const [isQuiz, setQuiz] = useState<boolean>(false);
    function startQuiz(): void {
        changeTries();
        tries > 0 ? setQuiz(true) : setQuiz(false);
        if (tries === 0) {
            setQuiz(true);
        }
    }
    function changeTries(): void {
        setTry(tries > 1 ? tries - 1 : 0);
    }
    function mulliganTries(): void {
        setTry(tries + 1);
    }
    function stopQuiz(): void {
        setQuiz(false);
    }
    return (
        <div>
            <span>{tries}</span>
            <Button onClick={startQuiz} disabled={isQuiz || tries === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isQuiz}>
                Stop Quiz
            </Button>
            <Button onClick={mulliganTries} disabled={isQuiz}>
                Mulligan
            </Button>
        </div>
    );
}

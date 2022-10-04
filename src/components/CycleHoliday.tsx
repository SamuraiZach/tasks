import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🐰" | "🎃" | "🦃" | "🤶" | "🎆";
const ALPHABET_TRANSITION: Record<Holiday, Holiday> = {
    "🤶": "🐰",
    "🐰": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "🤶"
};
const YEAR_TRANSITION: Record<Holiday, Holiday> = {
    "🐰": "🎃",
    "🎃": "🦃",
    "🦃": "🤶",
    "🤶": "🎆",
    "🎆": "🐰"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🐰");
    function changeByAlpha(): void {
        const newHoliday = ALPHABET_TRANSITION[holiday];
        setHoliday(newHoliday);
    }
    function changeByYear(): void {
        const newYearHoliday = YEAR_TRANSITION[holiday];
        setHoliday(newYearHoliday);
    }
    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
            <div>
                <Button onClick={changeByAlpha}>Advance by Alphabet</Button>
                <Button onClick={changeByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}

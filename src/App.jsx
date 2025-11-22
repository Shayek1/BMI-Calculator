import React, {useState} from "react";

const App = () => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [results, setResults] = useState("");

    const bmiFormula = () => {
        if (!weight || !height) {
            setResults("Enter your height and weight");
        }

        const bmiCalc = (weight / ((height/100) * (height/100)))
        const bmiWholeNumber = bmiCalc.toFixed(1);

        let bmiDivision = "";
        if (0 < bmiWholeNumber < 18.5) bmiDivision = "UNDERWEIGHT";
        else if (bmiDivision < 25) bmiDivision = "NORMAL WEIGHT";
        else if (bmiDivision < 30) bmiDivision = "OVERWEIGHT";
        else if (bmiDivision < 40) bmiDivision = "OBESE";
        else bmiDivision = "MORBIDLY OBESE";

        setResults(`Your BMI is ${bmiWholeNumber} : You fall in the ${bmiDivision} category`);
    }

    return <div>

        <div className="container">
        <h1>BMI Calculator</h1>

            {/* Height */}
            <label htmlFor="Height"> Height (cm)</label>
            <input type="number" placeholder="Example: 150" id="Height"/>

            {/* Weight */}
            <label htmlFor="Weight">Weight (kg)</label>
            <input type="number" placeholder="Example: 50" id="Weight"/>

            <button onClick={bmiFormula}>Calculate BMI</button>

            <div className="results">Testing</div>

        </div>
    </div>;
    };

export default App;
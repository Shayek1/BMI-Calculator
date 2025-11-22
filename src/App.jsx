import React from "react";

const App = () => {
    return <div>

        <div className="container">
        <h1>BMI Calculator</h1>

            {/* Height */}
            <label htmlFor="Height"> Height (cm)</label>
            <input type="number" placeholder="Example: 150" id="Height"/>

            {/* Weight */}
            <label htmlFor="Weight">Weight (kg)</label>
            <input type="number" placeholder="Example: 50" id="Weight"/>

            <button>Calculate BMI</button>

            <div className="results">Testing</div>

        </div>
    </div>;
    };

export default App;
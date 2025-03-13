import React, {useState} from 'react';

    

function WeightConverter() {

    const [kgs, setKgs] = useState(0);

    //
    const handleWeightDisplay = (event) => {
            setKgs(event.target.value)
        }
    //function to transform kg to pounds
    const transformKgToPounds = () => {
            return kgs / 2.2;
    }

    return(
        <div className="converter-container">
            <h1>Weight Converter</h1>
            <input type="number" placeholder="Enter weight" onChange={handleWeightDisplay}/>
            <h2 id="result-display" className='result-display'>{kgs/ 2.2} Pounds</h2>
        </div>
    )
}

export default WeightConverter
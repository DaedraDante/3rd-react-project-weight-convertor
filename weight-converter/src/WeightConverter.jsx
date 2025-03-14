import React, {useState} from 'react';

    

function WeightConverter() {

    const [kgs, setKgs] = useState(0);
    const [conversionType, setConversionType] = useState("hello");
    //
    const handleWeightDisplay = (event) => {
            setKgs(event.target.value)
        }
    //function to transform kg to pounds
    const transformKgToPounds = () => {
            return kgs / 2.2;
    }
    //function to select conversion
    const handleKgToLbsConversion = () => {
        if(conversionType === "hello") {
            alert("hello")
        }
    }
handleKgToLbsConversion()
    return(
        <>
            <select className='converter-picker'>
                <option value="KgToPounds">Kg to Pounds</option>
                <option value="PoundsToKg">Pounds to Kg</option>
            </select>
            <div className="converter-container">
                <h1>Weight Converter</h1>
                <select className='converter-picker'>
                <option>Kg to Pounds</option>
                <option>Pounds to Kg</option>
            </select>
            <h2>current conversion is {conversionType}</h2>
                <input type="number" placeholder="Enter weight" onChange={handleWeightDisplay}/>
                <h2 id="result-display" className='result-display'>{kgs/ 2.2} Pounds</h2>
            </div>
            
        </>
        
    )
}

export default WeightConverter
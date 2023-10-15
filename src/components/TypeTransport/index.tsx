import { useState } from 'react';
import './index.scss';

export default function Transport() {
    const [atmChecked, setAtmChecked] = useState(true);
    const [officeChecked, setOfficeChecked] = useState(false);

    const handleCheckboxChange = (type: string) => {
        if (type === 'atm') {
            setAtmChecked(!atmChecked);
            setOfficeChecked(atmChecked);
        } else if (type === 'office') {
            setOfficeChecked(!officeChecked);
            setAtmChecked(officeChecked);
        }
    };

    return (
        <div className='type-transport'>
            <div>
                <input
                    className="input-transport"
                    type="checkbox"
                    id="car"
                    name='car'
                    checked={atmChecked}
                    onChange={() => handleCheckboxChange('atm')}
                />
                <label className='label-transport' htmlFor="car">
                    <img src='../icons8-автомобиль-96.png' />
                </label>
            </div>
            <div>
                <input
                    className="input-transport"
                    type="checkbox"
                    id="self"
                    name='self'
                    checked={officeChecked}
                    onChange={() => handleCheckboxChange('office')}
                />
                <label className='label-transport' htmlFor="self">
                    <img src='../icons8-ходьба-100.png' />
                </label>
            </div>
        </div>
    );
}

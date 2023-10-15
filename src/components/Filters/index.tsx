import { useState } from 'react';
import './index.scss';

export default function Filter() {
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
        <div className='filters'>
            <div className='switch'>
                <div>
                    <input
                        className="input-filter"
                        type="checkbox"
                        id="atm"
                        name='atm'
                        checked={atmChecked}
                        onChange={() => handleCheckboxChange('atm')}
                    />
                    <label className='label-filter' htmlFor="atm"></label>
                </div>
                <p>Показать банкоматы</p>
            </div>
            <div className='switch'>
                <div>
                    <input
                        className="input-filter"
                        type="checkbox"
                        id="office"
                        name='office'
                        checked={officeChecked}
                        onChange={() => handleCheckboxChange('office')}
                    />
                    <label className='label-filter' htmlFor="office"></label>
                </div>
                <p>Показать офисы</p>
            </div>
        </div>
    );
}

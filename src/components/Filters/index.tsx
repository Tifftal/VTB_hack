import { FC } from 'react'
import './index.scss'

export interface IFilterProps {
  showAtm: boolean;
  setShowAtm: (value: boolean) => void;
}

export const Filter: FC<IFilterProps> = (props) => {
    const { showAtm, setShowAtm } = props;

    return (
        <div className='filters'>
            <div className='switch'>
                <div>
                    <input
                        className="input-filter"
                        type="checkbox"
                        id="atm"
                        name='atm'
                        checked={showAtm}
                        onChange={() => setShowAtm(!showAtm)}
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
                        checked={!showAtm}
                        onChange={() => setShowAtm(showAtm)}
                    />
                    <label className='label-filter' htmlFor="office"></label>
                </div>
                <p>Показать офисы</p>
            </div>
        </div>
    );
}

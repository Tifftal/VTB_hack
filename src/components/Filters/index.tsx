import './index.scss'

export default function Filter() {

    return (
        <div className='filters'>
            <div className='switch'>
                <div>
                    <input className="input-filter"type="checkbox" id="atm" name='atm' />
                    <label htmlFor="atm"></label>
                </div>
                <p>Показать банкоматы</p>
            </div>
            <div className='switch'>
                <div>
                    <input className="input-filter"type="checkbox" id="office" name='office' />
                    <label className='label-filter' htmlFor="office"></label>
                </div>
                <p>Показать офисы</p>
            </div>
        </div>
    )
}
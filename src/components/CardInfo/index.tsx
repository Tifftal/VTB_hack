import Transport from '../TypeTransport';
import './index.scss'


export const CardInfo = () => {
    return (
        <div className='card-info'>
            <h2>Название</h2>
            <p>Address</p>
            <Transport />
            <h3>Время в пути</h3>
            <button>Проложить маршрут</button>
        </div>
    );
}

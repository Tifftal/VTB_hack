import MapWindow from '../../components/map';
import { createNewRoute, getAllRoutes } from '../../store/axiosCore/history';
import './index.scss'

function HistoryPage() {

  getAllRoutes(123)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

  createNewRoute({
    longitudeStart: 36.984314,
    latitudeStart: 56.184479,
    longitudeEnd: 37.871967,
    latitudeEnd: 55.747402
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

  return (
    <div className='History'>
      <h1>History</h1>
      <div className='scroll-history'>
        <div className='way'>
          <div className='property-way'>
            <h2>Маршрут ДАТА</h2>
            <p><span className='from'></span>Откуда</p>
            <p><span className='where'></span>Куда</p>
          </div>
          <div className='history-map'>
            <MapWindow />
          </div>
        </div>

      </div>
    </div>
  )

}

export { HistoryPage };

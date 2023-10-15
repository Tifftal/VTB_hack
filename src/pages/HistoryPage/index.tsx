import MapWindow from '../../components/map';
import './index.scss'

function HistoryPage() {

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
import '../styles/room-code.scss'
import copyImg from '../assets/images/copy.svg'

export function RoomCode() {
  return (
    <button className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #dgkgkgmkkmfgdkgdk</span>
    </button>
  )
}
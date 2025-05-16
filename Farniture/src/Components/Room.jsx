
import Room1 from '../assets/proimg1.png'

const Room = ({name}) => {
  return (
    <div>
         <img src={Room1} alt="" />
            {name}
    </div>
  )
}

export default Room
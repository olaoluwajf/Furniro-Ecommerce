import Datas from '../Datas'
import Room1 from '../assets/proimg1.png'

const Room = () => {
  return (
    <div>
         {Datas.map((item, index)=> 
         (
          <div key={index}>
            <img src={item.img} alt="item.name" />
            <p className=''>{item.name}</p>
          </div> 
         ))

         }
    </div>
  )
}

export default Room
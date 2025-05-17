import {Rooms} from '../Datas'

const Room = () => {
  return (
    <div className='flex flex-row text-center justify-center px-4 py-4'>
         {Rooms.map((item, index)=> 
         (
          <div key={index}>
            <img src={item.img} alt={item.name} />
            <p className=''>{item.name}</p>
          </div> 
         ))

         }
    </div>
  )
}

export default Room
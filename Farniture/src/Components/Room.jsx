import {Rooms} from '../Datas'

const Room = () => {
  return (
    <div>
      <div className="container mx-auto">
          <h1 className='text-3xl font-bold text-center mb-8'>Browse the Range</h1>
          <p className="text-center ">Choose your favorite. Enjoy comfortable sleep</p>
        </div>
      <div className='flex flex-row text-center justify-center px-4 py-4'>
        {Rooms.map((item, index)=> 
        (
          <div key={index}>
            <img src={item.img} alt={item.name} />
            <p className='py-4 text-center font-bold'>{item.name}</p>
          </div> 
        ))

        }
      </div>
    </div>
  )
}

export default Room
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ProductDescription = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        // Replace with your real API endpoint
        const response = await fetch(`http://localhost:3000/products/${id}`)
        if (!response.ok) throw new Error('Failed to fetch product')
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <p className="text-center p-4">Loading...</p>
  if (error) return <p className="text-center text-red-500 p-4">{error}</p>
  if (!product) return <p className="text-center p-4">No product found.</p>

  return (
    <div>
      <section>
        <div className='flex flex-col xl:flex-row lg:flex-row gap-1 justify-center p-2 text-center items-center'>
          <div className='mr-2'>
            <h1 className='text-2xl p-2 font-semibold px-3'>Description</h1>
          </div>
          <div>
            <h1 className='text-2xl text-stone-400 px-3'>Additional Information</h1>
          </div>
          <div>
            <h1 className='text-2xl text-stone-400 px-3'>
              Reviews([{product.id}])
            </h1>
          </div>
        </div>

        <div className='flex flex-col lg:ml-30 lg:mr-30 md:ml-20 md:mr-20 justify-center text-center'>
          <p className='flex flex-col p-3 xl:ml-20 xl:mr-20 sm:m-4 mb-2 mt-1 justify-center text-center lg:text-left xl:text-left text-lg text-stone-500'>
            {product.description || 'No description available.'}
          </p>
        </div>

        <div className='flex flex-col lg:flex-row xl:flex-row gap-5 px-2 justify-center mb-3'>
          <div className='p-10'>
            <img className='h-100 w-140' src={product.img} alt={product.name} />
          </div>
          <div className='p-10'>
            <img className='h-100 w-140' src={product.img} alt={product.name} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDescription

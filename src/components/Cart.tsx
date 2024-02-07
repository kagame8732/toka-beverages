import { FaBriefcase } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className=''>
            <Link to="/cart" className='flex justify-center items-center gap-2'>
            <FaBriefcase />
                Cart
            </Link>
        </div>
    )
}

export default Cart

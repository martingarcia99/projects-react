import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export function Footer () {

    const {filters} = useFilters()
    const { cart } = useCart()

    return (
        <footer className='footer'>
            <h4>Prueba técnica de React ⚛️ － <span>@martingarcia99</span></h4>
            <h5>Shopping Cart con useContext & useReducer</h5>
        </footer>
    )
}
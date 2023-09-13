import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'

export const LanguageSelector = ({ onChange }) => {
    return (
        <Form.Select aria-label='Seleccionar el idioma'>
            {SUPPORTED_LANGUAGES.map((langauge) => {
                
            })}
        </Form.Select>
    )
}
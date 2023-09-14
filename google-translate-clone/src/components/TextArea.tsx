import { Form } from 'react-bootstrap'
import { SectionType } from '../types'

interface Props {
    type: SectionType.From, 
    loading?: boolean, 
    onchange: (value:string) => void, 
    value:string 
}

export const TextArea = ({ loading, type, value, onChange} : Props) => {
    return (
        <Form.Control
            as='textarea'
            placeholder='Introducir texto'
            autoFocus
            style={{ height: '150px'}}
        />
    )
}
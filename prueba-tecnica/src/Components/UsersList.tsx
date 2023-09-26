import { SortBy, type User } from '../types.d'

interface Props{
    showColors: boolean,
    users: User[],
    deleteUser: (email:string) => void,
    changeSorting : (sort: SortBy) => void
}

export function UsersLists ({ changeSorting, deleteUser, users,showColors }:Props){
    return(
        <table width='100%'>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th className='pointer' onClick={() => changeSorting(SortBy.NAME)}>Nombre</th>
                    <th className='pointer' onClick={() => changeSorting(SortBy.LAST)}>Apellido</th>
                    <th className='pointer' onClick={() => changeSorting(SortBy.COUNTRY)}>País</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index) => {
                        const backgroundColor = index % 2 === 0 ? '#333' : '#555'
                        const color = showColors ? backgroundColor : 'transparent'
                        return (
                            <tr key={user.email} style={{background: color}}>
                                <td>
                                    <img src={user.picture.thumbnail} alt=''/>
                                </td>
                                <td>
                                    {user.name.first}
                                </td>
                                <td>
                                    {user.name.last} 
                                </td>
                                <td>
                                    {user.location.country} 
                                </td>
                                <td>
                                    <button onClick={() => deleteUser(user.email)}>  
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
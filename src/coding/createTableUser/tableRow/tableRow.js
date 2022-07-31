import React from 'react';


const TableRow = ({ item, handleDeleteClick }) => {
    return (
        <tbody>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.age}</td>
                <td><button type={'button'} onClick={() => handleDeleteClick(item.id)}>remove</button></td>
            </tr>
         </tbody>
    );
};

export default TableRow;
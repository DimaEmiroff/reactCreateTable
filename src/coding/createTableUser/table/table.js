import React, {useState} from 'react';
import {arrUser} from "../../data/data";
import TableRow from "../tableRow/tableRow";
import classes from "./Table.module.scss";

export const field = [
    {id: 'Id', data:'id',sortable: false},
    {id:'Name',data:'name',sortable: true},
    {id: 'Phone', data: 'phone',sortable: false},
    {id:'Email', data: 'email',sortable: false},
    {id:'Country',data:'country',sortable: false},
    {id:'Age',data:'age',sortable: false},
    {id:'Active', data:'active',sortable: false},
];


const Table = () => {
    const [data, setData] = useState(arrUser)
    const [sortName, setSortName] = useState('');
    const [name, setName] = useState('ascending')

    const handleDeleteClick = (id) => {
        const index = data.filter((data) => data.id !== id);
        setData(index);
        console.log(index)

        // const removeData = [...delData];
        // const index = delData.findIndex((data) => data.id === id);
        // removeData.splice(index, 1);
    }
        const handleSortingClick = (sort) => {
        const copyData = data.concat();
        const sortData = copyData.sort((a, b) => {
            return a[sort] > b[sort] ? 1 : -1
        })
            setData( sortData )
            console.log(sortData)
        }


    return (
        <table className={classes.module_table}>
            <thead>
            <tr>
                <th>Id</th>
                <th onClick={() => handleSortingClick('name')} className={classes.module_table__sort}>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Country</th>
                <th>Age</th>
                <th>Active</th>

            </tr>
            </thead>

            {/*<TableHead field={field} handleSorting={handleSorting} />*/}
            {data.map((item) => (
                <TableRow key={item.id}
                          field={field}
                          item={item}
                          data={data}
                          handleDeleteClick={handleDeleteClick}
                          />
            ))}
        </table>
    );
};

export default Table;
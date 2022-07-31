import React, {useState} from 'react';
import {arrUser} from "../../data/data";
import TableHead from "../thead/tableHead";
import TableRow from "../tableRow/tableRow";
import classes from "./Table.module.scss";
import sortedData from "../../sortedData/SortedData";


export const field = [
    {id: 'Id', data:'id',sortable: false},
    {id:'Name',data:'name',sortable: true},
    {id: 'Phone', data: 'phone',sortable: false},
    {id:'Email', data: 'email',sortable: false},
    {id:'Country',data:'country',sortable: false},
    {id:'Age',data:'age',sortable: false},
    {id:'On load', data:'on_load',sortable: false},
];


const Table = () => {
    const [delData, setDelData] = useState(arrUser)
    const [tableData, handleSorting] = sortedData(arrUser);

    const handleDeleteClick = (id) => {
        const removeData = [...delData];
        // const index = delData.findIndex((data) => data.id === id);
        const index = delData.filter((data) => data.id !== id);

        // removeData.splice(index, 1);

        setDelData(index);
        console.log(index)

    }


    return (
        <table className={classes.module_table}>
            <TableHead field={field} handleSorting={handleSorting}/>
            {delData.map((item, index) => (
                <TableRow key={item.id}
                          field={field}
                          item={item}
                          handleDeleteClick={handleDeleteClick}
                          delData={delData} />
            ))}
        </table>
    );
};

export default Table;
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

const Table = ({ delData, onRemove }) => {
    const [tableData, handleSorting] = sortedData(arrUser);

    return (
        <table className={classes.module_table}>
            <TableHead field={field} handleSorting={handleSorting}/>
            {tableData.map((item, index) => (
                <TableRow key={item.id}
                          field={field}
                          delData={delData}
                          item={item}
                          onRemove={onRemove}
                          tableData={tableData} />
            ))}
        </table>
    );
};

export default Table;
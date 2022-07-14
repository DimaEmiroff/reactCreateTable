import React, {useState} from 'react';
import THead from "../thead/THead";
import {arrUser} from "../../data/data";
import TableRow from "../tableRow/tableRow";
import classes from "./Table.module.scss";
import sortedData from "../../sortedData/SortedData";


export const field = [
    {id: 'Id', accessor:'id',sortable: false},
    {id:'Name',accessor:'name',sortable: true},
    {id: 'Phone', accessor: 'phone',sortable: false},
    {id:'Email', accessor: 'email',sortable: false},
    {id:'Country',accessor:'country',sortable: false},
    {id:'Age',accessor:'age',sortable: false},
    {id:'On load', accessor:'on load',sortable: false},
    {id:'Delete', accessor:'delete',sortable: false}
];

const CreateTable = () => {
    const [tableData, handleSorting] = sortedData(arrUser);
    return (
        <table className={classes.module_table}>
            <THead field={field} handleSorting={handleSorting}/>
            <TableRow field={field} tableData={tableData}/>
        </table>
    );
};

export default CreateTable;
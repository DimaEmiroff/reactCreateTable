import React, {useState} from 'react';
import classes from "./Thead.module.scss";

const TableHead = ({field, handleSorting }) => {
    const [sortData, setSortData] = useState('');
    const [order, setOrder] = useState('ascending')

    const handleClickSort = (data) => {
        const sortOrder = data === sortData && order === "asc" ? "desc" : "asc";
        setSortData(data);
        setOrder(sortOrder);
        handleSorting(data, sortOrder);
    }

    return (
        <thead>
            <tr>
                {field.map (({ id, data, sortable }) => {
                    // const module_thead_th_btn = sortable
                    //     ? sortData === accessor && order === "asc"
                    //         ? "up"
                    //         : sortData === accessor && order === "desc"
                    //             ? "down"
                    //             : "default"
                    //     : "";
                    return (
                    <th
                        key={data}
                        className={classes.module_thead_th_btn}
                        onClick={sortable ? () => handleClickSort(data) : null}
                    >
                        {id}
                    </th>
                    )})}
            </tr>
        </thead>
    );
};

export default TableHead;
import React, {useState} from 'react';
import classes from "./Thead.module.scss";

const THead = ({field, handleSorting }) => {
    const [sortData, setSortData] = useState('');
    const [order, setOrder] = useState('ascending')

    const handleClickSort = (accessor) => {
        const sortOrder = accessor === sortData && order === "asc" ? "desc" : "asc";
        setSortData(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    }
    return (
        <thead>
            <tr className={classes.module_thead}>
                {field.map (({ id, accessor, sortable }) => {
                    const module_thead_th = sortable
                        ? sortData === accessor && order === "ascending"
                            ? "up"
                            : sortData === accessor && order === "descending"
                                ? "down"
                                : "default"
                        : "";
                    return <th
                        key={accessor}
                        className={classes.module_thead_th}
                    >
                        {id}
                        <button className={classes.module_thead_th_btn} onClick={sortable ? () => handleClickSort(accessor) : null}></button>
                    </th>

                })}
            </tr>
        </thead>
    );
};

export default THead;
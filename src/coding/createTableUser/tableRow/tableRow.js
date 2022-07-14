import React from 'react';
import classes from "./Tbody.module.scss";

const TableRow = ({tableData, field}) => {
    return (
        <tbody>
        {tableData.map((item) => {
            return (
                    <tr key={item.id}>
                        {field.map(({accessor}) => {
                            const tData = item[accessor] ? item[accessor] : '-';
                            return <td key={accessor} className={classes.tbody_module}>{tData}</td>;
                            })}
                    </tr>
                )
        })}
        </tbody>
    );
};

export default TableRow;
import React, {useState} from 'react';
import classes from "./Tbody.module.scss";

import {arrUser} from "../../data/data";
import ButtonDel from "../../IsMove/buttonDelete/ButtonDel";


const TableRow = ({ tableData, onRemove, item }) => {
    const [delData, setDelData] = useState(arrUser)
    const removeData = (index) => {
        // const delRow = setDelData([...delData.slice(0, index), ...delData.slice(index - 1)]);
        const delRow = delData.filter((item) => item.id !== index);
        // delData.splice(index, 1);
        setDelData(delRow)
        // setDelData(delData.filter((item) => item !== index))
            console.log(index)
    }

    return (
        <tbody>
        {/*{tableData.map((item, index) => {*/}
        {/*    return (*/}
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.country}</td>
                        <td>{item.age}</td>
                        <td><button type="button" onClick={() => removeData(item.id)}>Delete</button></td>

                        {/*--Сборка всех значений--*/}
                        {/*{field.map(({data}) => {*/}
                        {/*    const tData = item[data] ? item[data] : '-';*/}
                        {/*    return <td*/}
                        {/*        key={data}*/}
                        {/*        className={classes.tbody_module}>*/}
                        {/*        {tData}</td>;*/}
                        {/*    })}*/}


                        {/*<td><button type="button" onClick={() => removeData(item.id)}>Delete</button></td>*/}

                    </tr>

        {/*})}*/}
        </tbody>
    );
};

export default TableRow;
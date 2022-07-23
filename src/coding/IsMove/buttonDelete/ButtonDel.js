import React, {useState, Component} from 'react';
import {arrUser} from "../../data/data";
import TableRow from "../../createTableUser/tableRow/tableRow";
//
//
const ButtonDel = (data) => {
    const [delData, setDelData] = useState(data)
    const removeData = (index) => {
        // const delRow = setDelData([...delData.slice(0, index), ...delData.slice(index - 1)]);
        const delRow = delData.filter((item) => item.id !== index);
        // delData.splice(index, 1);
        setDelData(delRow)
        // setDelData(delData.filter((item) => item !== index))
        console.log(index)
        return ([delData, removeData])
    }

};
// const List = ({ list, onRemove }) => (
//     <div>
//         {list.map((item) => (
//             <Item key={item.id} item={item} onRemove={onRemove} />
//         ))}
//     </div>
// );
//
// const Item = ({ item, onRemove }) => (
//     <div>
//         <button type="button" onClick={() => onRemove(item.id)}>
//             Remove
//         </button>
//     </div>
// );
//
// export default ButtonDel;


export default ButtonDel;

// const [delData, setDelData] = useState(arrUser)
// const removeData = (index) => {
//     // const delRow = setDelData([...delData.slice(0, index), ...delData.slice(index - 1)]);
//     const delRow = delData.filter((item) => item.id !== 1);
//     // delData.splice(delRow, 1);
//     setDelData(delRow)
//     console.log(index)
// }
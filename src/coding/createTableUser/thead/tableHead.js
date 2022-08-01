import React, {useState} from 'react';

const TableHead = ({ item, handleSorting }) => {
    const [sortData, setSortData] = useState('');
    const [name, setName] = useState('ascending')

    const handleClickSort = (data) => {
        const sortName = data === sortData && name === "asc" ? "desc" : "asc";
        setSortData(data);
        setName(sortName);
        handleSorting(data, sortName);
        console.log(sortName)
    }

    return (
<>
</>

    );
};

export default TableHead;
// <thead>
//     <tr>
//         {field.map (({ id, data, sortable }) => {
//             // const module_thead_th_btn = sortable
//             //     ? sortData === accessor && order === "asc"
//             //         ? "up"
//             //         : sortData === accessor && order === "desc"
//             //             ? "down"
//             //             : "default"
//             //     : "";
//             return (
//             <th
//                 key={data}
//                 className={classes.module_thead_th_btn}
//                 onClick={sortable ? () => handleClickSort(data) : null}
//             >
//                 {id}
//             </th>
//             )})}
//     </tr>
// </thead>
import React from "react";
import {arrUser} from '../listUser/data/data.js';
import DataGrid from 'react-data-grid';

import SortName from "./SortName";


let id = 6;

//---Объявление функции для создания таблицы и заполнение её из массива
export const AddUsers = () => {
    const rows = arrUser.map((item,i) => {
            return (
                    <tr key={i} className={'ListUser__tr'}>
                    <td key={i} className={'ListUser__td'}>{item.id}</td>
                    <td key={i} className={'ListUser__td'}>{item.name}</td>
                    <td key={i} className={'ListUser__td'}>{item.email}</td>
                    <td className={'ListUser__td'}>{item.country}</td>
                    <td className={'ListUser__td'}>{item.age}</td>
                        <td className={'ListUser__td'}>
                            <button>update</button>
                        </td>
                        <td className={'ListUser__td'}>
                            <button id={'btn'}>delete</button>
                        </td>
                </tr>
            )
   });

   //---Вывод данных массива---
            return (
        <table>
            <thead>
            <tr className={'ListUser__tr'}>

                <tr>
                    <th className={'ListUser__td'}>Id</th>
                    <th className={'ListUser__td'}>Name</th>
                    <th className={'ListUser__td'}>Phone</th>
                    <th className={'ListUser__td'}>Email</th>
                    <th className={'ListUser__td'}>Country</th>
                    <th className={'ListUser__td'}>Age</th>
                    <th className={'ListUser__td'}>Onload</th>
                    <th className={'ListUser__td'}>Delete</th>
                </tr>
            </tr>
            </thead>
            <tr>
                <td>
                    {rows}
                </td>
                <td><SortName/></td>
            </tr>
            {/*<td><button onClick=<SortName/></td>*/}
        </table>
    )

}
export default AddUsers;


// const [columns, setColumns] = new useState([
//     { key: "id", name: "Id" },
//     {key: "name", name: "Name" },
//     {key: "phone", name: "Phone" },
//     { key: "email", name: "Email" },
//     { key: "country", name: "Country" },
//     { key: "age", name: "Age" },
// ]);
//
// const [rows, setSales] = new useState(arrUser);
// return (
//     <div>
//         <DataGrid
//             columns={columns}
//             rows = {rows}
//         />
//
//     </div>
//
// );




//     let users = arrUser.length;
//     let items = ['id', 'name', 'phone', 'email', 'country', 'age'];
//
//     // ---Create elements---
//     let table = document.createElement('table');
//
//     table.style.cssText = `
//           margin: 50px;
//           padding: 0px;
//           border: 1px solid black;
//           width: 600px;
//           height: 24em;
//         `
// //---Create line----
//     for (let i = 0; i < users; i++) {
//         let tr = document.createElement('tr');
//         tr.style.cssText = `
//            padding: 0px;
//            border: 1px solid black;
//         `
//         tr.innerHTML = '';
//
// //---Create column---
//         for (let j = 0; j < 5; j++) {
//             let td = document.createElement('td');
//             td.style.cssText = `
//         wight: 200px;
//         height: 20
//         padding: 0px;
//                 border: 1px solid black;`
//             td.innerHTML = arrUser[i] [items[j]];
//             tr.append(td);
//             table.append(tr);
//         }
//
// //---Create button---
//         let btnUpdateList = table.querySelectorAll('tr')
//         btnUpdateList[i].innerHTML += '<td><button>update</button></td>';
//         let btnDeleteList = table.querySelectorAll('tr')
//         btnDeleteList[i].innerHTML += '<td><button onClick={remove}>delete</button</td>';
//
//     body.append(table);
//
//         function remove(arr, item) {
//             for (var i = arr.length; i--;) {
//                 if (arrUser[i] === item) {
//                     arrUser.splice(i, 1);
//                 }
//             }
//         }
//     }
// }
//

import React, {Component, useEffect, useState } from 'react';
import {arrUser} from "./data/data";
import AddUsers from "./AddUsers";
//import AddUsers, {arrUser} from "./AddUsers";
//
function SortName() {
    const [dataObject, setdataObject] = useState(arrUser);

     const sortByRich = () => {
         setdataObject((prev) => prev.slice().sort((a, b) => a - b));
        setdataObject((data) => {
            const dataToSort = [...data];
            dataToSort.sort((a, b) => Number(b.id) - Number(a.id));
            console.log(dataToSort)
            return dataToSort;
        });
    };
    return (
   // const sortAscending = () => {
   //      const sortAscPrices = [...name]
   //      sortAscPrices.sort((a, b) => a - b)
   //      setNames( sortAscPrices )
   //  }
   //      return (
            <>
                <button type='button' onClick={() => sortByRich(AddUsers) }>Sort</button>
            </>
        )
}
export default SortName;

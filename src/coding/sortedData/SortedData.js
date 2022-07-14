import React, {useState} from 'react';


    const SortedData = (data) => {
        const [tableData, setTableData] = useState(data);
        const handleSorting = (sortData, sortOrder) => {
            if (sortData) {
                const sorted = [...tableData].sort((a, b) => {
                    return (
                        a[sortData].toString().localeCompare(b[sortData].toString(), "en", {
                            numeric: true,
                        }) * (sortOrder === "asc" ? 1 : -1)
                    );
                });
                setTableData(sorted);
            }
        };
        return ([tableData, handleSorting])
    };

export default SortedData;
import React, { useState, useEffect } from 'react';
import { fetchDeviceData } from '../services/api';
import './LocationTable.css';
import Pagination from './Pagination'; // Fix the import

const LocationTable = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;  // Direct assignment, no need to destructure

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchDeviceData();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DateTime</th>
                        <th>Local DateTime</th>
                        <th>Device ID</th>
                        <th>Longitude</th>
                        <th>Latitude</th>
                        <th>Color Code</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(row => (  
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.datetime}</td>
                            <td>{row.localDateTime}</td>
                            <td>{row.deviceid}</td>
                            <td>{row.longitude}</td>
                            <td>{row.latitude}</td>
                            <td>{row.colorCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={setCurrentPage} />
        </div>
    );
};

export default LocationTable;

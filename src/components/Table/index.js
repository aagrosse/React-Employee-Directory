import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import Nav from '../Nav';

const Table = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [sortOrder, setSortOrder] = useState('descend');
    const [sortOrder2, setSortOrder2] = useState('descend');

    useEffect(() => {
        API.getUsers().then(results => {
            setUsers(results.data.results)
            setFilteredUsers(results.data.results)
        })
    }, [setSortOrder]);

    const searchFilter = (e) => {
        const filter = e.target.value;
        const filteredUserList = users.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        setFilteredUsers(filteredUserList);
        console.log(filteredUsers)
    }

    const sortNames = () => {
        if (sortOrder === 'descend') {
            const filteredUsersList = users.sort((a, b) => {
                if (a.name.last < b.name.last) { return -1; }
                if (a.name.last > b.name.last) { return 1; }
            });
            setFilteredUsers(filteredUsersList);
            setSortOrder('ascend');
            console.log(filteredUsers)
            
        } else {
            const filteredUsersList = users.sort((a, b) => {
                if (a.name.last < b.name.last) { return 1; }
                if (a.name.last > b.name.last) { return -1; }
            });

            setFilteredUsers(filteredUsersList);
            setSortOrder('descend');
            
        }
    }

    const sortAges = () => {
        if (sortOrder2 === 'descend') {
            const filteredUsersList = users.sort((a, b) => {
                if (a.dob.age < b.dob.age) { return -1; }
                if (a.dob.age > b.dob.age) { return 1; }
            });
            setFilteredUsers(filteredUsersList);
            setSortOrder2('ascend');
            
        } else {
            const filteredUsersList = users.sort((a, b) => {
                if (a.dob.age < b.dob.age) { return 1; }
                if (a.dob.age > b.dob.age) { return -1; }
            });

            setFilteredUsers(filteredUsersList);
            setSortOrder2('descend');
            
        }
    }



    return (
        <>
            <Nav searchFilter={searchFilter} />

            <table className='table table-hover mt-5'>
                <tbody>
                    <tr>
                        <th >Photo</th>
                        <th>Name
                            <button className="ml-2">
                                <i className="fas fa-sort" onClick={sortNames} ></i>
                            </button>
                        </th>
                        <th >Contact Phone</th>
                        <th >Email</th>
                        <th >Age
                            <button className="ml-2">
                                <i className="fas fa-sort" onClick={sortAges}></i>
                            </button>
                        </th>
                    </tr>
                    {filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
                        return (

                            <tr key={login.uuid}>
                                <td> <img src={picture.thumbnail} alt={name} /></td>
                                <td>{name.first} {name.last}</td>
                                <td>{phone}</td>
                                <td>{email}</td>
                                <td>{dob.age} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>


        </>
    )

}














export default Table;
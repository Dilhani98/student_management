import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch student data from backend API
        axios.get('https://localhost:7249/api/Student')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, []);

    // const handleDelete = async (id) => {
    //     try {
    //         // Send delete request to backend API
    //         await axios.delete(`https://localhost:7249/api/Student/${id}`);
    //         // Remove deleted student from local state
    //         setStudents(students.filter(student => student.id !== id));
    //     } catch (error) {
    //         console.error('Error deleting student:', error);
    //     }
    // };

    return (
        <div>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Enrolled Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.address}</td>
                            <td>{student.department}</td>
                            <td>{student.enrolledYear}</td>
                            <td>
                                <button onClick={() => handleDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button>Add Student</button> {/* This button can navigate to the add student page */}
        </div>
    );
};

export default StudentList;

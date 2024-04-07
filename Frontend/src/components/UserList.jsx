import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch list of users when component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user._id}
            className="bg-gray-100 rounded-md p-4 mb-2 flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{user.username}</p>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.address}</p>
            </div>
            {/* Add delete button here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

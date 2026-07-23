import { useEffect, useState } from "react";
import "./Users.css";

function Users() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [search, setSearch] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const [sortBy, setSortBy] = useState("id");
const [sortOrder, setSortOrder] = useState("asc");
const usersPerPage = 5;

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
        throw new Error("Failed to fetch users");
        }
        return response.json();
})
    .then((data) => {
        setUsers(data);
        setLoading(false);
    })
    .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
    });
}, []);

if (loading) {
    return <h2 className="loading">Loading Users...</h2>;}

if (error) {
    return <h2 className="error-message">{error}</h2>;
}

const filteredUsers = users
    .filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
    if (sortBy === "name") {
        return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }

    return sortOrder === "asc"
        ? a.id - b.id
        : b.id - a.id;
    });

const lastUserIndex = currentPage * usersPerPage;
const firstUserIndex = lastUserIndex - usersPerPage;

const currentUsers = filteredUsers.slice(
    firstUserIndex,
    lastUserIndex
);

const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

return (
    <div className="users-page">


    <div className="users-header">

        <div>

        <h1>Users</h1>

        <p>
            Manage and view all registered users.
        </p>

        </div>

        <div className="total-users">
        👥 Total Users : {filteredUsers.length}
        </div>

    </div>

    <div className="toolbar">

        <input
        type="text"
        className="search-input"
        placeholder="🔍 Search by name..."
        value={search}
        onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
        }}
        />

        <div className="sort-controls">

        <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
        >
            <option value="id">Sort by ID</option>
            <option value="name">Sort by Name</option>
        </select>

        <button
            className="sort-btn"
            onClick={() =>
            setSortOrder(
                sortOrder === "asc"
                ? "desc"
                : "asc"
            )
            }
        >
            {sortOrder === "asc"
            ? "⬆ Ascending"
            : "⬇ Descending"}
            </button>

        </div>

</div>

    <table className="users-table">
        <thead>
        <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Website</th>

        </tr>

        </thead>

        <tbody>

        {currentUsers.map((user) => (

            <tr key={user.id}>

            <td>{user.id}</td>

            <td>
            <div className="user-info">
                <div className="avatar">

                    {user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                    </div>
                <span>{user.name}</span>
                </div>

            </td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            </tr>

        ))}

        </tbody>
        </table>

    <div className="pagination">
    <button onClick={() => setCurrentPage(currentPage - 1)}disabled={currentPage === 1}>
    Previous
    </button>
    <span> Page {currentPage} of {totalPages}</span>
    <button onClick={() =>setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}>
    Next
    </button>

    </div>

    </div>
);
}

export default Users;
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

export default function Employees() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const load = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await api.get("/employees");
      setEmployees(res.data);
    } catch {
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  const submit = async () => {
    try {
      setLoading(true);
      setError("");
      await api.post("/employees", form);
      setForm({
        employee_id: "",
        full_name: "",
        email: "",
        department: "",
      });
      load();
    } catch {
      setError("Failed to add employee");
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    try {
      setLoading(true);
      setError("");
      await api.delete(`/employees/${id}`);
      load();
    } catch {
      setError("Failed to delete employee");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2>Employees</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Employee ID"
          value={form.employee_id}
          onChange={(e) => setForm({ ...form, employee_id: e.target.value })}
        />
        <input
          placeholder="Name"
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Department"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        />
        <button onClick={submit}>Add</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && employees.length === 0 && <p>No employees found.</p>}

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.full_name}</td>
              <td>{e.email}</td>
              <td>{e.department}</td>
              <td>
                <Link to={`/attendance/${e.id}`}>Attendance</Link>{" "}
                <button onClick={() => remove(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

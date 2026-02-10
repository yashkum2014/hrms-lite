import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Attendance() {
  const { id } = useParams();
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ date: "", status: "Present" });

  const load = async () => {
    const res = await api.get(`/attendance/${id}`);
    setRecords(res.data);
  };

  const submit = async () => {
    await api.post("/attendance", {
      employee_id: Number(id),
      ...form,
    });
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2>Attendance</h2>

      <input
        type="date"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <select onChange={(e) => setForm({ ...form, status: e.target.value })}>
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button onClick={submit}>Mark</button>

      <ul>
        {records.map((r) => (
          <li key={r.id}>
            {r.date} - {r.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

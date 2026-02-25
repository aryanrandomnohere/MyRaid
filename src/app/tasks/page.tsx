"use client";

import { useEffect, useMemo, useState } from "react";

type Task = {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "done";
  createdAt: string;
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Task["status"]>("todo");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState<"" | Task["status"]>("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalPages = useMemo(
    () => Math.max(Math.ceil(total / pageSize), 1),
    [total, pageSize],
  );

  const loadTasks = async () => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
    });

    if (filter) {
      params.set("status", filter);
    }

    if (search) {
      params.set("search", search);
    }

    try {
      const response = await fetch(`/api/tasks?${params.toString()}`, {
        credentials: "include",
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error?.message || "Failed to load tasks");
      }

      const payload = await response.json();
      setTasks(payload.items);
      setTotal(payload.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filter]);

  const handleCreate = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ title, description, status }),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error?.message || "Failed to create task");
      }

      setTitle("");
      setDescription("");
      setStatus("todo");
      setPage(1);
      await loadTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create task");
    }
  };

  const handleStatusChange = async (
    taskId: string,
    nextStatus: Task["status"],
  ) => {
    setError(null);
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ status: nextStatus }),
      });
      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error?.message || "Failed to update task");
      }
      await loadTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update task");
    }
  };

  const handleDelete = async (taskId: string) => {
    setError(null);
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!response.ok && response.status !== 204) {
        const payload = await response.json();
        throw new Error(payload?.error?.message || "Failed to delete task");
      }
      await loadTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete task");
    }
  };

  return (
    <main className="grid">
      <section className="panel">
        <h1>Your tasks</h1>
        <form className="form" onSubmit={handleCreate}>
          <label className="label">Title</label>
          <input
            className="input"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <label className="label">Description</label>
          <textarea
            className="input"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={3}
            required
          />
          <label className="label">Status</label>
          <select
            className="input"
            value={status}
            onChange={(event) =>
              setStatus(event.target.value as Task["status"])
            }
          >
            <option value="todo">Todo</option>
            <option value="in_progress">In progress</option>
            <option value="done">Done</option>
          </select>
          <button className="button" type="submit">
            Create task
          </button>
        </form>
      </section>

      <section className="panel">
        <div className="toolbar">
          <input
            className="input"
            placeholder="Search title"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            className="button secondary"
            type="button"
            onClick={() => loadTasks()}
          >
            Search
          </button>
          <select
            className="input"
            value={filter}
            onChange={(event) => {
              setFilter(event.target.value as "" | Task["status"]);
              setPage(1);
            }}
          >
            <option value="">All status</option>
            <option value="todo">Todo</option>
            <option value="in_progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        {error && <p className="notice">{error}</p>}
        {loading ? (
          <p className="notice">Loading tasks...</p>
        ) : (
          <div className="grid">
            {tasks.map((task) => (
              <article className="task" key={task.id}>
                <div
                  className="toolbar"
                  style={{ justifyContent: "space-between" }}
                >
                  <span className="task-title">{task.title}</span>
                  <span className="badge">{task.status.replace("_", " ")}</span>
                </div>
                <p>{task.description}</p>
                <small className="notice">
                  Created {new Date(task.createdAt).toLocaleDateString()}
                </small>
                <div className="toolbar">
                  <select
                    className="input"
                    value={task.status}
                    onChange={(event) =>
                      handleStatusChange(
                        task.id,
                        event.target.value as Task["status"],
                      )
                    }
                  >
                    <option value="todo">Todo</option>
                    <option value="in_progress">In progress</option>
                    <option value="done">Done</option>
                  </select>
                  <button
                    className="button secondary"
                    type="button"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="toolbar" style={{ justifyContent: "space-between" }}>
          <button
            className="button secondary"
            type="button"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page <= 1}
          >
            Prev
          </button>
          <span className="notice">
            Page {page} of {totalPages}
          </span>
          <button
            className="button secondary"
            type="button"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export const API_URL = "http://127.0.0.1:5000";

export async function fetchJSON(path) {
  try {
    const res = await fetch(`${API_URL}${path}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("Fetch Error:", err);
    return [];
  }
}

export async function postJSON(path, data) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : null,
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("Post Error:", err);
    return null;
  }
}

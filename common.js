// Shared logic for loading/saving inventory.
// Public site and admin page both read from the same source:
// localStorage (if the admin has saved local changes) falls back to data.json.

const STORAGE_KEY = "mny_bmw_inventory";

async function loadInventory() {
  const local = localStorage.getItem(STORAGE_KEY);
  if (local) {
    try { return JSON.parse(local); } catch (e) { /* fall through */ }
  }
  const res = await fetch("data.json");
  return await res.json();
}

function saveInventoryLocal(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function formatPrice(n) {
  return "R " + Number(n).toLocaleString("en-ZA");
}

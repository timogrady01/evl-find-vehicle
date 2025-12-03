
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
    // Later: Replace alert with API call or filter logic
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 mt-6 w-full max-w-md"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter make, model, or trim"
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

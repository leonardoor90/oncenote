import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [noteId, setNoteId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!content) return setError("Digite alguma coisa.");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();
      if (data.id) setNoteId(data.id);
      else setError("Erro ao criar nota.");
    } catch (err) {
      setError("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">OnceNote</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-2">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Digite sua nota secreta..."
          className="p-2 border border-gray-300 rounded h-40 resize-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Criar Nota
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {noteId && (
        <p className="mt-4">
          Nota criada! Acesse:{" "}
          <a
            href={`/note/${noteId}`}
            className="text-blue-600 underline break-all"
          >
            /note/{noteId}
          </a>
        </p>
      )}
    </div>
  );
}

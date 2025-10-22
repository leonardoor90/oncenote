import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NotePage() {
  const router = useRouter();
  const { id } = router.query;

  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchNote = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/${id}`);
        const data = await res.json();

        if (data.content) setContent(data.content);
        else setError(data.error || "Nota não encontrada ou expirada.");
      } catch {
        setError("Erro ao conectar com o servidor.");
      }
    };

    fetchNote();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">OnceNote</h1>
      {error && <p className="text-red-500">{error}</p>}
      {content && (
        <textarea
          value={content}
          readOnly
          className="p-2 border border-gray-300 rounded w-full max-w-md h-40 resize-none"
        />
      )}
    </div>
  );
}

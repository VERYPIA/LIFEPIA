'use client'
import { useState } from "react";

export default function UploadForm() {
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    if (!image) return;
    const form = new FormData();
    form.append("file", image);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    localStorage.setItem("fortuneResult", JSON.stringify(result));
    window.location.href = "/report";
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        분석하기
      </button>
    </div>
  );
}

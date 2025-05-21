import { useEffect, useState } from "react";

export default function ReportPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("fortuneResult");
    if (saved) setData(JSON.parse(saved));
  }, []);

  return data ? (
    <main className="p-4 max-w-3xl mx-auto">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  ) : (
    <p>결과를 불러오는 중입니다...</p>
  );
}

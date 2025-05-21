import { useEffect, useState } from "react";
import FortuneReport from "../components/FortuneReport";

export default function ReportPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("fortuneResult");
    if (saved) setData(JSON.parse(saved));
  }, []);

  return data ? (
    <main className="p-4 max-w-3xl mx-auto">
      <FortuneReport data={data} />
    </main>
  ) : (
    <p>결과를 불러오는 중입니다...</p>
  );
}

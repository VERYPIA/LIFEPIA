import UploadForm from "../components/UploadForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">관상 · 손금 분석 서비스</h1>
      <UploadForm />
    </main>
  );
}

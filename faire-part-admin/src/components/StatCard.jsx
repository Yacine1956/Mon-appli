export default function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-stone-100">
      <p className="text-sm text-stone-500">{label}</p>
      <p className="text-3xl font-semibold text-stone-800 mt-2">{value}</p>
    </div>
  );
}
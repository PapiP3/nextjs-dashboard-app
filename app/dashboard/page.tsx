// app/dashboard/page.tsx
import DashboardCard from '../../components/DashboardCard';

export default function DashboardPage() {
  const stats = [
    { title: 'Users', value: '1,245' },
    { title: 'Revenue', value: '$12,345' },
    { title: 'Orders', value: '321' },
    { title: 'Refunds', value: '12' },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
      {stats.map((item) => (
        <DashboardCard key={item.title} title={item.title} value={item.value} />
      ))}
    </div>
  );
}

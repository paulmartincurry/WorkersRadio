export default function AdminPage() {
  return (
    <main className="p-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>
        The admin interface will allow you to approve requests, manage the ticker, and
        update the Now Playing information. In this minimal version it’s not yet
        implemented — please refer to the planning document for guidance on how to add
        Supabase and server actions to power these features.
      </p>
    </main>
  );
}

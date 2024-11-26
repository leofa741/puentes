import '../globals.css'


export default function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Root Layout Login</h1>
        {children}
    </main>
  );
}
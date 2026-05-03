import { Navbar } from "@/components/navbar";
import { AuthPanel } from "@/components/auth-panel";

type AuthPageProps = {
  searchParams?: Promise<{ role?: string }> | { role?: string };
};

export default async function AuthPage({ searchParams }: AuthPageProps) {
  const params = await Promise.resolve(searchParams ?? {});
  const initialRole = params.role === "farmer" ? "farmer" : "buyer";

  return (
    <>
      <Navbar />
      <AuthPanel initialRole={initialRole} />
    </>
  );
}
import { Navbar } from "@/components/navbar";
import { MarketplaceBrowser } from "@/components/marketplace-browser";
import { getProductsFromSupabase } from "@/lib/supabase/products";

export default async function MarketplacePage() {
  const products = await getProductsFromSupabase();

  return (
    <>
      <Navbar />
      <MarketplaceBrowser products={products} />
    </>
  );
}
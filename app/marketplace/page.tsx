import { Navbar } from "@/components/navbar";
import { MarketplaceBrowser } from "@/components/marketplace-browser";
import { products as staticProducts } from "@/lib/data";
import { getProductsFromSupabase } from "@/lib/supabase/products";

export default async function MarketplacePage() {
  const products = await getProductsFromSupabase();
  const marketplaceProducts = products.length > 0 ? products : staticProducts;

  return (
    <>
      <Navbar />
      <MarketplaceBrowser products={marketplaceProducts} />
    </>
  );
}
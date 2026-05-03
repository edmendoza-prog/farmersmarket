import { Navbar } from "@/components/navbar";
import { MarketplaceBrowser } from "@/components/marketplace-browser";
import { products } from "@/lib/data";

export default function MarketplacePage() {
  return (
    <>
      <Navbar />
      <MarketplaceBrowser products={products} />
    </>
  );
}
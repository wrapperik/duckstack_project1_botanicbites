// ProductRow.jsx
import ProductCard from "./UI/productCard";
import AdCard from "./UI/adCard";

export default function featuredProducts() {
  // Temporary mock data
  const products = [
    { id: 1, name: "Venus Flytrap", price: 120, image: "https://blocks.astratic.com/img/general-img-landscape.png" },
    { id: 2, name: "Pitcher Plant", price: 200, image: "https://blocks.astratic.com/img/general-img-landscape.png" },
    { id: 3, name: "Sundew", price: 90, image: "https://blocks.astratic.com/img/general-img-landscape.png" },
    { id: 4, name: "Butterwort", price: 75, image: "https://blocks.astratic.com/img/general-img-landscape.png" },
  ];

  return (
   <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
  {/* Left Ad Card */}
 
    <AdCard />

  {/* Right Product Grid */}
  <div className="grid grid-cols-2 gap-4">
    {products.slice(0, 4).map((product) => (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
      />
    ))}
  </div>
</div>
  );
}
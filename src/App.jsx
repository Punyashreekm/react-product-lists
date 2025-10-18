import { useSearchParams } from "react-router";
import { useGetProductsQuery } from "./api/services";
import ProductCard from "./components/ProductCard";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 0;
  const title = searchParams.get("title") || "";
  const { data, error, isLoading } = useGetProductsQuery({ page: +page * 10, title });

  const handleNext = () => {
    setSearchParams({ page: +page + 1 });
  };

  const handlePrev = () => {
    if (+page > 0) {
      setSearchParams({ page: +page - 1 });
    }
  };

  if (isLoading) return <p className="text-center text-gray-500 py-10">Loading products...</p>;
  if (error) return <p className="text-center text-red-500 py-10">Failed to load products.</p>;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white">Product List</h1>

      <input
        className="bg-white w-full rounded-sm px-4 py-2 mb-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search"
        value={title}
        onChange={(e) => {
          setSearchParams((prev) => {
            prev.set("title", e.target.value);
            return prev;
          });
        }}
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={handlePrev}
          disabled={+page === 0}
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 
          ${+page === 0 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          Prev
        </button>

        <span className="text-gray-700 font-semibold text-lg">Page {page}</span>

        <button
          onClick={handleNext}
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 
          ${
            data?.length < 10
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          disabled={data?.length < 10}
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default App;

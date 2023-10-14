import Banner from "@/components/Banner";
import Products from "@/components/Products";

import { ProductProps } from "../../type";

interface Props {
  products: ProductProps;
}

export default function Home({ products }: Props) {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />

        <div className="relative mt-3 md:-mt-20 lg:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products products={products} />
        </div>
      </div>
    </main>
  );
}

// SSR for data fetching
export async function getServerSideProps() {
  const products = await fetch(
    "https://fakestoreapiserver.reactbd.com/tech"
  ).then((res) => res.json());

  return {
    props: {
      products,
    },
  };
}

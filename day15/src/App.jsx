import { ShoppingCart, User } from "phosphor-react";
import products from "../api/products.json";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen justify-between">
      <header>
        <div className="p-4 flex flex-row justify-between shadow-lg">
          <p className="text-white text-lg">Cepluki Sneakers</p>
          <div className="flex justify-between w-1/12 flex-row">
            <button>
              <ShoppingCart size={40} color="#FFFFFF" />
            </button>
            <button>
              <User size={40} color="#FFFFFF" />
            </button>
          </div>
        </div>
      </header>
      <main className="flex w-full h-full items-center justify-evenly">
        {products.map((product) => (
          <li
            className="flex justify-evenly items-center list-none"
            id={product.id}
          >
            <button className="card flex flex-col items-center">
              <img
                className="flex rounded-t-3xl w-full h-[80%]"
                src={product.image}
              />
              <p>{product.title}</p>
              <p>
                by <strong>{product.brand}</strong>
              </p>
              <p>{product.description}</p>
              <p>$ {product.price}</p>
            </button>
          </li>
        ))}
      </main>
      <footer className="flex items-center justify-center pb-1">
        <a
          href="https://www.felipecepluki.com.br/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <p className="text-white">Powered by Felipe Cepluki</p>
        </a>
      </footer>
    </div>
  );
}

export default App;

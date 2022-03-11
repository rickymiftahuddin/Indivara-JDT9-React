import { useNavigate } from "react-router-dom";
import "../App.css";
import usePokemon from "../hooks/usePokemon";

function Cart() {
  const navigate = useNavigate();
  const { pokemonCarts, deletePokemonFromCart } = usePokemon();

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      {/* NAV */}
      <div class="navbar-fixed">
        <nav class="amber lighten-1 top">
          <div class="nav-wrapper container">
            <a href="/" class="brand-logo light-blue-text text-darken-4">
              Poketot
            </a>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="/" class="light-blue-text text-darken-4">
                  Home
                </a>
              </li>
              <li>
                <a href="/cart" class="light-blue-text text-darken-4">
                  <i class="material-icons">shopping_cart</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* CONTENT */}
      <div class="row container light-blue-text text-darken-4">
        <div class="col s2">
          <h4 class="amber-text text-lighten-1">Ini Filter</h4>
          <form action="#">
            <p>
              <label>
                <input type="checkbox" />
                <span>Filter 1</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" />
                <span>Filter 2</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" />
                <span>Filter 3</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" />
                <span>Filter 4</span>
              </label>
            </p>
          </form>
        </div>
        <div class="col s10">
          <h1 class="amber-text text-lighten-1">Cart</h1>
          <p>Ini adalah menu cart, silahkan kelola item</p>
          <div class="row">
            {Array.from(pokemonCarts || []).map((item, index) => {
              return (
                <div class="card col s4 l4">
                  <div class="card-image">
                    <img
                      src={item?.img}
                      onClick={() =>
                        navigate(`/pokemons/${item.id}?name=${item.name}`)
                      }
                    />
                    <a
                      class="btn-floating btn-large halfway-fab waves-effect waves-light red"
                      onClick={() => deletePokemonFromCart(index)}
                    >
                      <i class="material-icons">remove_shopping_cart</i>
                    </a>
                  </div>
                  <div class="card-content">
                    <span class="card-title">
                      <button
                        class="amber-text text-lighten-1"
                        key={item.id}
                        onClick={() =>
                          navigate(`/pokemons/${item.id}?name=${item.name}`)
                        }
                      >
                        {item?.name}
                      </button>
                    </span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer class="page-footer light-blue darken-4 amber-text text-lighten-1">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="amber-text text-lighten-1">Footer Content</h5>
              <p>
                Ini app dibuat cuma buat tugas kawan, bukan untuk dijual apalagi
                digoreng.
              </p>
            </div>
            <div class="col l4 offset-l2 s12 amber-text text-lighten-1">
              <h5>Ceritanya sosmed</h5>
              <ul>
                <li>
                  <a
                    class="amber-text text-lighten-1"
                    href="https://www.instagram.com/rickymiftahuddin"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    class="amber-text text-lighten-1"
                    href="https://www.instagram.com/rickymiftahuddin"
                  >
                    Instagram lagi
                  </a>
                </li>
                <li>
                  <a
                    class="amber-text text-lighten-1"
                    href="https://www.instagram.com/rickymiftahuddin"
                  >
                    Instagram terus
                  </a>
                </li>
                <li>
                  <a
                    class="amber-text text-lighten-1"
                    href="https://www.instagram.com/rickymiftahuddin"
                  >
                    Pokoknya instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright amber-text text-lighten-1">
          <div class="container">© 2022 Punya Ricky</div>
        </div>
      </footer>
    </div>
  );
}

export default Cart;

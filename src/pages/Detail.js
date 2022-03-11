import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonByName } from "../services/axios";

function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (params?.id) {
      fetchPokemon(params?.id);
    }
  }, [params]);

  const fetchPokemon = async (id) => {
    try {
      const payloadDetail = await getPokemonByName(id);
      const result = {
        id: payloadDetail?.data?.name || "",
        name: payloadDetail?.data?.name || "",
        img: payloadDetail?.data?.sprites.other.dream_world.front_default || "",
      };
      setPokemon(result);
    } catch (error) {
      console.log(error, "error");
    }
  };

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
        <div class="col s6">
          <a style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
            <i class="material-icons medium light-blue-text text-darken-4">
              arrow_back
            </i>
          </a>
          <img src={pokemon?.img} style={{ height: 470 }} />
        </div>
        <div class="col s6">
          <h1>Detail</h1>
          <hr />
          <h4>Nama</h4>
          <p>{pokemon?.name}</p>
          <h4>Deskripsi singkat</h4>
          <p>
            Pokémon, Pokémon, di mana kamu? Ku mencarimu, ingin menangkapmu
            Pokémon, Pokémon, di mana kamu? Kumau kamu jadi milikku
          </p>
          <h4>Harga</h4>
          <p>$1</p>
          <a
            class="btn-large halfway-fab waves-effect waves-light amber lighten-1 right"
            href="/cart"
          >
            <i class="material-icons">add_shopping_cart</i>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer class="page-footer light-blue darken-4 amber-text text-lighten-1">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="amber-text text-lighten-1">Footer Content</h5>
              <p class="">
                Ini app dibuat cuma buat tugas kawan, bukan untuk dijual apalagi
                digoreng.
              </p>
            </div>
            <div class="col l4 offset-l2 s12 amber-text text-lighten-1">
              <h5 class="">Ceritanya sosmed</h5>
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

export default Detail;

import { Link, useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import { BsSearch } from "react-icons/bs";
import { FormEvent, useState } from "react";

export function Home() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input === "") {
      return;
    }
    navigate(`/detail/${input}`);
  }

  function handleGetMore() {
    alert("Carregando mais...");
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome da criptomoeda"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <BsSearch size={30} color="#fefefe" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor de mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
            <th scope="col">Variação 24h</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-Label="moeda">
              <div className={styles.name}>
                <Link to={"/detail/bitcoin"}>
                  <span>Bitcoin</span> | BTC
                </Link>
              </div>
            </td>

            <td className={styles.tdLabel} data-Label="Valor de mercado">
              1T
            </td>

            <td className={styles.tdLabel} data-Label="Preço">
              8.000
            </td>

            <td className={styles.tdLabel} data-Label="Volume">
              2B
            </td>

            <td className={styles.tdLabel} data-Label="Variação 24h">
              <span>2%</span>
            </td>
          </tr>
        </tbody>
      </table>

    <button className={styles.buttonMore} onClick={handleGetMore}>
      Carregar mais
    </button>

    </main>
  );
}

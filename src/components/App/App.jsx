import s from "./App.module.scss";
function App({ arr }) {
  return (
    <>
      <h1 className={s.title}>Привет</h1>
      <h1 className={s.title_test}>Привет</h1>

      <h2>Запросы</h2>
      <ul>
        {arr.map(({ test, type }) => (
          <li key={type}>
            <p className={s[type]}>{test}</p>
          </li>
        ))}
      </ul>

      {/* <button type="button" className={s.title_btn}>
        asasdasd
      </button> */}
    </>
  );
}

export default App;

import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Judul..</h1>
      </div>
      <nav className="nav">
        <ul>
          <li key={1}>
            <a href="/home">home</a>
          </li>
          <li key={2}>
            <a href="/about">about</a>
          </li>
          <li key={3}>
            <a href="/service">service</a>
          </li>
          <li key={4}>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="search" />
        <button type="button">do searh</button>
      </div>
    </header>
  );
};

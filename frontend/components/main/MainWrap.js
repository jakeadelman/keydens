import Search from "./Search";

export default function MainWrap() {
  return (
    <div>
      <div className="top-wrap">
        <div className="title-wrap">
          <h2 className="kw-title">Keyword Density Tool</h2>
          <p className="kw-subtitle">
            by <a href="https://urldoctor.com">url doctor</a>
          </p>
        </div>
        <div className="search-wrap">
          <Search />
        </div>
      </div>
      <style jsx>
        {`
          .top-wrap {
            padding: 170px;
            background: #f8f8f8;
            height: 500px;
            display: flex;
            flex-direction: column;
          }
          .search-wrap {
            margin: auto;
            margin-top: 60px;
            background: #fff;
            box-shadow: 0 7px 60px 0 rgba(0, 0, 0, 0.5);
          }
          .title-wrap {
            display: flex;
            flex-direction: column;
            text-align: center;
            max-height: 150px;
            margin: 10px auto;
            margin-bottom: 0;
          }
          .kw-title,
          .kw-subtitle {
            margin: 2px;
          }
          .kw-title {
            font-size: 35px;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            font-family: "Karla", open-sans;
            background: #f8f8f8;
          }
          * {
            -webkit-font-smoothing: antialiased;
          }
          input:focus,
          select:focus,
          textarea:focus,
          button:focus {
            outline: none;
          }
        `}
      </style>
    </div>
  );
}

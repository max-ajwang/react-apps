import './index.css';

const book1 = {
  img: 'https://m.media-amazon.com/images/I/61lBRY5h+NL._AC_UF894,1000_QL80_.jpg',
  title: 'The Art of War',
  author: 'Sun Tzu',
};

const book2 = {
  img: 'https://cdnattic.atticbooks.co.ke/img/W386229.jpg',
  title: 'The 48 laws of Power',
  author: 'Robert Greene',
};

function App() {
  return (
    <section className="bookList">
      <Book img={book1.img} title={book1.title} author={book1.author} />
      <Book img={book2.img} title={book2.title} author={book2.author} />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
};

export default App;

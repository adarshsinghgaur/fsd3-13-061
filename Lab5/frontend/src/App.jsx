const Hello = () => {
  return <h2> Welcome to React </h2>;
};
const Book = () => {
  return<>
    <h1>Lets React</h1>
    <h2>price: 699</h2>
    <h3>rating: 4.5</h3>
  </>
};

export default function App() {
  return (
    <>
      <h1 className="text-3xl text-center bg-black text-white my-2 p-2">
        Adarsh Singh
      </h1>
      <Hello />
      <Book /> 
    </>
  );
}

import data from "./assets/data.json";
import PhoneDetails from "./components/PhoneDetails";
function App() {
  console.log(data);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((data) => {
          return <PhoneDetails key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
}

export default App;

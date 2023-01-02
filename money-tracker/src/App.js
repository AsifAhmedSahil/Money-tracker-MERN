import "./App.css";

function App() {

  const addnewtransaction = event =>{
    event.preventDefault();
    const form = event.target;
    const amount = form.amount.value;
    const date = form.date.value;
    const description = form.description.value;

    console.log(amount,date,description)
    
  }
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-6xl text-center mt-10 font-bold">
        $ 200 <span>.00</span>
      </h1>
      <form onSubmit={addnewtransaction}>
      <div className=" flex justify-center gap-4 mt-10 border-green-500">
        <input
          type="text"
          name="amount"
          placeholder="Type Amount"
          className="input w-full max-w-xs bg-gray-500 text-white rounded"
        />
        <input
          type="datetime-local"
          name="date"
          placeholder="Type here"
          className="input w-full max-w-xs bg-gray-500 text-white rounded"
        />
      </div>

      <div className="flex justify-center mt-10  ">
        <input
          type="text"
          name="description"
          placeholder="Please add Your details here"
          className="input w-full bg-gray-500 text-white rounded"
        />
      </div>

      <input type="submit" value="Add Transaction"  className="btn btn-success flex mx-auto mt-10 w-50%"/>
      </form>

      <div className="details mt-10 w-[50%] m-2 p-2 border border-purple-500   ">
        <div className="flex justify-between p-5 ">
          <div className="left">
            <h2 className="text-3xl font-bold mb-4">New tv</h2>
            <h4 className="text-xl font-bold">Time for buy tv</h4>

          </div>
          <div className="right">
          <h2 className="text-3xl font-bold  mb-4">-$ 500</h2>
            <h4 className="text-xl font-bold">date & time</h4>
          </div>
        </div>

      </div>

      <div className="details mt-10  w-[50%] m-2 p-2 border border-purple-500 ">
        <div className="flex justify-between p-5 ">
          <div className="left">
            <h2 className="text-3xl font-bold mb-4">New tv</h2>
            <h4 className="text-xl font-bold">Time for buy tv</h4>

          </div>
          <div className="right">
          <h2 className="text-3xl font-bold text-green-600 mb-4">+$ 400</h2>
            <h4 className="text-xl font-bold">date & time</h4>
          </div>
        </div>

      </div>

      <div className="details mt-10 w-[50%] m-2 p-2 border border-purple-500">
        <div className="flex justify-between p-5 ">
          <div className="left">
            <h2 className="text-3xl font-bold mb-4">New tv</h2>
            <h4 className="text-xl font-bold">Time for buy tv</h4>

          </div>
          <div className="right">
          <h2 className="text-3xl font-bold text-red-600 mb-4">-$ 900</h2>
            <h4 className="text-xl font-bold">date & time</h4>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

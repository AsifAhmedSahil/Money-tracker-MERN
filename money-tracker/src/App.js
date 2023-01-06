import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./App.css";

function App() {
  const [costs,setCosts] = useState([])

  useEffect(() =>{
    fetch("http://localhost:5000/expense")
    .then(res => res.json())
    .then(data => setCosts(data))
    .catch(err => console.log(err))
  },[])

  const addnewtransaction = event =>{
    event.preventDefault();
    const form = event.target;
    const amount = form.amount.value;
    const date = form.date.value;
    const description = form.description.value;

    console.log(amount,date,description)

    const expense = {
      amount,
      date,
      description
    }

    fetch("http://localhost:5000/expense",{
      method:"POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(expense)

    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        form.reset()
        toast.success("cost added successfully 🙂 ")

      }
    })
    .catch(err => console.log(err))


    
  }

  let balance = 0;
  for (const cost of costs){
    const convert = parseInt(cost.amount)
    balance = balance + convert
  }
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-6xl text-center mt-10 font-bold">
        {balance} <span>.00</span>
      </h1>
      <form onSubmit={addnewtransaction}>
      <div className=" flex justify-center gap-4 mt-10 border-green-500">
        <input
          type="number"
          name="amount"
          placeholder="$$ Type Amount"
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
{
  costs.length > 0 &&

  costs.map(cost => <div className="w-[50%]">
    <div className="details mt-10 w-full  m-2 p-2 border border-purple-500 ">
        <div className="flex justify-between p-5 ">
          <div className="left">
            <h2 className="text-3xl font-bold mb-4">{cost.description}</h2>
            <h4 className="text-xl font-bold">Time for buy tv</h4>

          </div>
          <div className="right">
            {
              cost.amount < 0 ?
              <h2 className={"text-3xl font-bold  mb-4 text-red-500 " }>${cost.amount}</h2>
              : 
              <h2 className={"text-3xl font-bold  mb-4  text-green-500" }>$+{cost.amount}</h2>

            }
          
            <h4 className="text-xl font-bold">{cost.date}</h4>
          </div>
        </div>

      </div>
  </div> )
}
      

     

      
    </div>
  );
}

export default App;

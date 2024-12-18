import React, { useEffect, useState } from 'react'
import { Input, Table } from './components'

const App = () => {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("Expense");

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleAdd = () => {
    if (name && (amount>0) && type) {
      setData([...data, { name, amount, type }]);
      setName("");
      setAmount(0);
      setType("Expense");
    } else {
      console.error("Enter all the fields with amount greater than 0.");
    }
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
      localStorage.setItem("data", JSON.stringify(data));
  }, [data]); 

  return (
    <>
      <Input name={name} setName={setName} amount={amount} setAmount={setAmount} type={type} setType={setType} add={handleAdd}/>

      <Table data={data} handleDelete={handleDelete} />
    </>
  )
}

export default App;

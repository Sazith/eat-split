import React, { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({selectedFriend,onSplitBill}) => {

  const [bill, setBill] = useState("")
  const [paidByUser, setPaidByUser] = useState("")

  const painByFriend = bill ? bill - paidByUser : ""

  const [whoIsPaying, setWhoIsPaying] = useState("user")

  function handleSubmit (e){
    e.preventDefault();

    if(!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? painByFriend : -paidByUser)
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="">💲 Bill Value</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))}/>

      <label htmlFor="">🧍‍♂️ Your expense</label>
      <input type="text" value={paidByUser}
       onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>

      <label htmlFor="">👫 {selectedFriend.name}'s expense</label>
      <input type="text" value={painByFriend} disabled/>

      <label htmlFor="">🤑 Who is paying the bill</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill

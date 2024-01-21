"use client"

import { categories, status } from "@/constants";
import { useRouter } from "next/navigation"
import {  useState } from "react"

const TicketForm = () => {
  const router = useRouter()
  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem"
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()

 const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });

    if(!res.ok) {
      throw new Error("Failed to create Ticket")
    }

    router.refresh
    router.push("/")
  }

// Maybe change it to a modal one but save this one aswell get ids for modal

  const [formData, setFormData] = useState(startingTicketData)
  return (
    <div className=" flex justify-center">
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-3 w-1/2"
    >
      <h3>
        {/* {EDITMODE ? "Update Your Ticket" : "Create New Ticket"} */}
        </h3>
      <label>Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={handleChange}
        required={true}
        value={formData.title}
      />
      <label>Description</label>
      <textarea
        id="description"
        name="description"
        onChange={handleChange}
        required={true}
        value={formData.description}
        // rows="5"
      />
      <label>Category</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        {categories?.map((category, _index) => (
          <option key={_index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label>Priority</label>
      <div>
        <input
          id="priority-1"
          name="priority"
          type="radio"
          onChange={handleChange}
          value={1}
          checked={formData.priority == 1}
        />
        <label>1</label>
        <input
          id="priority-2"
          name="priority"
          type="radio"
          onChange={handleChange}
          value={2}
          checked={formData.priority == 2}
        />
        <label>2</label>
        <input
          id="priority-3"
          name="priority"
          type="radio"
          onChange={handleChange}
          value={3}
          checked={formData.priority == 3}
        />
        <label>3</label>
        <input
          id="priority-4"
          name="priority"
          type="radio"
          onChange={handleChange}
          value={4}
          checked={formData.priority == 4}
        />
        <label>4</label>
        <input
          id="priority-5"
          name="priority"
          type="radio"
          onChange={handleChange}
          value={5}
          checked={formData.priority == 5}
        />
        <label>5</label>
      </div>
      <label>Progress</label>
      <input
        type="range"
        id="progress"
        name="progress"
        value={formData.progress}
        min="0"
        max="100"
        onChange={handleChange}
      />
      <label>Status</label>
      <select name="status" value={formData.status} onChange={handleChange}>
      {status?.map((item, _index) => (
          <option key={_index} value={item}>
            {item}
          </option>
      ))}
      </select>
      <input
        type="submit"
        className="btn max-w-xs"
        // value={EDITMODE ? "Update Ticket" : "Create Ticket"}
      />
    </form>
  </div>
  )
}

export default TicketForm
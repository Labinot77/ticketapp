import TicketCard from "@/components/Card/TicketCard";
import { set } from "mongoose";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store"
    })

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const {tickets} = await getTickets()

  const uniqueCategories = [
    // @ts-ignore
    ...new Set(tickets?.map(({ category }) => category)),
  ];


  return (
    <section className="xl:p-5 p-2">
     <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-3">
                {tickets
                  .filter((ticket: any) => ticket.category === uniqueCategory)
                  .map((filteredTicket: any, _index: any) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

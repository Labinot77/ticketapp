import TicketCard from "@/components/Card/TicketCard";

export default function Home() {
  return (
    <section className="xl:p-5 p-2">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4 transition-all">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      </div>
    </section>
  );
}

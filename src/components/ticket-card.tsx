import { Link } from "@tanstack/react-router";
import type { Ticket } from "@/lib/tickets";

export function TicketCard({ ticket }: { ticket: Ticket }) {
  const qtyLabel = `${ticket.qty} ${ticket.qty === 1 ? "entrada" : "entradas"}`;

  return (
    <Link
      to="/ticket/$id"
      params={{ id: ticket.id }}
      className="flex items-stretch gap-2.5 no-underline text-inherit active:opacity-90"
    >
      <img
        src={ticket.image}
        alt=""
        className="size-poster min-w-poster rounded-card object-cover bg-surface"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 rounded-card bg-surface px-4 py-3.5">
        <p className="flex flex-wrap items-baseline gap-x-2 text-meta">
          <span className="font-semibold text-accent">{qtyLabel}</span>
          <span className="font-medium text-muted">{ticket.when}</span>
        </p>
        <h3 className="text-card font-semibold tracking-tight text-fg">{ticket.title}</h3>
        <p className="text-sm leading-snug text-muted">{ticket.venue}</p>
      </div>
    </Link>
  );
}

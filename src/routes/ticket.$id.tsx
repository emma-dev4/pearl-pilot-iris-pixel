import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getTicket } from "@/lib/tickets";

export const Route = createFileRoute("/ticket/$id")({
  component: TicketPage,
});

function TicketPage() {
  const { id } = Route.useParams();
  const ticket = getTicket(id);

  if (!ticket) {
    return (
      <div className="mx-auto min-h-dvh max-w-phone bg-bg px-5 py-10 text-center">
        <p className="text-fg">Ticket not found.</p>
        <Link to="/" className="mt-4 inline-block text-accent">
          Back to My Tickets
        </Link>
      </div>
    );
  }

  const qtyLabel = `${ticket.qty} ${ticket.qty === 1 ? "entrada" : "entradas"}`;

  return (
    <div className="mx-auto min-h-dvh w-full max-w-phone bg-bg pb-12">
      <header className="sticky top-0 z-10 flex items-center gap-3 bg-bg/95 px-4 py-3 backdrop-blur-md">
        <Link
          to="/"
          aria-label="Back to My Tickets"
          className="grid size-10 place-items-center rounded-icon bg-surface text-fg"
        >
          <ArrowLeft className="size-5" strokeWidth={1.8} />
        </Link>
        <span className="text-seg font-medium text-fg">My Tickets</span>
      </header>

      <div className="px-4 pt-2">
        <div className="overflow-hidden rounded-card bg-surface">
          <div className="relative h-56">
            <img src={ticket.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30" />
            <div className="absolute bottom-3 left-4 right-4">
              <p className="text-xs font-medium text-accent">{qtyLabel}</p>
              <h1 className="text-xl font-semibold tracking-tight text-fg">{ticket.title}</h1>
              <p className="text-sm text-muted">{ticket.city}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4 px-4 py-5">
            <Fact label="Sector" value={ticket.section} />
            <Fact label="Fila" value={ticket.row} />
            <Fact label="Asiento" value={ticket.seat} />
            <Fact label="Hora" value={`${ticket.dateLabel} · ${ticket.timeLabel}`} />
            <Fact label="Recinto" value={ticket.venue} />
            <Fact label="Puertas" value={ticket.doors} />
          </div>
        </div>

        <div className="mt-3 flex items-center gap-4 rounded-card bg-surface p-4">
          <QrMark />
          <div>
            <p className="text-meta font-semibold text-fg">Escanear en la entrada</p>
            <p className="mt-1 text-xs text-muted">Muestra esta pantalla en la puerta.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-micro font-medium uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-snug text-fg">{value}</p>
    </div>
  );
}

function QrMark() {
  return (
    <svg viewBox="0 0 88 88" className="size-qr shrink-0 rounded-lg bg-fg p-1.5" aria-hidden>
      <rect width="88" height="88" fill="#ffffff" />
      <g fill="#0f0f0f">
        <rect x="8" y="8" width="24" height="24" rx="2" />
        <rect x="12" y="12" width="16" height="16" fill="#fff" />
        <rect x="16" y="16" width="8" height="8" />
        <rect x="56" y="8" width="24" height="24" rx="2" />
        <rect x="60" y="12" width="16" height="16" fill="#fff" />
        <rect x="64" y="16" width="8" height="8" />
        <rect x="8" y="56" width="24" height="24" rx="2" />
        <rect x="12" y="60" width="16" height="16" fill="#fff" />
        <rect x="16" y="64" width="8" height="8" />
        <rect x="40" y="8" width="6" height="6" />
        <rect x="40" y="20" width="6" height="12" />
        <rect x="48" y="40" width="8" height="8" />
        <rect x="36" y="40" width="8" height="8" />
        <rect x="36" y="52" width="6" height="14" />
        <rect x="56" y="40" width="6" height="6" />
        <rect x="68" y="40" width="12" height="6" />
        <rect x="56" y="52" width="10" height="10" />
        <rect x="70" y="56" width="10" height="6" />
        <rect x="56" y="70" width="6" height="10" />
        <rect x="66" y="68" width="14" height="12" />
        <rect x="40" y="70" width="10" height="10" />
      </g>
    </svg>
  );
}

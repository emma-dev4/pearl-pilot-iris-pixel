import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Bell, User } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { TicketCard } from "@/components/ticket-card";
import { TICKETS } from "@/lib/tickets";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const groups = useMemo(() => {
    const map = new Map<string, typeof TICKETS>();
    for (const ticket of TICKETS) {
      const list = map.get(ticket.month) ?? [];
      list.push(ticket);
      map.set(ticket.month, list);
    }
    return [...map.entries()];
  }, []);

  return (
    <div className="mx-auto min-h-dvh w-full max-w-phone bg-bg px-4 pb-10 pt-3">
      <header className="flex items-center justify-between pb-4 pt-2">
        <h1 className="text-display font-semibold tracking-tight text-fg">My Tickets</h1>
        <div className="flex gap-2.5">
          <button
            type="button"
            aria-label="Notifications"
            className="grid size-10 place-items-center rounded-icon bg-surface text-fg"
          >
            <Bell className="size-5" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Profile"
            className="grid size-10 place-items-center rounded-icon bg-surface text-fg"
          >
            <User className="size-5" strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <div className="mb-7 flex w-full rounded-full bg-surface p-0.5">
        <button
          type="button"
          onClick={() => setTab("upcoming")}
          className={cn(
            "rounded-full px-7 py-2.5 text-seg font-semibold",
            tab === "upcoming" ? "bg-pill text-pill-fg shadow-sm" : "text-muted",
          )}
        >
          Upcoming
        </button>
        <button
          type="button"
          onClick={() => setTab("past")}
          className={cn(
            "flex-1 rounded-full py-2.5 text-seg font-semibold",
            tab === "past" ? "bg-pill text-pill-fg shadow-sm" : "text-muted",
          )}
        >
          Past
        </button>
      </div>

      {tab === "past" ? (
        <EmptyState title="No past tickets" text="Tickets from shows you’ve already attended will show up here." />
      ) : (
        <div className="flex flex-col gap-3">
          {groups.map(([month, tickets]) => (
            <section key={month}>
              <h2 className="mb-3.5 text-display font-semibold tracking-tight text-fg">{month}</h2>
              <div className="flex flex-col gap-3">
                {tickets.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Bell, t as User } from "../_libs/lucide-react.mjs";
import { t as TICKETS } from "./tickets-D2IRHW4m.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ga0VCwlC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ title, text, action, onAction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[52vh] flex-col items-center justify-center px-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2.5 text-[17px] font-semibold text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-7 max-w-[260px] text-sm leading-snug text-muted",
				children: text
			}),
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAction,
				className: "bg-transparent p-0 text-base font-medium text-accent",
				children: action
			}) : null
		]
	});
}
function TicketCard({ ticket }) {
	const qtyLabel = `${ticket.qty} ${ticket.qty === 1 ? "entrada" : "entradas"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/ticket/$id",
		params: { id: ticket.id },
		className: "flex items-stretch gap-2.5 no-underline text-inherit active:opacity-90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: ticket.image,
			alt: "",
			className: "size-poster min-w-poster rounded-card object-cover bg-surface"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col justify-center gap-1 rounded-card bg-surface px-4 py-3.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex flex-wrap items-baseline gap-x-2 text-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-accent",
						children: qtyLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-muted",
						children: ticket.when
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-card font-semibold tracking-tight text-fg",
					children: ticket.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-snug text-muted",
					children: ticket.venue
				})
			]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Home() {
	const [tab, setTab] = (0, import_react.useState)("upcoming");
	const groups = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const ticket of TICKETS) {
			const list = map.get(ticket.month) ?? [];
			list.push(ticket);
			map.set(ticket.month, list);
		}
		return [...map.entries()];
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-dvh w-full max-w-phone bg-bg px-4 pb-10 pt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between pb-4 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-display font-semibold tracking-tight text-fg",
					children: "My Tickets"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Notifications",
						className: "grid size-10 place-items-center rounded-icon bg-surface text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
							className: "size-5",
							strokeWidth: 1.8
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Profile",
						className: "grid size-10 place-items-center rounded-icon bg-surface text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
							className: "size-5",
							strokeWidth: 1.8
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-7 flex w-full rounded-full bg-surface p-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab("upcoming"),
					className: cn("rounded-full px-7 py-2.5 text-seg font-semibold", tab === "upcoming" ? "bg-pill text-pill-fg shadow-sm" : "text-muted"),
					children: "Upcoming"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab("past"),
					className: cn("flex-1 rounded-full py-2.5 text-seg font-semibold", tab === "past" ? "bg-pill text-pill-fg shadow-sm" : "text-muted"),
					children: "Past"
				})]
			}),
			tab === "past" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No past tickets",
				text: "Tickets from shows you’ve already attended will show up here."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: groups.map(([month, tickets]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3.5 text-display font-semibold tracking-tight text-fg",
					children: month
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3",
					children: tickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketCard, { ticket }, ticket.id))
				})] }, month))
			})
		]
	});
}
//#endregion
export { Home as component };

import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-C6-8uunH.mjs";
import { n as getTicket } from "./tickets-D2IRHW4m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ticket._id-C05J7PGo.js
var import_jsx_runtime = require_jsx_runtime();
function TicketPage() {
	const { id } = Route.useParams();
	const ticket = getTicket(id);
	if (!ticket) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-dvh max-w-phone bg-bg px-5 py-10 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-fg",
			children: "Ticket not found."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-4 inline-block text-accent",
			children: "Back to My Tickets"
		})]
	});
	const qtyLabel = `${ticket.qty} ${ticket.qty === 1 ? "entrada" : "entradas"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-dvh w-full max-w-phone bg-bg pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-10 flex items-center gap-3 bg-bg/95 px-4 py-3 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				"aria-label": "Back to My Tickets",
				className: "grid size-10 place-items-center rounded-icon bg-surface text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "size-5",
					strokeWidth: 1.8
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-seg font-medium text-fg",
				children: "My Tickets"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 pt-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-card bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-56",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ticket.image,
							alt: "",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-3 left-4 right-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-accent",
									children: qtyLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-xl font-semibold tracking-tight text-fg",
									children: ticket.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: ticket.city
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-x-4 gap-y-4 px-4 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Sector",
							value: ticket.section
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Fila",
							value: ticket.row
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Asiento",
							value: ticket.seat
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Hora",
							value: `${ticket.dateLabel} · ${ticket.timeLabel}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Recinto",
							value: ticket.venue
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Puertas",
							value: ticket.doors
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-4 rounded-card bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-meta font-semibold text-fg",
					children: "Escanear en la entrada"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: "Muestra esta pantalla en la puerta."
				})] })]
			})]
		})]
	});
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-micro font-medium uppercase tracking-wide text-muted",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm font-semibold leading-snug text-fg",
		children: value
	})] });
}
function QrMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 88 88",
		className: "size-qr shrink-0 rounded-lg bg-fg p-1.5",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "88",
			height: "88",
			fill: "#ffffff"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "#0f0f0f",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "8",
					y: "8",
					width: "24",
					height: "24",
					rx: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "12",
					y: "12",
					width: "16",
					height: "16",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "16",
					y: "16",
					width: "8",
					height: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "56",
					y: "8",
					width: "24",
					height: "24",
					rx: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "60",
					y: "12",
					width: "16",
					height: "16",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "64",
					y: "16",
					width: "8",
					height: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "8",
					y: "56",
					width: "24",
					height: "24",
					rx: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "12",
					y: "60",
					width: "16",
					height: "16",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "16",
					y: "64",
					width: "8",
					height: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "8",
					width: "6",
					height: "6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "20",
					width: "6",
					height: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "48",
					y: "40",
					width: "8",
					height: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "36",
					y: "40",
					width: "8",
					height: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "36",
					y: "52",
					width: "6",
					height: "14"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "56",
					y: "40",
					width: "6",
					height: "6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "68",
					y: "40",
					width: "12",
					height: "6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "56",
					y: "52",
					width: "10",
					height: "10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "70",
					y: "56",
					width: "10",
					height: "6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "56",
					y: "70",
					width: "6",
					height: "10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "66",
					y: "68",
					width: "14",
					height: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "70",
					width: "10",
					height: "10"
				})
			]
		})]
	});
}
//#endregion
export { TicketPage as component };

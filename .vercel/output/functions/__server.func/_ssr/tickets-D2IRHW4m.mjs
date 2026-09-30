//#region node_modules/.nitro/vite/services/ssr/assets/tickets-D2IRHW4m.js
var TICKETS = [
	{
		id: "lima-oct-07",
		title: "BTS World Tour",
		qty: 4,
		when: "miércoles 7 20:00hs",
		venue: "Estadio San Marcos",
		city: "Lima, Perú",
		month: "Octubre 2026",
		image: "/posters/bogota.jpg",
		dateLabel: "Mié, 7 oct 2026",
		timeLabel: "20:00",
		section: "Tribuna Norte",
		row: "19",
		seat: "Asientos consecutivos",
		doors: "No publicado"
	},
	{
		id: "lima-oct-09",
		title: "BTS World Tour",
		qty: 4,
		when: "viernes 9 20:00hs",
		venue: "Estadio San Marcos",
		city: "Lima, Perú",
		month: "Octubre 2026",
		image: "/posters/bogota.jpg",
		dateLabel: "Vie, 9 oct 2026",
		timeLabel: "20:00",
		section: "Tribuna Occidente",
		row: "22",
		seat: "Asientos consecutivos",
		doors: "No publicado"
	},
	{
		id: "lima-oct-10",
		title: "BTS World Tour",
		qty: 4,
		when: "sábado 10 20:00hs",
		venue: "Estadio San Marcos",
		city: "Lima, Perú",
		month: "Octubre 2026",
		image: "/posters/bogota.jpg",
		dateLabel: "Sáb, 10 oct 2026",
		timeLabel: "20:00",
		section: "Tribuna Occidente",
		row: "22",
		seat: "Asientos consecutivos",
		doors: "No publicado"
	},
	{
		id: "laplata-oct-24",
		title: "BTS World Tour",
		qty: 4,
		when: "sábado 24 20:00hs",
		venue: "Estadio Único de La Plata",
		city: "La Plata, Argentina",
		month: "Octubre 2026",
		image: "/posters/bogota.jpg",
		dateLabel: "Sáb, 24 oct 2026",
		timeLabel: "20:00",
		section: "Cabecera Norte",
		row: "19",
		seat: "Asientos consecutivos 37",
		doors: "16:00"
	}
];
function getTicket(id) {
	return TICKETS.find((t) => t.id === id);
}
//#endregion
export { getTicket as n, TICKETS as t };

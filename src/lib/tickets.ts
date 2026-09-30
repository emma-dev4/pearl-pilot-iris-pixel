export type Ticket = {
  id: string;
  title: string;
  qty: number;
  when: string;
  venue: string;
  city: string;
  month: string;
  image: string;
  dateLabel: string;
  timeLabel: string;
  section: string;
  row: string;
  seat: string;
  doors: string;
};

export const TICKETS: Ticket[] = [
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
    doors: "No publicado",
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
    doors: "No publicado",
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
    doors: "No publicado",
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
    doors: "16:00",
  },
];

export function getTicket(id: string) {
  return TICKETS.find((t) => t.id === id);
}

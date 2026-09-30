const tickets = [
	{
		id: 'bts-lima-oct-07',
		title: 'BTS World Tour',
		qty: 4,
		when: 'miércoles 7 20:00hs',
		venue: 'Estadio San Marcos',
		month: 'Octubre 2026',
		image: 'https://cdn.getcrowder.com/images/a0941d9c-4547-44c2-8ec2-abd0a3eec357-banner-desk-4.png',
		alt: 'BTS World Tour ARIRANG Lima'
	},
	{
		id: 'bts-lima-oct-09',
		title: 'BTS World Tour',
		qty: 4,
		when: 'viernes 9 20:00hs',
		venue: 'Estadio San Marcos',
		month: 'Octubre 2026',
		image: 'https://cdn.getcrowder.com/images/a0941d9c-4547-44c2-8ec2-abd0a3eec357-banner-desk-4.png',
		alt: 'BTS World Tour ARIRANG Lima'
	},
	{
		id: 'bts-lima-oct-10',
		title: 'BTS World Tour',
		qty: 4,
		when: 'sábado 10 20:00hs',
		venue: 'Estadio San Marcos',
		month: 'Octubre 2026',
		image: 'https://cdn.getcrowder.com/images/a0941d9c-4547-44c2-8ec2-abd0a3eec357-banner-desk-4.png',
		alt: 'BTS World Tour ARIRANG Lima'
	},
	{
		id: 'bts-buenos-aires',
		title: 'BTS World Tour',
		qty: 4,
		when: 'sábado 24 20:00hs',
		venue: 'La Plata, Argentina',
		month: 'Octubre 2026',
		image: 'https://cdn.getcrowder.com/images/a0941d9c-4547-44c2-8ec2-abd0a3eec357-banner-desk-4.png',
		alt: 'BTS World Tour ARIRANG La Plata'
	}
];

let activeTab = 'upcoming';

function render() {
	const root = document.getElementById('content');

	if (activeTab === 'past') {
		root.innerHTML = `
			<div class="empty">
				<p class="empty-title">No past tickets</p>
				<p class="empty-text">Tickets from events you’ve already attended will show up here.</p>
			</div>
		`;
		return;
	}

	if (!tickets.length) {
		root.innerHTML = `
			<div class="empty">
				<p class="empty-title">No tickets in your account yet.</p>
				<p class="empty-text">When purchasing your tickets, select Quentro as the delivery method.</p>
				<button class="empty-action" type="button">Update</button>
			</div>
		`;
		return;
	}

	// Group by month
	const groups = {};
	tickets.forEach(t => {
		if (!groups[t.month]) groups[t.month] = [];
		groups[t.month].push(t);
	});

	let html = '';
	Object.keys(groups).forEach(month => {
		html += `<h2 class="month-header">${month}</h2>`;
		groups[month].forEach(t => {
			const qtyLabel = `${t.qty} ${t.qty === 1 ? 'entrada' : 'entradas'}`;
			html += `
				<article class="ticket-card" data-id="${t.id}">
					<img class="ticket-poster" src="${t.image}" alt="${t.alt}">
					<div class="ticket-info">
						<div class="ticket-meta">
							<span class="ticket-qty">${qtyLabel}</span>
							<span class="ticket-when">${t.when}</span>
						</div>
						<div class="ticket-name">${t.title}</div>
						<div class="ticket-venue">${t.venue}</div>
					</div>
				</article>
			`;
		});
	});

	root.innerHTML = html;
}

document.querySelectorAll('.segment-btn').forEach(btn => {
	btn.addEventListener('click', () => {
		document.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
		btn.classList.add('active');
		activeTab = btn.dataset.tab;
		render();
	});
});

render();

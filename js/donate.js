const donate = document.getElementById('donate');
const wishlist = document.getElementById('wishlist');
const sponsor = document.getElementById('sponsor');
const donateText = document.getElementById('donate-text');
const wishlistText = document.getElementById('wishlist-text');
const sponsorText = document.getElementById('sponsor-text');

donate.addEventListener('click', (e) => {
	donate.classList.add('active-tab');
	wishlist.classList.remove('active-tab');
	sponsor.classList.remove('active-tab');
	donateText.classList.add('shown');
	wishlistText.classList.add('hidden');
	sponsorText.classList.add('hidden');
	donateText.classList.remove('hidden');
	wishlistText.classList.remove('shown');
	sponsorText.classList.remove('shown');
});

wishlist.addEventListener('click', (e) => {
	wishlist.classList.add('active-tab');
	sponsor.classList.remove('active-tab');
	donate.classList.remove('active-tab');
	wishlistText.classList.add('shown');
	sponsorText.classList.add('hidden');
	donateText.classList.add('hidden');
	wishlistText.classList.remove('hidden');
	sponsorText.classList.remove('shown');
	donateText.classList.remove('shown');
});

sponsor.addEventListener('click', (e) => {
	sponsor.classList.add('active-tab');
	donate.classList.remove('active-tab');
	wishlist.classList.remove('active-tab');
	sponsorText.classList.add('shown');
	donateText.classList.add('hidden');
	wishlistText.classList.add('hidden');
	sponsorText.classList.remove('hidden');
	donateText.classList.remove('shown');
	wishlistText.classList.remove('shown');
});
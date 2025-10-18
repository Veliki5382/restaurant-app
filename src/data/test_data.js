// src/data/test_data.js
// test data za testiranje aplikacije

export const menuItems = [
  { id: 1, name: 'Pasta Carbonara', description: 'Klasična italijanska pasta sa pančetom i jajima.', price: 950, category: 'Glavno jelo' },
  { id: 2, name: 'Pizza Margherita', description: 'Paradajz sos, mocarela i svež bosiljak.', price: 850, category: 'Glavno jelo' },
  { id: 3, name: 'Cezar Salata', description: 'Salata sa piletinom, krutonima i cezar dresingom.', price: 750, category: 'Salate' },
  { id: 4, name: 'Tiramisu', description: 'Italijanski desert sa kafom i piškotama.', price: 450, category: 'Desert' },
  { id: 5, name: 'Coca-Cola', description: '0.25l', price: 220, category: 'Piće' },
  { id: 6, name: 'Voda', description: '0.5l', price: 180, category: 'Piće' },
  { id: 7, name: 'Bruschetta al Pomodoro', description: 'Prepečeni hleb sa svežim paradajzom, belim lukom i bosiljkom.', price: 420, category: 'Predjelo' },
  { id: 8, name: 'Minestrone Supa', description: 'Tradicionalna italijanska supa sa povrćem.', price: 350, category: 'Predjelo' },
  { id: 9, name: 'Panna Cotta', description: 'Kremasti italijanski desert sa voćnim prelivom.', price: 420, category: 'Desert' },
  { id: 10, name: 'Fanta', description: '0.25l', price: 220, category: 'Piće' },
  { id: 11, name: 'Grčka Salata', description: 'Salata sa fetom, maslinama, krastavcima i paradajzom.', price: 700, category: 'Salate' },
  { id: 12, name: 'Rizoto sa Pečurkama', description: 'Kremasti rizoto sa šampinjonima i parmezanom.', price: 900, category: 'Glavno jelo' },
  { id: 13, name: 'Caprese Salata', description: 'Sveži paradajz, mocarela i bosiljak sa maslinovim uljem.', price: 680, category: 'Salate' },
  { id: 14, name: 'Lazanje', description: 'Slojevita pasta sa mesom, sirom i bešamel sosom.', price: 980, category: 'Glavno jelo' },
  { id: 15, name: 'Gelato', description: 'Italijanski sladoled u raznim ukusima.', price: 300, category: 'Desert' },
  { id: 16, name: 'Mineralna Voda', description: '0.5l', price: 180, category: 'Piće' },
  { id: 17, name: 'Antipasto Platter', description: 'Mešavina italijanskih sireva, suhomesnatih proizvoda i maslina.', price: 1200, category: 'Predjelo' },
  { id: 18, name: 'Supreme Pizza', description: 'Pizza sa raznim vrstama mesa i povrća.', price: 950, category: 'Glavno jelo' },
  { id: 19, name: 'Insalata di Rucola', description: 'Salata od rukole sa parmezanom i balzamiko sirćetom.', price: 720, category: 'Salate' },
	{ id: 20, name: 'Chocolate Lava Cake', description: 'Topli čokoladni kolač sa tečnim centrom.', price: 480, category: 'Desert' },
	{ id: 21, name: 'Espresso', description: 'Šolja jakog italijanskog espressa.', price: 200, category: 'Piće' },
	{ id: 22, name: 'Garlic Bread', description: 'Prepečeni hleb sa belim lukom i maslacem.', price: 350, category: 'Predjelo' },
	{ id: 23, name: 'Fettuccine Alfredo', description: 'Pasta u bogatom kremastom sosu sa parmezanom.', price: 920, category: 'Glavno jelo' },
	{ id: 24, name: 'Capuccino', description: 'Kafa sa mlečnom penom i posutom kakaom.', price: 250, category: 'Piće' },
	{ id: 25, name: 'Vegetarijanska Pizza', description: 'Pizza sa raznim svežim povrćem i sirom.', price: 880, category: 'Glavno jelo' },
	{ id: 27, name: 'Lemon Sorbet', description: 'Osvežavajući limunov sorbet.', price: 320, category: 'Desert' },
	{ id: 28, name: 'Tomato Basil Soup', description: 'Kremasta supa od paradajza sa svežim bosiljkom.', price: 360, category: 'Predjelo' },
	{ id: 29, name: 'Chicken Parmigiana', description: 'Pohovana piletina sa paradajz sosom i sirom.', price: 970, category: 'Glavno jelo' },
	{ id: 30, name: 'Iced Tea', description: 'Hladni čaj sa ledom i limunom.', price: 200, category: 'Piće' },
	{ id: 31, category: 'Glavno jelo', name: 'Osso Buco', description: 'Sporo kuvani teleća kolenica u bogatom sosu.', price: 1300, },
	{ id: 32, category: 'Glavno jelo', name: 'Gnocchi al Pesto', description: 'Njoke u svežem pestu od bosiljka i pinjola.', price: 890, },
	{ id: 33, category: 'Glavno jelo', name: 'Seafood Risotto', description: 'Rizoto sa mešavinom svežih morskih plodova.', price: 1250, },
	{ id: 34, category: 'Glavno jelo', name: 'Pollo alla Cacciatora', description: 'Piletina kuvana u sosu od paradajza, crnog luka i maslina.', price: 1100, },
	{ id: 35, category: 'Glavno jelo', name: 'Veal Scaloppine', description: 'Teleći medaljoni u belom vinu i limun sosu.', price: 1400, },
	{ id: 37, category: 'Glavno jelo', name: 'Eggplant Parmigiana', description: 'Slojevita musaka od patlidžana, paradajza i sira.', price: 900, },
	{ id: 38, category: 'Glavno jelo', name: 'Bistecca alla Fiorentina', description: 'Veliki T-bone steak, grilovan po vašoj želji.', price: 2000, },
];

export const initialOrders = [
	{ id: 100, table: 1, items: ['Margherita Pizza', 'Coca-Cola'], status: 'U pripremi' },
	{ id: 101, table: 5, items: ['Pasta Carbonara'], status: 'U pripremi' },
  { id: 102, table: 2, items: ['Pizza Margherita', 'Coca-Cola'], status: 'Spremno' },
  { id: 103, table: 10, items: ['Cezar Salata', 'Voda'], status: 'Isporučeno' },
	{ id: 104, table: 11, items: ['Tiramisu', 'Espresso'], status: 'U pripremi' },
	{ id: 105, table: 4, items: ['Bruschetta al Pomodoro', 'Fanta'], status: 'Spremno' },
	{ id: 106, table: 6, items: ['Margherita Pizza', 'Coca-Cola'], status: 'U pripremi' },
	{ id: 107, table: 7, items: ['Pasta Carbonara'], status: 'Isporučeno' },
	{ id: 108, table: 9, items: ['Tiramisu', 'Espresso'], status: 'U pripremi' },
	{ id: 109, table: 8, items: ['Bruschetta al Pomodoro', 'Fanta'], status: 'Spremno' },
	{ id: 110, table: 3, items: ['Seafood Risotto', 'Belo vino'], status: 'U pripremi' },
	{ id: 111, table: 12, items: ['Bistecca alla Fiorentina', 'Crveno vino'], status: 'Spremno' },

];

export const users = [
  { username: 'admin1', password: 'password123', role: 'admin', name: 'Mina Stamenić', email: 'stamenicmina@gmail.com' },
  { username: 'admin2', password: 'password123', role: 'admin', name: 'Mrijana Stanković', email: 'stamenicmina@gmail.com' },
  { username: 'petar', password: 'perazderahasac', role: 'user', name: 'Petar Petrović', email: 'petarpetrovic@example.com' },
  { username: 'jovana', password: 'jovana', role: 'user', name: 'Jovana Jovanović', email: 'jovanajovanovic@example.com' },
];
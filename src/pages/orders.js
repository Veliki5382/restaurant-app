import React from 'react';

function Orders({ orders, currentUser, onUpdateStatus }) {
  const isAdmin = currentUser && currentUser.role === 'admin';
  
  // 1. Definišemo željeni redosled statusa.
  //    Ovaj niz će služiti kao osnova za sortiranje.
  const statusOrder = ['U pripremi', 'Spremno', 'Isporučeno'];
  
  // 2. Kreiramo sortiranu kopiju niza narudžbina.
  //    Koristimo .slice() da napravimo kopiju kako ne bismo menjali originalno stanje (state).
  const sortedOrders = orders.slice().sort((a, b) => {
    // Pronalazimo poziciju (indeks) statusa svake narudžbine u našem definisanom nizu.
    const indexA = statusOrder.indexOf(a.status);
    const indexB = statusOrder.indexOf(b.status);
    
    // Vraćamo razliku indeksa. Ovo će sortirati elemente prema redosledu u 'statusOrder'.
    return indexA - indexB;
  });
  
  return (
    <div className="page-content">
      <h2>Trenutne Narudžbine</h2>
      <div className="orders-list">
        {/* 3. Mapiramo preko NOVOG, sortiranog niza 'sortedOrders' umesto originalnog 'orders'. */}
        {sortedOrders.map(order => (
          <div key={order.id} className={`order-item status-${order.status.toLowerCase().replace(' ', '-')}`}>
            <h3>Narudžbina #{order.id} - Sto {order.table}</h3>
            <p>Stavke: {order.items.join(', ')}</p>
            <div className="status-container">
              <strong>Status: </strong>
              {isAdmin ? (
                <select
                  value={order.status}
                  onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                  className="status-select"
                >
                  <option value="U pripremi">U pripremi</option>
                  <option value="Spremno">Spremno</option>
                  <option value="Isporučeno">Isporučeno</option>
                </select>
              ) : (
                <span>{order.status}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;


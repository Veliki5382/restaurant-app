import React from 'react';

function Orders({ orders, currentUser, onUpdateStatus, onRemoveOrder }) {
  const isAdmin = currentUser && currentUser.role === 'admin';

  const statusOrder = ['U pripremi', 'Spremno', 'Isporučeno'];
  const sortedOrders = [...orders].sort((a, b) => {
    return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
  });

  const renderAdminAction = (order) => {
    if (!isAdmin) {
      return null;
    }

    switch (order.status) {
      case 'U pripremi':
        return (
          <button className="action-button ready" onClick={() => onUpdateStatus(order.id, 'Spremno')}>
            Završi pripremu
          </button>
        );
      case 'Spremno':
        return (
          <button className="action-button deliver" onClick={() => onUpdateStatus(order.id, 'Isporučeno')}>
            Isporuči narudžbinu
          </button>
        );
      case 'Isporučeno':
        return (
          <button className="action-button remove" onClick={() => onRemoveOrder(order.id)}>
            Ukloni narudžbinu
          </button>
        );
      default:
        return null;
    }
  };
  
    return (
    <div className="page-content">
      <h2>Trenutne Narudžbine</h2>
      <div className="orders-list">
        {sortedOrders.map(order => (
          <div key={order.id} className={`order-item status-${order.status.toLowerCase().replace(' ', '-')}`}>
            <div className="order-details">
              <h3>Narudžbina #{order.id} - Sto {order.table}</h3>
              <p>Stavke: {order.items.join(', ')}</p>
              <p><strong>Status: {order.status}</strong></p>
            </div>
            <div className="order-action">
              {renderAdminAction(order)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;


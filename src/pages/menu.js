import React from 'react';
import { menuItems } from '../data/test_data';

function Menu() {
  const categories = ['Predjelo', 'Glavno jelo', 'Salate', 'Desert', 'Piće'];

  return (
    <div className="page-content">
      <div className="menu-title">Meni</div>
      <div className="menu-list">
        
        {categories.map(category => {
          const itemsInCategory = menuItems.filter(item => item.category === category);

          if (itemsInCategory.length === 0) {
            return null;
          }

          return (
            <div key={category} className="category-section">
              <h3>{category}</h3>
              {itemsInCategory.map(item => (
                <div key={item.id} className="menu-item">
                  <h4>{item.name} - {item.price} RSD</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
import React, { useState } from 'react';

const hotspotsData = [
  {
    id: 1,
    top: '18%',
    left: '22%',
    title: 'Matte Finish Laminate',
    desc: 'Used on upper cabinets. Fingerprint resistant and easy to clean.',
    material: 'Matte Charcoal Laminate'
  },
  {
    id: 2,
    top: '60%',
    left: '16%',
    title: 'Soft-Close Hinges',
    desc: 'Premium soft-close mechanisms for silent and smooth operation.',
    material: 'Soft-Close Hinge Systems'
  },
  {
    id: 3,
    top: '90%',
    left: '45%',
    title: 'BWP Marine Plywood',
    desc: 'Boiling Water Proof core material perfect for kitchen base cabinets.',
    material: 'BWP Marine Grade Plywood'
  }
];

export default function Showroom() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const handleEnquire = (materialName) => {
    const waNumber = "918888030786";
    let waText = `Hello Aashish Ply & Interior Fittings,%0A%0A`;
    waText += `I was looking at your Digital Showroom and I'm interested in the *${materialName}*.%0A%0A`;
    waText += `Could you provide more details and a quotation?`;
    window.open(`https://wa.me/${waNumber}?text=${waText}`, '_blank');
  };

  return (
    <div className="showroom-interactive reveal active">
      <div className="image-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80" 
          alt="Luxury Modular Kitchen" 
          className="showroom-img" 
        />
        
        {hotspotsData.map((hotspot) => (
          <div 
            key={hotspot.id}
            className={`hotspot ${activeHotspot?.id === hotspot.id ? 'active' : ''}`} 
            style={{ top: hotspot.top, left: hotspot.left }}
            onClick={() => setActiveHotspot(hotspot)}
          >
            <div className="hotspot-pulse"></div>
            <div className="hotspot-core"></div>
          </div>
        ))}
      </div>
      
      <div className="hotspot-details-panel">
        <h3>{activeHotspot ? activeHotspot.title : 'Select a Hotspot'}</h3>
        <p>{activeHotspot ? activeHotspot.desc : 'Click any pulsing dot on the image to discover the materials and hardware used in this design.'}</p>
        
        {activeHotspot && (
          <button 
            className="premium-btn" 
            onClick={() => handleEnquire(activeHotspot.material)}
          >
            Enquire About This <span className="arrow">→</span>
          </button>
        )}
      </div>
    </div>
  );
}

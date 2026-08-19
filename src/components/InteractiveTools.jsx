import React, { useState } from 'react';

// --- DYNAMIC MATERIAL COMPARISON TOOL ---
const comparisonData = {
  'bwp': { name: 'BWP Marine Plywood', bestFor: 'Kitchens, Bathrooms', water: '100% Waterproof (Boiling Water Proof)', cost: '$$$$ (Premium)', durability: 'Very High (15+ Years)' },
  'bwr': { name: 'BWR Plywood', bestFor: 'Wardrobes, Cabinets', water: 'Water Resistant (Boiling Water Resistant)', cost: '$$$ (Medium-High)', durability: 'High (10-15 Years)' },
  'mr': { name: 'Commercial MR Plywood', bestFor: 'Living Room, Dry Areas', water: 'Moisture Resistant (Not for wet areas)', cost: '$$ (Medium)', durability: 'Moderate (7-10 Years)' },
  'hdhmr': { name: 'HDHMR Board', bestFor: 'Routings, Seamless Doors', water: 'High Water Resistance', cost: '$$ (Medium)', durability: 'High (Dense Core)' },
  'mdf': { name: 'MDF Board', bestFor: 'Carving, Decorative Panels', water: 'Low (Avoid moisture)', cost: '$ (Economy)', durability: 'Medium (Prone to swelling)' },
  'laminate': { name: 'Laminate', bestFor: 'Surface Finishing, Wardrobes', water: 'High (Surface only)', cost: '$$ (Medium)', durability: 'High (Scratch resistant)' },
  'veneer': { name: 'Natural Veneer', bestFor: 'Luxury Furniture, Paneling', water: 'Low (Requires PU Polish)', cost: '$$$$$ (Luxury)', durability: 'Moderate (Needs maintenance)' }
};

export function MaterialCompare() {
  const [mat1, setMat1] = useState('bwr');
  const [mat2, setMat2] = useState('bwp');

  const d1 = comparisonData[mat1];
  const d2 = comparisonData[mat2];

  return (
    <div className="premium-card p-tools mt-5 w-100">
      <div className="premium-card-content p-0">
        <h3 className="royal-heading text-center">Compare Materials</h3>
        <p className="royal-subtext text-center">Select two materials to compare their properties side-by-side.</p>

        <div className="royal-compare-container mt-4">
          <div className="royal-compare-selectors">
            <div className="royal-form-group w-40">
              <label htmlFor="comp-mat1">Material 1</label>
              <select id="comp-mat1" className="royal-input font-playfair bold" value={mat1} onChange={(e) => setMat1(e.target.value)}>
                {Object.entries(comparisonData).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
              </select>
            </div>
            <div className="royal-vs-badge">VS</div>
            <div className="royal-form-group w-40">
              <label htmlFor="comp-mat2">Material 2</label>
              <select id="comp-mat2" className="royal-input font-playfair bold text-right" value={mat2} onChange={(e) => setMat2(e.target.value)}>
                {Object.entries(comparisonData).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
              </select>
            </div>
          </div>

          <div className="royal-compare-table mt-4">
            <div className="royal-comp-row header">
              <div className="comp-col feature-col">Feature</div>
              <div className="comp-col val-col text-center">{d1.name}</div>
              <div className="comp-col val-col text-center">{d2.name}</div>
            </div>
            
            {['bestFor', 'water', 'durability', 'cost'].map((feature, idx) => {
              const labels = { bestFor: 'Best For', water: 'Water Resistance', durability: 'Durability', cost: 'Relative Cost' };
              return (
                <div className="royal-comp-row" key={idx}>
                  <div className="comp-col feature-col">{labels[feature]}</div>
                  <div className="comp-col val-col">{d1[feature]}</div>
                  <div className="comp-col val-col">{d2[feature]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveTools() {
  return (
    <div className="royal-tools-wrapper">
      <div className="royal-tools-grid">
        <ProductWizard />
      </div>
      <MaterialCompare />
    </div>
  );
}

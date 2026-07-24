import React, { useState } from 'react';

// --- ADVANCED MATERIAL CALCULATOR ---
export function MaterialCalculator() {
  const [area, setArea] = useState('');
  const [sheetSize, setSheetSize] = useState(32); // 8x4 default
  const [wastage, setWastage] = useState(15);
  const [result, setResult] = useState(null);

  const calculateSheets = () => {
    const numArea = parseFloat(area);
    if (!isNaN(numArea) && numArea > 0) {
      const exactSheets = (numArea * (1 + (wastage / 100))) / sheetSize;
      setResult({
        exact: exactSheets.toFixed(2),
        rounded: Math.ceil(exactSheets)
      });
    } else {
      alert("Please enter a valid area in square feet.");
    }
  };

  return (
    <div className="premium-card p-tools">
      <div className="premium-card-content p-0">
        <h3 className="royal-heading text-center">Material Calculator</h3>
        <p className="royal-subtext text-center">Accurately estimate your plywood or laminate sheet requirements.</p>
        
        <div className="calculator-container mt-4">
          <div className="royal-form-group">
            <label htmlFor="calc-area">Total Area (Square Feet)</label>
            <input 
              type="number" 
              id="calc-area"
              className="royal-input"
              placeholder="e.g. 200" 
              min="1" 
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="royal-form-row">
            <div className="royal-form-group half">
              <label htmlFor="calc-sheet">Sheet Dimension</label>
              <select id="calc-sheet" className="royal-input" value={sheetSize} onChange={(e) => setSheetSize(Number(e.target.value))}>
                <option value={32}>8' x 4' (32 sq.ft)</option>
                <option value={28}>7' x 4' (28 sq.ft)</option>
                <option value={24}>8' x 3' (24 sq.ft)</option>
                <option value={18}>6' x 3' (18 sq.ft)</option>
              </select>
            </div>
            <div className="royal-form-group half">
              <label htmlFor="calc-waste">Cutting Wastage</label>
              <select id="calc-waste" className="royal-input" value={wastage} onChange={(e) => setWastage(Number(e.target.value))}>
                <option value={10}>10% (Minimal)</option>
                <option value={15}>15% (Standard)</option>
                <option value={20}>20% (Complex Cuts)</option>
              </select>
            </div>
          </div>
          
          <button className="premium-btn w-100 justify-content-center mt-3 mb-4" onClick={calculateSheets}>
            Calculate Requirement <span className="arrow">→</span>
          </button>
          
          {result !== null && (
            <div className="royal-result-box royal-fade">
              <h4 className="royal-result-heading">Estimated Requirement</h4>
              <div className="royal-calc-row">
                <span>Exact Mathematical Sheets:</span>
                <span>{result.exact}</span>
              </div>
              <div className="royal-calc-row highlight">
                <span>Sheets to Purchase:</span>
                <span className="royal-big-number">{result.rounded}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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

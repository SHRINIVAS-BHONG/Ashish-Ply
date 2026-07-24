import React from 'react';
import { MaterialCalculator, MaterialCompare } from '../components/InteractiveTools';

export default function ToolsPage() {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '80vh' }} className="bg-stone">
            <div className="container">
                <div className="section-header text-center reveal active">
                    <span className="section-label">Smart Utilities</span>
                    <h2>Interactive Tools & Calculators</h2>
                    <p>Compare materials and estimate your exact requirements.</p>
                </div>

                <div className="royal-tools-wrapper mt-5" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    <div className="royal-tools-grid">
                        <MaterialCalculator />
                    </div>
                    <div className="royal-tools-section">
                        <MaterialCompare />
                    </div>
                </div>
            </div>
        </div>
    );
}

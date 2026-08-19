import React from 'react';
import { MaterialCompare } from '../components/InteractiveTools';

export default function ToolsPage() {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '80vh' }} className="bg-stone">
            <div className="container">
                <div className="section-header text-center reveal active">
                    <span className="section-label">Smart Utilities</span>
                    <h2>Compare Materials</h2>
                    <p>Compare plywood, boards, and surfaces side-by-side to make the best choice.</p>
                </div>

                <div className="royal-tools-wrapper mt-5">
                    <div className="royal-tools-section">
                        <MaterialCompare />
                    </div>
                </div>
            </div>
        </div>
    );
}

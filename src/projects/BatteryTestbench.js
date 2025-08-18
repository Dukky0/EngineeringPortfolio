import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BatteryTestbenchProject = ({ onNavigate }) => {
  return (
    <div className="project-detail">
      <button className="back-button" onClick={() => onNavigate('home')}>
        <ArrowLeft /> Back to Home
      </button>
      
      <div className="project-hero">
        <div className="container">
          <h1>Battery Discharge Testbench</h1>
          <p className="project-lead">
            A sophisticated standalone testing system designed to safely discharge and analyze 
            battery performance under controlled conditions for the VT BOLT electric motorcycle team.
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="container">
          <div className="content-section">
            <div className="text-image-split">
              <div className="text-content">
                <h2>Project Overview</h2>
                <p>
                  The Battery Discharge Testbench represents a critical safety and validation tool 
                  for our electric motorcycle development process. Operating on an STM32 microcontroller 
                  platform, this system provides automated discharge cycles with comprehensive data 
                  logging capabilities.
                </p>
                <p>
                  This project emerged from the need to validate battery specifications, analyze 
                  discharge curves, and ensure strict safety protocols before integrating batteries 
                  into our high-performance electric motorcycle design.
                </p>
              </div>
              <div className="image-content">
                <div className="project-image-placeholder">
                  <div className="placeholder-text">PCB Layout Design</div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technical Implementation</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>STM32 Microcontroller</h3>
                <p>Utilizing STM32's robust architecture for precise control and real-time monitoring of discharge processes with high-resolution ADCs and PWM control.</p>
              </div>
              <div className="feature-card">
                <h3>Custom PCB Design</h3>
                <p>Designed comprehensive schematic and PCB layout using Altium Designer, incorporating proper grounding, thermal management, and signal integrity considerations.</p>
              </div>
              <div className="feature-card">
                <h3>Safety Protocols</h3>
                <p>Implemented multiple safety layers including overcurrent protection, thermal monitoring, emergency shutoff circuits, and isolated measurement systems.</p>
              </div>
              <div className="feature-card">
                <h3>Data Acquisition</h3>
                <p>Real-time monitoring and logging of voltage, current, temperature, and power data with configurable sampling rates and export capabilities.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="text-image-split reverse">
              <div className="image-content">
                <div className="project-image-placeholder">
                  <div className="placeholder-text">Circuit Schematic</div>
                </div>
              </div>
              <div className="text-content">
                <h2>Design Challenges</h2>
                <p>
                  One of the primary challenges was managing high discharge currents while maintaining 
                  measurement accuracy. The design incorporates precision shunt resistors, differential 
                  amplification circuits, and careful PCB layout to minimize noise and ensure reliable operation.
                </p>
                <p>
                  Thermal management was another critical consideration, requiring heat sink design, 
                  thermal vias, and temperature monitoring to prevent component damage during extended 
                  discharge cycles. The system includes automatic thermal shutdown protection.
                </p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="single-column">
              <h2>Testing and Validation</h2>
              <p>
                The testbench underwent extensive validation testing to ensure accuracy and safety. 
                Calibration procedures were developed using precision reference standards, and the 
                system was tested with various battery chemistries including lithium-ion, lithium 
                polymer, and nickel-metal hydride configurations.
              </p>
              <p>
                Performance testing demonstrated measurement accuracy within ±0.1% for voltage and 
                ±0.5% for current across the full operating range. The data logging system successfully 
                captured discharge characteristics for battery capacity verification and performance analysis.
              </p>
            </div>
          </div>

          <div className="content-section">
            <h2>Key Achievements</h2>
            <div className="achievement-grid">
              <div className="achievement-item">
                <div className="achievement-icon">⚡</div>
                <h3>High Current Handling</h3>
                <p>Safely handles discharge currents up to 20A with proper thermal management</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">📊</div>
                <h3>Data Precision</h3>
                <p>Achieves ±0.1% voltage accuracy and ±0.5% current accuracy across full range</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🛡️</div>
                <h3>Safety Systems</h3>
                <p>Multiple redundant safety systems including thermal, overcurrent, and emergency shutoff</p>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h2>Technologies Used</h2>
            <div className="tech-tags">
              <span className="tech-tag primary">Altium Designer</span>
              <span className="tech-tag primary">STM32 Microcontroller</span>
              <span className="tech-tag secondary">C/C++</span>
              <span className="tech-tag secondary">PCB Design</span>
              <span className="tech-tag secondary">Schematic Design</span>
              <span className="tech-tag secondary">Circuit Analysis</span>
              <span className="tech-tag secondary">Electrical Soldering</span>
              <span className="tech-tag secondary">Hardware Testing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryTestbenchProject;
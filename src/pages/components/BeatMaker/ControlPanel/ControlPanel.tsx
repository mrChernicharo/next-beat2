import React from 'react';
import { ControlPanelContainer } from '../../../../styles/ControlPanelStyles';
import { InstrumentsControl } from './InstrumentsControl/InstrumentsControl';
import TempoSlider from './TempoSlider/TempoSlider';
import { TrackControl } from './TrackControl/TrackControl';

export function ControlPanel() {
  return (
    <ControlPanelContainer>
      <div className="header">
        <p className="component-title">ControlPanel</p>
      </div>
      <div className="body">
        <TempoSlider />
        <InstrumentsControl />
        <TrackControl />
      </div>
    </ControlPanelContainer>
  );
}

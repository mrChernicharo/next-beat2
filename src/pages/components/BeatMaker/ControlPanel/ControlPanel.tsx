import React from 'react';
import { ControlPanelContainer } from '../../../../styles/ControlPanelStyles';
import { InstrumentsControl } from './InstrumentsControl/InstrumentsControl';
import TempoSlider from './TempoSlider/TempoSlider';
import { TrackControl } from './TrackControl/TrackControl';

export function ControlPanel() {
  return (
    <ControlPanelContainer>
      <div className="header">
        <span>ControlPanel</span>
      </div>
      <div className="body">
        <TempoSlider />
        <InstrumentsControl />
        <TrackControl />
      </div>
    </ControlPanelContainer>
  );
}

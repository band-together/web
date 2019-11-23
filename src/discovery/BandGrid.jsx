import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BandCard from './BandCard';
import { BAND } from '../util/props';

export default function BandGrid({
  loading, bands, currentBand, onBandClick,
}) {
  if (loading) {
    return <Grid.Column />;
  }
  return (
    <>
      {bands.map((band) => (
        <Grid.Column
          key={`band-grid-item-${band.id}`}
        >
          <BandCard
            band={band}
            active={currentBand === band.bandName}
            onBandClick={onBandClick}
          />
        </Grid.Column>
      ))}
    </>
  );
}

BandGrid.propTypes = {
  loading: PropTypes.bool.isRequired,
  bands: PropTypes.arrayOf(PropTypes.shape(BAND)),
  currentBand: PropTypes.string,
  onBandClick: PropTypes.func.isRequired,
};

BandGrid.defaultProps = {
  bands: [],
  currentBand: '',
};

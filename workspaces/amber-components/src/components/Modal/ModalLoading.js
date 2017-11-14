import React from 'react';
import loadingGif from '@amber-engine/amber-content/lib/img/Spinner.gif';

export default function ModalLoading() {
  return (
    <img src={loadingGif} alt="loading" />
  );
}

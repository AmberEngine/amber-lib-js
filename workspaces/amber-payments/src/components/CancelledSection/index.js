import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';

import sadFace from 'static/img/sadface.svg';
import calendar from 'static/img/calendar.svg';
import stylesheet from './CancelledSection.scss';

import RoundRectangle from 'shared/components/RoundRectangle';

function renderDetails(props) {
  if (props.user.subscriptionActive) {
    const date = new Date(props.user.subscriptionEndDate);
    const dateString = moment(date).format('MMMM DD, YYYY');

    return (
      <p>
        You will retain full access through {dateString}.
      </p>
    );
  }
  return (
    <p>
      We will hold onto your data and preferences for up to one year in case you change your mind!
    </p>
  );
}

function renderSvg(props) {
  if (props.user.subscriptionActive) {
    return (
      <img alt='calendar' src={calendar} />
    );
  }
  return (
    <img alt='sad face' src={sadFace} />
  );
}

function reactivateRedirect() {
  browserHistory.push('/billing/reactivate');
}


export default function CancelledSection(props) {
  return (
    <div className='row'>
      <div className={stylesheet.headline}>
        <div className={'col-xs-1'}>
          { renderSvg(props) }
        </div>
        <div className={'col-xs-8'}>
          <p><strong>ACCOUNT CANCELED</strong></p>
          { renderDetails(props) }
        </div>
        <div className={'col-xs-3'}>
          <RoundRectangle
            onClick={reactivateRedirect}
            className={stylesheet.reactivate}
          >
            REACTIVATE
          </RoundRectangle>
        </div>
      </div>
    </div>
  );
}

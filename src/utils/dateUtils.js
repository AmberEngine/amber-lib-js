import moment from 'moment';

export function stringifyDate (date) {
  return moment(date).format('MMMM DD, YYYY [at] h:mma');
}

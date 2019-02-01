/**
 * @param {null} - no parameter
 * @returns {null} - returns null;
 */
export default function toggler() {
  const navElement = document.getElementById('Topnav');
  if (navElement.className === 'topnav') {
    navElement.className += ' responsive';
  } else {
    navElement.className = 'topnav';
  }
}

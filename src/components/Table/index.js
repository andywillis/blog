import style from './index.module.css';

export default function Table(data) {
  return (`
    <table class="${style.table}">
      ${data}
    </table>
  `);
}

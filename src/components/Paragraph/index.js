import style from './index.module.css';

export default function Paragraph(html) {
  return (`
    <p class="${style.paragraph}">
      ${html}
    </p>
  `);
}

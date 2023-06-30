import style from './index.module.css';

export default function Tag(tag) {
  return (`
    <li class="${style.tag}">
      ${tag.text}
    </li>
  `);
}

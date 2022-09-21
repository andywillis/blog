import style from './index.module.css';

export default function Image({ src, alt }) {

  return (`
    <div class="${style.imageContainer}">
      <img
        class="${style.image}"
        src="${src}"
        alt="${alt}"
      >
    </div>
  `);

}

import style from './style.module.css';

export default function Image({ src, alt }) {
	return (
		<div class={style.imageContainer}>
			<img
				class={style.image}
				width="800px"
				height="500px"
				src={src}
				alt={alt}
			/>
		</div>
	);
}

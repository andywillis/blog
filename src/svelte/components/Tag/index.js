import style from './style.module.css';

export default function Tag({ tag, number }) {
	return (
		<li class={style.tag}>
			{tag.tag}{tag.id < number - 1 ? ',' : ''}
		</li>
	);
}

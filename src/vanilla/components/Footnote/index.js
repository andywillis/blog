export default function Footnote(footnote) {
	return (`
		<li id=${footnote.fnid}>
			${footnote.html}
		</li>
	`);
}

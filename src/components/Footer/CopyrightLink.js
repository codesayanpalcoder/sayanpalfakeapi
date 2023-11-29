import { FooterLink } from './footer-styling';

const currentYear = new Date().getFullYear();
export default function CopyrightLink() {
	return (
		<FooterLink
			primary
			animated='vertical'
			as='a'
			href='https://github.com/codesayanpalcoder'
			target='_blank'
		>
			{'Green Shop 2023'}
		</FooterLink>
	)
}
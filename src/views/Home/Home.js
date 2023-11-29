import { memo } from 'react';
import { Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import BGImage from '../../assets/images/homepage__illustration.png';
import {
	HeroImage,
	StyledHeroButton,
	Hero,
	MainHeader,
	SecondaryHeader,
	HeroTextsContainer,
} from './home-styling';

function HeroButton() {
	const navigate = useNavigate();
	return (
		<StyledHeroButton
			onClick={() => navigate('/shop')}
			size='large'>
			<Icon name='shopping bag' />
			Check Here
		</StyledHeroButton>
	)
}

const HeroTexts = () => (
	<HeroTextsContainer>
		<MainHeader>
			Welcome to <br/>
			<strong> Green Store</strong>
		</MainHeader>
		<SecondaryHeader><h3>A website built using React and Typescript</h3></SecondaryHeader>
	</HeroTextsContainer>
)

const Home = memo(() => {
	return (
		<Hero>
			<HeroTextsContainer>
				<HeroTexts></HeroTexts>
				<HeroButton></HeroButton>
			</HeroTextsContainer>
			<HeroImage src={BGImage} />
		</Hero>
	)
})

export default Home
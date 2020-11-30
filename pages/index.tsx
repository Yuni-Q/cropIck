import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import GNB from '../components/GNB';
import MainSearch from '../components/MainSearch';
import NewCommunity from '../components/NewCommunity';
import News from '../components/News';
import PopularCommunity from '../components/PopularCommunity';
import PopularCommunityContent from '../components/PopularCommunityContent';
import Rank from '../components/Rank';
import { PageContext } from './_app';

interface Props {
	data: number;
}

export enum Category {
	PLACE,
	CROPS,
}

const Main: NextPage<Props> = ({ data }) => {
	
	return (
		<StyledWrapper>
			<GNB />
			<MainSearch />
			<SectionWrapper>
			<StyledFirstSection>
				<PopularCommunity />
				<News />
			</StyledFirstSection>
			<StyledSecondSection>
				<Rank />
				<NewCommunity />
			</StyledSecondSection>
			</SectionWrapper>
			<PopularCommunityContent />
			<Footer />
		</StyledWrapper>
	);
};


interface ServerSideProps {
	props: {
		data: number;
	}
}

export const getServerSideProps = async ({req, res}: PageContext): Promise<ServerSideProps | void> => {
	console.log(req, res);
	return {
		props: {
			data: 123,
		}
	}
};

export default Main;

const StyledWrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`;

const SectionWrapper = styled.section`
	display: flex;
`;

const StyledFirstSection = styled.section`
	width: 791px;
	border-right: 1px solid #e5e7e5; 
`;

const StyledSecondSection = styled.section`
	margin: 0 0 0 40px;
`

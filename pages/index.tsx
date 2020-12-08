import Axios from 'axios';
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

export enum Category {
	PLACE,
	CROPS,
}

const Main: NextPage<any> = ({ rankArray, communityRankArray, boardArray }) => {

	return (
		<StyledWrapper>
			<GNB />
			<MainSearch />
			<SectionWrapper>
				<StyledFirstSection>
					<PopularCommunity communityRankArray={communityRankArray} />
					<News />
				</StyledFirstSection>
				<StyledSecondSection>
					<Rank rankArray={rankArray} />
					<NewCommunity />
				</StyledSecondSection>
			</SectionWrapper>
			<PopularCommunityContent boardArray={boardArray} />
			<Footer />
		</StyledWrapper>
	);
};

interface ServerSideProps {
	props: {
		rankArray: any;
		communityRankArray: any;
		boardArray: any;
	}
}

export const getServerSideProps = async (): Promise<ServerSideProps | void> => {
	try {
		const result = await Promise.all([
			Axios.get(`https://umzzar.com/api/v1/ranking`),
			Axios.get(`https://umzzar.com/api/v1/boards/rank`),
			Axios.get(`https://umzzar.com/api/v1/boards`),
		])
		result[0].data.result.sort((a: any, b: any) => {
			return b.count - a.count;
		})
		result[1].data.result.sort((a: any, b: any) => {
			return b.score - a.score;
		})
		console.log(111,result[2].data.result[0].post)
		return {
			props: {
				rankArray: [...result[0].data.result, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				communityRankArray: result[1].data.result,
				boardArray: result[2].data.result,
			}
		}
	} catch (error) {
		console.log(error);
		return {
			props: {
				rankArray: [],
				communityRankArray: [],
				boardArray: [],
			}
		}
	}
};


export default Main;

export const StyledWrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`;

export const SectionWrapper = styled.section`
	display: flex;
	justify-content: space-between;
`;

export const StyledFirstSection = styled.section`
	width: 859px;
	border-right: 1px solid #e5e7e5; 
`;

export const StyledSecondSection = styled.section`
	width: 486px;
	margin: 0 0 0 40px;
`

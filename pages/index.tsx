import Axios from 'axios';
import { NextPage } from 'next';
import React, { useState } from 'react';
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

const Main: NextPage<any> = ({rankArray, communityRankArray}) => {
	const [content] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

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
			<PopularCommunityContent content={content} />
			<Footer />
		</StyledWrapper>
	);
};

interface ServerSideProps {
	props: {
		rankArray: any;
		communityRankArray: any;
	}
}

export const getServerSideProps = async (): Promise<ServerSideProps | void> => {
	try {
		const result = await Promise.all([Axios.get(`http://ec2-52-79-158-171.ap-northeast-2.compute.amazonaws.com:8080/api/v1/ranking`), Axios.get(`http://ec2-52-79-158-171.ap-northeast-2.compute.amazonaws.com:8080/api/v1/boards/rank`)])
		result[0].data.result.sort((a: any, b: any) => {
			return b.count - a.count;
		})
		result[1].data.result.sort((a: any, b: any) => {
			return b.score - a.score;
		})
		return {
			props: {
				rankArray: [...result[0].data.result, 1,2,3,4,5,6,7,8,9,10],
				communityRankArray: result[1].data.result,
			}
		}
	} catch (error) {
		console.log(error);
		return {
			props: {
				rankArray: [],
				communityRankArray: [],
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
`;

export const StyledFirstSection = styled.section`
	width: 791px;
	border-right: 1px solid #e5e7e5; 
`;

export const StyledSecondSection = styled.section`
	margin: 0 0 0 40px;
`

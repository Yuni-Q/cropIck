import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageContext } from './_app';
import styled from 'styled-components';
import GNB from '../components/GNB';

interface Props {
	data: number;
}

const Main: NextPage<Props> = ({ data }) => {
	return (
		<StyledWrapper>
			<GNB />
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
`;
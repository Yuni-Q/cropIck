import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import { PageContext } from './_app';
import styled from 'styled-components';
import GNB from '../components/GNB';
import MainSearch from '../components/MainSearch';

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
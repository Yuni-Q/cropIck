import { render } from '@testing-library/react';
import React from 'react';
import Main from './index';
import { useSelector } from 'react-redux';


jest.mock('react-redux')

describe("Error", () => {
	context('with errorMessage', () => {
		(useSelector as jest.Mock).mockImplementation(() => {
			return {
				me: { name: 'yuni-q' },
				loadUserLoading: false,
				loadUserDone: true,
				loadUserError: false,
			}
		});
		it('render error', () => {
			const { container } = render((
				<Main data={11} />
			))
			expect(container).toHaveTextContent("posts로 이동")
		})
	})
})
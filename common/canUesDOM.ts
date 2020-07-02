const canUseDOM = (): boolean => {
	return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};

export default canUseDOM;

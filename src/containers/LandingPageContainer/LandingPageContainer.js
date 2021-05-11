import React from 'react';

import { StyledLandingPageWrapper } from './LandingPageContainer.css';

const LandingPage = ({ children }) => {
   return <StyledLandingPageWrapper>{children}</StyledLandingPageWrapper>;
};

export default LandingPage;

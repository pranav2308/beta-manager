import React from 'react';
import { MDBContainer } from 'mdbreact';


const MarkowitzDescriptionContent = () => {
	return(

			<MDBContainer style = {{overflowY : 'scroll', position : 'relative', height : '400px', maxWidth : '1000px'}}>
				
				<p className = "text-center text-justify">
					Markowitz model (also known as Markowitz Portfolio Theory) is Nobel Prize winning model developed by Harry Markowitz. 
					This theory argues that portfolio’s return and its risk always go together. 
					The theory entails a methodology of constructing a portfolio for optimizing the expected return based on given level of market risk and likewise, for a given expected return, constructing a portfolio with minimum market risk possible.  
					According to the theory, by adjusting the weights of assets in underlying portfolio, we can construct an ‘efficient frontier’ of optimal portfolios where we can get the portfolio which has least risk for given level of return.
				</p>
				<p className = "text-center text-justify">
					Don’t worry if you don’t understand the complicated mathematical jargon. 
					You just give us the assets you would like to have in your portfolio and we would do the difficult job of computing the optimal weight allocation for you by Markowitz theory.     
				</p>
				<p className="font-weight-light font-italic text-left">
					Instructions for the next page:
					<ul>
						<li>For Markowitz strategy, we require three things from you:
							<ol>
								<li>List of ticker symbols of securities that you are interested in</li>
								<li>Window length for which you want to measure the variance & correlations of the securities(the more the better!)</li>
								<li>Capital available with you.</li>
							</ol> 
						</li>
						<li>
							Please make sure that you input at-least 2 ticker symobls for Markowitz. This is becuase Markowitz allocation computes correlation between underlying assets and it can't compute one if there is only one asset in the portfolio.  
						</li>
						<li>
							We request the users to use ticker symbols as per mentioned on <a href="https://finance.yahoo.com/" class="text-decoration-none">Yahoo finance</a> website. 
							This is because different websites use different ticker symbols for same underlying asset which might get confusing. Also, as we use Yahoo finance APIs for our backend work, this would ensure that we provide you the information for the same asset that you intended in the first place.  
						</li>
						<li>
							Make sure to separate stock symbols with comma. If you put any spaces in-between by mistake, don’t worry! We will take care of that for you.
						</li>
					</ul>
				</p>

			</MDBContainer>

	);

}

export default MarkowitzDescriptionContent;
import React from 'react';
import { MDBContainer } from 'mdbreact';

const IVSDescriptionContent = () => {
	return(
		<div>

			<MDBContainer style = {{overflowY : 'scroll', position : 'relative', height : '400px', maxWidth : '1000px'}}>
				
				<p className = "text-center text-justify">
					Inverse Variance strategy is also known as 'Risk Parity approach' in financial jargon. 
					Variance measures the dispersion in the returns of the securities involved in the portfolio, which correlates to risk of acquiring that particular asset.
				</p>
				<p className = "text-center text-justify">
					In this strategy, each security is weighted in inverse proportion to its variance i.e. lower the variance (or the risk), higher the weightage. 
					This strategy ensures that your resultant portfolio has the minimum variance among all possible weighted averages. 
					This way you get the ‘lowest risk’ portfolio in terms of variance.    
				</p>
				<p className="font-weight-light font-italic text-left">
					Instructions for the next page:
					<ul>
						<li>For Inverse variance strategy, we require three things from you:
							<ol>
								<li>List of ticker symbols of securities that you are interested in</li>
								<li>Window length for which you want to measure the variance of the securities(the more the better!)</li>
								<li>Capital available with you.</li>
							</ol> 
						</li>
						<li>
							We request the users to use ticker symbols as per mentioned on <a href="https://finance.yahoo.com/" class="text-decoration-none">Yahoo finance</a> website. 
							This is because different websites use different ticker symbols for same underlying asset which might get confusing. Also, as we use Yahoo finance APIs for our backend work, this would ensure that we provide you the information for the same asset that you intended in the first place.  
						</li>
						<li>
							Make sure to separate stock symbols with comma. If you put any spaces in between by mistake, don’t worry! We will take care of that for you.
						</li>
					</ul>
				</p>

			</MDBContainer>
		</div>
	);
}

export default IVSDescriptionContent;
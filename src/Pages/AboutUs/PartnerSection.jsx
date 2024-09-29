import React from 'react'

const PartnerSection = () => {
  return (
   <>
   <section className="py-10 bg-gray-100">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-2/3">
					<h1 className="text-2xl md:text-4xl font-bold text-primary">
						Rooted in trustworthiness, knowledge, and commitment, we are your dedicated partner in UAE real estate.
					</h1>
				</div>
				<div className="w-full md:w-1/3 mt-6 md:mt-0">
					<img 
					  src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/arrow-svg.svg" 
					  alt="Arrow" 
					  className="w-9/12 mx-auto"
					/>
				</div>
			</div>
		</div>
		<div className="flex justify-center my-8">
			<img 
			  src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line.svg" 
			  alt="Dashed Line" 
			  className="w-11/12"
			/>
		</div>
	</section>
   </>
  )
}

export default PartnerSection

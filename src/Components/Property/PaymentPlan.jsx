import React from 'react';

const PaymentPlan = () => {

    let paymentPlan= "{\"one\":\"5\",\"two\":\"55\",\"three\":\"40\",\"four\":0}"

  // Parse the JSON string into an object
  const parsedPlan = JSON.parse(paymentPlan);

  // Map each payment stage to a label and get its percentage
  const paymentStages = [
    { key: 'one', label: 'First Installment', percentage: parsedPlan.one },
    { key: 'two', label: 'Under Construction', percentage: parsedPlan.two },
    { key: 'three', label: 'On Handover', percentage: parsedPlan.three },
    { key: 'four', label: 'Post Handover', percentage: parsedPlan.four }
  ];

  return (
    <div className="p-4">
  
      <div className="grid grid-cols-2 gap-4 text-[15px]">
        {paymentStages.map((stage) => (
          <div key={stage.key} className="flex flex-col leading-[20px]">
            <p className='font-bold'>{stage.label} : </p>
            <p> {stage.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlan;

import { jsPDF } from "jspdf";

const content = [
  { name: "Sales Revenue", cost1: 56000.00, cost2: 44000.00 },
  { name: "Service Revenue", cost1: 3200.00, cost2: 2700.00 },
  { name: "Interest Revenue", cost1: 1000.00, cost2: 900.00 },
];

const expenses = [
  {name: "Advertising ", cost1: 500.00, cost2: 740.00},
  {name: "Insurance", cost1: 700.00, cost2: 600.00},
  {name: "Travel", cost1: 1000.00, cost2: 900.00},
  {name: "Wages", cost1: 10000.00, cost2: 7000.00},
]

function ProfitLoss() {
  const doc = new jsPDF();

  //title
  const title = "Sales & Report Statements";
const pageWidth = doc.internal.pageSize.getWidth();
  const fontSizeTitle = 24;
  const textWidthTitle = doc.getStringUnitWidth(title) * fontSizeTitle / doc.internal.scaleFactor;
  const xTitle = (doc.internal.pageSize.getWidth() - textWidthTitle) / 2;
  doc.setFontSize(fontSizeTitle);
  doc.text(title, xTitle, 15, {maxWidth: pageWidth});
 
  //email
  const email = "company@example.com";
  const xEmail = 10; 
  const yEmail = 25; 
  doc.setFontSize(12);
  doc.text(email, xEmail, yEmail);

  //horizontal line
  const lineY = yEmail + 3; 
  doc.setLineWidth(0.2);
  doc.line(xEmail, lineY, doc.internal.pageSize.getWidth() - 10, lineY);

  //date

  const Date = "Date:Monday, April 29, 2024";
  const xDate = 10; 
  const yDate = 35; 
  doc.setFontSize(12);
  doc.text(Date, xDate, yDate);

 //horizontal line
  doc.line(xDate, 38, doc.internal.pageSize.getWidth() - 10, 38);


  const startX1 = 10;
  const centerX = doc.internal.pageSize.getWidth() / 2;
  const startX3 = doc.internal.pageSize.getWidth() - 30;
  const center = (doc.internal.pageSize.getWidth() / 3) /2;

  //order summary
  const orderSummary = "Revenue";
  doc.setTextColor(0); 
  doc.setFontSize(18);
  doc.text(orderSummary, 10, 45);

  const lastYearTitle = "2023";
  doc.setTextColor(0); 
  doc.setFontSize(12);
  doc.text(lastYearTitle, centerX, 45);

  const ThisYear = "2024";
  doc.setTextColor(0); 
  doc.setFontSize(12);
  doc.text(ThisYear, startX3, 45, {maxWidth: center});

  //horizontal line
  doc.line(10, 48, doc.internal.pageSize.getWidth() - 10, 48);


  // Set column widths
  const columnWidth = (doc.internal.pageSize.getWidth()) / 3;
  

  let yPosition = 55; 
  content.forEach(item => {
    doc.setFontSize(12);
    doc.setTextColor(128);
    doc.text(item.name, startX1, yPosition, {maxWidth: centerX }); 
    doc.text(item.cost1.toFixed(2), centerX, yPosition , {maxWidth: centerX });
    doc.text(item.cost2.toFixed(2), startX3, yPosition , {maxWidth: centerX }); 

    yPosition += 8; 

    if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
      doc.addPage();
      yPosition = 15; 
    }
  });

  //calculate the total cost
  function calculateTotals(content) {
    let totalCost1 = 0;
    let totalCost2 = 0;
    content.forEach(item => {
      totalCost1 += item.cost1;
      totalCost2 += item.cost2;
    });
    return { totalCost1, totalCost2 };
  }
  const totals = calculateTotals(content);

  //display the total cost

  // yPosition; 
  doc.setTextColor(0);
  doc.text("Total Revenue", startX1, yPosition);
  doc.setTextColor(0);
  doc.text(totals.totalCost1.toFixed(2), centerX, yPosition); 
  doc.setTextColor(0);
  doc.text(totals.totalCost2.toFixed(2), startX3, yPosition);

  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  //menu items

  yPosition += 10;
  const menuItemsTitle = "Expenses"
  doc.setFontSize(18);
  doc.setTextColor(0);
  doc.text(menuItemsTitle,10, yPosition);
  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  yPosition += 3;
  doc.line(10, yPosition, doc.internal.pageSize.getWidth() - 10, yPosition);

  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  //menu items content
  yPosition += 6;
  expenses.forEach(item => {
    doc.setFontSize(12);
    doc.setTextColor(128);
    doc.text(item.name, startX1, yPosition); 
    doc.text(item.cost1.toFixed(2), centerX, yPosition);
    doc.text(item.cost2.toFixed(2), startX3, yPosition); 

    yPosition += 8; 

    if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
      doc.addPage();
      yPosition = 15; 
    }
  });

  //expenses total
  const expensesTotals = calculateTotals(expenses);

  //display the total cost

  // yPosition; 
  doc.setTextColor(0);
  doc.text("Total Expenses", startX1, yPosition);
  doc.setTextColor(0);
  doc.text(expensesTotals.totalCost1.toFixed(2), centerX, yPosition); 
  doc.setTextColor(0);
  doc.text(expensesTotals.totalCost2.toFixed(2), startX3, yPosition);

  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  //Tax summary
//   yPosition += 10;
//   doc.setFontSize(18);
//   doc.setTextColor(0);
//   doc.text("Tax Summary",10, yPosition);

//   if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
//     doc.addPage();
//     yPosition = 15; 
//   }

  yPosition += 3;
  doc.line(10, yPosition, doc.internal.pageSize.getWidth() - 10, yPosition);

  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  const incomeTax = [
    {name: "Income before tax", cost1: 28820.00 , cost2: 218921.00},
    {name: "Income tax expense", cost1: 1300.00, cost2: 1100.00},
  ]

  yPosition += 6;
  incomeTax.forEach(item => {
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(item.name, startX1, yPosition); 
    doc.text(item.cost1.toFixed(2), centerX, yPosition); 
    doc.text(item.cost2.toFixed(2), startX3, yPosition); 

    yPosition += 8; 

    if (yPosition >= doc.internal.pageSize.getHeight() - 20) { // Leave some space for margin
      doc.addPage();
      yPosition = 15; 
    }
  });

//   yPosition += 3;
//   doc.setFontSize(18);
//   doc.setTextColor(0);
//   doc.text("Net Profit ",10, yPosition);

//   if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
//     doc.addPage();
//     yPosition = 15; 
//   }


  doc.line(10, yPosition, doc.internal.pageSize.getWidth() - 10, yPosition);

  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  //payment summary

  const paymentSummaryDetails = [
    {name: "Net Profit(Loss)", cost1: 27520.00, cost2: 20555.00},
  ]

  yPosition += 6;
  paymentSummaryDetails.forEach(payment => {
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(payment.name, startX1, yPosition); 
    doc.text(payment.cost1.toFixed(2), centerX, yPosition);
    doc.text(payment.cost2.toFixed(2), startX3, yPosition); 

    yPosition += 8; 

    if (yPosition >= doc.internal.pageSize.getHeight() - 20) { // Leave some space for margin
      doc.addPage();
      yPosition = 15; 
    }
  });

//   function calculatePaymentSummaryTotals(paymentSummaryDetails) {
//     let totalTransactions = 0;
//     let totalAmount = 0;
//     paymentSummaryDetails.forEach(payment => {
//       totalTransactions += payment.transations;
//       totalAmount += payment.amount;
//     });
//     return { totalAmount, totalTransactions };
//   }
//   const paymentTotal = calculatePaymentSummaryTotals(paymentSummaryDetails);

//   doc.setTextColor(0);
//   doc.text("Total", startX1, yPosition);
//   doc.setTextColor(0);
//   doc.text(paymentTotal.totalTransactions.toString(), centerX, yPosition); 
//   doc.setTextColor(0);
//   doc.text(paymentTotal.totalAmount.toFixed(2), startX3, yPosition);

//   if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
//     doc.addPage();
//     yPosition = 15; 
//   }

//   //User Wise Sales
//   yPosition += 10;
//   doc.setFontSize(18);
//   doc.setTextColor(0);
//   doc.text("User Wise Sales",10, yPosition);

//   if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
//     doc.addPage();
//     yPosition = 15; 
//   }

//   yPosition += 3;
//   doc.line(10, yPosition, doc.internal.pageSize.getWidth() - 10, yPosition);

//   if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
//     doc.addPage();
//     yPosition = 15; 
//   }

//   const userWiseSalesDetails = [
//     {name: "Abigail Ukumu", quantity: paymentTotal.totalTransactions, amount: paymentTotal.totalAmount},
//   ]

//   yPosition += 6;
//   userWiseSalesDetails.forEach(detail => {
//     doc.setFontSize(12);
//     doc.setTextColor(128);
//     doc.text(detail.name, startX1, yPosition); 
//     doc.text(detail.quantity.toString(), centerX, yPosition);
//     doc.text(detail.amount.toFixed(2), startX3, yPosition); 

//     yPosition += 8; 

//     if (yPosition >= doc.internal.pageSize.getHeight() - 20) { // Leave some space for margin
//       doc.addPage();
//       yPosition = 15; 
//     }
//   });

//   //total user User Wise Sales
//   doc.setTextColor(0);
//   doc.text("Total", startX1, yPosition);
//   doc.setTextColor(0);
//   doc.text(paymentTotal.totalTransactions.toString(), centerX, yPosition); 
//   doc.setTextColor(0);
//   doc.text(paymentTotal.totalAmount.toFixed(2), startX3, yPosition);

//   if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
//     doc.addPage();
//     yPosition = 15; 
//   }
  

  const handleClick = () => {
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank", "profit_loss.pdf");
  };

  return (
    <div className="App">
      <button
      onClick={() => handleClick()}
      >
        Dowload Report
      </button>
    </div>
  );
}

export default ProfitLoss;
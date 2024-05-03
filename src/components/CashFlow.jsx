import { jsPDF } from "jspdf";

function CashFlow() {
  const doc = new jsPDF();

  //title
  const title = "Cash Flow Operations";
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


//   const startX1 = 10;
//   const centerX = doc.internal.pageSize.getWidth() / 2;
//   const startX3 = doc.internal.pageSize.getWidth() - 30;
//   const center = (doc.internal.pageSize.getWidth() / 3) /2;

  //table labor
  let yposition = 45;
  const tableY =  yposition;

  const data = [
    { category: "Net Earnings", amount: 2000000},
    { category: "Deprections", amount: 10000},
    { category: "Decrease in Accounts Receivable", amount: 15000},
    { category: "Increase in Accounts Payable", amount: 15000},
    { category: "Increase in Taxes Payable", amount: 2000},
    { category: "Increase in Inventory", amount: 30000},
    { category: "Equipments", amount: 500000},
    { category: "Notes Payable", amount: 10000},
  ];


  let totalAmount = 0;
  data.forEach(entry => {
    totalAmount += entry.amount;
  });

  const totalRow = {
    category: "Total",
    amount: totalAmount.toFixed(2)
  };
  
  data.push(totalRow);

  data.forEach(entry => {
    if (entry.category === "Total") {
      entry.category = { content: "Total", styles: { textColor: "#1687A7", fontStyle: "bold", fontSize: 13  } };
    }
  });

  doc.autoTable({
    startY: tableY,
    columns: [
      { header: "Category", dataKey: "category" },
      { header: "", dataKey: "amount" },

    ],
    body: data,
    theme: "striped",
    styles: {
      cellPadding: 3,
      fontSize: 10,
    },
    headStyles: {
      fillColor: "#1687A7", 
      textColor: "#ffffff",
      fontStyle: "bold", 
      lineColor: "#28a745" ,
      fontSize: 13 
    },
    bodyStyles: {
      fillColor: "#ffffff", 
      textColor: "#000000", 
      lineColor: "#28a745" 
    },
    columnStyles: {
      0: { cellWidth: 'wrap' }, 
    },
    margin: { top:  yposition },
    rowHeight: 20,
    createdHeaderCell: (cell, data) => {
        if (data.column.dataKey === "category" && cell.raw === "Total") {
          cell.styles.textColor = "#007bff"; 
        }
      }
  });


  const handleClick = () => {
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank", "cash_flow_report.pdf");
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

export default CashFlow;
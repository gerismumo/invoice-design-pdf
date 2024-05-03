import { jsPDF } from "jspdf";

function CustomerReport() {
  const doc = new jsPDF();

  //title
  const title = "Customer Sales Report";
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
    { sr: "rfghj56789gti",customer_name: "Gerald MUmo", product:"coco", qty: 67, received_amount: 200, amount_receivable:100},
    { sr: "rfghj56789gti",customer_name: "Gerald MUmo", product:"coco", qty: 67, received_amount: 200, amount_receivable:100},
    { sr: "rfghj56789gti",customer_name: "Gerald MUmo", product:"coco", qty: 67, received_amount: 200, amount_receivable:100},
    { sr: "rfghj56789gti",customer_name: "Gerald MUmo", product:"coco", qty: 67, received_amount: 200, amount_receivable:100},
    { sr: "rfghj56789gti",customer_name: "Gerald MUmo", product:"coco", qty: 67, received_amount: 200, amount_receivable:100},
    { sr: "rfghj56789gti",customer_name: "Gerald MUmo", product:"coco", qty: 67, received_amount: 200, amount_receivable:100},
    { sr: "rfghj56789gti",customer_name: "Gerald MUmo", product:"coco", qty: 67, received_amount: 200, amount_receivable:100},
    { sr: "rfghj56789gti",customer_name: "Gerald MUmo", product:"coco", qty: 67, received_amount: 200, amount_receivable:100},
    { sr: "rfghj56789gti",customer_name: "Gerald MUmo", product:"coco", qty: 67, received_amount: 200, amount_receivable:100},
  ];


  let totalReceivedAmount = 0;
  let totalReceivableAmount = 0;
  data.forEach(entry => {
    totalReceivedAmount += entry.received_amount;
    totalReceivableAmount += entry.amount_receivable;
  });

  const totalRow = {
    sr: "Total",
    received_amount: totalReceivedAmount.toFixed(2),
    amount_receivable: totalReceivableAmount.toFixed(2)
  };
  
  data.push(totalRow);

  data.forEach(entry => {
    if (entry.sr === "Total") {
      entry.sr = { content: "Total", styles: { textColor: "#1687A7", fontStyle: "bold", fontSize: 13  } };
    }
  });

  doc.autoTable({
    startY: tableY,
    columns: [
      { header: "Sr. No", dataKey: "sr" },
      { header: "Customer Name", dataKey: "customer_name" },
      { header: "Product/Item", dataKey: "product" },
      { header: "QTY/Invo.", dataKey: "qty" },
      { header: "Received Amount", dataKey: "received_amount" },
      { header: "Amount Receivable", dataKey: "amount_receivable" },

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
    margin: { top: 15 },
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

export default CustomerReport;
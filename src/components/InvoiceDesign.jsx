import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

function InvoiceDesign() {
  const doc = new jsPDF();
  
  const headerHeight = 40;
    const title = "Purchase Order";
    const word1 = ["Billed by", "Foobar Labs","46, Raghuveer Dham Society", "Surat, Gujarat, India - 3942"];


    // Draw header background
    doc.setFillColor("#C6EBC5");
    doc.rect(5, 0, (doc.internal.pageSize.getWidth()-10), headerHeight, "F");
    const headerColumnWidth = (doc.internal.pageSize.getWidth() - 20) /3;

    // Draw title and words 
    doc.setTextColor("#41B06E");
    doc.setFontSize(22);
    const titleWidth = doc.getStringUnitWidth(title) * 18 / doc.internal.scaleFactor;
    doc.text(title, 20, headerHeight / 2, {maxWidth: headerColumnWidth});

    const wordStartX = 50 + titleWidth;
    //
    const columnX = wordStartX;
    const columnFontSize = 12;
    const columnColor = "#808080"; 
  
    doc.setFontSize(columnFontSize);
    doc.setTextColor(columnColor);

    word1.forEach((subword, index) => {
      const offsetY = index * (7);
      if (index === 1) {
        doc.setTextColor("#000000"); 
      } else {
        doc.setTextColor("#808080"); 
      }
      doc.text(subword, columnX, 10 + offsetY, {maxWidth: headerColumnWidth});
    });

    
    const logoWidth = 30;
    const logoHeight = 10;
    const logoX = doc.internal.pageSize.getWidth() - logoWidth - 20;
    const logoY = headerHeight / 2 - logoHeight / 2;
  
   //logo
    doc.addImage('../images/icon.png', "PNG", logoX, logoY, logoWidth, logoHeight);

    //invoice data

    // Draw additional content
  const contentHeight = 60; 
  const contentWidth = (doc.internal.pageSize.getWidth() - 10) / 3; 

  // Column 1: Order By
  const col1X = 10;
  doc.setFillColor("#E6F7E9");
  const col1TextWidth = doc.getTextWidth("Order By"); 
  doc.rect(col1X + 3 , headerHeight + 10, col1TextWidth + 5, 10, "F"); 
  doc.setTextColor(128);
  doc.setFontSize(11); 
  doc.text("Order By", col1X + 5, headerHeight + 16, {maxWidth: contentWidth});
  doc.setFontSize(18); 
  doc.setTextColor("#000000");
  doc.text("Studio Den", col1X + 5, headerHeight + 28, {maxWidth: contentWidth})
  doc.setTextColor(128); 
  doc.setFontSize(10); 
  const addressText = "305, 3rd Floor Orion mall, Bengaluru \n karnataka, India - 560055";
  doc.text(addressText, col1X + 5, headerHeight + 35, {maxWidth: contentWidth});

  
  doc.setTextColor("#000000"); 
  doc.text("GST", col1X + 5, headerHeight + 48); 
  doc.setTextColor("#808080"); 
  doc.text(" 4567894567890", col1X + 5 + doc.getTextWidth("GST"), headerHeight + 48, {maxWidth: contentWidth}); 

  doc.setTextColor("#000000"); 
  doc.text("PAN", col1X + 5, headerHeight + 55); 
  doc.setTextColor("#808080"); 
  doc.text(" 4567894567890", col1X + 5 + doc.getTextWidth("GST"), headerHeight + 55, {maxWidth: contentWidth}); 


  // Column 2: Ordered To
  const col2X = col1X + contentWidth;
  doc.setFillColor("#E6F7E9");
  const col2TextWidth = doc.getTextWidth("Ordered To"); 
  doc.rect(col2X + 3 , headerHeight + 10, col2TextWidth + 5, 10, "F"); 
  doc.setTextColor(128);
  doc.setFontSize(11); 
  doc.text("Ordered To", col2X + 5, headerHeight + 16, {maxWidth: contentWidth}); 
  // Ordered To content for column 2
  doc.setTextColor("#000000"); 
  doc.text("Invoice #", col2X + 5, headerHeight + 25); 
  doc.setTextColor("#808080"); 
  doc.text("003", col2X + 7 + doc.getTextWidth("Invoice #"), headerHeight + 25, {maxWidth: contentWidth}); 

  doc.setTextColor("#000000"); 
  doc.text("Invoice Date", col2X + 5, headerHeight + 32); 
  doc.setTextColor("#808080"); 
  doc.text("FEB 19, 2020", col2X + 7 + doc.getTextWidth("Invoice Date"), headerHeight + 32, {maxWidth: contentWidth}); 

  doc.setTextColor("#000000"); 
  doc.text("Due Date", col2X + 5, headerHeight + 39); 
  doc.setTextColor("#808080"); 
  doc.text("FEB 19, 2020", col2X + 7 + doc.getTextWidth("Due Date"), headerHeight + 39, {maxWidth: contentWidth}); 

  // Column 3: Payment Record
  const col3X = col2X + contentWidth;
  doc.setFillColor("#E6F7E9");
  const col3TextWidth = doc.getTextWidth("Payment Record"); 
  doc.rect(col3X + 3 , headerHeight + 10, col3TextWidth + 5, 10, "F"); 
  doc.setTextColor(128);
  doc.setFontSize(11);  
  doc.text("Payment Record", col3X + 5, headerHeight + 16, {maxWidth: contentWidth}); 
 
  doc.setTextColor("#000000"); 
  doc.text("Paid Amount", col3X + 5, headerHeight + 25); 
  doc.setTextColor("#808080"); 
  doc.text("₹0", col3X + 7 + doc.getTextWidth("Paid Amount"), headerHeight + 25, {maxWidth: contentWidth}); 

  doc.setTextColor("#000000"); 
  doc.text("Due Amount", col3X + 5, headerHeight + 32); 
  doc.setTextColor("#41B06E");
  doc.text("36,000", col3X + 7 + doc.getTextWidth("Due Amount"), headerHeight + 32, {maxWidth: contentWidth}); 

  //item table
 

  const tableY = headerHeight + 60;
  const data = [
    ["Item #/Item description", "HSN", "Qty", "GST", "Taxable Amount", "SGST", "CGST", "Amount"],
    ["Basic Web Development","02", "10", "9%", "10,000.00", "900", "900", "11,800.00"],
    ["Logo Design", "06", "1", "9%", "10,000", "900", "900", "11,800.00"],
    ["Web Design", "06", "1", "9%", "10,000", "900", "900", "11,800.00"],
    ["Full Stack Web development", "06", "1", "9%", "10,000", "900", "900", "11,800.00"]
  ];
  
  doc.autoTable({
    startY: tableY,
    head: [data[0]],
    body: data.slice(1),
    theme: "striped",
    styles: {
      cellPadding: 1,
      fontSize: 10,
    },
    headStyles: {
      fillColor: "#28a745", 
      textColor: "#ffffff", 
      lineColor: "#28a745" 
    },
    bodyStyles: {
      fillColor: "#ffffff", 
      textColor: "#000000", 
      lineColor: "#28a745" 
    },
    columnStyles: {
      0: { cellWidth: 'wrap' }, 
    },
    margin: { top: headerHeight + 50 },
    rowHeight: 20
  });

  //

  const twoColumnContent = (doc.internal.pageSize.getWidth() - 10) / 2;
  
  const col21X = 10;

  const columnWidth = (doc.internal.pageSize.getWidth() - 30) / 2; 
  //two way column
  let yposition = headerHeight + 110;
  doc.setTextColor("#000000"); 
  doc.setFontSize(11);
  doc.text("Country Of Supply", col1X + 5, yposition); 
  doc.setTextColor("#808080"); 
  doc.setFontSize(11);
  doc.text("India", col1X + 8 + doc.getTextWidth("Country Of Supply"), yposition , { maxWidth: columnWidth }); 

  doc.setFontSize(11);
  doc.setTextColor("#000000"); 
  doc.text("Place Of Supply", col1X + 5, yposition + 6); 
  doc.setTextColor("#808080"); 
  doc.setFontSize(11);
  doc.text("Gujarat", col1X + 8 + doc.getTextWidth("Place Of Supply"), yposition + 6 , { maxWidth: columnWidth }); 

  doc.setFontSize(11);
  doc.setTextColor("#000000");
  doc.text("Invoice total in words", col1X + 5, yposition + 20 , { maxWidth: columnWidth });

  doc.setFontSize(12);
  doc.setTextColor("#41B06E");
  doc.text("Forty Two Thousand Four Hunderd and Eighty", col1X + 5, yposition + 27 , { maxWidth: columnWidth });

  
  const costs = [
    {name: "Sub Total", amount:"40,000"},
    {name: "Discount(10%)", amount:"40,000"},
    {name: "Taxable Amount", amount:"36,000"},
    {name: "SGST", amount:"3240"},
    {name: "CGST", amount:"36,000"}
  ]
  
  costs.forEach(cost => {
    doc.setFontSize(11)
    doc.setTextColor("#000000");
    doc.text(cost.name, twoColumnContent + 35, yposition);
    doc.text(cost.amount, twoColumnContent + 75, yposition, { maxWidth: columnWidth }); 
    yposition += 8; 
  })

  doc.setLineWidth(0.2);
  doc.line(twoColumnContent + 35, yposition, doc.internal.pageSize.getWidth() - 20, yposition);

  doc.text("Total Due", twoColumnContent + 35, yposition + 10);
  doc.setTextColor("#41B06E");
  doc.text("36,000", twoColumnContent + 75, yposition + 10, { maxWidth: columnWidth } ); 

  //footer design
  const footerHeight = 70;
  const footerY = doc.internal.pageSize.getHeight() - footerHeight;
  const drawFooter = () => {
    const footerBackgroundColor = "#C6EBC5";
    doc.setFillColor(footerBackgroundColor);
    doc.rect(5, footerY, doc.internal.pageSize.getWidth() - 10, footerHeight, "F");

    //columns wdth
    const column1X = 10;
    const column1Title = "Terms and Conditions";
    const column1Text = "1. Please pay within 15 days from the data of invoice, overdue interest @14% will be charged on delayed payemnets.";
    
    const column1Text2 = "2. Please quote invoice number when remitting funds."
    doc.setTextColor("#000000"); 
    doc.setFontSize(10);
    doc.text(column1Title, column1X, footerY + 18);
    doc.setFontSize(8);
    doc.setTextColor("#808080"); 
    doc.text(column1Text, column1X, footerY + 25, { maxWidth: columnWidth });
    doc.text(column1Text2, column1X, footerY + 35, { maxWidth: columnWidth });
  
    // Second Column
    const column2X = column1X + columnWidth + 10;
    const column2Title = "Additional Notes";
    const column2Text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.";
    const column2Text2 = "For any enquiries, email us on foobariabs@gmail.com or call us on +91 9876543210"
    doc.setTextColor("#000000");
    doc.setFontSize(10);
    doc.text(column2Title, column2X, footerY + 18);
    doc.setFontSize(8);
    doc.setTextColor("#808080"); 
    doc.text(column2Text, column2X, footerY + 26, { maxWidth: columnWidth });
    doc.setTextColor("#000000");
    doc.text(column2Text2, column2X, footerY + 43, { maxWidth: columnWidth });   

  }
 
  drawFooter();



  const handleClick = () => {
    doc.save("invoice.pdf");
  };
  return (
    <div className="App">
      <button
      onClick={() => handleClick()}
      >
        Download
      </button>
    </div>
  );
}

export default InvoiceDesign;

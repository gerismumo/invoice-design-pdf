import { jsPDF } from "jspdf";

function App() {
  const doc = new jsPDF();
  
  const headerHeight = 40;
    const title = "Purchase Order";
    const word1 = ["Billed by", "Foobar Labs","46, Raghuveer Dham Society", "Surat, Gujarat, India - 3942"];


    // Draw header background
    doc.setFillColor("#C6EBC5");
    doc.rect(5, 0, (doc.internal.pageSize.getWidth()-10), headerHeight, "F");

    // Draw title and words 
    doc.setTextColor("#41B06E");
    doc.setFontSize(22);
    const titleWidth = doc.getStringUnitWidth(title) * 18 / doc.internal.scaleFactor;
    doc.text(title, 20, headerHeight / 2);

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
      doc.text(subword, columnX, 10 + offsetY);
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
  doc.text("Order By", col1X + 5, headerHeight + 16);
  doc.setFontSize(18); 
  doc.setTextColor("#000000");
  doc.text("Studio Den", col1X + 5, headerHeight + 28)
  doc.setTextColor(128); 
  doc.setFontSize(10); 
  const addressText = "305, 3rd Floor Orion mall, Bengaluru \n karnataka, India - 560055";
  doc.text(addressText, col1X + 5, headerHeight + 35);

  
  doc.setTextColor("#000000"); 
  doc.text("GST", col1X + 5, headerHeight + 48); 
  doc.setTextColor("#808080"); 
  doc.text(" 4567894567890", col1X + 5 + doc.getTextWidth("GST"), headerHeight + 48); 

  doc.setTextColor("#000000"); 
  doc.text("PAN", col1X + 5, headerHeight + 55); 
  doc.setTextColor("#808080"); 
  doc.text(" 4567894567890", col1X + 5 + doc.getTextWidth("GST"), headerHeight + 55); 


  // Column 2: Ordered To
  const col2X = col1X + contentWidth; // Starting X position of column 2
  doc.setFillColor("#E6F7E9");
  const col2TextWidth = doc.getTextWidth("Ordered To"); 
  doc.rect(col2X + 3 , headerHeight + 10, col2TextWidth + 5, 10, "F"); 
  doc.setTextColor(128);
  doc.setFontSize(11); 
  doc.text("Ordered To", col2X + 5, headerHeight + 16); 
  // Ordered To content for column 2
  doc.setTextColor("#000000"); 
  doc.text("Invoice #", col2X + 5, headerHeight + 25); 
  doc.setTextColor("#808080"); 
  doc.text("003", col2X + 7 + doc.getTextWidth("Invoice #"), headerHeight + 25); 

  doc.setTextColor("#000000"); 
  doc.text("Invoice Date", col2X + 5, headerHeight + 32); 
  doc.setTextColor("#808080"); 
  doc.text("FEB 19, 2020", col2X + 7 + doc.getTextWidth("Invoice Date"), headerHeight + 32); 

  doc.setTextColor("#000000"); 
  doc.text("Due Date", col2X + 5, headerHeight + 39); 
  doc.setTextColor("#808080"); 
  doc.text("FEB 19, 2020", col2X + 7 + doc.getTextWidth("Due Date"), headerHeight + 39); 

  // Column 3: Payment Record
  const col3X = col2X + contentWidth;
  doc.setFillColor("#E6F7E9");
  const col3TextWidth = doc.getTextWidth("Payment Record"); 
  doc.rect(col2X + 3 , headerHeight + 10, col3TextWidth + 5, 10, "F"); 
  doc.setTextColor(128);
  doc.setFontSize(11);  
  doc.text("Payment Record", col3X + 5, headerHeight + 15); 
  // Payment Record content for column 3
  const paidAmount = "Paid Amount: $200";
  doc.text(paidAmount, col3X + 5, headerHeight + 25);

  const handleClick = () => {
    doc.save("foobar.pdf");
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

export default App;

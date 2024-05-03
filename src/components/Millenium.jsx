import React from 'react'
import { jsPDF } from "jspdf";

const Millenium = () => {
    const doc = new jsPDF()

   
    const pageWidth = doc.internal.pageSize.getWidth() - 30;
    const centerX = (doc.internal.pageSize.getWidth() - 10 )  / 2;
    let yPosition = 15
    let xPosition = 10;

    const title = "MILLENNIUM CINEMAS LIMITED";
    const fontSizeTitle = 24;
    const textWidthTitle = doc.getStringUnitWidth(title) * fontSizeTitle / doc.internal.scaleFactor;
    const xTitle = (doc.internal.pageSize.getWidth() - textWidthTitle) / 2;
    doc.setFontSize(fontSizeTitle);
    doc.text(title, xTitle, yPosition, {maxWidth: pageWidth});

    yPosition +=3
    doc.setLineWidth(0.1);
    doc.line(xPosition, yPosition , doc.internal.pageSize.getWidth() - 10, yPosition);


    yPosition += 6
    doc.setFontSize(11)
    doc.setTextColor("#000000"); 
    doc.text("PIN No:", xPosition, yPosition); 
    doc.setTextColor("#000000"); 
    doc.text("P051130704D", xPosition + 5 + doc.getTextWidth("PIN No:"), yPosition, {maxWidth: centerX}); 

    doc.setFontSize(11)
    doc.setTextColor("#000000"); 
    doc.text("VAT No:", xPosition + centerX + 30, yPosition); 
    doc.setTextColor("#000000"); 
    doc.text("0114437J", xPosition + centerX + 30+ 5 + doc.getTextWidth("VAT No:"), yPosition, {maxWidth: centerX}); 

    yPosition += 8
    const addressText = "P.O BOX 82675 - 80100 MOMBASA. TEL: 041-470001/2, FAX:041-47005 email: info@nyalicinemax.com";
    doc.setFontSize(11);
    doc.text(addressText, xPosition + 3, yPosition, {maxWidth: pageWidth});


    yPosition += 20
    const title2 = "LOCAL PURCHASE ORDER"
    const fontSizeTitle2 = 18;
    doc.setFontSize(fontSizeTitle2);
    const textWidthTitle2 = doc.getStringUnitWidth(title) * fontSizeTitle2 / doc.internal.scaleFactor;
    const xTitle2 = (doc.internal.pageSize.getWidth() - textWidthTitle2) / 2;
    const padding = 5;

    const rectX = xTitle2 - padding;
    const rectY = yPosition - (fontSizeTitle2 /2) - 3;
    const rectWidth = pageWidth;
    const rectHeight = fontSizeTitle2  + padding;
    doc.rect(12, rectY, rectWidth, rectHeight);

    doc.setFontSize(fontSizeTitle2);
    doc.text(title2, xTitle2, yPosition, {maxWidth: pageWidth});


    yPosition += 20
    doc.setFontSize(12)
    doc.setTextColor("#000000"); 
    doc.text("SUPPLIER", xPosition, yPosition);

    if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
        doc.addPage();
        yPosition = 15; 
      }
      
    yPosition += 8
    doc.setFontSize(11)
    doc.setTextColor("#000000"); 
    doc.text("Supplier Code:", xPosition, yPosition); 
    doc.setTextColor("#000000"); 
    doc.text("HH17", xPosition + 5 + doc.getTextWidth("Supplier Code"), yPosition, {maxWidth: centerX}); 

    doc.setFontSize(11)
    doc.setTextColor("#000000"); 
    doc.text("Date:", xPosition + centerX + 30, yPosition); 
    doc.setTextColor("#000000"); 
    doc.text("22/04/2024", xPosition + centerX + 30+ 5 + doc.getTextWidth("Date:"), yPosition, {maxWidth: centerX}); 

    if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
        doc.addPage();
        yPosition = 15; 
      }

    yPosition += 6
    doc.setFontSize(11)
    doc.setTextColor("#000000"); 
    doc.text("Name", xPosition, yPosition); 
    doc.setTextColor("#000000"); 
    doc.text("Hasbah Kenya Ltd", xPosition + 5 + doc.getTextWidth("Name"), yPosition, {maxWidth: centerX});

   
    doc.setFontSize(11)
    doc.setTextColor("#000000"); 
    doc.text("LPO No:", xPosition + centerX + 30, yPosition); 
    doc.setTextColor("#000000"); 
    doc.text("2014721", xPosition + centerX + 30+ 5 + doc.getTextWidth("LPO No:"), yPosition, {maxWidth: centerX}); 
    
    if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
        doc.addPage();
        yPosition = 15; 
      }

    yPosition += 6
    doc.setFontSize(11)
    doc.setTextColor("#000000"); 
    doc.text("Address", xPosition, yPosition); 
    doc.setTextColor("#000000"); 
    doc.text("", xPosition + 5 + doc.getTextWidth("Address"), yPosition, {maxWidth: centerX}); 

    if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
        doc.addPage();
        yPosition = 15; 
      }

    const items = [
        {item: "CB5001", description: "Nutella 750gm", qty: "3", unit: "JAR", unit_price: "1, 639.39", vat_code:"16", amount:"4, 918.17"},
        {item: "CB5001", description: "Nutella 750gm", qty: "3", unit: "JAR", unit_price: "1, 639.39", vat_code:"16", amount:"4, 918.17"},
        {item: "CB5001", description: "Nutella 750gm", qty: "3", unit: "JAR", unit_price: "1, 639.39", vat_code:"16", amount:"4, 918.17"},
        {item: "CB5001", description: "Nutella 750gm", qty: "3", unit: "JAR", unit_price: "1, 639.39", vat_code:"16", amount:"4, 918.17"},
        {item: "CB5001", description: "Nutella 750gm", qty: "3", unit: "JAR", unit_price: "1, 639.39", vat_code:"16", amount:"4, 918.17"},
        {item: "CB5001", description: "Nutella 750gm", qty: "3", unit: "JAR", unit_price: "1, 639.39", vat_code:"16", amount:"4, 918.17"},
    ]


  const totalRow = [
    {
    item: "VAT",
    amount: "1,644.30"
    },
    {
    item: "TOTAL AMT",
    amount: "11,921.20"
    }
]

totalRow.map((row) => (
    items.push(row)
))
  
  

//   items.forEach(entry => {
//     if (entry.item === "TOTAL AMT" && entry.item === "VAT" ) {
//       entry.item = { content: "TOTAL AMT", styles: { textColor: "#1687A7", fontStyle: "bold", fontSize: 13  } };
//       entry.item = { content: "VAT", styles: { textColor: "#1687A7", fontStyle: "bold", fontSize: 13  } };
//     }
//   });
yPosition += 20
  doc.autoTable({
    startY: yPosition ,
    columns: [
      { header: "Item", dataKey: "item" },
      { header: "Description", dataKey: "description" },
      { header: "QTY", dataKey: "qty" },
      { header: "Unit", dataKey: "unit" },
      { header: "Unit Price", dataKey: "unit_price" },
      { header: "Vat Code", dataKey: "vat_code" },
      { header: "Amount", dataKey: "amount" },
    ],
    body: items,
    theme: "striped",
    styles: {
      cellPadding: 3,
      fontSize: 10,
    },
    headStyles: {
      fillColor: "#ffffff", 
      textColor: "#000000",
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
  });

  yPosition = doc.autoTable.previous.finalY + 10;

//   yPosition += 10;
  doc.setFontSize(13)
  doc.setTextColor("#000000");
  doc.text("IMPORTANT NOTE:", xPosition, yPosition)

  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  yPosition += 8
  const noteText1="LPO Valid only if it is signed by authorised signatory & Rubber Stamped"
  const noteText2 = "Please confirm all orders above Kshs 50, 000 by telephoning Mr Shitul Sachania"
  const noteText3 = "Please note this LPO number on your invoice"

  doc.setFontSize(11)
  doc.setTextColor("#000000");
  doc.text(noteText1, xPosition, yPosition)

  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  yPosition +=6;
  doc.setFontSize(11)
  doc.setTextColor("#000000");
  doc.text(noteText2, xPosition, yPosition)

  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  yPosition +=6;
  doc.setFontSize(11)
  doc.setTextColor("#000000");
  doc.text(noteText3, xPosition, yPosition)

  if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

  //three columns
  yPosition += 25
  const columnsWidth = (doc.internal.pageSize.getWidth() - 10) / 3;
const lineHeight = 5; 


doc.line(xPosition, yPosition, columnsWidth - 10, yPosition); 
doc.text("Name", columnsWidth / 2, yPosition + lineHeight, { align: "center" });

doc.line(columnsWidth + 10, yPosition, 2 * columnsWidth - 10, yPosition);
doc.text("Sign", columnsWidth + columnsWidth / 2, yPosition + lineHeight, { align: "center" });

doc.line(2 * columnsWidth + 10, yPosition, 3* columnsWidth - 10, yPosition); 
doc.text("Stamp", 2 * columnsWidth + columnsWidth / 2, yPosition + lineHeight, { align: "center" });
if (yPosition >= doc.internal.pageSize.getHeight() - 20) { 
    doc.addPage();
    yPosition = 15; 
  }

    const handleClick = () => {
        const pdfBlob = doc.output("blob");
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, "_blank", "report.pdf");
      };

  return (
    <div className="App">
      <button
      onClick={() => handleClick()}
      >
        Download Millenium
      </button>
    </div>
  )
}

export default Millenium
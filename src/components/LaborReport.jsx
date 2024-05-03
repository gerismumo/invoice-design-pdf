import { jsPDF } from "jspdf";

const content = [
  { name: "Cash", cost1: 56000.00, cost2: 44000.00 },
  { name: "Accounts Receivable", cost1: 3200.00, cost2: 2700.00 },
  { name: "Prepaid expenses", cost1: 1000.00, cost2: 900.00 },
  { name: "Inventory", cost1: 1000.00, cost2: 900.00 },
  { name: "Propert & Equipment", cost1: 1000.00, cost2: 900.00 },
];

const expenses = [
  {name: "Current liabilities ", cost1: 500.00, cost2: 740.00},
  {name: "Accounts payable", cost1: 700.00, cost2: 600.00},
  {name: "Accrued expenses", cost1: 1000.00, cost2: 900.00},
  {name: "Unearned revenue", cost1: 10000.00, cost2: 7000.00},
]

function LaborReport() {
  const doc = new jsPDF();

  //title
  const title = "Labor Report";
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

  //table labor
  let yposition = 45;
  const tableY =  yposition;

  const data = [
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Gerald", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Regular", location: "Nyali", department: "Tech team", name: "Juma", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Gerald", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Grace", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Gerald", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "David", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Gerald", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Gerald", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Gerald", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Gerald", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Gerald", supervisor:"Mumo", hours:6, wage: 20.00},
    { category: "Overtime", location: "Nyali", department: "Tech team", name: "Gerald", supervisor:"Mumo", hours:6, wage: 20.00},
  ];

  let totalHours = 0;
  let totalWage = 0;
  data.forEach(entry => {
    totalHours += entry.hours;
    totalWage += entry.wage;
  });

  const totalRow = {
    category: "Total",
    location: "",
    department: "",
    name: "",
    supervisor: "",
    hours: totalHours,
    wage: totalWage.toFixed(2)
  };
  
  data.push(totalRow);

  doc.autoTable({
    startY: tableY,
    columns: [
      { header: "Category", dataKey: "category" },
      { header: "Location", dataKey: "location" },
      { header: "Department", dataKey: "department" },
      { header: "Name", dataKey: "name" },
      { header: "Supervisor", dataKey: "supervisor" },
      { header: "Hours", dataKey: "hours" },
      { header: "Wage", dataKey: "wage" }
    ],
    body: data,
    theme: "striped",
    styles: {
      cellPadding: 3,
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
    margin: { top:  yposition },
    rowHeight: 20
  });


  const handleClick = () => {
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank", "title=labor_report.pdf");
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

export default LaborReport;
const printer = require('node-printer');

// Get the available printers
const printers = printer.list();
console.log('printers',printers)
const virtualPrinterName = 'Name of your virtual printer';

// Find the virtual printer by name
const virtualPrinter = printers.find((p) => p.name === virtualPrinterName);

if (virtualPrinter) {
  // Use the virtual printer's name in the getPrinter() method
  const myPrinter = printer.getPrinter(virtualPrinter.name);

  // Print to the virtual printer
  const printData = 'Content to print';
  const filePath = '/path/to/save/output.pdf';

  myPrinter.printDirect({ data: printData, type: 'TEXT' }, function (error) {
    if (error) {
      console.error('Error occurred during printing:', error);
    } else {
      console.log('Printout saved successfully.');
    }
  });
} else {
  console.error('Virtual printer not found.');
}

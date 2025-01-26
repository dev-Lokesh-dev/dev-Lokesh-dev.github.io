function openAndDownload() {
    const pdfUrl = "Lokeshsharmaresume.pdf";
    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
    // Trigger the download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Lokeshsharmaresume.pdf";
    link.click();
}
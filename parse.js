const fs = require("fs");
const { JSDOM } = require("jsdom");

// Function to convert HTML to structured JSON
function htmlToStructuredJson(html) {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Extract styles from the root container
    const rootElement = document.body.firstElementChild;
    const rootStyle = rootElement.getAttribute("style") || "";

    // Extract text content and styles from child elements
    const divs = Array.from(document.querySelectorAll("div")).map(div => ({
        style: div.getAttribute("style") || "",
        text: div.textContent.trim()
    }));

    const structuredJson = {
        paragraphs: Array.from(document.querySelectorAll("p")).map(p => p.textContent.trim()),
        divs: divs
    };

    return structuredJson;
}

// Read HTML file
fs.readFile("example.html", "utf8", (err, html) => {
    if (err) {
        console.error("Error reading HTML file:", err);
        return;
    }

    // Convert HTML to JSON
    const jsonObject = htmlToStructuredJson(html);

    // Convert JSON to Base64
    const base64Encoded = Buffer.from(JSON.stringify(jsonObject), "utf8").toString("base64");

    // Save Base64 output to a file
    fs.writeFile("output_base64.txt", base64Encoded, (err) => {
        if (err) {
            console.error("Error writing Base64 file:", err);
            return;
        }
        console.log("✅ Conversion successful! Base64 data saved in output_base64.txt");
    });
});

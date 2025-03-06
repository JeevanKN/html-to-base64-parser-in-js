# html-to-base64-parser-in-js# HTML Parser

## Overview
This project converts HTML content into a structured JSON format. The parser extracts relevant information, including text and styles, and organizes them in a JSON representation.

## Features
- Parses HTML and converts it into JSON
- Extracts text and styles
- Supports nested elements
- Outputs structured data for further processing

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20.15.1 or later)
- [Git](https://git-scm.com/)

## Installation
Clone the repository and navigate to the project folder:
```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

Install dependencies (if any):
```sh
npm install
```

## Usage
Run the parser using:
```sh
node parse.js
```

## File Structure
```
├── parse.js       # Main parser script
├── input.html     # Sample HTML input file
├── output.json    # Parsed JSON output
├── README.md      # Project documentation
```

## Example
### Input (HTML)
```html
<div style="background: #ffffff; padding: 50px">
  <p style="font-size: 20px; text-align: left">Hi world</p>
</div>
```

### Output (JSON)
```json
{
  "paragraphs": ["Hi world"],
  "divs": [
    {
      "style": "background: #ffffff; padding: 50px",
      "text": "Hi world"
    }
  ]
}
```

## Troubleshooting
### Error: `DOMParser is not defined`
If you get this error, ensure you're using a DOM-compatible library like `jsdom`:
```sh
npm install jsdom
```
Then update `parse.js`:
```js
const { JSDOM } = require("jsdom");
const dom = new JSDOM("<body></body>");
const parser = new dom.window.DOMParser();
```

## Contributing
Feel free to fork this repository, make changes, and submit a pull request.

## License
This project is licensed under the MIT License.


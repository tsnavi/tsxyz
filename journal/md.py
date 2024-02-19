import markdown

def convert_markdown_to_html(input_file, output_file):
    with open(input_file, 'r') as f:
        markdown_text = f.read()

    html_body = markdown.markdown(markdown_text)

    # Default CSS style template
    css_style = """
    <style>
        body {
            font-family: MS Gothic, monospace;
            background-color: #f0f0f0;
            padding: 20px;
        }
        h1 {
            color: #fff;
            font-size: 1.5em;
            filter: drop-shadow(0 0 0.1rem gray);
        }
        h2 {
            font-size:1.1em;
            margin-block-end:0em;
            }
        ul {
            font-size:1em;
            margin-block-start:0em;
            }
        /* Add more styles as needed */
    </style>
    """

    # Combine CSS style and HTML body
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Journal</title>
        {css_style}
    </head>
    <body>
        {html_body}
    </body>
    </html>
    """
    
    with open(output_file, 'w') as f:
        f.write(html_content)

if __name__ == "__main__":
    input_file = 'journal.md'
    output_file = 'index.html'
    convert_markdown_to_html(input_file, output_file)

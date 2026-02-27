import os
import re
from bs4 import BeautifulSoup

def kebab_to_camel(match):
    return match.group(1) + match.group(2).upper()

def fix_svg_attrs(html_str):
    # Fix stroke-width, stroke-dasharray, stroke-linecap, stroke-linejoin, fill-rule, clip-rule
    svg_attrs = [
        "stroke-width", "stroke-dasharray", "stroke-linecap", "stroke-linejoin", 
        "fill-rule", "clip-rule", "stop-color", "stop-opacity", "stroke-miterlimit",
        "vector-effect"
    ]
    for attr in svg_attrs:
        html_str = html_str.replace(attr, attr.split('-')[0] + attr.split('-')[1].capitalize())
    return html_str

def html_to_jsx(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Remove head
    if soup.head:
        soup.head.decompose()
        
    # Get body content
    body = soup.body
    if not body:
        body = soup

    # convert tree back to string
    html_str = str(body)
    
    # regex replaces
    html_str = html_str.replace('class="', 'className="')
    html_str = html_str.replace('for="', 'htmlFor="')
    
    # BeautifulSoup already handles closing image/input tags, but it uses HTML5 void tags.
    # To fix void tags in JSX, we can use a quick regex:
    html_str = re.sub(r'<(img|input|br|hr)([^\>]*?(?<!/))>', r'<\1\2 />', html_str)
    
    # Fix SVG attributes
    html_str = fix_svg_attrs(html_str)
    
    # Fix style attributes if any (string to object, highly complex, assume no big inline styles for tailwind)
    # usually Tailwind doesn't use style="". 
    
    return html_str

def main():
    base_dir = r"d:\pocketdoctordiversion\stitch\stitch"
    out_dir = r"d:\pocketdoctordiversion\frontend\src\pages"
    os.makedirs(out_dir, exist_ok=True)
    
    # map to readable names
    names = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d))]
    
    app_exports = []
    app_routes = []
    
    for name in names:
        code_file = os.path.join(base_dir, name, "code.html")
        if os.path.exists(code_file):
            with open(code_file, "r", encoding="utf-8") as f:
                content = f.read()
            
            jsx_content = html_to_jsx(content)
            
            # wrap in component
            comp_name = "".join([part.capitalize() for part in name.split('_')])
            
            jsx_template = f"""import React from 'react';

const {comp_name} = () => {{
    return (
        <>
            {jsx_content}
        </>
    );
}};

export default {comp_name};
"""
            with open(os.path.join(out_dir, f"{comp_name}.jsx"), "w", encoding="utf-8") as f:
                f.write(jsx_template)
            
            app_exports.append(f"import {comp_name} from './pages/{comp_name}';")
            app_routes.append(f"""        <Route path="/{name.replace('_', '-')}" element={{<{comp_name} />}} />""")
            
    print("Done generated pages. generating App.jsx template")
    
    app_jsx = f"""import React from 'react';
import {{ BrowserRouter as Router, Routes, Route, Link }} from 'react-router-dom';
{chr(10).join(app_exports)}

function App() {{
  return (
    <Router>
      <div>
        <nav className="p-4 bg-gray-100 dark:bg-gray-800 border-b flex gap-4 overflow-x-auto">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
{chr(10).join([f'          <Link to="/{name.replace("_", "-")}" className="text-blue-500 hover:underline">{name.replace("_", " ").title()}</Link>' for name in names])}
        </nav>
        <Routes>
          <Route path="/" element={{<div className="p-8"><h1 className="text-2xl font-bold">Pocket Doctor Interface</h1><p>Select a screen from the top navigation to view it.</p></div>}} />
{chr(10).join(app_routes)}
        </Routes>
      </div>
    </Router>
  );
}}

export default App;
"""
    with open(r"d:\pocketdoctordiversion\frontend\src\App.jsx", "w", encoding="utf-8") as f:
        f.write(app_jsx)

if __name__ == "__main__":
    main()

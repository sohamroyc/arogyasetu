import os
import re

def clean_jsx():
    pages_dir = r"d:\pocketdoctordiversion\frontend\src\pages"
    for filename in os.listdir(pages_dir):
        if filename.endswith(".jsx"):
            file_path = os.path.join(pages_dir, filename)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Remove markdown backticks
            content = content.replace("```</body>", "</div>")
            content = content.replace("```", "")
            
            # Replace <body with <div and </body> with </div>
            content = content.replace("<body ", "<div ")
            content = content.replace("<body>", "<div>")
            content = content.replace("</body>", "</div>")
            
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)

if __name__ == "__main__":
    clean_jsx()

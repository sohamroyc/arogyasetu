import os
import re

def fix_jsx():
    pages_dir = r"d:\pocketdoctordiversion\frontend\src\pages"
    for filename in os.listdir(pages_dir):
        if filename.endswith(".jsx"):
            file_path = os.path.join(pages_dir, filename)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # replace HTML comments with JSX comments
            content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content)
            
            # replace style strings with objects
            content = content.replace('style="width: 65%"', 'style={{ width: \'65%\' }}')
            content = content.replace('style="width: 70%"', 'style={{ width: \'70%\' }}')
            content = content.replace('style="width: 80%"', 'style={{ width: \'80%\' }}')
            content = re.sub(r'style="background-image: url\(\'([^\']+)\'\)"', r"style={{ backgroundImage: 'url(\1)' }}", content)
            
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)

if __name__ == "__main__":
    fix_jsx()

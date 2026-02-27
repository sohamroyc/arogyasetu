import subprocess

try:
    result = subprocess.run(["npx", "vite", "build"], capture_output=True, text=True, check=False)
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)
except Exception as e:
    print(str(e))

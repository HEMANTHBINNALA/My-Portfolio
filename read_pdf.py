import sys
import subprocess

try:
    import PyPDF2
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2"])
    import PyPDF2

def read_pdf(file_path):
    try:
        reader = PyPDF2.PdfReader(file_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        print(f"--- CONTENT OF {file_path} ---")
        print(text)
    except Exception as e:
        print(f"Failed to read {file_path}: {e}")

if __name__ == "__main__":
    read_pdf("Krish_Resume1 .pdf")
    read_pdf("IN226033802 (1).pdf")

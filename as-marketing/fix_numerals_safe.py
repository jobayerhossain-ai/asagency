import re

def to_bengali(match):
    # Map for translation
    eng_to_ben = str.maketrans("0123456789", "০১২৩৪৫৬৭৮৯")
    return match.group(0).translate(eng_to_ben)

file_path = 'src/data/packages.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find quoted strings: '...' or "..."
# We only want to replace inside strings.
# Pattern: (['"])(?:(?!\1).)*\1
# But we need to process the content INSIDE the quotes.
def replace_in_string(match):
    quote = match.group(1)
    text = match.group(2)
    new_text = text.translate(str.maketrans("0123456789", "০১২৩৪৫৬৭৮৯"))
    return f"{quote}{new_text}{quote}"

# Regex matches 'content' or "content"
# Group 1: quote char
# Group 2: content
updated_content = re.sub(r"(['\"])(.*?)\1", replace_in_string, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Replacement complete.")

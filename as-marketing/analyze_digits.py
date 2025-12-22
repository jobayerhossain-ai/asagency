import re

file_path = 'src/data/packages.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Standard Bengali Digits: U+09E6 to U+09EF (০-৯)
# ASCII Digits: 0-9

# Find what kinda "1"s are in there
ones = [c for c in content if c == '1' or c == '১']
print(f"Total '1'/'১' found: {len(ones)}")
print(f"ASCII '1' count: {content.count('1')}")
print(f"Bengali '১' count: {content.count('১')}")

# Check for other similar looking characters?
# Maybe Assamese? U+09F4? no that's distinct.

# Let's verify precisely where they are.
lines = content.split('\n')
for i, line in enumerate(lines):
    if '1' in line or '১' in line:
        # Print line number and the distinct characters used for "one"
        print(f"Line {i+1}: {line.strip()}")
        for char in line:
             if char in ['1', '১']:
                 print(f"  Found char: {char} (U+{ord(char):04X})")


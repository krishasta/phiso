from PIL import Image

img = Image.open('app/src/assets/body_anatomy.png').convert('RGBA')
width, height = img.size
pixels = img.load()

left_rows = set()
right_rows = set()

mid = width // 2

for x in range(width):
    for y in range(height):
        if pixels[x, y][3] > 10:
            if x < mid:
                left_rows.add(y)
            else:
                right_rows.add(y)

left_y_min = min(left_rows) / height * 100
left_y_max = max(left_rows) / height * 100
right_y_min = min(right_rows) / height * 100
right_y_max = max(right_rows) / height * 100

print(f'Left Y range %: {left_y_min:.2f}% to {left_y_max:.2f}%')
print(f'Right Y range %: {right_y_min:.2f}% to {right_y_max:.2f}%')

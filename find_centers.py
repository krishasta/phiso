from PIL import Image

img = Image.open('app/src/assets/body_anatomy.png').convert('RGBA')
width, height = img.size
pixels = img.load()

left_cols = []
right_cols = []

mid = width // 2

for x in range(width):
    has_alpha = False
    for y in range(height):
        if pixels[x, y][3] > 10:
            has_alpha = True
            break
    if has_alpha:
        if x < mid:
            left_cols.append(x)
        else:
            right_cols.append(x)

left_center = (left_cols[0] + left_cols[-1]) / 2 / width * 100
right_center = (right_cols[0] + right_cols[-1]) / 2 / width * 100
print(f'Left center %: {left_center:.2f}%')
print(f'Right center %: {right_center:.2f}%')
print(f'Image aspect ratio: {width/height:.2f}')

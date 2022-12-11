import os
import sys
import math
from tkinter.constants import NW
import pandas
import tkinter as tk
import cv2
import numpy as np

home_path = os.path.dirname(os.path.abspath(__file__))
input_path = home_path + "/input/"
output_path = home_path + "/output/"

# input_file_path = input_path + "/input_file.csv"
# input_file_path = input_path + "/input_file.csv"

# if __name__== "__main__":
#     climate((sys.argv[1]))

if len(sys.argv) < 2:
    sys.exit('No file name')

arg1 = sys.argv[1]

# def climate(file_name):
#     input_file_path = input_path + "/" + file_name + ".csv"

input_file_path = input_path + arg1 + ".csv"

if not os.path.exists(input_file_path):
    sys.exit('No file')

df = pandas.read_csv(input_file_path)


def normalize(df):
    result = df.copy()
    for feature_name in df.columns:
        max_value = df[feature_name].max()
        min_value = df[feature_name].min()
        if feature_name == 'date':
            pass
        else:
            result[feature_name] = (
                df[feature_name] - min_value) / (max_value - min_value)
    return result


df = normalize(df)

key_values = df.to_dict('index')
row_count = len(key_values)

relative_multiplier = True

if relative_multiplier == True:
    min_climate_all_time = df["minclimate"].min()
    max_climate_all_time = df["maxclimate"].max()
    min_climate_min_time = df["minclimate"].min()
    max_climate_min_time = df["minclimate"].max()
    min_climate_max_time = df["maxclimate"].min()
    max_climate_max_time = df["maxclimate"].max()

    min_sunlightminute_all_time = df["sunlightminute"].min()
    max_sunlightminute_all_time = df["sunlightminute"].max()
else:
    min_climate_all_time = 0.913
    max_climate_all_time = 16.747
    min_climate_min_time = 0.913
    max_climate_min_time = 5.367
    min_climate_max_time = 12.691
    max_climate_max_time = 16.747
    min_sunlightminute_all_time = 0
    max_sunlightminute_all_time = 24.08


if max_sunlightminute_all_time >= 255:
    max_sunlightminute_all_time = 255
climate_multiplier = 255 / (max_climate_all_time - min_climate_all_time)
min_climate_multiplier = 255 / (max_climate_min_time - min_climate_min_time)
max_climate_multiplier = 255 / (max_climate_max_time - min_climate_max_time)
sunlightminute_multiplier = 255 / \
    (max_sunlightminute_all_time - min_sunlightminute_all_time)

multiplied_key_values = {}


def multiplied_climate(value):
    if math.isnan(value):
        value = 0
    multiplied_climate_value = int(value * climate_multiplier)
    if multiplied_climate_value >= 255:
        multiplied_climate_value = 255
    return multiplied_climate_value


def multiplied_min_climate(value):
    if math.isnan(value):
        value = 0
    multiplied_climate_value = int(value * min_climate_multiplier)
    if multiplied_climate_value >= 255:
        multiplied_climate_value = 255
    return multiplied_climate_value


def multiplied_max_climate(value):
    if math.isnan(value):
        value = 0
    multiplied_climate_value = int(value * max_climate_multiplier)
    if multiplied_climate_value >= 255:
        multiplied_climate_value = 255
    return multiplied_climate_value


def multiplied_sunlightminute(value):
    if math.isnan(value):
        value = 0
    multiplied_sunlightminute_value = int(value * sunlightminute_multiplier)
    if multiplied_sunlightminute_value <= 0:
        multiplied_sunlightminute_value = 0
    return multiplied_sunlightminute_value


def multiplied_result(key_value):
    return {'date': key_value['date'],
            'minclimate': multiplied_min_climate(key_value['minclimate']),
            'maxclimate': multiplied_max_climate(key_value['maxclimate']),
            'sunlightminute': multiplied_sunlightminute(key_value['sunlightminute'])}


for x in key_values:
    multiplied_key_values[x] = multiplied_result(key_values[x])


# def _from_rgb(rx, g, b):
#     """translates an rgb tuple of int to a tkinter friendly color code
#     """
#     return f'#{r:02x}{g:02x}{b:02x}'


def colored(r, g, b, text):
    return "\033[38;2;{};{};{}m{} \033[38;2;255;255;255m".format(r, g, b, text)


text = ''
colored_text = colored(255, 0, 0, text)

temp = []

WIDTH = 1920  # change as needed
HEIGHT = 1080  # change as needed

multiplied_key_values_rgb_to_hex = []
ar_bgr = []
img_ar = []
# img = np.zeros((HEIGHT, WIDTH, 3), dtype = "uint8")

img = np.zeros([HEIGHT, WIDTH,3],dtype=np.uint8)
img.fill(255) # or img[:] = 255


for x in multiplied_key_values:
    # text += colored(multiplied_key_values[x]['minclimate'], multiplied_key_values[x]
    #                 ['maxclimate'], multiplied_key_values[x]['sunlightminute'], "◼︎")
    
    ar_bgr.append((multiplied_key_values[x]['sunlightminute'], multiplied_key_values[x]['maxclimate'], multiplied_key_values[x]['minclimate'])) # BGR
    #  ar_bgr.append((multiplied_key_values[x]['minclimate'], multiplied_key_values[x]['maxclimate'], multiplied_key_values[x]['sunlightminute'])) # RGB

# f.close()
# print(text)

# cv2.rectangle(img, (0, 0), (WIDTH, HEIGHT), (x), -1)
array_num = 1
fourcc = cv2.VideoWriter_fourcc('m', 'p', '4', 'v') 
out = cv2.VideoWriter(output_path + 'video_' + str(array_num) + '.mp4', fourcc, 30, (WIDTH, HEIGHT), isColor=True)

# cv2.imshow('rectangle',img_ar[0])
# cv2.imshow('rectangle',
#            cv2.rectangle(img, (0, 0), (WIDTH, HEIGHT), ar_bgr[1], -1))

# cv2.waitKey(0)

for x in ar_bgr:
    img_temp = cv2.rectangle(img, (0, 0), (WIDTH, HEIGHT), x, -1)
    for _ in range(30):
        out.write(img_temp)
        # out.write(cv2.cvtColor(img_temp, cv2.COLOR_RGB2BGR))
    if array_num % 12 == 0:
        out.release()
        out = cv2.VideoWriter(output_path + 'video_' + str(int(array_num / 12)) + '.mp4', fourcc, 30, (WIDTH, HEIGHT), isColor=True)
    if array_num == 1696:
        out.release()
        out = cv2.VideoWriter(output_path + 'video_' + "array_num_last" + '.mp4', fourcc, 30, (WIDTH, HEIGHT), isColor=True)
    array_num += 1
        


# for x in ar_bgr:
#     img_temp = cv2.imshow('rectangle', cv2.rectangle(img, (0, 0), (WIDTH, HEIGHT), x, -1))
#     out.write(img_temp)
#     cv2.waitKey(1000)


# out.release()
cv2.destroyAllWindows()



# print(text)
# print(multiplied_key_values)
import os
import sys
import math
from tkinter.constants import NW
import pandas
import tkinter as tk

home_path = os.path.dirname(os.path.abspath(__file__))
input_path = home_path + "/input/"
output_path = home_path + "/output/"

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


def _from_rgb(r, g, b):
    """translates an rgb tuple of int to a tkinter friendly color code
    """
    return f'#{r:02x}{g:02x}{b:02x}'


def colored(r, g, b, text):
    return "\033[38;2;{};{};{}m{} \033[38;2;255;255;255m".format(r, g, b, text)


text = ''
colored_text = colored(255, 0, 0, text)

temp = []

multiplied_key_values_rgb_to_hex = []

# f = open("srgb.csv", "w")

for x in multiplied_key_values:
    text += colored(multiplied_key_values[x]['minclimate'], multiplied_key_values[x]
                    ['maxclimate'], multiplied_key_values[x]['sunlightminute'], "◼︎")
    
    # temp.append([multiplied_key_values[x]['minclimate'], multiplied_key_values[x]['maxclimate'], multiplied_key_values[x]['sunlightminute']])
    # f.write(str(multiplied_key_values[x]['minclimate']) + "," + str(multiplied_key_values[x]['maxclimate']) + "," + str(multiplied_key_values[x]['sunlightminute']) + "\n")
    
    multiplied_key_values_rgb_to_hex.append(_from_rgb(
        multiplied_key_values[x]['minclimate'], multiplied_key_values[x]['maxclimate'], multiplied_key_values[x]['sunlightminute']))


# f.close()
print(text)


WIDTH = 650  # change as neededd
HEIGHT = 650  # change as needed

root = tk.Tk()
# root.eval('tk::PlaceWindow . center')

root.attributes("-fullscreen", True)
root.resizable(True, True)
canvas = tk.Canvas(root, width=WIDTH, height=HEIGHT)
# canvas.place(relx=0.5, rely=0.5)
canvas.pack(expand=True)
rect = canvas.create_rectangle(10, 10, WIDTH, HEIGHT, fill='blue', outline="")

stopwatch = tk.Label(root, anchor="center", text="Test")
stopwatch.pack()
minutes = 0
seconds = 0

numb = 0
fastness = 250
fastness_limit = 15
done_flag = False


def update_stopwatch():
    global minutes
    global seconds

    if done_flag == False:
        if seconds < 59:
            seconds += 1
        elif seconds == 59:
            seconds = 0
            minutes += 1

    # Update Label.
    time_string = "{:02d}:{:02d}".format(minutes, seconds)
    stopwatch.config(text=time_string)
    root.after(1000, update_stopwatch)  # Call again in 1000 millisecs.
    if done_flag == True:
        root.after_cancel(update_stopwatch)
    # print(done_flag)


def change_bg(e):
    canvas.itemconfig(rect, fill=multiplied_key_values_rgb_to_hex[e])
    # print(multiplied_key_values_rgb_to_hex[e])


def task():
    global numb
    global done_flag
    global fastness
    l = root.after(fastness, task)
    if len(multiplied_key_values_rgb_to_hex) - 2 == int(numb):
        root.after_cancel(l)
        done_flag = True
        # print("done!")
    numb = l
    numb = int(str(numb).split("#")[1])
    change_bg(numb)
    if int(numb) % 20 == 0:
        fastness = fastness - 10
        # print(fastness)
    if fastness <= fastness_limit:
        fastness = fastness_limit

l = root.after(10, task)
update_stopwatch()

# root.mainloop()


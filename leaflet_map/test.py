import random
from tkinter import *
from PIL import Image, ImageFont, ImageDraw, ImageTk
import os

root = Tk()
cwidth = 5467
cheight = 2933
width, height = root.winfo_screenwidth(), root.winfo_screenheight()
root.geometry('%dx%d+0+0' % (width,height))
canvas = Canvas(width=width, height=height)
canvas.pack(expand=YES, fill=BOTH)



my_image = Image.open("/Users/seanhan/Documents/git/leaflet_map/test.jpeg")
img = ImageTk.PhotoImage(my_image)

canvas.create_image(width/2, height/2, image=img, anchor=CENTER)
# canvas.create_image(0, 0, image=img, anchor=NW)


text_1 = 1
# text_2 = 2
# text_3 = 3
# text_4 = 4
# text_5 = 5
# text_6 = 6
# text_7 = 7
# text_8 = 8
# text_9 = 9

text_2 =text_1
text_3 =text_1 
text_4 =text_1
text_5 =text_1
text_6 =text_1
text_7 =text_1
text_8 =text_1
text_9 =text_1

number_list = [0,1,2,3,4,5,6,7,8,9]

stopwatch_1 = canvas.create_text(
    600, 480, text=text_1, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_2 = canvas.create_text(
    570, 590, text=text_2, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_3 = canvas.create_text(
    670, 590, text=text_3, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_4 = canvas.create_text(
    770, 590, text=text_4, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_5 = canvas.create_text(
    870, 590, text=text_5, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_6 = canvas.create_text(
    530, 710, text=text_6, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_7 = canvas.create_text(
    630, 710, text=text_7, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_8 = canvas.create_text(
    730, 710, text=text_8, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_9 = canvas.create_text(
    830, 710, text=text_9, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_10 = canvas.create_text(
    500, 830, text=text_1, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_11 = canvas.create_text(
    600, 830, text=text_2, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_12 = canvas.create_text(
    700, 830, text=text_3, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_13 = canvas.create_text(
    800, 830, text=text_4, fill="black", font=('Helvetica', '140', 'bold'))
stopwatch_14 = canvas.create_text(
    890, 830, text=text_4, fill="black", font=('Helvetica', '140', 'bold'))


def add_number(text):
    if text < 9:
        text += 1
    elif text == 9:
        text = 1
    return text

def update_number():
    global text_1
    global text_2
    global text_3
    global text_4
    global text_5
    global text_6
    global text_7
    global text_8
    global text_9
    try:
        
        random_number = random.choice(number_list)
        canvas.itemconfigure(stopwatch_1, text=random_number)
        canvas.itemconfigure(stopwatch_2, text=random_number)
        canvas.itemconfigure(stopwatch_3, text=random_number)
        canvas.itemconfigure(stopwatch_4, text=random_number)        
        canvas.itemconfigure(stopwatch_5, text=random_number)
        canvas.itemconfigure(stopwatch_6, text=random_number)
        canvas.itemconfigure(stopwatch_7, text=random_number)
        canvas.itemconfigure(stopwatch_8, text=random_number)
        canvas.itemconfigure(stopwatch_9, text=random_number)
        canvas.itemconfigure(stopwatch_10, text=random_number)
        canvas.itemconfigure(stopwatch_11, text=random_number)
        canvas.itemconfigure(stopwatch_12, text=random_number)
        canvas.itemconfigure(stopwatch_13, text=random_number)
        canvas.itemconfigure(stopwatch_14, text=random_number)
        
        # canvas.itemconfigure(stopwatch_1, text=add_number(text_1))
        # canvas.itemconfigure(stopwatch_2, text=add_number(text_2))
        # canvas.itemconfigure(stopwatch_3, text=add_number(text_3))
        # canvas.itemconfigure(stopwatch_4, text=add_number(text_4))        
        # canvas.itemconfigure(stopwatch_5, text=add_number(text_5))
        # canvas.itemconfigure(stopwatch_6, text=add_number(text_6))
        # canvas.itemconfigure(stopwatch_7, text=add_number(text_7))
        # canvas.itemconfigure(stopwatch_8, text=add_number(text_8))
        # canvas.itemconfigure(stopwatch_9, text=add_number(text_9))
        # canvas.itemconfigure(stopwatch_10, text=add_number(text_1))
        # canvas.itemconfigure(stopwatch_11, text=add_number(text_2))
        # canvas.itemconfigure(stopwatch_12, text=add_number(text_3))
        # canvas.itemconfigure(stopwatch_13, text=add_number(text_4))
        # canvas.itemconfigure(stopwatch_14, text=add_number(text_5))
        # if text_1 < 9:
        #     text_1 += 1
        # elif text_1 == 9:
        #     text_1 = 1
        # if text_2 < 9:
        #     text_2 += 1
        # elif text_2 == 9:
        #     text_2 = 1         
        # if text_3 < 9:
        #     text_3 += 1
        # elif text_3 == 9:
        #     text_3 = 1
        # if text_4 < 9:
        #     text_4 += 1
        # elif text_4 == 9:
        #     text_4 = 1
        # if text_5 < 9:
        #     text_5 += 1
        # elif text_5 == 9:
        #     text_5 = 1
        # if text_6 < 9:
        #     text_6 += 1
        # elif text_6 == 9:
        #     text_6 = 1
        # if text_7 < 9:
        #     text_7 += 1
        # elif text_7 == 9:
        #     text_7 = 1
        # if text_8 < 9:
        #     text_8 += 1
        # elif text_8 == 9:
        #     text_8 = 1
        # if text_9 < 9:
        #     text_9 += 1
        # elif text_9 == 9:
        #     text_9 = 1
      
        root.after(1000, update_number)
    except StopIteration:
        pass

update_number()

# root.attributes('-fullscreen', True)

root.mainloop()

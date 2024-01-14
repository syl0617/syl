import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection
from scipy.spatial import ConvexHull
from tkinter import filedialog
import tkinter as tk
import numpy as np
import matplotlib.animation as animation
from matplotlib.widgets import Button
import os


def choose_file():
    root = tk.Tk()
    root.withdraw()  # Hide the main window
    file_path = filedialog.askopenfilename(title="Select OBJ File", filetypes=[("OBJ files", "*.obj")])
    return file_path


button = None


import tkinter as tk
from tkinter import filedialog

def save_figure(button, event):
    print("Button clicked, saving figure...")  # Print a message to the console
    button.ax.set_visible(False)  # Hide the button
    plt.gcf().canvas.draw_idle()  # Force a complete redraw of the figure

    root = tk.Tk()
    root.withdraw()  # Hide the main window
    file_path = filedialog.asksaveasfilename(defaultextension=".png", filetypes=[("PNG files", "*.png")])

    if file_path:  # If a file path is selected
        plt.savefig(file_path)
        print("File saved:", file_path)

    button.ax.set_visible(True)  # Show the button again
    plt.gcf().canvas.draw_idle()  # Force a complete redraw of the figure

# Replace the fixed file path with a function call to choose_file()
obj_file_path = choose_file()

def load_obj(filename):
    vertices = []
    faces = []

    with open(filename, 'r') as f:
        for line in f:
            parts = line.strip().split()

            # Skip lines that don't contain any parts
            if not parts:
                continue

            if parts[0] == 'v':
                vertices.append([float(v) for v in parts[1:]])
            elif parts[0] == 'f':
                face = [int(index.split('/')[0]) - 1 for index in parts[1:]]
                faces.append(face)

    # Find the maximum number of vertices in any face
    max_vertices = max(len(face) for face in faces)

    # Ensure all faces have the same number of vertices
    for face in faces:
        while len(face) < max_vertices:
            face.append(-1)

    return np.array(vertices), np.array(faces)

def init_visualization_2d(vertices, hull, show_labels=True):
    fig = plt.figure(figsize=(12, 6))

    # 2D subplot for front view (x, z)
    ax_2d_front = fig.add_subplot(131)
    ax_2d_front.plot(vertices[:, 0], vertices[:, 2], 's', markersize=2)  # Use 's' for square markers
    hull_front = ConvexHull(vertices[:, [0, 2]])  # Compute 2D convex hull for front view
    for simplex in hull_front.simplices:
        ax_2d_front.plot(vertices[simplex, 0], vertices[simplex, 2], 'k-')
    if show_labels:
        ax_2d_front.set_xlabel('X Axis', fontsize=14, color='green')
        ax_2d_front.set_ylabel('Z Axis', fontsize=14, color='green')
    else:
        ax_2d_front.set_xticks([])
        ax_2d_front.set_yticks([])
        
    ax_2d_front.set_title('Front View')
    ax_2d_front.axis('equal')

    # 2D subplot for top view (x, y)
    ax_2d_top = fig.add_subplot(132)
    ax_2d_top.plot(vertices[:, 0], vertices[:, 1], 's', markersize=2)  # Use 's' for square markers
    hull_top = ConvexHull(vertices[:, [0, 1]])  # Compute 2D convex hull for top view
    for simplex in hull_top.simplices:
        ax_2d_top.plot(vertices[simplex, 0], vertices[simplex, 1], 'k-')
    if show_labels:
        ax_2d_top.set_xlabel('X Axis', fontsize=14, color='green')
        ax_2d_top.set_ylabel('Y Axis', fontsize=14, color='green')
    else:
        ax_2d_top.set_xticks([])
        ax_2d_top.set_yticks([])
        
    ax_2d_top.set_title('Top View')
    ax_2d_top.axis('equal')

    # 2D subplot for side view (y, z)
    ax_2d_side = fig.add_subplot(133)
    ax_2d_side.plot(vertices[:, 1], vertices[:, 2], 's', markersize=2)  # Use 's' for square markers
    hull_side = ConvexHull(vertices[:, [1, 2]])  # Compute 2D convex hull for side view
    for simplex in hull_side.simplices:
        ax_2d_side.plot(vertices[simplex, 1], vertices[simplex, 2], 'k-')
    if show_labels:
        ax_2d_side.set_xlabel('Y Axis', fontsize=14, color='green')
        ax_2d_side.set_ylabel('Z Axis', fontsize=14, color='green')
    else:
        ax_2d_side.set_xticks([])
        ax_2d_side.set_yticks([])
        
    ax_2d_side.set_title('Side View')
    ax_2d_side.axis('equal')

    plt.show()

def animate_convex_hull(vertices, hull_front, hull_top, hull_side, show_labels=True): 
    fig = plt.figure(figsize=(12, 6))

    # 2D subplot for front view (x, z)
    ax_2d_front = fig.add_subplot(131)
    ax_2d_front.plot(vertices[:, 0], vertices[:, 2], 's', markersize=2)  # Use 's' for square markers
    ax_2d_front.set_title('Front View')
    ax_2d_front.axis('equal')
    if show_labels:
        ax_2d_front.set_xlabel('X Axis', fontsize=14, color='green')
        ax_2d_front.set_ylabel('Z Axis', fontsize=14, color='green')

    else:
        ax_2d_front.set_xticks([])
        ax_2d_front.set_yticks([])

    # 2D subplot for top view (x, y)
    ax_2d_top = fig.add_subplot(132)
    ax_2d_top.plot(vertices[:, 0], vertices[:, 1], 's', markersize=2)  # Use 's' for square markers
    ax_2d_top.set_title('Top View')
    ax_2d_top.axis('equal')
    if show_labels:
        ax_2d_top.set_xlabel('X Axis', fontsize=14, color='green')
        ax_2d_top.set_ylabel('Y Axis', fontsize=14, color='green')

    else:
        ax_2d_top.set_xticks([])
        ax_2d_top.set_yticks([])

    # 2D subplot for side view (y, z)
    ax_2d_side = fig.add_subplot(133)
    ax_2d_side.plot(vertices[:, 1], vertices[:, 2], 's', markersize=2)  # Use 's' for square markers
    ax_2d_side.set_title('Side View')
    ax_2d_side.axis('equal')
    if show_labels:
        ax_2d_side.set_xlabel('Y Axis', fontsize=14, color='green')
        ax_2d_side.set_ylabel('Z Axis', fontsize=14, color='green')
    else:
        ax_2d_side.set_xticks([])
        ax_2d_side.set_yticks([])

    plt.pause(1)

    # Compute the centroid of the points
    centroid_front = vertices[hull_front.vertices].mean(axis=0)
    centroid_top = vertices[hull_top.vertices].mean(axis=0)
    centroid_side = vertices[hull_side.vertices].mean(axis=0)

    # Compute the angles of the points on the hull relative to the centroid
    angles_front = np.arctan2(vertices[hull_front.vertices, 2] - centroid_front[2], vertices[hull_front.vertices, 0] - centroid_front[0])
    angles_top = np.arctan2(vertices[hull_top.vertices, 1] - centroid_top[1], vertices[hull_top.vertices, 0] - centroid_top[0])
    angles_side = np.arctan2(vertices[hull_side.vertices, 2] - centroid_side[2], vertices[hull_side.vertices, 1] - centroid_side[1])

    # Sort the points on the hull by their angles for each view
    sorted_vertices_front = hull_front.vertices[np.argsort(angles_front)]
    sorted_vertices_top = hull_top.vertices[np.argsort(angles_top)]
    sorted_vertices_side = hull_side.vertices[np.argsort(angles_side)]
    
    # Calculate the lengths of the sorted vertices arrays
    len_front = len(sorted_vertices_front)
    len_top = len(sorted_vertices_top)
    len_side = len(sorted_vertices_side)

    # Draw the edges of the hull in the sorted order for each view
    for i in range(max(len_front, len_top, len_side)):
        if i < len_front - 1:
            ax_2d_front.plot(vertices[sorted_vertices_front[i:i+2], 0], vertices[sorted_vertices_front[i:i+2], 2], 'k-')
        elif i == len_front - 1:
            ax_2d_front.plot([vertices[sorted_vertices_front[i], 0], vertices[sorted_vertices_front[0], 0]], 
                            [vertices[sorted_vertices_front[i], 2], vertices[sorted_vertices_front[0], 2]], 'k-')

        if i < len_top - 1:
            ax_2d_top.plot(vertices[sorted_vertices_top[i:i+2], 0], vertices[sorted_vertices_top[i:i+2], 1], 'k-')
        elif i == len_top - 1:
            ax_2d_top.plot([vertices[sorted_vertices_top[i], 0], vertices[sorted_vertices_top[0], 0]], 
                        [vertices[sorted_vertices_top[i], 1], vertices[sorted_vertices_top[0], 1]], 'k-')

        if i < len_side - 1:
            ax_2d_side.plot(vertices[sorted_vertices_side[i:i+2], 1], vertices[sorted_vertices_side[i:i+2], 2], 'k-')
        elif i == len_side - 1:
            ax_2d_side.plot([vertices[sorted_vertices_side[i], 1], vertices[sorted_vertices_side[0], 1]], 
                            [vertices[sorted_vertices_side[i], 2], vertices[sorted_vertices_side[0], 2]], 'k-')

        plt.pause(0.2)

     # Add a button for saving the figure
    ax_button = plt.axes([0.8, 0.05, 0.1, 0.075])
    button = Button(ax_button, 'Save Figure')
    button.on_clicked(lambda event: save_figure(button, event))

    plt.show()

# Load vertices and faces from OBJ file
vertices, faces = load_obj(obj_file_path)

# Compute the 2D convex hulls
hull_2d_front = ConvexHull(vertices[:, [0, 2]])
hull_2d_top = ConvexHull(vertices[:, [0, 1]])
hull_2d_side = ConvexHull(vertices[:, [1, 2]])

# Animate the convex hulls
animate_convex_hull(vertices, hull_2d_front, hull_2d_top, hull_2d_side, show_labels=False);


import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection
import numpy as np
from tkinter import filedialog
import tkinter as tk

def choose_file():
    root = tk.Tk()
    root.withdraw()  # Hide the main window
    file_path = filedialog.askopenfilename(title="Select OBJ File", filetypes=[("OBJ files", "*.obj")])
    return file_path

# Replace the fixed file path with a function call to choose_file()
obj_file_path = choose_file()

def load_xyz_coordinates(file_path):
    x_coordinates = []
    y_coordinates = []
    z_coordinates = []

    with open(file_path, 'r') as file:
        for line in file:
            if line.startswith('v '):
                values = list(map(float, line.split()[1:]))
                x_coordinates.append(values[0])
                y_coordinates.append(values[1])
                z_coordinates.append(values[2])

    return np.array([x_coordinates, y_coordinates, z_coordinates]).T

def generate_banana_points(file_path):
    return load_xyz_coordinates(file_path)

def gift_wrapping_3d(points):
    n = len(points)
    hull = []

    # Find the point with the minimum x-coordinate as the starting point
    start_point = np.argmin(points[:, 0])
    current_point = start_point

    while True:
        hull.append(current_point)

        next_point = (current_point + 1) % n

        for i in range(n):
            if i != current_point and i != next_point:
                # Calculate the angle between the vectors
                angle = calculate_angle(points[current_point], points[next_point], points[i])
                if angle < 0:
                    next_point = i

        current_point = next_point

        if current_point == start_point:
            break

    return hull

def calculate_angle(p1, p2, p3):
    v1 = p1 - p2
    v2 = p3 - p2
    dot_product = np.dot(v1, v2)
    magnitudes = np.linalg.norm(v1) * np.linalg.norm(v2)
    angle = np.arccos(dot_product / magnitudes)
    return angle

def init_visualization_3d(points, hull):
    fig = plt.figure(figsize=(8, 8))
    ax = fig.add_subplot(projection='3d')

    ax.set_xlabel('X Axis', fontsize=14, color='green')
    ax.set_ylabel('Y Axis', fontsize=14, color='green')
    ax.set_zlabel('Z Axis', fontsize=14, color='green')
    ax.scatter3D(points[:, 0], points[:, 1], points[:, 2])

    ax.text2D(0, 0.05, 'points: ' + str(len(points)), transform=ax.transAxes, fontsize=16, color='blue')
    ax.text2D(0, 0, 'faces: ' + str(len(hull)), transform=ax.transAxes, fontsize=16, color='blue')

    return fig, ax

def draw_gift_wrapping_3d(points, hull):
    fig, ax = init_visualization_3d(points, hull)

    for i in range(len(hull) - 1):
        simplex_points = points[hull[i:i + 2] + [hull[i]]]

        tri = Poly3DCollection([simplex_points], color='gray', alpha=0.3)
        ax.add_collection3d(tri)

    # Connect the last and first points to close the loop
    simplex_points = points[[hull[-1], hull[0], hull[1]]]
    tri = Poly3DCollection([simplex_points], color='gray', alpha=0.3)
    ax.add_collection3d(tri)

    plt.show()

points = generate_banana_points(obj_file_path)
hull = gift_wrapping_3d(points)

draw_gift_wrapping_3d(points, hull)

import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection
from scipy.spatial import ConvexHull
from tkinter import filedialog
import tkinter as tk
import numpy as np

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
        
    return [x_coordinates, y_coordinates, z_coordinates]

def project_to_2d(points_3d):
    # Simple projection: ignore the Z-coordinate
    return [points_3d[0], points_3d[1]]

def rotate_points(points_3d, angle):
    rotation_matrix = np.array([[np.cos(angle), -np.sin(angle)], [np.sin(angle), np.cos(angle)]])
    rotated_points = np.dot(rotation_matrix, points_3d[:2])
    return rotated_points

def get_convex_hull(points):
    # Transpose the points for the ConvexHull function
    points_transposed = list(zip(points[0], points[1]))
    hull = ConvexHull(points_transposed)
    return hull

def init_visualization_3d(points, hull):
    fig = plt.figure(figsize=(8, 8))
    ax = fig.add_subplot(111, projection='3d')

    ax.scatter(points[0], points[1], points[2])

    # Draw convex hull in 3D
    for simplex in hull.simplices:
        simplex_points = hull.points[simplex]
        poly = Poly3DCollection([simplex_points], edgecolor='k', alpha=0.3)
        ax.add_collection3d(poly)

    ax.set_xlabel('X Axis', fontsize=14, color='green')
    ax.set_ylabel('Y Axis', fontsize=14, color='green')
    ax.set_zlabel('Z Axis', fontsize=14, color='green')

    return fig, ax

def init_visualization_2d(points, hull, title):
    fig, ax = plt.subplots()

    ax.scatter(points[0], points[1])
    ax.set_xlabel('X Axis', fontsize=14, color='green')
    ax.set_ylabel('Y Axis', fontsize=14, color='green')

    for simplex in hull.simplices:
        simplex_points = hull.points[simplex, :2]  # Access the points within the simplex
        simplex_points = list(simplex_points)
        simplex_points.append(simplex_points[0])  # Closing the polygon
        simplex_points = list(zip(*simplex_points))
        ax.plot(simplex_points[0], simplex_points[1], 'k-')

    ax.text(0, 1.05, 'points: ' + str(len(points[0])), transform=ax.transAxes, fontsize=16, color='blue')
    ax.text(0, 1, 'faces: ' + str(len(hull.simplices)), transform=ax.transAxes, fontsize=16, color='blue')
    ax.set_title(title)

    return fig, ax

# Load points from OBJ file
points_3d = load_xyz_coordinates(obj_file_path)

# Get convex hull in 3D for the original view
convex_hull_3d = ConvexHull(np.array(points_3d).T)
fig_3d, ax_3d = init_visualization_3d(points_3d, convex_hull_3d)

# Project 3D points to 2D
points_2d = project_to_2d(points_3d)

# Get convex hull in 2D for the original view
convex_hull_2d = get_convex_hull(points_2d)
fig_2d, ax_2d = init_visualization_2d(points_2d, convex_hull_2d, title="Original View")

# Rotate points for the top view
rotated_points_top = rotate_points(points_2d, np.pi/2)
convex_hull_top = get_convex_hull(rotated_points_top)
fig_top, ax_top = init_visualization_2d(rotated_points_top, convex_hull_top, title="Top View")

# Rotate points for the side view
rotated_points_side = rotate_points(points_2d, np.pi)
convex_hull_side = get_convex_hull(rotated_points_side)
fig_side, ax_side = init_visualization_2d(rotated_points_side, convex_hull_side, title="Side View")

plt.show(block=False)
plt.pause(0.001)

plt.show(block=False)
plt.pause(0.001)

plt.show(block=False)
plt.pause(0.001)

plt.show()

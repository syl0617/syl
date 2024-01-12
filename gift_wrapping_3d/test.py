import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection
import numpy as np
from scipy.spatial import ConvexHull
from tkinter import filedialog
import tkinter as tk


# obj_file_path = 'gift_wrapping_3d\\waterbottle.obj'

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

def get_hull_faces(points):
    hull = ConvexHull(points)
    return hull

def init_visualization_3d(points, hull):
    fig = plt.figure(figsize=(8, 8))
    ax = fig.add_subplot(projection='3d')

    ax.set_xlabel('X Axis', fontsize=14, color='green')
    ax.set_ylabel('Y Axis', fontsize=14, color='green')
    ax.set_zlabel('Z Axis', fontsize=14, color='green')
    ax.scatter3D(points[:, 0], points[:, 1], points[:, 2])

    ax.text2D(0, 0.05, 'points: ' + str(len(points)), transform=ax.transAxes, fontsize=16, color='blue')
    ax.text2D(0, 0, 'faces: ' + str(len(hull.simplices)), transform=ax.transAxes, fontsize=16, color='blue')

    return fig, ax

def draw_convex_hull_3d(points, hull):
    fig, ax = init_visualization_3d(points, hull)

    for simplex in hull.simplices:
        simplex_points = points[simplex]
        
        # Calculate the normal vector of the triangle
        normal_vector = np.cross(simplex_points[1] - simplex_points[0], simplex_points[2] - simplex_points[0])
        
        # Check if the normal vector points in the positive z direction
        if normal_vector[2] > 0:
            tri = Poly3DCollection([simplex_points], color='gray', alpha=0.3)
            ax.add_collection3d(tri)

    # plt.show()

def init_2d_visualization(points, hull):
    fig, ax = plt.subplots(figsize=(8, 8))

    ax.set_xlabel('X Axis', fontsize=14, color='green')
    ax.set_ylabel('Y Axis', fontsize=14, color='green')
    ax.scatter(points[:, 0], points[:, 1])

    ax.text(0, 1.05, 'points: ' + str(len(points)), transform=ax.transAxes, fontsize=16, color='blue')
    ax.text(0, 1.0, 'faces: ' + str(len(hull.simplices)), transform=ax.transAxes, fontsize=16, color='blue')

    return fig, ax

def draw_convex_hull_2d(points, hull):
    fig, ax = init_2d_visualization(points, hull)

    for simplex in hull.simplices:
        simplex_points = points[simplex, :2]  # Extract only x and y coordinates
        
        # Calculate the signed area of the triangle
        area = np.cross(simplex_points[1] - simplex_points[0], simplex_points[2] - simplex_points[0])
        
        # Check if the signed area is positive (counter-clockwise winding)
        if area > 0:
            poly = plt.Polygon(simplex_points, edgecolor='black', facecolor='none', alpha=0.7)
            ax.add_patch(poly)

    # plt.show()

def gift_wrapping(points):
    hull = []
    
    # Find the point with the minimum x-coordinate (and the smallest y-coordinate in case of ties)
    start_point = min(points, key=lambda p: (p[0], p[1]))

    while True:
        hull.append(start_point)
        endpoint = points[0]

        for next_point in points:
            if np.array_equal(endpoint, start_point) or (
                np.any(np.cross(np.subtract(endpoint, start_point), np.subtract(next_point, start_point)) < 0)
            ):
                endpoint = next_point

        start_point = endpoint

        if np.array_equal(start_point, hull[0]):
            break

    return np.array(hull)


points = generate_banana_points(obj_file_path)
# hull = get_hull_faces(points)

hull = gift_wrapping(points)

draw_convex_hull_3d(points, hull)
plt.pause(0.1)  # Add a small pause to allow the 3D plot to render


draw_convex_hull_2d(points, hull)
plt.show()

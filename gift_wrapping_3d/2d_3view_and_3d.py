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

def load_obj(file_path):
    vertices = []
    faces = []

    with open(file_path, 'r') as file:
        for line in file:
            if line.startswith('v '):
                values = list(map(float, line.split()[1:]))
                vertices.append(values)
            elif line.startswith('f '):
                indices = [int(idx.split('/')[0]) - 1 for idx in line.split()[1:]]
                faces.append(indices)

    return np.array(vertices), np.array(faces)

def init_visualization_3d(vertices, faces, hull):
    fig = plt.figure(figsize=(12, 6))

    # 3D subplot
    ax_3d = fig.add_subplot(121, projection='3d')

    # Plot 3D triangles for the convex hull
    for simplex in hull.simplices:
        simplex_points = vertices[simplex]
        poly = Poly3DCollection([simplex_points], edgecolor='k', alpha=0.3)
        ax_3d.add_collection3d(poly)

    # Plot 3D triangles for the original 3D model
    original_model = Poly3DCollection([vertices[face] for face in faces], edgecolor='b', alpha=0.5)
    ax_3d.add_collection3d(original_model)

    ax_3d.set_xlabel('X Axis', fontsize=14, color='green')
    ax_3d.set_ylabel('Y Axis', fontsize=14, color='green')
    ax_3d.set_zlabel('Z Axis', fontsize=14, color='green')

    # Set equal aspect ratio for all axes
    ax_3d.set_box_aspect([np.ptp(coord) for coord in vertices.T])

    # Set axis limits to encompass the entire object
    ax_3d.set_xlim([np.min(vertices[:, 0]), np.max(vertices[:, 0])])
    ax_3d.set_ylim([np.min(vertices[:, 1]), np.max(vertices[:, 1])])
    ax_3d.set_zlim([np.min(vertices[:, 2]), np.max(vertices[:, 2])])

    # 2D subplot
    ax_2d = fig.add_subplot(122)

    # Get convex hull in 2D for the original view
    convex_hull_2d = ConvexHull(vertices[:, :2])
    for simplex in convex_hull_2d.simplices:
        simplex_points = vertices[simplex, :2]  # Access the points within the simplex
        simplex_points = list(simplex_points)
        simplex_points.append(simplex_points[0])  # Closing the polygon
        simplex_points = list(zip(*simplex_points))
        ax_2d.plot(simplex_points[0], simplex_points[1], 'k-')

    ax_2d.scatter(vertices[:, 0], vertices[:, 1])
    ax_2d.set_xlabel('X Axis', fontsize=14, color='green')
    ax_2d.set_ylabel('Y Axis', fontsize=14, color='green')

    plt.show()

# Load vertices and faces from OBJ file
vertices, faces = load_obj(obj_file_path)

# Get convex hull in 3D for the original view
convex_hull_3d = ConvexHull(vertices)

# Initialize 3D and 2D visualizations
init_visualization_3d(vertices, faces, convex_hull_3d)



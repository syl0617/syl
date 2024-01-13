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

def init_visualization_3d(vertices, faces, hull, show_labels=True):
    fig = plt.figure(figsize=(18, 6))

    # # 3D subplot
    # ax_3d = fig.add_subplot(141, projection='3d')

    # # Plot 3D triangles for the convex hull
    # for simplex in hull.simplices:
    #     simplex_points = vertices[simplex]
    #     poly = Poly3DCollection([simplex_points], edgecolor='k', alpha=0.3)
    #     ax_3d.add_collection3d(poly)

    # # Plot 3D triangles for the original 3D model
    # original_model = Poly3DCollection([vertices[face] for face in faces], edgecolor='b', alpha=0.5)
    # ax_3d.add_collection3d(original_model)

    # if show_labels:
    #     ax_3d.set_xlabel('X Axis', fontsize=14, color='green')
    #     ax_3d.set_ylabel('Y Axis', fontsize=14, color='green')
    #     ax_3d.set_zlabel('Z Axis', fontsize=14, color='green')
    # else:
    #     ax_3d.set_xticks([])
    #     ax_3d.set_yticks([])
    #     ax_3d.set_zticks([])

    # # Set equal aspect ratio for all axes
    # ax_3d.set_box_aspect([np.ptp(coord) for coord in vertices.T])

    # # Set axis limits to encompass the entire object
    # ax_3d.set_xlim([np.min(vertices[:, 0]), np.max(vertices[:, 0])])
    # ax_3d.set_ylim([np.min(vertices[:, 1]), np.max(vertices[:, 1])])
    # ax_3d.set_zlim([np.min(vertices[:, 2]), np.max(vertices[:, 2])])

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

# Load vertices and faces from OBJ file
vertices, faces = load_obj(obj_file_path)

# Get convex hull in 3D for the original view
convex_hull_3d = ConvexHull(vertices)

# Initialize 3D and 2D visualizations
init_visualization_3d(vertices, faces, convex_hull_3d, show_labels=False)

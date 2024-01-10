from mpl_toolkits.mplot3d.art3d import Poly3DCollection, Line3DCollection
import mpl_toolkits.mplot3d as a3
import matplotlib.colors as colors
import matplotlib.pyplot as plt
import numpy as np
from convex_hull import gift_wrapping, Point
from random import randrange

import matplotlib.patches as patches
from matplotlib.collections import PatchCollection


obj_file_path = 'gift_wrapping_3d\\low_poly_banana3.obj'

def load_xyz_coordinates(file_path):
    x_coordinates = []
    y_coordinates = []
    z_coordinates = []
    xyz_coordinates = []

    with open(file_path, 'r') as file:
        for line in file:
            if line.startswith('v '):
                values = list(map(float, line.split()[1:]))
                x_coordinates.append(values[0])
                y_coordinates.append(values[1])
                z_coordinates.append(values[2])
                xyz_coordinates.append(values)
        
    return [x_coordinates, y_coordinates, z_coordinates, xyz_coordinates]
    # return [x_coordinates[:int(len(x_coordinates)/2)], y_coordinates[:int(len(x_coordinates)/2)], z_coordinates[:int(len(x_coordinates)/2)], xyz_coordinates[:int(len(x_coordinates)/2)]]
    #half

    # return np.array(x_coordinates), np.array(y_coordinates), np.array(z_coordinates), np.array(xyz_coordinates)

# random number
def generate_random_points(num_points, max_coord):
    xs = [randrange(max_coord) for i in range(num_points)]
    ys = [randrange(max_coord) for i in range(num_points)]
    zs = [randrange(max_coord) for i in range(num_points)]
    labels = ["(" + str(x) + "," + str(y) + "," + str(z) + ")" for x, y, z in list(zip(xs, ys, zs))]

    return [xs, ys, zs, labels]

def generate_banana_points(file_path):
    return load_xyz_coordinates(file_path)

def generate_manual_points(num_points, max_coord):
    points = [[], [], [], []]
    print(f"Enter coordinates and separate values with space..for example: 1 2 3\n")
    i = 1
    while i <= num_points:
        try:
            coord_i = input(f"Enter x, y & z for point {i}:")
            values = coord_i.split(" ")
            if len(values) == 3:
                for val in values:
                    if val.isnumeric() and 0 <= int(val) <= max_coord:
                        pass
                    else:
                        raise ValueError("!!!Exception!!!, all coordinates must be numeric.\n")
            else:
                raise ValueError(f"!!!Exception!!!, expected 3 coordinates, got {len(values)}.\n")

            points[0].append(int(values[0]))
            points[1].append(int(values[1]))
            points[2].append(int(values[2]))
            points[3].append("(" + values[0] + "," + values[1] + "," + values[2] + ")")
            i = i + 1
        except ValueError as verror:
            print(f"!!!Exception!!!, {verror}")
    return points


def generate_points(num_points, max_coord):
    """
        Generates random 3D points with coordinates between 0 and max_coord.

        Parameters:
            num_points (int): Number of points to generate
            max_coord (int): Maximum value for each coordinate

        Returns:
            points (list of lists): x, y, z coordinates and labels for points
        """
    while True:
        try:
            nmode = input("Enter 'm' for manually inserting points coordinates or 'r' to generate random points:/ 'b: banana")
            if nmode == "m":  # manual generation
                points = generate_manual_points(num_points, max_coord)
                break
            elif nmode == "r":  # random points
                points = generate_random_points(num_points, max_coord)
                break
            elif nmode == "b": # banana sample
                points = generate_banana_points(obj_file_path)
                break
            else:
                raise Exception(f"!!!Exception!!!, expected only 'r' or 'm', got '{nmode}'")
        except Exception as exc:
            print(f"!!!Exception!!!, {exc}")
    return points


def get_points_num():
    while True:
        try:
            points_num = int(input("Enter number of points:"))
            print(f" n: {points_num}")
            break
        except ValueError:
            print("!!!Exception!!!, not a valid number, try again")
    return points_num


def get_hull_faces(points):
    """
    Makes points proper for convex hull algorithm

    Parameters:
        points (list of lists): x, y, z coordinates and labels for points

    Returns:
        c_hull : Faces of convex hull
    """
    P = []
    for j in range(len(points[0])):
        P.append(Point(points[0][j], points[1][j], points[2][j]))

    c_hull = gift_wrapping(P)
    return c_hull


def init_visualization(points, hull_len):
    """
   Initializes 3D matplotlib visualization and adds points.

   Parameters:
       points (list): x, y, z coords and labels for points
       hull_len (int): Number of faces in convex hull

   Returns:
       fig (matplotlib Figure): Figure object
       ax (Axes3D): 3D axes
   """
    fig = plt.figure(figsize=(8, 8))
    ax = fig.add_subplot(projection='3d')

    ax.set_xlabel('X Axis', fontsize=14, color='green')
    ax.set_ylabel('Y Axis', fontsize=14, color='green')
    ax.set_zlabel('Z Axis', fontsize=14, color='green')
    ax.scatter3D(points[0], points[1], points[2])

    # show number of points and faces
    ax.text2D(0, 0.05, 'points: ' + str(len(points[0])), transform=ax.transAxes, fontsize=16, color='blue')
    ax.text2D(0, 0, 'faces: ' + str(hull_len), transform=ax.transAxes, fontsize=16, color='blue')

    # print label of points
    for p in range(len(points[3])):
        pass
        # ax.text(points[0][p], points[1][p], points[2][p], points[3][p], ha='center')


    return fig, ax


# drawing algorithm
def draw_convex_hull(points, hull):
    """
    Iteratively draws convex hull faces one by one.
    """
    triangles = []
    for c in range(len(hull)):  # faces in convex hull

        # Adding the X, Y, and Z axis lines
        x = []
        y = []
        z = []

        x.append(hull[c].points[0].x)
        y.append(hull[c].points[0].y)
        z.append(hull[c].points[0].z)

        x.append(hull[c].points[1].x)
        y.append(hull[c].points[1].y)
        z.append(hull[c].points[1].z)

        x.append(hull[c].points[2].x)
        y.append(hull[c].points[2].y)
        z.append(hull[c].points[2].z)

        tri_points = list(zip(x, y, z))

        print(f"({c}) Face points : {tri_points}")
        triangles.append(tri_points)

        # Create a new Poly3DCollection object and add to the list
        tri3d = a3.art3d.Poly3DCollection(triangles)
        tri3d.set_color(colors.rgb2hex([0.5, 0.5, 0.5]))
        tri3d.set_alpha(0.3)

        if c == len(hull) - 1:
            fig, ax = init_visualization(points, len(hull))
            ax.add_collection3d(tri3d)

            fig.canvas.draw()

        # plt.pause(1)

    plt.show()



def init_2d_visualization(points, hull_len):
    """
    Initializes 2D matplotlib visualization and adds points.

    Parameters:
        points (list): x, y coords for points
        hull_len (int): Number of faces in convex hull

    Returns:
        fig (matplotlib Figure): Figure object
        ax (Axes): 2D axes
    """
    fig, ax = plt.subplots(figsize=(8, 8))

    ax.set_xlabel('X Axis', fontsize=14, color='green')
    ax.set_ylabel('Y Axis', fontsize=14, color='green')
    ax.scatter(points[0], points[1])

    # show number of points and faces
    ax.text(0, 1.05, 'points: ' + str(len(points[0])), transform=ax.transAxes, fontsize=16, color='blue')
    ax.text(0, 1.0, 'faces: ' + str(hull_len), transform=ax.transAxes, fontsize=16, color='blue')

    return fig, ax

def draw_convex_hull_2d(points, hull):
    """
    Iteratively draws convex hull faces one by one in 2D.
    """
    fig, ax = init_2d_visualization(points, len(hull))

    for c in range(len(hull)):  # faces in convex hull

        # Adding the X and Y axis lines
        x = [hull[c].points[0].x, hull[c].points[1].x, hull[c].points[2].x]
        y = [hull[c].points[0].y, hull[c].points[1].y, hull[c].points[2].y]

        # Draw the convex hull face using a PatchCollection
        face = patches.Polygon(list(zip(x, y)), edgecolor='black', facecolor='none')
        ax.add_collection(PatchCollection([face], edgecolor='black', facecolor='none', alpha=0.7))

    plt.show()



if __name__ == "__main__":
    nrange = 60
    npoints = get_points_num()

    points = generate_points(npoints, nrange)

    hull = get_hull_faces(points)

    # print(points)
    # print(hull)
    draw_convex_hull(points, hull)
    draw_convex_hull_2d(points, hull)

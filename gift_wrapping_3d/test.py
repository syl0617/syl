import numpy as np

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
                xyz_coordinates.append("(" + str(values[0]) + "," + str(values[1]) + "," + str(values[2]) + ")")

    return np.array(x_coordinates), np.array(y_coordinates), np.array(z_coordinates), np.array(xyz_coordinates)

# Replace 'path/to/banana.obj' with the actual path to your banana .obj file
obj_file_path = 'gift_wrapping_3d\\banana.obj'
x, y, z, xyz = load_xyz_coordinates(obj_file_path)

print("X Coordinates:", x)
print("Y Coordinates:", y)
print("Z Coordinates:", z)
print("Combined XYZ Coordinates:", xyz)
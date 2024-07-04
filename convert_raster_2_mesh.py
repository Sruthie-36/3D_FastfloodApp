import bpy
import numpy as np
import rasterio
from affine import Affine

def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)

def create_flood_mesh(heightmap, width, height, transform):
    clear_scene()
    vertices = []
    faces = []
    
    vertex_map = {}
    new_index = 0

    for i in range(height):
        for j in range(width):
            if heightmap[i, j] > 0.5:  # Modify if needed
                x, y = transform * (j, i) # transform
                vertex_map[(i, j)] = new_index
                vertices.append((x, y, heightmap[i, j]))  # Use transformed coordinates
                new_index += 1

    for i in range(height - 1):
        for j in range(width - 1):
            if (i, j) in vertex_map and (i, j + 1) in vertex_map and (i + 1, j + 1) in vertex_map and (i + 1, j) in vertex_map:
                faces.append((
                    vertex_map[(i, j)],
                    vertex_map[(i, j + 1)],
                    vertex_map[(i + 1, j + 1)],
                    vertex_map[(i + 1, j)]
                ))

    mesh = bpy.data.meshes.new("WaterMesh")
    mesh.from_pydata(vertices, [], faces)
    mesh.update()

    obj = bpy.data.objects.new("FloodObject", mesh)
    bpy.context.collection.objects.link(obj)
    bpy.context.view_layer.objects.active = obj

    # Add transform info for georeferencing
    affine_transform = {
        "a": transform.a,
        "b": transform.b,
        "c": transform.c,
        "d": transform.d,
        "e": transform.e,
        "f": transform.f
    }

    # Calculate bounds in world coordinates
    min_x, min_y = transform * (0, 0)
    max_x, max_y = transform * (width, height)
    bounds = {
        "min_x": min_x,
        "min_y": min_y,
        "max_x": max_x,
        "max_y": max_y
    }

    # Assign properties to user data
    obj.data["affine_transform"] = affine_transform
    obj.data["bounds"] = bounds

    # Log properties to verify
    print("Affine Transform:", affine_transform)
    print("Bounds:", bounds)


src = rasterio.open('flood_height.tif')
array = src.read(1)
transform = src.transform

create_flood_mesh(array, array.shape[1], array.shape[0], transform)
bpy.ops.export_scene.gltf(filepath="D:/flood_model_test_output.glb", export_apply=True, export_extras=True)

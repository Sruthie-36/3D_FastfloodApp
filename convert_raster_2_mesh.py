import rasterio
import json
import numpy as np
from pyproj import Transformer

def raster_to_georeferenced_json(raster_file, json_file, src_crs, dest_crs="EPSG:4326"):
    transformer = Transformer.from_crs(src_crs, dest_crs, always_xy=True)

    with rasterio.open(raster_file) as dataset:
        band = dataset.read(1)
        transform = dataset.transform

        elevation_list = []
        rows, cols = band.shape
        for row in range(rows):
            for col in range(cols):
                x, y = rasterio.transform.xy(transform, row, col)
                lon, lat = transformer.transform(x, y)
                elevation = band[row, col]
                if not np.isnan(elevation):
                    elevation_list.append({'longitude': lon, 'latitude': lat, 'elevation': elevation})

    with open(json_file, 'w') as f:
        json.dump(elevation_list, f)

# Example usage
raster_to_georeferenced_json('flood_height_s1.tif', 'output_3dmesh_s1.json', 'EPSG:32620')  # Replace 'EPSG:32633' with your raster's CRS


#import rasterio
#import json
#import numpy as np

#def raster_to_georeferenced_json(raster_file, json_file):
#    with rasterio.open(raster_file) as dataset:
#        band = dataset.read(1)
#        transform = dataset.transform
#
#        elevation_list = []
#        rows, cols = band.shape
#        for row in range(rows):
#            for col in range(cols):
#                elevation = band[row, col]
#                if not np.isnan(elevation):
#                    x, y = rasterio.transform.xy(transform, row, col)
#                    elevation_list.append({'longitude': x, 'latitude': y, 'elevation': elevation})
#
#    with open(json_file, 'w') as f:
#        json.dump(elevation_list, f)

#raster_to_georeferenced_json('flood_height.tif', 'output_3dmesh.json')




#import gdal
#import numpy as np
#import json

#def raster_to_georeferenced_json(raster_file, json_file):
    # Open the raster file
#    dataset = gdal.Open(raster_file)
#    band = dataset.GetRasterBand(1)
#    elevation_data = band.ReadAsArray()

    # Get geotransform and metadata
#    geotransform = dataset.GetGeoTransform()
#    x_origin = geotransform[0]
#    y_origin = geotransform[3]
#    pixel_width = geotransform[1]
#    pixel_height = geotransform[5]

    # Convert elevation data to a list of dictionaries with georeferenced coordinates
#    elevation_list = []
#    rows, cols = elevation_data.shape
#    for row in range(rows):
#        for col in range(cols):
#            x = x_origin + col * pixel_width
#            y = y_origin + row * pixel_height
#            elevation = elevation_data[row, col]
#            elevation_list.append({'longitude': x, 'latitude': y, 'elevation': elevation})

    # Write the data to a JSON file
#    with open(json_file, 'w') as f:
#        json.dump(elevation_list, f)

#raster_to_georeferenced_json('flood_height.tif', 'output_3Dmesh_1.json')

let viewer;
document.addEventListener('DOMContentLoaded', () => {

	// // Create the toggle button
    // const toggleButton = L.DomUtil.create('div', 'leaflet-control leaflet-bar');
    // toggleButton.id = 'toggleButton';
    // toggleButton.innerHTML = 'Switch to 3D Viewer';
    // toggleButton.style.position = 'absolute';
    // toggleButton.style.top = '10px';
    // toggleButton.style.right = '10px';
    // toggleButton.style.backgroundColor = 'white';
    // toggleButton.style.padding = '10px';
    // toggleButton.style.cursor = 'pointer';
    // toggleButton.style.fontSize = '16px';
    // toggleButton.style.border = '2px solid #ccc';
    // toggleButton.style.borderRadius = '4px';
    // toggleButton.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
    // toggleButton.style.color = 'black';
    // //toggleButton.style.zIndex = '1000'; // Ensure it's above other elements

    // document.getElementById('map').appendChild(toggleButton);


	// Custom control for the toggle button
	const ToggleControl = L.Control.extend({
		onAdd: function(map) {
			const container = L.DomUtil.create('div');
            container.style.backgroundColor = 'DodgerBlue';
            container.style.padding = '8px';
            container.style.cursor = 'pointer';
            container.style.fontSize = '12px';
            container.style.border = '2px solid #ccc';
            container.style.borderRadius = '4px';
            container.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
            container.style.color = 'black'; // Ensure text is visible

            container.id = 'toggleButton';
            container.innerHTML = '3D View';
            return container;
        },
		onRemove: function(map) {
			// Nothing to do here
		}
	});
	
		
			
		
		
	// Add the custom control to the map
	map.addControl(new ToggleControl({ position: 'topright' }));

	// const toggleButton = document.getElementById('toggleButton');
	//let is2D = true; // Initial state

	// function show2DViewer() {
    //     console.log('2D Viewer triggered');

	// 	viewer.destroy();
	// 	document.getElementById('cesiumOverlay').style.display = 'none';

    //     toggleButton.innerHTML = '3D View';
    // }

    function show3DViewer() {
        console.log('3D Viewer triggered');
		view_in_3d()
        //toggleButton.innerHTML = '2D View';
    }

	// tippy(toggleButton, {
	// 	content: '3D View',
	// 	placement: 'bottom',
	// 	animation: 'scale',
	// 	theme: 'light',
	// });
	
	toggleButton.addEventListener('click', () => {
		//if (is2D) {
			show3DViewer();
			//tippy(toggleButton).setContent('2D View');
		//} else {
			//show2DViewer();
			//tippy(toggleButton).setContent('3D View');
		//}
		//is2D = !is2D;
	});
	 // Add a 2D view button to Cesium's toolbar
	//  const cesiumToolbar = document.querySelector('.toolbar');

	function button_style (button1) {
		button1.style.backgroundColor = 'DodgerBlue';
		button1.style.padding = '8px';
		button1.style.cursor = 'pointer';
		button1.style.fontSize = '12px';
		button1.style.border = '2px solid #ccc';
		button1.style.borderRadius = '4px';
		button1.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
		button1.style.color = 'black';
	 //cesiumButton.style.marginRight = '0px'; // Space between toolbar buttons
	 	button1.style.float = 'Left';
	}
	const meshbutton = document.getElementById('add_fld_mesh');
	const calc_expbutton = document.getElementById('calculate_exposure_3d');
	const stats_button = document.getElementById('show_stats');
	const textured_button = document.getElementById('textured_3d');
	//  cesiumButton.innerHTML = '2D View';
	button_style(meshbutton);
	button_style(calc_expbutton);
	button_style(stats_button);
	button_style(textured_button);	


	 const cesiumButton = document.getElementById('swth_2D_View');
	 cesiumButton.innerHTML = '2D View';
	 cesiumButton.style.backgroundColor = 'DodgerBlue';
	 cesiumButton.style.padding = '8px';
	 cesiumButton.style.cursor = 'pointer';
	 cesiumButton.style.fontSize = '12px';
	 cesiumButton.style.border = '2px solid #ccc';
	 cesiumButton.style.borderRadius = '4px';
	 cesiumButton.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
	 cesiumButton.style.color = 'black';
	 //cesiumButton.style.marginRight = '0px'; // Space between toolbar buttons
	 cesiumButton.style.float = 'right';
 
	//  cesiumToolbar.appendChild(cesiumButton);
 
	 cesiumButton.addEventListener('click', () => {
		console.log('2D Viewer triggered');
		if (viewer) {
			viewer.destroy();
			viewer = null;
		}
		
		// Hide the overlay
		document.getElementById('cesiumOverlay').style.display = 'none';
		
		// tippy(toggleButton).setContent('Switch to 3D Viewer');
		// is2D = true;
	 });
	 
	 meshbutton.addEventListener('click', () => {
		//window.open('/view_floodmesh.html', '_blank');
		window.open('http://localhost:8081/3d_dev/water.html', '_blank')
	
			console.log("entity added", entity1)

	 });
	 

	     // Add a file input button to Cesium's toolbar
		 //const cesiumToolbar = document.querySelector('.cesium-viewer-toolbar');
		 const fileInputButton = document.getElementById('input_ovly_file');
		 //fileInputButton.innerHTML = 'input_ovly_file';
		 fileInputButton.style.backgroundColor = 'DodgerBlue';
		 fileInputButton.style.padding = '8px';
		 fileInputButton.style.cursor = 'pointer';
		 fileInputButton.style.fontSize = '12px';
		 fileInputButton.style.border = '2px solid #ccc';
		 fileInputButton.style.borderRadius = '4px';
		 fileInputButton.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
		 fileInputButton.style.color = 'black';
		 fileInputButton.style.float = 'left'; // Align to the left
	 
		 //cesiumToolbar.appendChild(fileInputButton);
	 
		 const fileInput = document.createElement('input');
		 fileInput.type = 'file';
		 fileInput.className = 'file-input';
		 fileInput.accept = ".tif,.tiff"; // Accept only GeoTIFF files
	 
		 document.body.appendChild(fileInput);
	 
		 fileInputButton.addEventListener('click', () => {
			 fileInput.click();
		 });
		 

		 fileInput.addEventListener('change', function(event) {
			if (typeof event.target.files[0] !== "undefined" && event.target.files[0].name.length > 0) {
				const file = event.target.files[0];
				LoadMap1(file);
			} else {
				alert('Cannot read this file');
			}
		});
	
		async function LoadMap1(file) {
			var reader = new FileReader();
			try {
				reader.readAsArrayBuffer(file);
				reader.onloadend = async function() {
					var arrayBuffer = reader.result;
					try {
						const georaster = await parseGeoraster(arrayBuffer);
						console.log("loaded raster", georaster);
	
						const projection = georaster.projection;
						//const dx = georaster.pixelWidth;
						let coordinates = null;
	
						if (projection !== 4326) {
							// Reproject to WGS84 (EPSG:4326) using proj4
							proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
							const sourceProj = proj4.defs(`EPSG:${projection}`);
							const targetProj = proj4.defs("EPSG:4326");
	
							coordinates = {
								xmin: proj4(sourceProj, targetProj, [georaster.xmin, georaster.ymin]),
								xmax: proj4(sourceProj, targetProj, [georaster.xmax, georaster.ymax])
								
							};
							console.log(coordinates.xmin, coordinates.xmax)
						} else {
							coordinates = {
								xmin: [georaster.xmin, georaster.ymin],
								xmax: [georaster.xmax, georaster.ymax]
							};
						}
	
						const rectangle = Cesium.Rectangle.fromDegrees(
							coordinates.xmin[0],
							coordinates.xmin[1],
							coordinates.xmax[0],
							coordinates.xmax[1]
						);

	
						const canvas = document.createElement('canvas');
						canvas.width = georaster.width;
						canvas.height = georaster.height;
						const context = canvas.getContext('2d');
	
						const imageData = context.createImageData(georaster.width, georaster.height);
						for (let y = 0; y < georaster.height; y++) {
							for (let x = 0; x < georaster.width; x++) {
								
								const value = georaster.values[y][x];
								//console.log(value)
								//const color = getColorForValue(value);
								const index = (y * canvas.width + x) * 4;

						//for (let i = 0; i < georaster.values[0].length; i++) {
							//const value = georaster.values[0][i];
								imageData.data[index * 4] = value;
								imageData.data[index * 4 + 1] = value;
								imageData.data[index * 4 + 2] = value;
								imageData.data[index * 4 + 3] = 255;
							}
						}
						// 	if (value) {
						// 		imageData.data[index] = 125; // 6Red
						// 		imageData.data[index + 1] = 125; //57 Green
						// 		imageData.data[index + 2] = 125; // 176Blue
						// 		imageData.data[index + 3] = 255; // Alpha
						// }
						context.putImageData(imageData, 0, 0);
	
						const url = canvas.toDataURL();
						const imageryProvider = new Cesium.SingleTileImageryProvider({
							url: url,
							rectangle: Cesium.Rectangle.fromDegrees(coordinates.xmin[1], coordinates.xmin[0], coordinates.xmax[1], coordinates.xmax[0]) // Adjust to your data extent
							});
							viewer.scene.imageryLayers.addImageryProvider(imageryProvider);
						// viewer.entities.add({
						// 	rectangle: {
						// 		coordinates: rectangle,
						// 		material: new Cesium.ImageMaterialProperty({
						// 			image: url,
						// 			transparent: false
						// 		})
						// 	}
							
						//});
						viewer.camera.flyTo({ destination: rectangle });
	
					} catch (e) {
						alert("Could not load DEM, possibly incorrect file type (should be GeoTIFF), or lacking a coordinate system. More detail here:" + e.message);
					}
				};
			} catch (e) {
				alert("Could not load dem, possibly incorrect file type (should be GeoTIFF), or lacking a coordinate system. More detail here:" + e.message);
			}
		}
		
	});


function view_in_3d() {
		//Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZjkyMzk4ZC1iMzdhLTRhNGMtYTAyMy1hNjE3YjMwMTQ3YTkiLCJpZCI6MTkwNTc2LCJpYXQiOjE3MTYyMDcwMzV9.K5Xn9YIdcDqEJnAsDm9tbMR8e_fURZ-Rn6jpMp7EDSI"
			
		//console.log(Cesium);
		// Cesium.Ion.defaultAccessToken = null;
		// Show the overlay
		document.getElementById('cesiumOverlay').style.display = 'block';
		// viewer = new Cesium.Viewer('cesiumContainer');
		viewer = new Cesium.Viewer('cesiumContainer', {
						terrain: Cesium.Terrain.fromWorldTerrain({
							requestWaterMask: false,
							}),
							//baseLayerPicker: false
					});


		// Add legend to the Cesium viewer bottom
	function addLegend() {
		const legend = document.createElement('div');
		legend.id = 'legend';
		legend.style.position = 'absolute';
		legend.style.bottom = '20px';
		legend.style.right = '10px';
		legend.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
		legend.style.padding = '10px';
		legend.style.borderRadius = '5px';
		legend.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
		legend.style.zIndex = '1000';
		legend.style.margin = '0px';
		legend.style.float = 'right';
		legend.innerHTML = `
			<h3 style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold;">Water Height (m)</h3>
			<div style="display: flex; align-items: center; margin-bottom: 5px;"><span style="display: inline-block; width: 20px; height: 20px; margin-right: 10px; background-color: #F0FFFF22"></span> 0 m</div>
			<div style="display: flex; align-items: center; margin-bottom: 5px;"><span style="display: inline-block; width: 20px; height: 20px; margin-right: 10px; background-color: #89CFF0AA"></span> 0.05 m</div>
			<div style="display: flex; align-items: center; margin-bottom: 5px;"><span style="display: inline-block; width: 20px; height: 20px; margin-right: 10px; background-color: #4169E1FF"></span> 0.5 m</div>
			<div style="display: flex; align-items: center; margin-bottom: 5px;"><span style="display: inline-block; width: 20px; height: 20px; margin-right: 10px; background-color: #00008BFF"></span> 1.0 m</div>
			<div style="display: flex; align-items: center; margin-bottom: 5px;"><span style="display: inline-block; width: 20px; height: 20px; margin-right: 10px; background-color: #101045FF"></span> 10.0 m</div>
			<h3 style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold;">Buildings</h3>
			<div style="display: flex; align-items: center; margin-bottom: 5px;"><span style="display: inline-block; width: 20px; height: 20px; margin-right: 10px; background-color: Red"></span> Vulnerable </div>

		`;
		
		const viewerBottom = document.querySelector('.cesium-viewer-bottom');
		// Remove existing buttons or divs
		// while (viewerBottom.firstChild) {
		// 	viewerBottom.removeChild(viewerBottom.firstChild);
		// }
		viewerBottom.appendChild(legend);
		
		
	}

	// Call addLegend to place the legend in the viewer
	addLegend();

	

	
	let osmBuildingTileset;
        try {
      
				Cesium.createOsmBuildingsAsync().then((tileset) => {
					osmBuildingTileset = tileset;
					viewer.scene.primitives.add(osmBuildingTileset);
				});
			

        } catch (error) {
        console.log(`Error loading building tileset.
        ${error}`);

    }
	document.getElementById('textured_3d').addEventListener('click',
		function () {
			window.open('http://localhost:8081/3d_dev/water%20copy%202.html', '_blank')
			
		
			  console.log("textured 3d loaded")
		 });
	
	// Simulation results
	if(RasterWH[current_area] === null)
	{
		alert("No results to visualise on 3D!");
	}else{
		var noDataValue = RasterDEM[current_area].noDataValue;
		var projection = RasterDEM[current_area].projection;
		
	}
		let xmin = layer_WH[current_area].getBounds().getWest()
		let ymin = layer_WH[current_area].getBounds().getSouth()
		let xmax = layer_WH[current_area].getBounds().getEast()
		let ymax = layer_WH[current_area].getBounds().getNorth()
		
		// Function to get the pixel value from the raster array based on geographic coordinates
		var getPixelValueFromRasterArray = function (rasterArray, xmin, ymin, xmax, ymax, longitude, latitude) {
			const width = rasterArray[0].length;
			const height = rasterArray.length;

			// Calculate the pixel position in the raster array
			const xRatio = (longitude - xmin) / (xmax - xmin);
			const yRatio = (latitude - ymin) / (ymax - ymin);

			const x = Math.floor(xRatio * width);
			const y = Math.floor(yRatio * height);

			// Debugging: Log the pixel indices
			console.log(`Pixel X: ${x}, Pixel Y: ${y}`);

			// Return the pixel value, or a default value if out of bounds
			if (x >= 0 && x < width && y >= 0 && y < height) {
				return rasterArray[y][x];
			} else {
				return 'N/A';
			}
		}


		let rasterLayerAdded = false;
		let rasterArray = RasterWH[current_area].values[0];
		let rasterBounds = {
			xmin: layer_WH[current_area].getBounds().getWest(),
			ymin: layer_WH[current_area].getBounds().getSouth(),
			xmax: layer_WH[current_area].getBounds().getEast(),
			ymax: layer_WH[current_area].getBounds().getNorth()
		};
		// Function to get raster value at a specific position
			function getRasterValue(longitude, latitude) {
				const xmin = rasterBounds.xmin;
				const ymin = rasterBounds.ymin;
				const xmax = rasterBounds.xmax;
				const ymax = rasterBounds.ymax;

				const width = rasterArray[0].length;
				const height = rasterArray.length;
				const latStep = (rasterBounds.ymax - rasterBounds.ymin) / height;
				const longStep = (rasterBounds.xmax - rasterBounds.xmin) / width;
			
				const x = Math.floor((longitude - rasterBounds.xmin) / longStep);
				const y = Math.floor((latitude - rasterBounds.ymin) / latStep);
			
				if (x >= 0 && x < width && y >= 0 && y < height) {
					return rasterArray[y][x];
				}
				return NaN; // or some default value
			}
			// 	// Calculate the pixel position in the raster array
			// 	const xRatio = (longitude - xmin) / (xmax - xmin);
			// 	const yRatio = (latitude - ymin) / (ymax - ymin);

			// 	const x = Math.floor(xRatio * width);
			// 	const y = Math.floor(yRatio * height);

			// 	// Return the pixel value, or a default value if out of bounds
			// 	if (x >= 0 && x < width && y >= 0 && y < height) {
			// 		return rasterArray[y][x];
			// 	} else {
			// 		return 0; // Default value if out of bounds or N/A
			// 	}
			// }
			let countRange1 = 0; // For value >= 10
			let countRange2 = 0; // For value >= 1 and < 10
			let countRange3 = 0; // For value >= 0.5 and < 1
			let countRange4 = 0; // For value > 0.05 and < 0.5
			let countRange5 = 0; // For value > 0 and <= 0.05
			let countRange6 = 0; // For value <= 0

		// document.getElementById('add_fld_lvl').addEventListener('click',
		// 	function()
		// 	{
			
		if (RasterWH[current_area] != null) {
			const width = RasterWH[current_area].width;
			const height = RasterWH[current_area].height;

			function createImageFromRaster(rasterArray) {
				if (!rasterArray || rasterArray.length === 0 || rasterArray[0].length === 0) {
					console.log("error  ", rasterArray)
					console.error("Invalid raster array");
					return;
				}
				const canvas = document.createElement('canvas');
				canvas.width = width;
				canvas.height = height;
				const context = canvas.getContext('2d');
				const imageData = context.createImageData(width, height);
				//console.log("rasterarray ", rasterArray)
				for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					
					const value = rasterArray[y][x];
					//console.log(value)
					//const color = getColorForValue(value);
					const index = (y * width + x) * 4;

					
					if (value >= 10) {
						imageData.data[index] = 16; // 6Red
						imageData.data[index + 1] = 16; //57 Green
						imageData.data[index + 2] = 69; // 176Blue
						imageData.data[index + 3] = 255; // Alpha
						countRange1++;
					} else if (value >= 1) {
						imageData.data[index] = 0; // 6Red
						imageData.data[index + 1] = 0; //57 Green
						imageData.data[index + 2] = 139; // 176Blue
						imageData.data[index + 3] = 255; // Alpha
						countRange2++;
				} else if (value >= 0.5) {
						imageData.data[index] = 65; // Red
						imageData.data[index + 1] = 105; // 214Green
						imageData.data[index + 2] = 225; // 252Blue
						imageData.data[index + 3] = 255; // Alpha
						countRange3++;
				} else if (value > 0.05) {
						imageData.data[index] = 137; // Red
						imageData.data[index + 1] = 207; // Green
						imageData.data[index + 2] = 240; // Blue
						imageData.data[index + 3] = 255; // Alpha
						countRange4++;
				} else if (value > 0) {
						imageData.data[index] = 240; // Red
						imageData.data[index + 1] = 255; // Green
						imageData.data[index + 2] = 255; // Blue
						imageData.data[index + 3] = 30; // Alpha
						countRange5++;
				}	else {
						// imageData.data[index] = 255; // Red
						// imageData.data[index + 1] = 255; // Green
						// imageData.data[index + 2] = 255; // Blue
						imageData.data[index + 3] = 0;
						countRange6++;
					}
				}
			}
		
				context.putImageData(imageData, 0, 0);
				return canvas.toDataURL();
			}
		
			//   function getColorForValue(value) {
			// 	// Map water height values to color (example: blue scale)
			// 	const intensity = Math.min(255, Math.max(0, Math.floor((value / 10) * 255)));
			// 	return [0, 0, intensity];
			//   }
			
			function addRasterLayer(rasterArray,xmin, ymin, xmax, ymax) {


				const dataUrl = createImageFromRaster(rasterArray);
				const imageryProvider = new Cesium.SingleTileImageryProvider({
				url: dataUrl,
				rectangle: Cesium.Rectangle.fromDegrees(xmin, ymin, xmax, ymax) // Adjust to your data extent
				});
				viewer.scene.imageryLayers.addImageryProvider(imageryProvider);
				//viewer.flyTo(imageryProvider);
			}
			//console.log("boundaries ",xmin, ymin, xmax, ymax)
			//console.log(current_area)

			console.log("lay_wh bounds", xmin, ymin, xmax, ymax)
			
			addRasterLayer(RasterWH[current_area].values[0],xmin, ymin, xmax, ymax);
			console.log("Added raster layer")
			
			// Capture mouse move events to get pixel values and coordinates
			const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

			handler.setInputAction((click) => {
				const mousePosition = click.position;
				const cartesian = viewer.camera.pickEllipsoid(mousePosition, viewer.scene.globe.ellipsoid);

				if (cartesian) {
					const cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian);
					const longitude = Cesium.Math.toDegrees(cartographic.longitude);
					const latitude = Cesium.Math.toDegrees(cartographic.latitude);

					// Debugging: Log the geographic coordinates
					console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);

					const pixelValue = getPixelValueFromRasterArray(RasterWH[current_area].values[0], xmin, ymin, xmax, ymax, longitude, latitude);
			
					// Debugging: Log the pixel value
					console.log(`Water Height (m): ${pixelValue}`);
					if (pixelValue != 'N/A') {
					displayCoordinatesAndValue(mousePosition, longitude, latitude, pixelValue);	
					} else {
						let infoDiv = document.getElementById('infoDiv');
						if (infoDiv) {
							infoDiv.style.display = 'none';
						}
					}
				}
			}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

			

			// Function to display the coordinates and pixel value
			function displayCoordinatesAndValue(position, longitude, latitude, pixelValue) {
				let infoDiv = document.getElementById('infoDiv');
				if (!infoDiv) {
					infoDiv = document.createElement('div');
					infoDiv.id = 'infoDiv';
					infoDiv.style.position = 'absolute';
					infoDiv.style.backgroundColor = 'rgba(0, 0, 0, 1)';
					infoDiv.style.padding = '10px';
					infoDiv.style.border = '1px solid black';
					infoDiv.style.pointerEvents = 'none'; // Allow clicks to pass through
					infoDiv.style.zIndex = '1000'; // Ensure it is on top of other elements
					document.body.appendChild(infoDiv);
				} else {
					infoDiv.style.display = 'block';
					infoDiv.style.position = 'absolute';
					infoDiv.style.backgroundColor = 'rgba(255, 255, 255, 1)';
					infoDiv.style.padding = '10px';
					infoDiv.style.border = '1px solid black';
					infoDiv.style.pointerEvents = 'none'; // Allow clicks to pass through
					infoDiv.style.zIndex = '1000'; // Ensure it is on top of other elements
					
				}

				infoDiv.innerHTML = `
					Longitude: ${longitude.toFixed(5)}<br>
					Latitude: ${latitude.toFixed(5)}<br>
					Pixel Value: ${pixelValue}
				`;
				// Ensure the infoDiv is within the viewport
				const offsetX = 15;
				const offsetY = 15;
				const viewerRect = viewer.container.getBoundingClientRect();
				const infoDivRect = infoDiv.getBoundingClientRect();
			
				let left = position.x + offsetX;
				let top = position.y + offsetY;
			
				if (left + infoDivRect.width > viewerRect.width) {
					left = viewerRect.width - infoDivRect.width;
				}
				if (top + infoDivRect.height > viewerRect.height) {
					top = viewerRect.height - infoDivRect.height;
				}

				infoDiv.style.left = `${position.x + 15}px`;
				infoDiv.style.top = `${position.y + 15}px`;

				// Debugging: Log the position and visibility
				console.log(`InfoDiv Position: left=${left}, top=${top}`);
			}
			viewer.camera.flyTo({
				destination: Cesium.Cartesian3.fromDegrees(xmin,ymin,1000)
					//(((xmax-xmin)/2)+xmin), (((ymax-xmin)/2)+ymin), 1000)

			});
			rasterLayerAdded = true;
		
}	
		document.getElementById('show_stats').addEventListener('click',
				function () {
					   const alertmsg = [
					   `Area with >10 m water height: ${(countRange1*25)/(1000*1000)} km2`,
					   `Area with >1 m water height: ${(countRange2*25)/(1000*1000)} km2`,
					   `Area with >0.5 m water height: ${(countRange3*25)/(1000*1000)} km2`,
					   `Area with >0.05 m water height: ${(countRange4*25)/(1000*1000)} km2`,
					   `Area with >0 m water height: ${(countRange5*25)/(1000*1000)} km2`].join('\n');
					   //,`Area with NaN: ${(countRange6*400)/(1000*1000)} km2`]

					   alert(alertmsg);
					 });
		document.getElementById('calculate_exposure_3d').addEventListener('click',
				function () {


					console.log(osmBuildingTileset);
					// Function to classify OSM buildings based on raster values
				function classifyBuildingsBasedOnRaster() {
					if (!rasterLayerAdded) {
						console.error("Please add the raster layer first.");
						return;
					}

					// Iterate through each pixel of the raster data within the bounds
					const width = rasterArray[0].length;
					const height = rasterArray.length;
					const latStep = (rasterBounds.ymax - rasterBounds.ymin) / height;
					const longStep = (rasterBounds.xmax - rasterBounds.xmin) / width;

					const styleConditions = [];

					for (let y = 0; y < height; y++) {
						for (let x = 0; x < width; x++) {
							const latitude = rasterBounds.ymin + y * latStep;
							const longitude = rasterBounds.xmin + x * longStep;
							const pixelValue = rasterArray[y][x];
							if (pixelValue > 1) {
								// Define the condition for each pixel's position
								styleConditions.push([
									//`\${feature['cesium#longitude']} === ${longitude.toFixed(4)} && \${feature['cesium#latitude']} === ${latitude.toFixed(4)}`, "color('red')"
									`distance(vec2(\${feature['cesium#longitude']}, \${feature['cesium#latitude']}), vec2(${longitude.toFixed(6)}, ${latitude.toFixed(6)})) > 0.001 && distance(vec2(\${feature['cesium#longitude']}, \${feature['cesium#latitude']}), vec2(${longitude.toFixed(6)}, ${latitude.toFixed(6)})) < 0.002`, 
                "color('red')",
				// 					`distance(vec2(\${feature['cesium#longitude']}, \${feature['cesium#latitude']}), vec2(${longitude.toFixed(6)}, ${latitude.toFixed(6)})) >= 0.002 && distance(vec2(\${feature['cesium#longitude']}, \${feature['cesium#latitude']}), vec2(${longitude.toFixed(6)}, ${latitude.toFixed(6)})) < 0.004`, 
                // "color('orange')",
									// `distance(vec2(\${feature['cesium#longitude']}, \${feature['cesium#latitude']}), vec2(${longitude.toFixed(4)}, ${latitude.toFixed(4)})) < 0.002`, "color('red')",
									]);
							}
						}
					}
					
					// Add a default condition to cover other cases
					styleConditions.push(["true", "color('grey')"]);

				// 	// Set the style conditions for the building tileset
					osmBuildingTileset.style = new Cesium.Cesium3DTileStyle({
						color: {
							conditions: styleConditions
						}
					});
				}

				classifyBuildingsBasedOnRaster();
					
				});

				document.getElementById('close_cesium').addEventListener('click',
					function () {
						   // Remove the Cesium viewer
						   viewer.destroy();
					
						   // Hide the overlay
						   document.getElementById('cesiumOverlay').style.display = 'none';
						 });
			}
				

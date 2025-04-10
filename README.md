<h1  align="center">Belly Button Biodiversity Dashboard</h1>
<a name="readme-top"></a>

This repository contains a project that builds an interactive dashboard to explore the Belly Button Biodiversity dataset. The dataset catalogs the microbial species found in human navels, showcasing how a small number of microbial species (Operational Taxonomic Units, or OTUs) are present in the majority of people, while others are relatively rare.

The goal of this project is to create a dashboard that allows users to explore the microbiome data, visualize the top OTUs in a given individual, and interact with various charts and metadata.

## Project Overview

### Dataset
The Belly Button Biodiversity dataset contains the following key components:
- **otu_ids**: The IDs of different OTUs found in the belly buttons.
- **sample_values**: The values corresponding to each OTU, representing its abundance.
- **otu_labels**: Labels that describe each OTU.
- **Metadata**: Demographic information for each sample, including the individual's age, gender, ethnicity, and more.

### Goals
- Create an interactive dashboard using **D3.js** to visualize data.
- Build two main visualizations:
  1. **Horizontal Bar Chart**: Displays the top 10 OTUs found in a selected individual's sample.
  2. **Bubble Chart**: Visualizes all OTUs in a selected sample, showing their distribution and abundance.
- Display the individual's **metadata** (demographic information) in the dashboard.
- Allow the user to select different samples from a dropdown menu to update the dashboard dynamically.

## Requirements
- **D3.js**: A JavaScript library used for data visualization.
- **HTML, CSS, and JavaScript**: Basic web technologies used for building the interactive dashboard.
- **GitHub Pages**: To deploy the dashboard as a static web page.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/clmj1727/belly-button-challenge.git
   cd belly-button-challenge

2. **Dependencies:** This project uses D3.js for the visualizations. The necessary files are included in the static folder. No external dependencies need to be installed.

3. **Opening the Dashboard:**

Open the index.html file in a web browser to view the interactive dashboard.

## Project Structure
  - **index.html:** The main HTML file that sets up the structure and loads the visualizations.
  
  - **samples.json:** The JSON file containing the microbiome data.
  
  - **static/:** Contains all necessary CSS and JavaScript files.
  
  - **app.js:** The JavaScript code that contains all the logic for reading data, updating the dashboard, and rendering the visualizations.
  
  - **styles.css:** Custom CSS for styling the dashboard.

## Features
1. **Horizontal Bar Chart**
Displays the top 10 OTUs (sorted by abundance) for a selected individual.

  - The `sample_values` are used as the values for the bars.
  
  - The `otu_ids` are used as the labels for the bars.
  
  - The `otu_labels` are shown as hovertext when the user hovers over the bars.

2. **Bubble Chart**
Displays a bubble chart for each sample with:

  - x values: `otu_ids`
  
  - y values: `sample_values`
  
  - marker size: `sample_values` (size of each bubble)
  
  - marker colors: `otu_ids` (color of each bubble)
  
  - text: `otu_labels` (hover text)

3. **Sample Metadata**
  - Displays the demographic information for the selected sample (e.g., age, gender, ethnicity, etc.).

  - Dynamically updates as a new sample is selected from the dropdown menu.

4. **Dynamic Updates**
  - The dashboard updates automatically when a new sample is selected from the dropdown menu.

  - Both the bar chart and bubble chart are refreshed with the new data, and the sample metadata is updated accordingly.
---
# Acknowledgements:

Special thanks to Dr. Carl Arrington for guidance during the Interactive Visualizations Module. Some snippets and logic were developed following in-class tutorial support and discussions on the following topics: 
  - Introduction to JavaScript Visualizations
  - Functional Programing for Data Processing
  - JavaScript with D3.js
<p  align="center">(<a  href="#readme-top">back to top</a>)</p>

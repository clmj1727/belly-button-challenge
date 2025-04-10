
//fx that populates meta data
function demoInfo(sample)
{
    console.log(sample);

    //use d3.json to get data
    let data = d3.json("samples.json").then((data) => {

        //grab meta data
        let metaData = data.metadata;

        //console.log(metaData);

        //filter based on value of sample (should return 1 result)
        let result = metaData.filter(sampleResult => sampleResult.id == sample);

        //console.log(result);

        //access index 0 from array
        let resultSample = result[0];

        //console.log(resultSample);

        //clear the metadata out
        d3.select("#sample-metadata").html(""); //clears the HTML output


        //use Object.entries to get value key pairs
        Object.entries(resultSample).forEach(([key, value]) => {
            d3.select("#sample-metadata")
                .append("h5")
                .html(`<strong>${key}:</strong> ${value}`);
        });
    });
}
//fx that builds graphs
function buildBarChart(sample){
    
    //console.log(sample);

    //load data from .json file
    //let data = d3.json("samples.json");
    //console.log(data);

    //use d3.json to get data
    d3.json("samples.json").then((data) => {

        //grab sample data
        let sampleData = data.samples;

        //console.log(sampleData);

        //filter based on value of sample (should return 1 result)
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);

        //console.log(result);

        //access index 0 from array
        let resultSample = result[0];

        //console.log(resultSample);

        //get otu_ids
        let otu_ids = resultSample.otu_ids;
        let otu_labels = resultSample.otu_labels;
        let sample_values = resultSample.sample_values;

        //console.log(otu_ids);
        //console.log(otu_labels);
        //onsole.log(sample_values);

        //build bar chart
        //get yTicks
        let yTicks = otu_ids.slice(0,10).map(id=> `OTU ${id}`);
        let xValues = sample_values.slice(0,10);
        let textLabels = otu_labels.slice(0,10);

        //console.log(yTicks);
        //console.log(xValues);
        //console.log(textLabels);

        let barChart = {
            y: yTicks.reverse(),
            x: xValues.reverse(),
            text: textLabels.reverse(),
            type: "bar",
            orientation: "h",
            hoverinfo: "text",        // shows text only in tooltip
            textposition: "none"      // don't show text in bars
        };

        let layout = {
            title: {
                text: "Top 10 Belly Button Bacteria",
                font: {
                    size: 24
                },
                xref: "paper",
                x: 0.5, // centers the title
            },
            margin: {
                t: 80,   // top margin (increased for better title spacing)
                l: 150,  // increase for longer y-axis labels
                r: 30,
                b: 70
            },
            xaxis: {
                title: "Bacteria Count",
                automargin: true,
                tickfont: { size: 12 }
            },
            yaxis: {
                automargin: true,
                tickfont: { size: 12 }
            }
        };               

        Plotly.newPlot("bar", [barChart], layout);
        });
}

//fx that builds bubble chart
function buildBBChart(sample){
    //use d3.json to get data
    d3.json("samples.json").then((data) => {

        //grab sample data
        let sampleData = data.samples;

        //console.log(sampleData);

        //filter based on value of sample (should return 1 result)
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);

        //console.log(result);

        //access index 0 from array
        let resultSample = result[0];

        //console.log(resultSample);

        //get otu_ids
        let otu_ids = resultSample.otu_ids;
        let otu_labels = resultSample.otu_labels;
        let sample_values = resultSample.sample_values;

         //build bb chart
        let textLabels = otu_labels.slice(0,10);

        //console.log(yTicks);
        //console.log(xValues);
        //console.log(textLabels);

        let bubbleChart = {
            y: sample_values,
            x: otu_ids,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        let layout = {
            title: {text: "Bacteria Culture per Sample",},
            hovermode: "closest",
            xaxis: {
                title: "OTU ID"
            },
        };               

        Plotly.newPlot("bubble", [bubbleChart], layout);
        });

}

//fx that initializes dash
function initialize()
{
    //load data from .json file
    //let data = d3.json("samples.json");
    //console.log(data);

    //access the dropdown slector from index.html file
    var select = d3.select("#selDataset");

    //use d3.json to get data
    let data = d3.json("samples.json").then((data) => {
        let sampleNames = data.names; //made array of just names
        //console.log(sampleNames); 

        //use foreach in order to create option for each sample
        sampleNames.forEach((sample) => {
            select.append("option")
                .text(sample)
                .property("value", sample);
        });
        
        //when intializied, pass info for first sample
        let sample1 = sampleNames[0];

        //call fx to build metadata
        demoInfo(sample1);

        //call fx to build bar chart
        buildBarChart(sample1);

        //call fx to build bubble chart
        buildBBChart(sample1);
    });

}

//fx that updates dash 
function optionChanged(item){
    //prints item for now
    //console.log(item); 

    //call update to metadata
    demoInfo(item);

    //call fx to build bar chart
    buildBarChart(item);

    //call fx to build bubble chart
    buildBBChart(item);
}   

//call the initialize fx
initialize();
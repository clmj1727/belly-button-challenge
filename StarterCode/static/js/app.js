

//fx that populates meta data

//fx that updates dashboard

//fx that builds graphs

//fx initializes dashboard
function initialize ()
{
    //load data from .json file
    //let data = d3.json("StarterCode/static/js/samples.json");
    //console.log(data);

    //access dropdown selector from  index.html file
    var select = d3.select("#selDataset");

    //use d3.json inorder to get the data
    d3.json("StarterCode/static/js/samples.json").then((data) => {
        let sampleNames = data.names;
        console.log(sampleNames);
    });
}


//call the initialize fx
initialize();
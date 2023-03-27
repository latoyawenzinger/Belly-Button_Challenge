const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Initialize page with a default id data and visuals
function init() {
    d3.json(url).then(data => {
        //select dropdown element
        var dropDown = d3.select('#selDataset')
        // fetch patient IDs
        var IDs = data.names
       

        // assign IDs to the dropdown menu 
        IDs.map(id => dropDown
            .append('option')
            .text(id)
            .property('value', id))

    // Call functions for defualt panel and charts
    demographicsPanel(id[0])



        
        
    })

};


init();
// funtion to build demopraphics panel
function demographicsPanel(id) {
    d3.json(url).then(data=> {

        //select panel element
        var panel = d3.select('#sample-metadata')
        
        //load metadata for panel
        var metadata = data.metadata;

        //filter/find data for choosen ID
        var metadataID = metadata.filter(patientInfo => patientInfo.id == id)[0]
        console.log(metadataID)

        metadataID.map(info => panel
            .append('p')
            .text('key:value'))
        
    });
};

demographicsPanel(941)







//function to build charts
/* function charts(id) {
    d3.json(url).then(data => {
        //load samples array for chart data
        var sampleData = data.samples;
        console.log(sampleData);
        
        //load metadata for demographic panel
        var metadata = data.metadata;
        console.log(metadata);

       
        //filter/find data for choosen ID
        var sampleId = sampleData.filter(data => data.id == id)[0];
        var metadataID = metadata.filter(data => data.id == id)[0];


        //grab each bar chart element from specfied ID
        var otu_ids = sampleId.otu_ids
        var otu_labels = sampleId.otu_labels
        var sample_values = sampleId.sample_values

        //create bar chart trace - display top 10 OTUs 
        var barTrace = [{
            x: sample_values.slice(0,10),
            y:otu_ids.slice(0,10),
            type: 'bar',
            orientation: 'h'
        }]

        //Apply title to the layout
        var barLayout = {
        title: 'Top 10 OTUs Found'
        };

        //Render the plot to the div tag with id "plot"
        Plotly.newPlot(bar, barTrace, barLayout);


        
    });
};  */





    
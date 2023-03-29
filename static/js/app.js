const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Initialize page with a default id data and visuals
function init() {
    d3.json(url).then(data => {
        //select dropdown element
        var dropDown = d3.select('#selDataset');
        // fetch patient IDs
        var IDs = data.names;
       
        // assign IDs to the dropdown menu 
        IDs.map(id => dropDown
            .append('option')
            .text(id)
            .property('value', id));

        // Call functions for default panel and charts
        demographicsPanel(IDs[0]);
        charts(IDs[0])

    // When value changes, call getData()    
    d3.select("#selDataset").on("change", getData);

    // Function called when dropdown value changes
    function getData() {
        var idValue = dropDown.property('value')
        if (idValue == idValue) {
        demographicsPanel(idValue)
        charts(idValue) 

       
    }}});

};


init();
// funtion to build demopraphics panel
function demographicsPanel(id) {
    d3.json(url).then(data=> {

        //select panel element
        var panel = d3.select('#sample-metadata');
        // clear previous data
        panel.html('');
        
        //load metadata for panel
        var metadata = data.metadata;

        //filter/find data for choosen ID
        var metadataID = metadata.filter(patientInfo => patientInfo.id == id)[0];
    
        // append each key and value to demographics panel
        Object.entries(metadataID).map(([key, value]) => panel
            .append('p')
            .text(`${key}: ${value}`))    
    });
};

//function to build charts
 function charts(id) {
    d3.json(url).then(data => {
        //load samples array for chart data
        var sampleData = data.samples; 
        //load metadata for demographic panel
        var metadata = data.metadata;
        //filter/find data for choosen ID
        var sampleId = sampleData.filter(data => data.id == id)[0];
        var metadataID = metadata.filter(data => data.id == id)[0];
        //grab each bar chart element from specfied ID
        var otuIds = sampleId.otu_ids
        var otuLabels = sampleId.otu_labels
        var sampleValues = sampleId.sample_values
        //create bar chart trace - display top 10 OTUs - greatest to least 
        var barTrace = [{
            x: sampleValues.slice(0,10).reverse(),
            y:otuIds.slice(0,10).map(ids => `OTU ${ids}`).reverse(),
            text: otuLabels.slice(0,10).reverse(),
            type: 'bar',
            orientation: 'h'
        }]
        //Apply title to the layout
        var barLayout = {
        title: `Top 10 OTUs Found For Patient: ${id}`
        };

        //Render the plot to the div tag with id 'bar'
        Plotly.newPlot(bar, barTrace, barLayout);

        // build bubble chart

        var bubbleTrace = [{
            x: otuIds,
            y: sampleValues,
            mode: 'markers',
            marker: {
              size: sampleValues,
              color: otuIds,
              colorscale: 'Earth',
            },
            text: otuLabels
          }];
           
          var bubbleLayout = {
            xaxis: { title: 'OTU IDs' },
            showlegend: false,
            height: 500,
            width: 1000
          };
          
          Plotly.newPlot(bubble, bubbleTrace, bubbleLayout);

          // build gauge
          var gaugeTrace = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: metadataID.wfreq,
              title: { text: '<b>Belly Button Washing Frequency</b><br> Scrubs Per Week'},
              type: 'indicator',
              mode: 'gauge+number',
              gauge: {
                axis: {visible: false, range: [0,9]},
                steps: [
                  { range: [0, 1], color: 'rgb(232,244,234)', text: 'yes'},
                  { range: [1, 2], color: 'rgb(224,240,227)'},
                  { range: [2, 3], color: 'rgb(210,231,214)'},
                  { range: [3, 4], color: 'rgb(200,225,204)'},
                  { range: [4, 5], color: 'rgb(184,216,190)'},
                  { range: [5, 6], color: 'rgb(137,176,159)'},
                  { range: [6, 7], color: 'rgb(104,140,132)'},
                  { range: [7, 8], color: 'rgb(90,120,100)'},
                  { range: [8, 9], color: 'rgb(69,101,70)'}]
            
              }
            }
          ];
        
            var gaugeLayout = { 
                width: 600, 
                height: 400, 
                margin: { t: 25, r: 10, l: 10, b: 25 },
                font: { color: 'darkblue', family: 'Arial'}}

            Plotly.newPlot('gauge', gaugeTrace, gaugeLayout);




        
    });
}; 





    
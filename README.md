# Belly-Button-Challenge



In the human belly button, there are microbes that live inside it. In this data, there were some microbial species that were found in more than 70% of people, while other species proved to be relatively rare. This dataset refers to each microbial species as **"Operational Taxonomic Units (OTUs)"**. 

In this [**INTERACTIVE DASHBOARD**](http://127.0.0.1:5500/index.html), the user can view the data of any individual of their choosing. 

- There is a dropdown element that holds all of the patient IDs in this dataset. The user can pick any ID of their choosing.


![image](https://user-images.githubusercontent.com/115582691/228507507-1a97c250-da33-4782-a5e9-d44da109ea8a.png)


- Once an ID is choosen, a demographics panel will populate with that specifed ID's demographics.

![image](https://user-images.githubusercontent.com/115582691/228508623-a99725c5-ecf3-408f-abfd-4f3b0299177c.png)


- A bar chart will populate showing only the top ten OTUs found for that specified ID. On hover, the user can see the OTU value and label.

![image](https://user-images.githubusercontent.com/115582691/228515696-3865fd1b-211f-4378-aa37-323c1b6558b9.png)


- A bubble chart will show the relationship between OTU size and value. The size of the bubble represents the value of the OTU. Each color represents an OTU ID. And on hover, the user can see the OTU value and label.

![image](https://user-images.githubusercontent.com/115582691/228511619-3b9235f8-4524-47fd-b038-d579777e72c0.png)

- As an added bonus, a gauge will populate showing how many times that specied ID washes their belly button per week.

![image](https://user-images.githubusercontent.com/115582691/228509799-e77fa3c6-4b51-4210-b6bc-9e914f2852a9.png)


**Chart Documentation Provided By**:
    - https://plotly.com/javascript/bar-charts/
    - https://plotly.com/javascript/bubble-charts/
    - https://plotly.com/javascript/gauge-charts/

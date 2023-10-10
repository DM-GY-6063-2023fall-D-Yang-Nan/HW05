# HW05
Here's my database connection.
https://www.kaggle.com/datasets/aramacus/companion-plants?select=companion_plants.csv

This one database on companion plants contains information on whether the plant-plant relationship is helping or being helped. I chose it because I thought it would be interesting to have a "relationship" category to show the interconnections between them.

I have four parameters, Source Node, Link, Destination Node, Source Type. there are 995 data points.
- The size of the diameter of the circle: controlled by 'nodeCounts', which indicates the number of relationships per node, each row of the table 'source node' and 'Destination Node Each row of 'source node' and 'Destination Node' in the table will increase the number of corresponding nodes by 1.
- Color of circle: controlled by 'nodecolors', this array stores the association type of each node, this is read from 'Source Type'.
- Line color: controlled by 'links', if the value of 'links' is 'helps', the line color is 'DarkSeaGreen', otherwise it is 'Coral'
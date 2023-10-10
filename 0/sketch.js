let data;
let nodeNames = [];
let nodeCounts = [];
let nodeColors = [];
let xPos = [];
let yPos = [];

let source = data.getString(i, 'Source Node');
let dest = data.getString(i,'Destination Node');
let sourcetype = data.getString(i,'Source Type');
let linktype = data.getString(i,'Link');

function preload(){
data = loadTable('companion_plants.csv', 'csv', 'header');

}

function setup(){
createCanvas(windowWidth, windowHeight);
background(255);

for(let i = 0; i < data.getRowCount(); i++){
    let source = data.getString(i, 'Source Node');
    let dest = data.getString(i,'Destination Node');
    let sourcetype = data.getString(i,'Source Type');

updateNode(source,sourcetype);
updateNode(dest,sourcetype);
}

for(let i = 0; i < nodeNames.length; i++){

    xPos[i] = random(width);
    yPos[i] = random(height);
}

for(let i = 0; i < data.getRowCount(); i ++){
    let source = data.getString(i, 'Source Node');
    let dest = data.getString(i,'Destination Node');
    let linktype = data.getString(i,'Link');

    let sourceIndex = nodeNames.indexOf(source);
    let destIndex = nodeNames.indexOf(dest);

    if(linktype == 'helps'){
    stroke('DarkSeaGreen');
    }else{
        stroke('Coral');
    }
    line(xPos[sourceIndex], yPos[sourceIndex], xPos[destIndex], yPos[destIndex]);
}

for(i = 0; i < nodeNames.length; i ++){
    let nodeSize = min(nodeCounts[i]*5,70);
    let colortype = nodeColors[i];
    if (colortype == 'vegetables') {
        fill('CornflowerBlue'); // Green
      } else if (colortype === 'fruits') {
        fill('IndianRed'); // Red
      } else if (colortype === 'herbs') {
        fill('LightSeaGreen'); // Blue
      } else if (colortype === 'flowers') {
        fill('Plum'); // Purple
      } else {
        fill('SandyBrown'); // Default Gray
      }
  
        // Remove stroke for the ellipse
      ellipse(xPos[i], yPos[i], nodeSize, nodeSize);
  

}




function updateNode(name,colorType){
let index = nodeNames.indexOf(name);
if(index == -1){
   nodeNames.push(name);
   nodeCounts.push(1);
   nodeColors.push(colorType)

}else{
    nodeCounts[index] ++//每当我们在数据中再次遇到一个已知的节点名称时，我们就使用这行代码来增加与该节点名称相关联的计数。
}


}
}


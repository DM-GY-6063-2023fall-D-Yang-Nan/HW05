let table;
let nodes = {};
let positions = {};

function preload() {
  table = loadTable('companion_plants.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 600);
  background(220);

  // Process data
  for (let i = 0; i < table.getRowCount(); i++) {
    let source = table.getString(i, 'Source Node');
    let dest = table.getString(i, 'Destination Node');

    // Count relationships for each node
    nodes[source] = (nodes[source] || 0) + 1;
    nodes[dest] = (nodes[dest] || 0) + 1;
  }

  // Assign a random position for each node
  for (let node in nodes) {
    positions[node] = createVector(random(width), random(height));
  }

  // Draw links
  for (let i = 0; i < table.getRowCount(); i++) {
    let source = table.getString(i, 'Source Node');
    let dest = table.getString(i, 'Destination Node');
    let linkType = table.getString(i, 'Link');

    // Adjust stroke based on 'Link' value (you can customize this further)
    if (linkType === 'helps') {
      stroke(0, 255, 0); // Green for 'helps'
      strokeWeight(2);
    } else {
      stroke(255, 0, 0); // Red for other types (you can add more conditions)
      strokeWeight(1);
    }

    let sourcePos = positions[source];
    let destPos = positions[dest];
    line(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
  }

  // Draw nodes
  for (let node in nodes) {
    let pos = positions[node];
    let nodeSize = nodes[node] * 5; // Adjust size based on relationship count

    // Find the row for the current node and check if it's not null
    let row = table.findRow(node, 'Source Node');
    if (row) {
        let sourceType = row.getString('Source Type');
        if (sourceType === 'vegetables') {
            fill(0, 0, 255); // Blue for 'vegetables'
        } else {
            fill(0); // Black for other types (you can add more conditions)
        }
    } else {
        fill(150); // Default color if node not found in 'Source Node' column
    }

    ellipse(pos.x, pos.y, nodeSize, nodeSize);
  }
}

function draw() {
  noLoop();
}
interface CircleProperties {
  diameter: number;
  circumference: string;
  area: string;
}

function calculateCircleProperties(radius: number): CircleProperties {
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;
  
  return {
    diameter: diameter,
    circumference: circumference.toFixed(4),
    area: area.toFixed(3)
  };
}

// Contoh penggunaan
const radius: number = 5;
const result = calculateCircleProperties(radius);
console.log(`Diameter: ${result.diameter}, Circumference: ${result.circumference}, Area: ${result.area}`);
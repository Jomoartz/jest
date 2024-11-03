// // const mockData = {
// //     id1: {
// //       description: 'Test desc 1',
// //       images: ['image1.jpg'],
// //       oils: ['CrudePalmOil', 'FlaxseedOil'],
// //       price: '2.99',
// //       title: 'Product 1',
// //     },
// //     id2: {
// //       description: 'Test desc 2',
// //       images: ['image2.jpg'],
// //       oils: ['OliveOil', 'PalmKernelOil'],
// //       price: '3.00',
// //       title: 'Product 2',
// //     },
// //   };


// //   const myData = Object.entries(mockData);
// //   console.log('test 1',myData);
  
// //   const myData1 = myData.map(([id, product]) => ({
// //       id,
// //       ...product,
// //     }))
// //     console.log('test2', myData1);


// //     // const calculateOilScore = (oils: string[]): number => {
// //     //     let totalScore = 0;
// //     //     let totalWeight = 0;
      
// //     //     oils.forEach((oil, index) => {
// //     //       const weight = 1 / (index + 1);//how does this calculate the actual weight
// //     //       const score = oilScores[oil as unknown as OilType];
      
// //     //       const omega6to3Score = 5 - Math.min(score.omega6to3Ratio / 10, 5);
      
// //     //       totalScore +=
// //     //         (score.healthScore * 0.15 +
// //     //           score.stabilityScore * 0.05 +
// //     //           score.sustainabilityScore * 0.05 +
// //     //           score.inflammationScore * 0.15 +
// //     //           omega6to3Score * 0.1 +
// //     //           score.adiposeTissueImpact * 0.1 +
// //     //           score.cardiovascularProtection * 0.2 +
// //     //           score.antioxidantCapacity * 0.15 +
// //     //           score.gutMicrobiotaImpact * 0.05) *
// //     //         weight;
      
// //     //       totalWeight += weight;
// //     //     });
      
// //     //     return Math.round((totalScore / totalWeight) * 2) / 2; // Round to nearest 0.5
// //     //   };


// //     const trial = Math.min(100 /10, 9);
// //     console.log('answwer ',trial);




// const OilType = {
//     OliveOil : 'OliveOil',
//     RapeseedOil : 'RapeseedOil',
//     RefinedPalmOil : 'RefinedPalmOil',
//     CrudePalmOil : 'CrudePalmOil',
//     SunflowerOil : 'SunflowerOil',
//     FlaxseedOil : 'FlaxseedOil',
//     InteresterifiedPalmOil : 'InteresterifiedPalmOil',
//     SoybeanOil : 'SoybeanOil',
//     CoconutOil : 'CoconutOil',
//     LinseedOil : 'LinseedOil',
//     SafflowerOil : 'SafflowerOil',
//     CornOil : 'CornOil',
//     PalmKernelOil : 'PalmKernelOil',
//     Lard : 'Lard',
//     Butter : 'Butter',
//     ExtraVirginOliveOil : 'ExtraVirginOliveOil',
//   }

// const oilScores = {
//     [OilType.OliveOil]: {
//       healthScore: 4.5,
//       stabilityScore: 4,
//       sustainabilityScore: 3.5,
//       inflammationScore: 4.5,
//       omega6to3Ratio: 10,
//       adiposeTissueImpact: 4,
//       cardiovascularProtection: 4,
//       antioxidantCapacity: 4,
//       gutMicrobiotaImpact: 3.5,
//     },
//     [OilType.RapeseedOil]: {
//       healthScore: 4,
//       stabilityScore: 3.5,
//       sustainabilityScore: 4,
//       inflammationScore: 4,
//       omega6to3Ratio: 2,
//       adiposeTissueImpact: 3.5,
//       cardiovascularProtection: 3.5,
//       antioxidantCapacity: 3,
//       gutMicrobiotaImpact: 3,
//     },
//     [OilType.RefinedPalmOil]: {
//       healthScore: 2,
//       stabilityScore: 4.5,
//       sustainabilityScore: 1.5,
//       inflammationScore: 2,
//       omega6to3Ratio: 25,
//       adiposeTissueImpact: 1.5,
//       cardiovascularProtection: 1.5,
//       antioxidantCapacity: 2,
//       gutMicrobiotaImpact: 2,
//     },
//     [OilType.CrudePalmOil]: {
//       healthScore: 3,
//       stabilityScore: 4,
//       sustainabilityScore: 2,
//       inflammationScore: 3,
//       omega6to3Ratio: 20,
//       adiposeTissueImpact: 3,
//       cardiovascularProtection: 2.5,
//       antioxidantCapacity: 3,
//       gutMicrobiotaImpact: 2.5,
//     },
//     [OilType.SunflowerOil]: {
//       healthScore: 3,
//       stabilityScore: 3,
//       sustainabilityScore: 3,
//       inflammationScore: 2.5,
//       omega6to3Ratio: 40,
//       adiposeTissueImpact: 3,
//       cardiovascularProtection: 2.5,
//       antioxidantCapacity: 2.5,
//       gutMicrobiotaImpact: 2.5,
//     },
//     [OilType.FlaxseedOil]: {
//       healthScore: 4,
//       stabilityScore: 1.5,
//       sustainabilityScore: 3.5,
//       inflammationScore: 4.5,
//       omega6to3Ratio: 0.3,
//       adiposeTissueImpact: 4,
//       cardiovascularProtection: 4,
//       antioxidantCapacity: 4,
//       gutMicrobiotaImpact: 3.5,
//     },
//     [OilType.InteresterifiedPalmOil]: {
//       healthScore: 2,
//       stabilityScore: 4.5,
//       sustainabilityScore: 1.5,
//       inflammationScore: 1.5,
//       omega6to3Ratio: 25,
//       adiposeTissueImpact: 1.5,
//       cardiovascularProtection: 1.5,
//       antioxidantCapacity: 2,
//       gutMicrobiotaImpact: 2,
//     },
//     [OilType.SoybeanOil]: {
//       healthScore: 3,
//       stabilityScore: 2.5,
//       sustainabilityScore: 2.5,
//       inflammationScore: 2,
//       omega6to3Ratio: 7,
//       adiposeTissueImpact: 3,
//       cardiovascularProtection: 2.5,
//       antioxidantCapacity: 2.5,
//       gutMicrobiotaImpact: 2.5,
//     },
//     [OilType.CoconutOil]: {
//       healthScore: 2.5,
//       stabilityScore: 4.5,
//       sustainabilityScore: 2,
//       inflammationScore: 3,
//       omega6to3Ratio: 2,
//       adiposeTissueImpact: 3,
//       cardiovascularProtection: 2,
//       antioxidantCapacity: 3,
//       gutMicrobiotaImpact: 3,
//     },
//     [OilType.LinseedOil]: {
//       healthScore: 4,
//       stabilityScore: 1.5,
//       sustainabilityScore: 3.5,
//       inflammationScore: 4.5,
//       omega6to3Ratio: 0.3,
//       adiposeTissueImpact: 4,
//       cardiovascularProtection: 4,
//       antioxidantCapacity: 4,
//       gutMicrobiotaImpact: 3.5,
//     },
//     [OilType.SafflowerOil]: {
//       healthScore: 3,
//       stabilityScore: 2.5,
//       sustainabilityScore: 2.5,
//       inflammationScore: 2,
//       omega6to3Ratio: 76,
//       adiposeTissueImpact: 2.5,
//       cardiovascularProtection: 2,
//       antioxidantCapacity: 2.5,
//       gutMicrobiotaImpact: 2.5,
//     },
//     [OilType.CornOil]: {
//       healthScore: 2.5,
//       stabilityScore: 3,
//       sustainabilityScore: 2,
//       inflammationScore: 2,
//       omega6to3Ratio: 46,
//       adiposeTissueImpact: 2.5,
//       cardiovascularProtection: 2,
//       antioxidantCapacity: 2,
//       gutMicrobiotaImpact: 2.5,
//     },
//     [OilType.PalmKernelOil]: {
//       healthScore: 2,
//       stabilityScore: 4.5,
//       sustainabilityScore: 1.5,
//       inflammationScore: 1.5,
//       omega6to3Ratio: 25,
//       adiposeTissueImpact: 2,
//       cardiovascularProtection: 1.5,
//       antioxidantCapacity: 2,
//       gutMicrobiotaImpact: 2,
//     },
//     [OilType.Lard]: {
//       healthScore: 1.5,
//       stabilityScore: 4,
//       sustainabilityScore: 1,
//       inflammationScore: 1,
//       omega6to3Ratio: 10,
//       adiposeTissueImpact: 2,
//       cardiovascularProtection: 1,
//       antioxidantCapacity: 1.5,
//       gutMicrobiotaImpact: 1.5,
//     },
//     [OilType.Butter]: {
//       healthScore: 2,
//       stabilityScore: 3.5,
//       sustainabilityScore: 1.5,
//       inflammationScore: 1.5,
//       omega6to3Ratio: 9,
//       adiposeTissueImpact: 2.5,
//       cardiovascularProtection: 1.5,
//       antioxidantCapacity: 2,
//       gutMicrobiotaImpact: 2,
//     },
//     [OilType.ExtraVirginOliveOil]: {
//       healthScore: 5,
//       stabilityScore: 4.5,
//       sustainabilityScore: 4,
//       inflammationScore: 5,
//       omega6to3Ratio: 10,
//       adiposeTissueImpact: 4.5,
//       cardiovascularProtection: 5,
//       antioxidantCapacity: 5,
//       gutMicrobiotaImpact: 4.5,
//     },
//   };
  

// const calculateOilScore = (oils) => {
//     let totalScore = 0;
//     let totalWeight = 0;
  
//     oils.forEach((oil, index) => {
//       const weight = 1 / (index + 1);
//       const score = oilScores[oil ];
  
//       const omega6to3Score = 5 - Math.min(score.omega6to3Ratio / 10, 5);
  
//       totalScore +=
//         (score.healthScore * 0.15 +
//           score.stabilityScore * 0.05 +
//           score.sustainabilityScore * 0.05 +
//           score.inflammationScore * 0.15 +
//           omega6to3Score * 0.1 +
//           score.adiposeTissueImpact * 0.1 +
//           score.cardiovascularProtection * 0.2 +
//           score.antioxidantCapacity * 0.15 +
//           score.gutMicrobiotaImpact * 0.05) *
//         weight;
  
//       totalWeight += weight;
//     });
  
//     return Math.round((totalScore / totalWeight) * 2) / 2; // Round to nearest 0.5
//   };
  

// const processProducts = (data) =>
//     Object.entries(data)
//       .map(([id, product]) => ({
//         id,
//         ...product,
//         rating: calculateOilScore(product.oils),
//       }))
//       .sort((a, b) => (b.rating || 0) - (a.rating || 0));

//       const mockData = {
//         id1: {
//           description: 'Test desc 1',
//           images: ['image1.jpg'],
//           oils: ['CrudePalmOil', 'FlaxseedOil'],
//           price: '2.99',
//           title: 'Product 1',
//         },
//         id2: {
//           description: 'Test desc 2',
//           images: ['image2.jpg'],
//           oils: ['OliveOil', 'PalmKernelOil'],
//           price: '3.00',
//           title: 'Product 2',
//         },
//       };

// const result = processProducts(mockData);

// console.log(result);

 

// class Food {
//   constructor(food_name){
//     this.food_name = ['Ewa', 'irice', 'Ekor']
//   }
// }

// const myFood =  new Food;
// const menu = myFood.food_name[0];
// console.log(menu);
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  moduleNameMapper: {
    '^faker$': 'faker/locale/pt_BR', // Altere 'pt_BR' para o locale desejado, se aplicável
  },
};


// instale npm install --save-dev @swc/jest



// jest.config.js alternativo 
// module.exports = {
//   testEnvironment: 'node',
//   transform: {
//     '^.+\\.js$': 'babel-jest',
//   },
// };

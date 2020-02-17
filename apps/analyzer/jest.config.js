module.exports = {
  name: 'analyzer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/analyzer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

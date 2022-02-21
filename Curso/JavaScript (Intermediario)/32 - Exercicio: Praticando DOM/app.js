class App {
  constructor() {
    this.propertyList = new Array()
  }

  get getProperties() {
    return this.propertyList 
  }

  createProperty(propertyInfo) {
    const newProperty = new Property(propertyInfo[0], propertyInfo[1], propertyInfo[2])
    this.propertyList.push(newProperty)
  }

  removeProperty(propertyIndex) {
    this.propertyList.splice(propertyIndex, 1)
  }
}
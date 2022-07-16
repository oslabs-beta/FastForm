/**
 * Contains information on all fields
 */
export default class Form {
  constructor(initialValues) {
    this.values = {...initialValues}
    this.errors = {}
  }

  /**
   * Clears all form values
   */
  reset() {
    for (const value in this.values) {
    this.values[value] = ''
    }
  }
}

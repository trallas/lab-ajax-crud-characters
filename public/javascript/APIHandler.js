class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return this.api.get('/characters')
      .then(response => {
        console.log ('Retrieveing all the characters');
        console.log('response data'), response.data);
        return response.data
      })
    .catch (()) => {
      console.log('Something went wrong, there are no characters');
      return 'Something went wrong, there are no characters';
    })
  }

  getOneRegister () {
    return this.api.get ('/characters/:')
    .then(response => {
      console.log('Retrieving one character')
      console.log('response data', response.data)
      return response.data
    })
    .catch (()) => {
      console.log('Something went wrong, there are no characters');
      return 'Something went wrong, there are no characters';
    }
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}

/**
 * Contains the miscellaneous route handlers.
 * @author YoTi <https://github.com/YoTi1412>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

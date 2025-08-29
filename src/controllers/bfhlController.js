const user = require("../config/user");
const helpers = require("../utils/helpers");

exports.handleRequest = (req, res) => {
  try {
    const data = req.body.data;

    const response = {
      is_success: true,
      user_id: `${user.fullName}_${user.dob}`,
      email: user.email,
      roll_number: user.rollNumber,
      odd_numbers: helpers.extractOddNumbers(data),
      even_numbers: helpers.extractEvenNumbers(data),
      alphabets: helpers.extractAlphabets(data),
      special_characters: helpers.extractSpecialCharacters(data),
      sum: helpers.calculateSum(data),
      concat_string: helpers.generateConcatString(data)
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
};
